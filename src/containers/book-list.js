import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

  //maps over array of books and generates LI w/ book title
  renderList(){
    return this.props.books.map(book => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    })
  }

  //uses helper function renderList() that we defined above to render books to the page as LI item
  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

//if state ever changes, this container will instantly re-render with new list of books
function mapStateToProps(state){
  //Whatever is returned will show up as this.props inside of bookList
  return {
    books: state.books,
  };
}

//connect function says, take this component, take mapStateToProps, and make a container
//connect takes a function and component and produces container
export default connect(mapStateToProps)(BookList);

//a container is a React component that has direct connection to the state produced by Redux
//React-Redux container forms bridge between React and Redux
