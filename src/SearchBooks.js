import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {

  state = {
    query: '',
    books: '',
    searchresult: '',
    mybooks: ''
  }

  searchBooks = (query) => {
    if (query) {
      let maxResults = 10
      BooksAPI.search(query, maxResults).then((searchresult) => {
        this.setState({ searchresult })

        BooksAPI.getAll().then((mybooks) => {
          this.setState({ mybooks })

          var books = this.state.searchresult.map(result => {
              var shelf
              for (var i = 0; i < this.state.mybooks.length && shelf === undefined; i++) {
                shelf = (result.id === this.state.mybooks[i].id ? this.state.mybooks[i].shelf : undefined)
              }
              if (shelf) {
                 result.shelf = shelf
              }
              return result
            }
          )
          this.setState({ books: books })
        })
      })

      this.setState({ query: query.trim() })
    } else {
      this.clearQuery()
    }
  }

  clearQuery = () => {
    this.setState({ query: '', books: '' })
  }

  render() {

    const { query, books } = this.state

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
            <input
              type='text'
              placeholder='Search by title or author'
              value={query}
              onChange={(event) => this.searchBooks(event.target.value)}
            />
            {query && (
              <div
                className='clear-search'
                onClick={this.clearQuery}
              >Close</div>
            )}
          </div>
        </div>
        {books && books.length > 0 && (
          <div className="search-books-results">
            <ol className="books-grid">
              {books.map((book) => (
                <Book key={book.id}
                  book={book}
                />
              ))}
            </ol>
          </div>
        )}
        {books.error && (
          <div className="search-books-results">
            No search results!
          </div>
        )}
      </div>
    )
  }
}

export default SearchBooks
