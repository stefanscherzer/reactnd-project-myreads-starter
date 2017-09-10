import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

const ListBooks = ({books, updateBook, getMyBooks}) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf
          shelfname="Currently Reading"
          books={books.filter(book => book.shelf === "currentlyReading")}
          updateBook={updateBook}
          getMyBooks={getMyBooks}
        />
        <BookShelf
          shelfname="Want to Read"
          books={books.filter(book => book.shelf === "wantToRead")}
          updateBook={updateBook}
          getMyBooks={getMyBooks}
        />
        <BookShelf
          shelfname="Read"
          books={books.filter(book => book.shelf === "read")}
          updateBook={updateBook}
          getMyBooks={getMyBooks}
        />
      </div>
    </div>
    <div className="open-search">
      <Link
        to='/search'
      >Add a book</Link>
    </div>
  </div>
);

export default ListBooks
