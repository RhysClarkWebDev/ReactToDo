import React, {useCallback, useState} from "react";
import ReactDOM from "react-dom";

import './style.css';

import ToDoItem from "@/Components/ToDoItem/ToDoItem";
import NewToDoItem from "@/Components/NewToDoItem/NewToDoItem";


interface a {
    allToDoItems: any;
}
interface ToDoItemType {
    _id: string;
    text: string;
    complete: boolean;
}

function ToDoLayout(props:a): React.ReactElement{

    const [todos, setToDos] = useState(JSON.parse(props.allToDoItems));

    function getDay():string {
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

    function handleCallback(childData:object){
        setToDos([
            ...todos, childData
        ])
    }
    
    
    return (
        <>  
            <div className="to-do">
                <div className="to-do-inner">
                    <div className="to-do-top">
                        <h1>TO DO LIST</h1>
                        <p>Today is: {getDay()}</p>
                    </div>

                {todos.map((item:ToDoItemType)=> {
                    return (
                        <div key={item._id}>
                            <ToDoItem props={item}/>
                        </div>
                    )
                })

                }

                <NewToDoItem parentCallback={handleCallback}/>
                </div>
            </div>
            
        </>
    )
}

export default ToDoLayout;