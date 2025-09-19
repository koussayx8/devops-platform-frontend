import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { PisteService } from '../../services/piste.service';
import { Piste, Color } from '../../models/piste.model';

@Component({
  selector: 'app-piste-list',
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatIconModule, MatTableModule, MatChipsModule],
  templateUrl: './piste-list.html',
  styleUrl: './piste-list.scss'
})
export class PisteListComponent implements OnInit {
  pistes: Piste[] = [];
  displayedColumns: string[] = ['numPiste', 'namePiste', 'color', 'length', 'slope', 'actions'];

  constructor(private pisteService: PisteService) {}

  ngOnInit(): void {
    this.loadPistes();
  }

  loadPistes(): void {
    this.pisteService.getAllPistes().subscribe({
      next: (pistes) => {
        this.pistes = pistes;
      },
      error: (error) => {
        console.error('Error loading pistes:', error);
      }
    });
  }

  getColorLabel(color: Color): string {
    return color.charAt(0) + color.slice(1).toLowerCase();
  }

  getColorClass(color: Color): string {
    return `color-${color.toLowerCase()}`;
  }

  deletePiste(id: number): void {
    if (confirm('Are you sure you want to delete this piste?')) {
      this.pisteService.deletePiste(id).subscribe({
        next: () => {
          this.loadPistes(); // Reload the list
        },
        error: (error) => {
          console.error('Error deleting piste:', error);
        }
      });
    }
  }
}
