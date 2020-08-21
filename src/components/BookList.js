import React from "react";

import Book from "./Book";

function BookList(props) {
    const bookList = props.books.map((book) => <Book key={book.bookId} details={book}/>)
    return (
        <div>
            <h1>Your Books</h1>
            {bookList}
        </div>
    );
}

export default BookList;