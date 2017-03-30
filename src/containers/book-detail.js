'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render(){
    if (!this.props.book){
      return <div>Select a book to get started.</div>;
    }

    //once a user clicks on a book, it causes container to re-render with new state
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log(state, 'what is state in book-detail?');
  return {
    book: state.activeBook,
  }
}

export default connect(mapStateToProps)(BookDetail);
