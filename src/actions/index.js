export function selectBook(book){
  //selectBook is an action creator that needs to return an action, which is an obj with "type" property
  return {
    type: 'BOOK_SELECTED', //usually a string, usually pulled out to a separate file with vars referencing them
    payload: book, //payload is more information about the action just taken
  }
  //this action is getting piped to all different reducers
}
