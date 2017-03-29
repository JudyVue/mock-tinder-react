import React, { Component } from 'react';

import BookList from '../containers/book-list';

//all this does is render BookList
//Redux generates a state object that contains our books and maps that state back to our component
export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
