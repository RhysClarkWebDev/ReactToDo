import axios from 'axios'

async function DeleteToDoItem (id: string): Promise<unknown> {
    const response = await axios({
        method: 'delete',
        url: '/api/toDoItems',
        data: {
            id
        }
    })

        .then((response) => {
            return response.data
        }).catch((error) => {
            return error
        })

    return response
}

export default DeleteToDoItem

