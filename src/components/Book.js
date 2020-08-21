import React from "react";
import Checkbox from '@material-ui/core/Checkbox';

function Book(props) {
    return (
        <div className={`book${props.details.haveRead ? " completed" : ""}`}>
            <h3 className="bookName">{props.details.bookName}</h3>
            <p className="authorDetails">by <span className="bookAuthor">{props.details.author}</span></p>
            <div className="readStatus">
                <Checkbox
                    checked={props.details.haveRead}
                    color="default"
                    onChange={() => props.flipRead(props.details.bookId)}
                /><label>Finished Reading</label>
            </div>
        </div>
    );
}

export default Book;