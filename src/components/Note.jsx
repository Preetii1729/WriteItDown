import React from "react";

function Note(props){
    return (
        <div className="note">
            <h1> {props.title} </h1>
            <p>
               {props.detail}
            </p>
            <div className="cornerButton">
                <button>Delete</button>
            </div>
        </div>
    );
}

export default Note;