import React, { useState } from "react";

function InputArea(props){
    const [{title, note}, setNote] = useState({
        title:"",
        note: ""
    })
    return (
        <div className="note">
            <input type="text" placeholder="Title" value = {title}/>
            <textarea rows={5} cols={25} placeholder="Write It Down...." value={note}></textarea>
            {/* <input type="text" placeholder="Write It Down...." value={note} id="longInput" /> */}
            <div className="cornerButton">
                <button onClick={()=>{
                    props.addFun({title, note});
                }}>Add</button>
            </div>
        </div>
    );
}

export default InputArea;

//value = {title}     value={note}