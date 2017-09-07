import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: (this.props.book.shelf ? this.props.book.shelf : 'none')
    };

    this.updateBook = this.updateBook.bind(this);
  }

  updateBook(event, book) {
    BooksAPI.update(book, event.target.value)
    this.setState({value: event.target.value});
  }

  render() {
    const { book } = this.props
    const { value } = this.state

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            {book.imageLinks
              ? <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
              : <div className="book-no-cover"/>}
            <div className="book-shelf-changer">
              <select
                onChange={(event) => this.updateBook(event, book)}
                value={value}>
                <option value="info" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
