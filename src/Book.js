import React, { Component } from 'react';

class Book extends Component {

  render() {
    const { book } = this.props

    // TODO: find a solution how to handle the case
    //       when no thumbnail is available

    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            {book.imageLinks ?
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
              : <div className="book-no-cover"/>}
            <div className="book-shelf-changer">
              <select value="none" readOnly>
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
