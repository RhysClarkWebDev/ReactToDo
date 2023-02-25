import axios from "axios";

async function UpdateToDoItem(id:string, text:string){
    let response = await axios({
        method: 'patch',
        url: '/api/toDoItems',
        data: {
            'id':id,
            'text': text
        }
    })
    
    .then((response) => {
        return response.data;
    }).catch((error) => {
        return error;
    });
    console.log(response.complete);
    return response;

}

export default UpdateToDoItem;

