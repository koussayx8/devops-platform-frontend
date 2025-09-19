import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { InstructorService } from '../../services/instructor.service';
import { Instructor } from '../../models/instructor.model';

@Component({
  selector: 'app-instructor-list',
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatIconModule, MatTableModule, MatChipsModule],
  templateUrl: './instructor-list.html',
  styleUrl: './instructor-list.scss'
})
export class InstructorListComponent implements OnInit {
  instructors: Instructor[] = [];
  displayedColumns: string[] = ['numInstructor', 'firstName', 'lastName', 'dateOfHire', 'actions'];

  constructor(private instructorService: InstructorService) {}

  ngOnInit(): void {
    this.loadInstructors();
  }

  loadInstructors(): void {
    this.instructorService.getAllInstructors().subscribe({
      next: (instructors) => {
        this.instructors = instructors;
      },
      error: (error) => {
        console.error('Error loading instructors:', error);
      }
    });
  }

  formatDate(dateString: string): string {
    return new Date(dateString).toLocaleDateString();
  }
}
