import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; //takes return value from selected book and makes sure info flows through all reducers



//we make BookList a container because it depends on a changing state of books that connects to Redux store
//A container is a norma React component that gets BINDED to the app's state via React-Redux
//When app state changes, container will re-render
class BookList extends Component {

  //a method that maps over array of books and generates LI w/ book title
  renderList(){
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)} //when this is clicked, call this.props.selectBook with the book
          className="list-group-item">
          {book.title}
        </li>
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
  console.log(state);
  //Whatever is returned will show up as this.props inside of bookList
  return {
    books: state.books,
  };
}

//Anything returned from this fn will end up as props on the Booklist container
function mapDispatchToProps(dispatch){
  //Whenever selectBook is called, the result should be passed to all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//connect function says, take this component, take mapStateToProps, and make a container
//connect takes a function and component and produces container

// Promote Booklist from component to container, it needs to know about this new dispatch method, selectBook, makes it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

//a container is a React component that has direct connection to the state produced by Redux
//React-Redux container forms bridge between React and Redux
