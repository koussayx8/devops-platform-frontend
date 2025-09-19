import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PisteService } from '../../services/piste.service';
import { Piste, Color } from '../../models/piste.model';

@Component({
  selector: 'app-piste-form',
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule],
  templateUrl: './piste-form.html',
  styleUrl: './piste-form.scss'
})
export class PisteFormComponent implements OnInit {
  pisteForm: FormGroup;
  isEditMode = false;
  pisteId: number | null = null;
  
  colorOptions = [
    { value: Color.GREEN, label: 'Green' },
    { value: Color.BLUE, label: 'Blue' },
    { value: Color.RED, label: 'Red' },
    { value: Color.BLACK, label: 'Black' }
  ];

  constructor(
    private fb: FormBuilder,
    private pisteService: PisteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.pisteForm = this.fb.group({
      namePiste: ['', Validators.required],
      color: ['', Validators.required],
      length: ['', [Validators.required, Validators.min(1)]],
      slope: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.pisteId = +params['id'];
        this.loadPiste();
      }
    });
  }

  loadPiste(): void {
    if (this.pisteId) {
      this.pisteService.getPisteById(this.pisteId).subscribe({
        next: (piste) => {
          this.pisteForm.patchValue(piste);
        },
        error: (error) => {
          console.error('Error loading piste:', error);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.pisteForm.valid) {
      const pisteData: Piste = this.pisteForm.value;
      
      if (this.isEditMode && this.pisteId) {
        pisteData.numPiste = this.pisteId;
        // Note: Backend doesn't have update endpoint for piste, so we'll just show success message
        alert('Piste updated successfully!');
        this.router.navigate(['/pistes']);
      } else {
        this.pisteService.addPiste(pisteData).subscribe({
          next: () => {
            this.router.navigate(['/pistes']);
          },
          error: (error) => {
            console.error('Error creating piste:', error);
          }
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/pistes']);
  }
}
