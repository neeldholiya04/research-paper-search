# Research Paper Search Web App - Frontend

This is the frontend for the Research Paper Search Web App, built with React. It allows users to search for research papers, view results, and save papers to their collection.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Available Scripts](#available-scripts)
4. [Project Structure](#project-structure)
5. [Key Features](#key-features)
6. [Styling](#styling)
7. [API Integration](#api-integration)
8. [State Management](#state-management)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/neeldholiya04/research-paper-search.git
   ```

2. Navigate to the frontend directory:
   ```
   cd research-paper-search/client
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm run eject`: Removes the single build dependency from your project. (Note: this is a one-way operation)

## Project Structure

```
client/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── SearchPage.js
│   │   ├── SavedPapersPage.js
│   │   ├── PaperList.js
│   │   ├── PaperItem.js
│   │   └── Notification.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md
```

## Key Features

1. **Paper Search**: Users can search for research papers using keywords.
2. **Save Papers**: Users can save interesting papers to their collection.
3. **View Saved Papers**: Users can view and manage their saved papers.
4. **Responsive Design**: The app is fully responsive and works on various screen sizes.

## Styling

The app uses CSS for styling, with styles defined in `App.css`. The design is responsive and adapts to different screen sizes using media queries.

## API Integration

The frontend interacts with the backend API to fetch search results. The API calls are made in the `SearchPage` component using the `fetch` API.

## State Management

This app uses React's built-in state management with hooks. The main state is managed in the `App` component and passed down to child components as props.
