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
import { CourseService } from '../../services/course.service';
import { Course, TypeCourse, Support } from '../../models/course.model';

@Component({
  selector: 'app-course-form',
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule],
  templateUrl: './course-form.html',
  styleUrl: './course-form.scss'
})
export class CourseFormComponent implements OnInit {
  courseForm: FormGroup;
  isEditMode = false;
  courseId: number | null = null;
  
  typeCourseOptions = [
    { value: TypeCourse.COLLECTIVE_CHILDREN, label: 'Collective Children' },
    { value: TypeCourse.COLLECTIVE_ADULT, label: 'Collective Adult' },
    { value: TypeCourse.INDIVIDUAL, label: 'Individual' }
  ];

  supportOptions = [
    { value: Support.SKI, label: 'Ski' },
    { value: Support.SNOWBOARD, label: 'Snowboard' }
  ];

  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courseForm = this.fb.group({
      level: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      typeCourse: ['', Validators.required],
      support: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      timeSlot: ['', [Validators.required, Validators.min(1), Validators.max(24)]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.courseId = +params['id'];
        this.loadCourse();
      }
    });
  }

  loadCourse(): void {
    if (this.courseId) {
      this.courseService.getCourseById(this.courseId).subscribe({
        next: (course) => {
          this.courseForm.patchValue(course);
        },
        error: (error) => {
          console.error('Error loading course:', error);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      const courseData: Course = this.courseForm.value;
      
      if (this.isEditMode && this.courseId) {
        courseData.numCourse = this.courseId;
        this.courseService.updateCourse(courseData).subscribe({
          next: () => {
            this.router.navigate(['/courses']);
          },
          error: (error) => {
            console.error('Error updating course:', error);
          }
        });
      } else {
        this.courseService.addCourse(courseData).subscribe({
          next: () => {
            this.router.navigate(['/courses']);
          },
          error: (error) => {
            console.error('Error creating course:', error);
          }
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/courses']);
  }
}
