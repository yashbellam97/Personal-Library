import React from "react";

function Book(props) {
    return (
        <div>
            <h3>{props.details.bookName}</h3>
            <h4>{props.details.author}</h4>
            <h5>Finished Reading? {props.details.haveRead ? "Yes" : "No"}</h5>
        </div>
    );
}

export default Book;