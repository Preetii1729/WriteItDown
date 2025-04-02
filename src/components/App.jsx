import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "./storedNotes";
import InputArea from "./InputArea";

function App(){
    const [notes, setNote] = useState([])

    function addNote(title, content){
        setNote((prev)=>{
            return (
                setNote(...prev, {title, content})
            )
        })
    }

    return (
        <div>
            <Header />
            <div className="noteInput">
                <InputArea  addFun = {addNote}/>
            </div>
            {notes.map((ele, index) => {
                return <Note 
                    key = {index}
                    id = {index}
                    title = {ele.title}
                    content = {ele.content}
                />
            })}

            <Footer />
        </div>
    );
}

export default App;