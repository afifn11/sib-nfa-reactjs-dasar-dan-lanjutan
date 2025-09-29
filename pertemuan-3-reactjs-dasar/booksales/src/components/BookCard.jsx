import React from 'react';

function BookCard({ book }) {
  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img
          src={book.image}
          className="card-img-top"
          alt={book.title}
          style={{ height: "250px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{book.title} ({book.year})</h5>
          <p className="card-text text-muted">{book.author}</p>
          <p className="card-text small">{book.description}</p>
          <div className="mt-auto d-flex justify-content-end">
            <button className="btn btn-sm btn-dark">Beli</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;