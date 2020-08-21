import React from "react";

import Book from "./Book";

function BookList(props) {
    const bookList = props.books.map((book) => <Book key={book.bookId} details={book} flipRead={props.flipRead}/>)
    return (
        <div>
            <h1 className="booksHeading">Your Books</h1>
            <hr style={{width: "800px", marginLeft: "30px", marginBottom: "50px"}}/>
            <div className="bookList">
                {bookList}
            </div>
        </div>
    );
}

export default BookList;