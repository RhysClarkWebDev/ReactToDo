import axios from "axios";

async function IsItemComplete(id:string, complete:boolean){
    let response = await axios({
        method: 'patch',
        url: '/api/toDoItems/status',
        data: {
            'id':id,
            'complete': complete
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

export default IsItemComplete;

