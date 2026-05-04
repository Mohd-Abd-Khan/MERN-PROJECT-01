<<<<<<< HEAD
# MERN Social Feed Project

A beginner-friendly, full-stack social feed application built with the MERN stack (MongoDB, Express, React, Node.js). 

This project demonstrates core CRUD (Create, Read, Update, Delete) operations, file uploads, and a modern, responsive UI.

## Features

- **Create Posts**: Upload images and add captions to create new posts.
- **Feed**: View a global feed of all posts.
- **Like System**: Like posts to increment their like counter.
- **Delete Posts**: Remove posts from the feed and the database.
- **Modern UI**: Sleek, responsive design with glassmorphic elements and loading states.

## Tech Stack

**Frontend:**
- React (built with Vite)
- React Router DOM (Routing)
- Axios (HTTP requests)
- Pure CSS (Styling)

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose (Database)
- Multer (Handling multipart/form-data for image uploads)
- CORS

## Project Structure

The project is divided into two main directories:

- `Frontend/` - The React Vite application.
- `Backend/` - The Node.js Express server.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A running instance of MongoDB (or a MongoDB Atlas connection string configured in your backend).

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Backend` directory and configure your environment variables (e.g., MongoDB URI, Port, Cloud storage keys if applicable).
4. Start the server:
   ```bash
   node server.js
   # or npm run dev (if nodemon is configured)
   ```
   *The backend runs on `http://localhost:8000` by default.*

### 2. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *The frontend usually runs on `http://localhost:5173`.*

## Usage

1. Open the Frontend URL in your browser.
2. Click **Create Post** in the navigation bar.
3. Select an image, type a caption, and submit.
4. Go to the **Feed** to view your post, where you can test the **Like** and **Delete** functionalities.
=======
# MERN-BEGINNER-PROJECT
>>>>>>> 353faee41b04e91b5086fb8b4b25829275f53e3e
