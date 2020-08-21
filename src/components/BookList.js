import React from "react";

import Book from "./Book";

class BookList extends React.Component {
    constructor() {
        super();
        this.state = {
            books: booksData
        }
    }
    render() {
        const bookList = this.state.books.map((book) => <Book key={book.bookId} details={book}/>)
        console.log(bookList);
        return (
            <div>
                <h1>Your Books</h1>
                {bookList}
            </div>
        );
    }
}

export default BookList;

let booksData = [
    {
        bookId: 1,
        bookName: "The Book Thief",
        author: "Markus Zusak",
        haveRead: true
    },
    {
        bookId: 2,
        bookName: "The Hobbit",
        author: "J.R.R. Tolkien",
        haveRead: false
    },
    {
        bookId: 3,
        bookName: "1984",
        author: "George Orwell",
        haveRead: false
    }
]