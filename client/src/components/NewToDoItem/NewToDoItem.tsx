import React, {useState} from "react";
import ReactDOM from "react-dom";

import './style.css';

import CreateToDoItem from '@/API/CreateToDoItem'

interface ParentCallback{
    parentCallback: (childData:object) => void
}

function NewToDoItem(props:ParentCallback):React.ReactElement {

    const [message, setMessage] = useState("")

    async function addItem(){
        let text:string = (document.getElementById("next-to-do") as HTMLInputElement).value;

        let response = await CreateToDoItem(text);
        props.parentCallback(response);
        setMessage("");
    }

    function handleChange(event:any){
        setMessage(event.target.value)
    }

    return (
        <>
            <div className="new-to-do-item">
                <div className="new-to-do-item-input">
                    <input type="text" id="next-to-do" placeholder="New To Do Item..." onChange={handleChange} value={message}/>
                </div>
                <div className="add-new-to-do-item" onClick={addItem}>
                    <p>ADD</p>
                </div>
            </div>
        </>
    )
}


export default NewToDoItem;