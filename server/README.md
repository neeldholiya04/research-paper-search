# Research Paper Search Web App - Backend

This is the backend for the Research Paper Search Web App, built with Node.js and Express. It provides API endpoints for searching research papers and managing saved papers.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Available Scripts](#available-scripts)
4. [Project Structure](#project-structure)
5. [API Endpoints](#api-endpoints)
6. [Database](#database)
7. [Environment Variables](#environment-variables)
8. [Error Handling](#error-handling)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:
   ```
   git clone https://neeldholiya04/research-paper-search.git
   ```

2. Navigate to the backend directory:
   ```
   cd research-paper-search/server
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root of the server directory and add necessary environment variables (see [Environment Variables](#environment-variables) section).

## Available Scripts

In the project directory, you can run:

- `npm start`: Starts the server in production mode.
- `npm run dev`: Starts the server in development mode with nodemon for auto-reloading.

## Project Structure

```
server/
├── routes/
│   └── papers.js
├── server.js
├── package.json
└── README.md
```

## API Endpoints

- `GET /api/papers/search`: Search for papers
  - Query Parameters:
    - `query`: The search term
  - Example: `GET /api/papers/search?query=machine+learning`

## Database

This application does not use a persistent database. Paper data is fetched from the CrossRef API, and saved papers are stored in-memory on the server.

## Environment Variables

Create a `.env` file in the root of the server directory with the following variables:

```
PORT=5000
```

## Error Handling

The server implements error handling middleware to catch and respond to errors appropriately. Errors are logged to the console and sent as JSON responses to the client.
