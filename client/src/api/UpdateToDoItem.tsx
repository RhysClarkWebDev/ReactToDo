import axios from 'axios'

async function UpdateToDoItem (id: string, text: string): Promise<unknown> {
    const response = await axios({
        method: 'patch',
        url: '/api/toDoItems',
        data: {
            id,
            text
        }
    })

        .then((response) => {
            return response.data
        }).catch((error) => {
            return error
        })

    return response
}

export default UpdateToDoItem

