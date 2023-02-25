import React, {useState, useRef} from "react";
import ReactDOM from "react-dom";

import './style.css';

import DeleteToDoItem from '@/API/DeleteToDoItem';
import IsItemComplete from '@/API/IsItemComplete';
import UpdateToDoItem from '@/API/UpdateToDoItem';


interface SingleToDoItem {
    props: ToDoItemType;
}
interface ToDoItemType {
    _id: string;
    text: string;
    complete: boolean;
}




function ToDoItemMobile({props}:SingleToDoItem): React.ReactElement{
    
    const [isComplete, setIsComplete] = useState(props.complete);
    const [render, setRender] = useState(true);
    const [message, setMessage] = useState(props.text);
    const [beingEdited, setBeingEdited] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    
    
    async function lineThroughItem(){
        await IsItemComplete(String(databaseId.current), isComplete)
        .then(()=>{
            setIsComplete(current => !current);
        })
        
    }

    async function deleteToDo(){
        await DeleteToDoItem(String(databaseId.current))
        .then(()=>{
            setRender(false);
        })
    }

    function makeEditable(){
        setBeingEdited(true);
    }

    async function updateToDo(){
        await UpdateToDoItem(String(databaseId.current), message)
        .then(()=>{
            setBeingEdited(false);
        })
    }

    function handleChange(event:any){
        setMessage(event.target.value)
    }

    function showEditables(){
        setIsExpanded(current => !current);

    }


    let item = props;
    let id = item._id;
    let text = item.text;

    const databaseId = useRef(id)

    if(render && !beingEdited){
        return (
            <>  
                <div className={isComplete ? "completed-item to-do-item-holder" : "to-do-item-holder"}>
    
                    <div className="to-do-item">
                        <p>{message}</p>
                    </div>

                    <div className={isExpanded ? "show-editables editables-container" : "editables-container"}>
                        <div className="toggle-edits" onClick={showEditables}>
                            <p>{isExpanded ? "Close" : "Edit"}</p>
                        </div>

                        <div className="editables-buttons">
                            <div className="complete-to-do" onClick={()=> {lineThroughItem()}}>
                                <input type="checkbox" defaultChecked={isComplete} className="checkbox-button__input" name={"item" + id}/>
                                <span className="checkbox-button__control"></span>
                            </div>
            
                            <div className="update-to-do" onClick={makeEditable}>
                                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 10L4 16V20H8L10.5 17.5M10 10L13 7L17 11L14 14M10 10L14 14M14 14L13 15M4 10V4H12M14 20H20V4H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>

                            <div className="delete-to-do" onClick={deleteToDo}>
                                <div className="line line-top"></div>
                                <div className="line line-bottom"></div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </>
        )
    } else if(render && beingEdited) {
        return (
            <>  
                <div className={isComplete ? "completed-item to-do-item-holder" : "to-do-item-holder"}>
    
                    <div className="to-do-item">
                        <input type="text" value={message} autoFocus onChange={handleChange}/>
                    </div>
    
                    <div className="save-to-do" onClick={updateToDo}>
                        <p>Save</p>
                    </div>
                </div>
                
            </>
        )
        
    }else {
        return null;
    }
    
}


export default ToDoItemMobile;