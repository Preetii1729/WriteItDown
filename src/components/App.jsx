import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "./storedNotes";

function App(){
    return (
        <div>
            <Header />
            
            {notes.map((ele) => {
                return <Note 
                    key = {ele.key}
                    title = {ele.title}
                    detail = {ele.content}
                />
            })}

            <Footer />
        </div>
    );
}

export default App;