# Multi-stage build for Angular application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (devDependencies required for Angular build)
RUN npm ci

# Copy source code
COPY . .

# Build the application for production
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine

# Copy built application from build stage
COPY --from=build /app/dist/devops-platform-frontend/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
