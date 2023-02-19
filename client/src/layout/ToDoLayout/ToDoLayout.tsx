import React from "react";
import ReactDOM from "react-dom";

import './style.css';

import ToDoItem from "@/Components/ToDoItem/ToDoItem";




interface ToDoItemType {
    id: number;
    text: string;
}

let list: Array<ToDoItemType> = [{id: 1, text: "Go to the shop"}, {id: 2, text: "Make Tea"}, {id: 3, text: "Go for Job Interview"}];


function ToDoLayout(): React.ReactElement{


    function getDay(): string {
        switch(new Date().getDay()){
            case 0: return "Sunday";

            case 1: return "Monday";

            case 2: return "Tuesday";

            case 3: return "Wednesday";

            case 4: return "Thursday";

            case 5: return "Friday";

            case 6: return "Saturday";
        }
        

    }
    
    return (
        <>  
            <div className="to-do">
                <div className="to-do-inner">
                    <div className="to-do-top">
                        <h1>TO DO LIST</h1>
                        <p>Today is: {getDay()}</p>
                    </div>
                <p></p>

                {list.map((item)=> {
                    return (
                        <>
                        <ToDoItem props={item}/>
                        </>
                    )
                })

                }
                </div>
            </div>
            
        </>
    )
}

export default ToDoLayout;