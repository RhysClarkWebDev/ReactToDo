import axios from 'axios'

async function IsItemComplete (id: string, complete: boolean): Promise<unknown> {
    const response = await axios({
        method: 'patch',
        url: '/api/toDoItems/status',
        data: {
            id,
            complete
        }
    })

        .then((response) => {
            return response.data
        }).catch((error) => {
            return error
        })


    return response
}

export default IsItemComplete

