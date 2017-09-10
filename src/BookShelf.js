import React from 'react';
import Book from './Book'

const BookShelf = ({books, shelfname, updateBook, getMyBooks}) => (
  <div className="bookshelf">
    {shelfname && (
      <h2 className="bookshelf-title">{shelfname}</h2>
    )}
    <div className="bookshelf-books">
      {books && (
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id}
              book={book}
              updateBook={updateBook}
              getMyBooks={getMyBooks}
            />
          ))}
        </ol>
      )}
    </div>
  </div>
);

export default BookShelf
