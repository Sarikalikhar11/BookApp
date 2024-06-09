import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookShelfPage = () => {
  const [bookShelf, setBookShelf] = useState([]);

  useEffect(() => {
    const storedBookShelf = JSON.parse(localStorage.getItem('bookShelf'));
    if (storedBookShelf) {
      setBookShelf(storedBookShelf);
    }
  }, []);

  const removeFromBookShelf = (bookToRemove) => {
    const updatedBookshelf = bookShelf.filter(
      (book) => book.key !== bookToRemove.key
    );
    setBookShelf(updatedBookshelf);
    localStorage.setItem('bookShelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="container">
      <h1>My BookShelf</h1>
      <div className="row mt-5">
        {bookShelf.map((book, index) => (
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
                  className="btn btn-danger"
                  onClick={() => removeFromBookShelf(book)}
                >
                  Remove From BookShelf
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="btn btn-link mt-3">
        <button className="btn btn-info">Back To Search</button>
      </Link>
    </div>
  );
};

export default BookShelfPage;
