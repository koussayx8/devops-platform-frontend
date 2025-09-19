import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', loadComponent: () => import('./components/course-list/course-list').then(m => m.CourseListComponent) },
  { path: 'courses/new', loadComponent: () => import('./components/course-form/course-form').then(m => m.CourseFormComponent) },
  { path: 'courses/edit/:id', loadComponent: () => import('./components/course-form/course-form').then(m => m.CourseFormComponent) },
  { path: 'instructors', loadComponent: () => import('./components/instructor-list/instructor-list').then(m => m.InstructorListComponent) },
  { path: 'instructors/new', loadComponent: () => import('./components/instructor-form/instructor-form').then(m => m.InstructorFormComponent) },
  { path: 'instructors/edit/:id', loadComponent: () => import('./components/instructor-form/instructor-form').then(m => m.InstructorFormComponent) },
  { path: 'pistes', loadComponent: () => import('./components/piste-list/piste-list').then(m => m.PisteListComponent) },
  { path: 'pistes/new', loadComponent: () => import('./components/piste-form/piste-form').then(m => m.PisteFormComponent) },
  { path: 'pistes/edit/:id', loadComponent: () => import('./components/piste-form/piste-form').then(m => m.PisteFormComponent) }
];
