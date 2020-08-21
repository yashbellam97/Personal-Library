import React from "react";

function Book(props) {
    return (
        <div className={`book${props.details.haveRead ? " completed" : ""}`}>
            <h3 className="bookName">{props.details.bookName}</h3>
            <p className="authorDetails">by <span className="bookAuthor">{props.details.author}</span></p>
            <input
                type="checkbox"
                checked={props.details.haveRead}
                onChange={() => props.flipRead(props.details.bookId)}
            /> <label>Finished Reading</label>
        </div>
    );
}

export default Book;