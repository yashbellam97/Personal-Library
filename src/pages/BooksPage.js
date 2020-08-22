import React from "react";

import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

class BooksPage extends React.Component {
    constructor() {
        super();
        this.state = {
            books: booksData
        }
        this.updateState = this.updateState.bind(this);
        this.flipRead = this.flipRead.bind(this);
        this.deleteBook = this.deleteBook.bind(this);
    }

    updateState(newState) {
        console.log(newState);
        this.setState({books: newState});
    }

    flipRead(id) {
        this.setState((prevState) => {
            const updatedArray = prevState.books.map((book) => {
                if (book.bookId === id) {
                    book.haveRead = !book.haveRead;
                };
                return book;
            });
            return {books: updatedArray};
        })
    }

    deleteBook(id) {
        const updatedArray = this.state.books.filter((book) => book.bookId !== id);
        this.setState({books: updatedArray});
    }

    render() {
        return (
            <div>
                <BookForm books={this.state.books} updateState={this.updateState}/>
                <BookList books={this.state.books} flipRead={this.flipRead} deleteBook={this.deleteBook}/>
            </div>
        );
    }
}

export default BooksPage;

let booksData = [
    {
        bookId: Math.floor(Math.random() * 1000),
        bookName: "The Book Thief",
        author: "Markus Zusak",
        haveRead: false
    },
    {
        bookId: Math.floor(Math.random() * 1000),
        bookName: "1984",
        author: "George Orwell",
        haveRead: true
    },
    {
        bookId: Math.floor(Math.random() * 1000),
        bookName: "The Hobbit",
        author: "J.R.R. Tolkien",
        haveRead: false
    },
    {
        bookId: Math.floor(Math.random() * 1000),
        bookName: "Pride and Prejudice",
        author: "Jane Austen",
        haveRead: true
    },
    {
        bookId: Math.floor(Math.random() * 1000),
        bookName: "The Kite Runner",
        author: "Khaled Hosseini",
        haveRead: true
    }
]