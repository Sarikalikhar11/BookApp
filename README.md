# Book Search App

This is a React application that allows users to search for books using the Open Library API and maintain a personal bookshelf in the browser using localStorage. The app is styled using Bootstrap.

## Features

- **Book Search Page**: Search for books by name, display results in real-time.
- **Personal Bookshelf Page**: Add books to a personal bookshelf and persist data using localStorage.
- **Routing**: Navigate between the search page and the bookshelf page.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sarikalikhar11/bookApp.git
   cd bookApp

2. Install dependencies:
   npm install

3. tart the development server:
   npm start

The app should now be running on http://localhost:3000.

Usage:
1. Search for Books: On the main page, type a book's name into the search field. The results will be displayed in real-time.
2. Add to Bookshelf: Click the "Add to Bookshelf" button on a book card to add the book to your personal bookshelf.
3. View Bookshelf: Click the "Go to My Bookshelf" link to view your saved books.
4. Remove from Bookshelf: Click the "Remove from Bookshelf" button on a book card in the bookshelf to remove the book.

Dependencies:
1. react: The core library for building user interfaces.
2. react-dom: Serves as the entry point to the DOM and server renderers for React.
3. react-router-dom: Collection of navigational components that compose declaratively with your application.
4. axios: Promise-based HTTP client for the browser and Node.js.
5. bootstrap: CSS framework for building responsive and modern web interfaces.
