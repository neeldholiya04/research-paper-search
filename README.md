# Research Paper Search Web App

This project is a full-stack web application that allows users to search for research papers, view results, and save papers to their collection. It consists of a React frontend and a Node.js/Express backend.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Prerequisites](#prerequisites)
6. [Installation](#installation)
7. [Running the Application](#running-the-application)
8. [API Documentation](#api-documentation)

## Project Overview

The Research Paper Search Web App is designed to help researchers and students easily find and manage scientific papers. Users can search for papers using keywords, view detailed information about each paper, and save interesting papers for future reference.

## Features

- Search for research papers using keywords
- View paper details including title, authors, publication year, and citation count
- Save papers to a personal collection
- Responsive design for various screen sizes
- Real-time search with debounce functionality

## Tech Stack

- Frontend:
  - React
  - CSS3
- Backend:
  - Node.js
  - Express
- External API:
  - CrossRef API for fetching paper data

## Project Structure

```
research-paper-search/
├── client/                 # Frontend React application
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── README.md
├── server/                 # Backend Node.js/Express application
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── README.md
└── README.md               
```

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/neeldholiya04/research-paper-search.git
   cd research-paper-search
   ```

2. Install frontend dependencies:
   ```
   cd client
   npm install
   ```

3. Install backend dependencies:
   ```
   cd ../server
   npm install
   ```

## Running the Application

1. Start the backend server:
   ```
   cd server
   npm run dev
   ```
   The server will start on `http://localhost:5000`.

2. In a new terminal, start the frontend development server:
   ```
   cd client
   npm start
   ```
   The React application will start on `http://localhost:3000`.

3. Open your browser and visit `http://localhost:3000` to use the application.

## API Documentation

For detailed information about the API endpoints, please refer to the backend README file in the `server` directory.
