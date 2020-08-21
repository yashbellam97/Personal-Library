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

    }

    updateState(newState) {
        console.log(newState);
        this.setState({books: newState});
    }

    flipRead(id) {
        console.log(id);
        this.setState((prevState) => {
            const updatedArray = prevState.books.map((book) => {
                if (book.bookId === id) {
                    book.haveRead = !book.haveRead;
                };
                return book;
            });
            return updatedArray;
        })
    }

    render() {
        return (
            <div>
                <BookList books={booksData} flipRead={this.flipRead}/>
                <BookForm books={booksData} updateState={this.updateState}/>
            </div>
        );
    }
}

export default BooksPage;

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