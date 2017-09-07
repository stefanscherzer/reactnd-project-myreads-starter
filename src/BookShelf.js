import React, { Component } from 'react';
import Book from './Book'

class BookShelf extends Component {

  render() {
    const { books, shelfname } = this.props

    return (
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
                />
              ))}
            </ol>
          )}
        </div>
      </div>
    )
  }
}

export default BookShelf
