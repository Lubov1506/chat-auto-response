# Chat Application with Auto-Response

This is a chat application built with React and Vite for the frontend, and Express.js with MongoDB Atlas for the backend. The app features predefined chats, chat creation, update, deletion, sending messages with auto-response, toast notifications, and chat search.

## Features

- **Predefined Chats**: The app starts with 3 predefined chats.
- **Chat Creation**: Create a new chat with first and last names.
- **Chat Update**: Update existing chats with new first and last names.
- **Chat Deletion**: Remove existing chats.
- **Send Message**: Send messages and receive auto-responses with random quotes from the Quotable API after 3 seconds.
- **Toast Notifications**: Display toast notifications for new messages.
- **Chat Search**: Search for chats by first or last name.

## Technologies Used

- **Frontend**: React, Vite, HTML, CSS
- **Backend**: Express.js, MongoDB (Atlas)
- **Other**: react-toastify, Quotable API

## Setup and Installation

### Prerequisites

- Node.js
- npm
- MongoDB Atlas account

### Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/my-chat-app.git
   cd my-chat-app/server

   ```

2. **Install backend dependencies**:

   ```bash
   npm install
   ```

3. **Create a `.env` file in the `server` directory and add your MongoDB URI**:

   ```env
   MONGO_URI=your_mongodb_uri
   PORT=5000
   ```

4. **Start the backend server**:
   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate to the `client` directory**:

   ```bash
   cd ../client
   ```

2. **Install frontend dependencies**:

   ```bash
   npm install
   ```

3. **Start the frontend development server**:
   ```bash
   npm run dev
   ```

### Usage

- Open your browser and navigate to `http://localhost:3000` to see the application.
- The backend server will run on `http://localhost:5000`.

## API Endpoints

### Chats

- `GET /api/chats` - Get all chats
- `POST /api/chats` - Create a new chat
- `PUT /api/chats/:id` - Update a chat by ID
- `DELETE /api/chats/:id` - Delete a chat by ID
- `POST /api/chats/:id/messages` - Send a message to a chat and receive an auto-response

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Quotable API](https://github.com/lukePeavey/quotable)
- [react-toastify](https://fkhadra.github.io/react-toastify/)
