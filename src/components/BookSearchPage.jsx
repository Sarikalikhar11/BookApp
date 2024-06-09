import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [bookShelf, setBookShelf] = useState(
    JSON.parse(localStorage.getItem('bookShelf')) || []
  );

  const searchBooks = async (q) => {
    if (q.length > 2) {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${q}&limit=10&page=1`
      );
      setResults(response.data.docs);
    } else {
      setResults([]);
    }
  };

  const addToBookShelf = (book) => {
    const updatedBookShelf = [...bookShelf, book];
    setBookShelf(updatedBookShelf);
    localStorage.setItem('bookShelf', JSON.stringify(updatedBookShelf));
  };

  return (
    <div className="container">
      <h1>Book Search</h1>
      <div className="d-flex justify-content-between align-items-center mb-3 mt-5">
        <input
          type="text"
          value={query}
          className="form-control w-75"
          placeholder="Search for a book"
          onChange={(e) => {
            setQuery(e.target.value);
            searchBooks(e.target.value);
          }}
        />
        <Link to="/bookshelf">
          <button type="button" className="btn btn-success">
            My BookShelf
          </button>
        </Link>
      </div>
      <div className="row">
        {results.map((book, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Book Title: {book.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Book Author: {book.author_name?.join(', ')}
                </h6>
                <h6 className="card-subtitle mb-2 text-muted fw-6">
                  Edition Count: {book.edition_count}
                </h6>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => addToBookShelf(book)}
                >
                  Add to Bookshelf
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;
