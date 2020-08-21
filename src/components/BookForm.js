import React from "react";

class BookForm extends React.Component {

    initialState = {
        newBookName: "",
        newBookAuthor: "",
        newBookRead: false
    }

    constructor() {
        super();
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    resetForm() {
        this.setState(this.initialState);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;
        this.setState({[name]: type === "checkbox" ? checked : value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const newBook = {
            bookId: Math.floor(Math.random() * 1000),
            bookName: this.state.newBookName,
            author: this.state.newBookAuthor,
            haveRead: this.state.newBookRead
        }
        let bookArray = this.props.books;
        bookArray.push(newBook);

        this.props.updateState(bookArray);
        this.resetForm();
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type = "text"
                    name = "newBookName"
                    value = {this.state.newBookName}
                    onChange = {this.handleChange}
                    placeholder = "Book Name"
                    required
                />
                <input
                    type = "text"
                    name = "newBookAuthor"
                    value = {this.state.newBookAuthor}
                    onChange = {this.handleChange}
                    placeholder = "Author"
                    required
                />
                <label>
                    Finsished Reading?
                </label>
                <input
                    type = "checkbox"
                    name = "newBookRead"
                    checked = {this.state.newBookRead}
                    onChange = {this.handleChange}
                    placeholder = ""
                />
                <button>Add book</button>
            </form>
        );
    }
}

export default BookForm;