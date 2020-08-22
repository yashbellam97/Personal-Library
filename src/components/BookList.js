import React from "react";

import Book from "./Book";

function BookList(props) {
    const bookList = props.books.map((book) => <Book key={book.bookId} details={book} flipRead={props.flipRead} deleteBook={props.deleteBook}/>)
    return (
        <div className="bookDetails">
            <h1 className="booksHeading">Your Books</h1>
            <div className="bookList">
                {bookList}
            </div>
        </div>
    );
}

export default BookList;