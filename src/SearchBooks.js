import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

  state = {
    query: '',
    booksfound: ''
  }

  searchBooks = (query) => {
    if (query) {
      let maxResults = 10
      BooksAPI.search(query, maxResults).then((searchresult) => {
        this.setState({ searchresult })

        if(searchresult.error) {
          this.setState({ booksfound: searchresult })
        } else {
          var mybooks = this.props.books
          var booksfound = searchresult.map(result => {
              var shelf
              for (var i = 0; i < mybooks.length && shelf === undefined; i++) {
                shelf = (result.id === mybooks[i].id ? mybooks[i].shelf : undefined)
              }
              if (shelf) {
                 result.shelf = shelf
              }
              return result
            }
          )
          this.setState({ booksfound: booksfound })
        }
      })

      this.setState({ query: query })
    } else {
      this.clearQuery()
    }
  }

  clearQuery = () => {
    this.setState({ query: '', booksfound: '' })
  }

  render() {

    const { query, booksfound } = this.state
    const { updateBook, getMyBooks } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <Debounce time="400" handler="onChange">
                <input
                  type='text'
                  value={this.query}
                  onChange={(event) => this.searchBooks(event.target.value)}
                  placeholder='Search by title or author'
                />
            </Debounce>
            {query && (
              <div
                className='clear-search'
                onClick={this.clearQuery}
              >Close</div>
            )}
          </div>
        </div>
        {booksfound && booksfound.length > 0 && (
          <div className="search-books-results">
            <ol className="books-grid">
              {booksfound.map((book) => (
                <Book key={book.id}
                  book={book}
                  updateBook={updateBook}
                  getMyBooks={getMyBooks}
                />
              ))}
            </ol>
          </div>
        )}
        {booksfound.error && (
          <div className="search-books-results">
            No search results!
          </div>
        )}
      </div>
    )
  }
}

export default SearchBooks
