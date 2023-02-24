import axios from "axios";

async function DeleteToDoItem(id:string){
    await axios({
        method: 'delete',
        url: '/api/toDoItems',
        data: {
            'id': id
        }
    })
    
    .then((response) => {
        return response.data;
    }).catch((error) => {
        return error;
    });

}

export default DeleteToDoItem;

