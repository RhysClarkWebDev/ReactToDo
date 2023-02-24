import axios from "axios";

async function CreateToDoItem(text:string){
    let response = await axios({
        method: 'post',
        url: '/api/toDoItems',
        data: {
            'text': text
        }
    })
    
    .then((response) => {
        return response.data;
    }).catch((error) => {
        return error;
    });

    return response;
}

export default CreateToDoItem;

