import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  getMyBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount() {
    this.getMyBooks()
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchBooks
            books={books}
          />
        )}/>
        <Route exact path='/' render={() => (
          <ListBooks
            books={books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
