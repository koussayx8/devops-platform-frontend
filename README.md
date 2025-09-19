# Ski Station Management Frontend

This is an Angular frontend application for managing a ski station, built to work with the Spring Boot backend API.

## Features

The application provides a modern, responsive interface for managing:

### 🎿 Courses
- View all skiing courses
- Create new courses with level, type, support, price, and time slot
- Edit existing courses
- Support for different course types (Collective Children, Collective Adult, Individual)
- Support for different equipment (Ski, Snowboard)

### 👨‍🏫 Instructors
- View all instructors
- Create new instructor profiles
- Edit instructor information
- Track hire dates and personal information

### 🏔️ Pistes (Ski Slopes)
- View all pistes with color-coded difficulty levels
- Create new pistes with name, color, length, and slope information
- Delete pistes
- Color-coded display (Green, Blue, Red, Black)

## Technology Stack

- **Angular 18** - Frontend framework
- **Angular Material** - UI component library
- **TypeScript** - Programming language
- **RxJS** - Reactive programming
- **SCSS** - Styling

## API Integration

The frontend connects to the Spring Boot backend API running on:
- **Base URL**: `http://localhost:8089/api`
- **Port**: 8089

### Available Endpoints

#### Courses
- `GET /course/all` - Get all courses
- `GET /course/get/{id}` - Get course by ID
- `POST /course/add` - Create new course
- `PUT /course/update` - Update course

#### Instructors
- `GET /instructor/all` - Get all instructors
- `GET /instructor/get/{id}` - Get instructor by ID
- `POST /instructor/add` - Create new instructor
- `PUT /instructor/update` - Update instructor
- `PUT /instructor/addAndAssignToCourse/{courseId}` - Create instructor and assign to course

#### Pistes
- `GET /piste/all` - Get all pistes
- `GET /piste/get/{id}` - Get piste by ID
- `POST /piste/add` - Create new piste
- `DELETE /piste/delete/{id}` - Delete piste

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI
- Spring Boot backend running on port 8089

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

```bash
ng build --prod
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── course-list/          # Course listing component
│   │   ├── course-form/          # Course form component
│   │   ├── instructor-list/     # Instructor listing component
│   │   ├── instructor-form/     # Instructor form component
│   │   ├── piste-list/          # Piste listing component
│   │   └── piste-form/          # Piste form component
│   ├── models/
│   │   ├── course.model.ts      # Course data model
│   │   ├── instructor.model.ts  # Instructor data model
│   │   └── piste.model.ts       # Piste data model
│   ├── services/
│   │   ├── course.service.ts     # Course API service
│   │   ├── instructor.service.ts # Instructor API service
│   │   └── piste.service.ts     # Piste API service
│   ├── app.routes.ts            # Application routing
│   ├── app.config.ts            # App configuration
│   └── app.ts                   # Main app component
```

## Features Overview

### Responsive Design
- Mobile-first approach
- Responsive tables and forms
- Material Design components

### Form Validation
- Client-side validation
- Real-time error feedback
- Required field validation
- Range validation for numeric inputs

### User Experience
- Loading states
- Error handling
- Confirmation dialogs
- Navigation breadcrumbs

## Development

### Adding New Features
1. Create new components using Angular CLI
2. Add routes in `app.routes.ts`
3. Create corresponding services for API calls
4. Update models as needed

### Styling
- Uses Angular Material theme
- Custom SCSS for component-specific styles
- Responsive breakpoints

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is part of a DevOps platform demonstration.