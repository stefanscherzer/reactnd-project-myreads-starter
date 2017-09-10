import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import NoMatch from './NoMatch'
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
        <Switch>
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
          <Route component={NoMatch} status={404}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
