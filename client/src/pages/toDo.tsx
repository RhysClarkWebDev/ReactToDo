import React from "react";
import ReactDOM from "react-dom";

import ToDoLayout from "@/Layout/ToDoLayout/ToDoLayout";

import GetToDoItems from "@/API/GetToDoItems"



function getallToDoItems(){
    return new Promise((resolve, reject) => {
        GetToDoItems().then((data:string)=>{
            resolve(data);
        });
        
    })
}

getallToDoItems().then((data)=>{
    let root = document.getElementById("root");
    ReactDOM.render(<ToDoLayout allToDoItems={data}/>, root);
})













