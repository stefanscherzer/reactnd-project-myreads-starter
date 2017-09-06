import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'

class ListBooks extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books);
    })
  }

  render() {
    const { books } = this.state

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelfname="Currently Reading"
              books={books}
            />
            <BookShelf
              shelfname="Want to Read"
              books={books}
            />
            <BookShelf
              shelfname="Read"
              books={books}
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
