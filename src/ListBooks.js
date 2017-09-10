import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {

  render() {
    const { books } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelfname="Currently Reading"
              books={books.filter(book => book.shelf === "currentlyReading")}
            />
            <BookShelf
              shelfname="Want to Read"
              books={books.filter(book => book.shelf === "wantToRead")}
            />
            <BookShelf
              shelfname="Read"
              books={books.filter(book => book.shelf === "read")}
            />
          </div>
        </div>
        <div className="open-search">
          <Link
            to='/search'
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks
