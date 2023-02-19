import React from "react";
import ReactDOM from "react-dom";

import './style.css';




interface Props {
    props: ToDoItemType;   
}
interface ToDoItemType {
    id: number;
    text: string;
}

function ToDoItem({props}: Props): React.ReactElement{

    let id = props.id;
    let text = props.text;
    return (
        <>  
            <div className="to-do-item-holder">
                <div className="complete-to-do">
                    <input type="checkbox" className="checkbox-button__input" name={"choice" + id}/>
                    <span className="checkbox-button__control"></span>
                </div>

                <div className="to-do-item">
                    <p>{text}</p>
                </div>

                <div className="delete-to-do">
                    <div className="line line-top"></div>
                    <div className="line line-bottom"></div>
                </div>
            </div>
            
        </>
    )
}


export default ToDoItem;