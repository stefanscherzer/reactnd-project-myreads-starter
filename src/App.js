import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  
  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => (
          <SearchBooks/>
        )}/>
        <Route exact path='/' render={() => (
          <ListBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
