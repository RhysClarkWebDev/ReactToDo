import axios from 'axios'

async function CreateToDoItem (text: string): Promise<unknown> {
    const response = await axios({
        method: 'post',
        url: '/api/toDoItems',
        data: {
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

export default CreateToDoItem

