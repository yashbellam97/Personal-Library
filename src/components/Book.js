import React from "react";

function Book(props) {
    return (
        <div className={`book${props.details.haveRead ? " completed" : ""}`}>
            <h3 className="bookName">{props.details.bookName}</h3>
            <p style={{display: "inline-block", fontStyle: "italic"}}>by&nbsp;</p>
            <h4 style={{display: "inline-block"}}className="bookAuthor">{props.details.author}</h4>
            <input
                type="checkbox"
                checked={props.details.haveRead}
                onChange={() => props.flipRead(props.details.bookId)}
            /> <label>Finished Reading</label>
        </div>
    );
}

export default Book;