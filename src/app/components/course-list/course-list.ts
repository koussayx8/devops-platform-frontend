import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatChipsModule } from '@angular/material/chips';
import { CourseService } from '../../services/course.service';
import { Course, TypeCourse, Support } from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, RouterLink, MatCardModule, MatButtonModule, MatIconModule, MatTableModule, MatChipsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.scss'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  displayedColumns: string[] = ['numCourse', 'level', 'typeCourse', 'support', 'price', 'timeSlot', 'actions'];
  isLoading = false;
  errorMessage = '';

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.isLoading = true;
    this.errorMessage = '';
    
    this.courseService.getAllCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading courses:', error);
        this.errorMessage = 'Failed to load courses. Please check if the backend server is running on port 8089.';
        this.isLoading = false;
      }
    });
  }

  getTypeCourseLabel(type: TypeCourse): string {
    switch (type) {
      case TypeCourse.COLLECTIVE_CHILDREN:
        return 'Collective Children';
      case TypeCourse.COLLECTIVE_ADULT:
        return 'Collective Adult';
      case TypeCourse.INDIVIDUAL:
        return 'Individual';
      default:
        return type;
    }
  }

  getSupportLabel(support: Support): string {
    return support === Support.SKI ? 'Ski' : 'Snowboard';
  }
}
