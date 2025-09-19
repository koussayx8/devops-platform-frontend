import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InstructorService } from '../../services/instructor.service';
import { Instructor } from '../../models/instructor.model';

@Component({
  selector: 'app-instructor-form',
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './instructor-form.html',
  styleUrl: './instructor-form.scss'
})
export class InstructorFormComponent implements OnInit {
  instructorForm: FormGroup;
  isEditMode = false;
  instructorId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private instructorService: InstructorService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.instructorForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfHire: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.instructorId = +params['id'];
        this.loadInstructor();
      }
    });
  }

  loadInstructor(): void {
    if (this.instructorId) {
      this.instructorService.getInstructorById(this.instructorId).subscribe({
        next: (instructor) => {
          // Format date for input field
          const formattedDate = new Date(instructor.dateOfHire).toISOString().split('T')[0];
          this.instructorForm.patchValue({
            ...instructor,
            dateOfHire: formattedDate
          });
        },
        error: (error) => {
          console.error('Error loading instructor:', error);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.instructorForm.valid) {
      const instructorData: Instructor = this.instructorForm.value;
      
      if (this.isEditMode && this.instructorId) {
        instructorData.numInstructor = this.instructorId;
        this.instructorService.updateInstructor(instructorData).subscribe({
          next: () => {
            this.router.navigate(['/instructors']);
          },
          error: (error) => {
            console.error('Error updating instructor:', error);
          }
        });
      } else {
        this.instructorService.addInstructor(instructorData).subscribe({
          next: () => {
            this.router.navigate(['/instructors']);
          },
          error: (error) => {
            console.error('Error creating instructor:', error);
          }
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/instructors']);
  }
}
