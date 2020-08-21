import React from "react";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';

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
            <div className="formContainer">
                <form className="bookForm" onSubmit={this.handleSubmit}>
                <Box style={{display: "inline"}} m={1}>
                    <TextField
                        required
                        name = "newBookName"
                        value = {this.state.newBookName}
                        onChange = {this.handleChange}
                        label = "Book Name"
                        variant="outlined"
                    />
                </Box>
                <Box style={{display: "inline"}} m={1}>
                    <TextField
                        required
                        id="standard-required"
                        name = "newBookAuthor"
                        value = {this.state.newBookAuthor}
                        onChange = {this.handleChange}
                        label = "Author"
                        variant="outlined"
                    />
                </Box>
                <Checkbox
                    name = "newBookRead"
                    color= "default"
                    checked = {this.state.newBookRead}
                    onChange = {this.handleChange}
                    placeholder = ""
                />
                <label>
                    Finsished Reading
                </label>
                <button className="addBookButton">Add new book</button>
                <hr style={{marginTop: "20px"}} />
            </form>
            </div>
        );
    }
}

export default BookForm;