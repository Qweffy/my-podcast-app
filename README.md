# My Podcast App

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Scripts](#scripts)
5. [Development and Production Modes](#development-and-production-modes)
6. [API Endpoints](#api-endpoints)

## Project Overview
This project is a mini-application for listening to musical podcasts. It consists of three views:
1. Main View
2. Podcast Detail View
3. Episode Detail View

The application is a Single Page Application (SPA), ensuring navigation is handled client-side without full page reloads. 

## Technologies Used
This project leverages a variety of modern technologies and tools to ensure efficient development, high performance, and maintainability:

### Core Technologies
- **React**: For building user interfaces and handling state management.
- **TypeScript**: Provides static type checking to help catch errors early and improve code quality.
- **Vite**: A build tool that significantly improves the development experience with fast hot module replacement.

### State Management and Data Fetching
- **@tanstack/react-query**: Manages server-state and asynchronous data fetching, providing caching and synchronization out of the box.
- **localforage**: A library to handle storing data locally, ensuring data persistence across sessions.

### Routing
- **React Router**: Handles client-side routing, providing a dynamic and responsive user experience.

### Styling
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **PostCSS** and **Autoprefixer**: For transforming CSS with JavaScript plugins and adding vendor prefixes to CSS rules.

### Code Quality
- **ESLint**: A linter tool to ensure code quality and consistency.
- **Prettier**: An opinionated code formatter to maintain a consistent style.
- **@typescript-eslint**: Linting for TypeScript code.

### Testing
- **Vitest**: A fast unit testing framework integrated with Vite.
- **Testing Library**: Provides utilities for testing React components.

## Installation
To install and set up the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies.

## Scripts
- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `lint`: Lints the codebase.
- `preview`: Previews the built project.
- `test`: Runs the test suite.

You can run these scripts using `yarn` or `npm`.

## Development and Production Modes
- **Development Mode**: Assets are served without minification for easier debugging.
- **Production Mode**: Assets are concatenated and minified for optimal performance.

To start the development server, use the `dev` script. To build the project for production, use the `build` script.

The application uses the following API endpoints:

- **Top 100 Podcasts**: `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`
- **Podcast Details**: `https://itunes.apple.com/lookup?id={podcastId}&media=podcast&entity=podcastEpisode&limit=20`

