function GetToDoItems (): any {
    return new Promise((resolve, reject) => {
        const getItems = new XMLHttpRequest()
        getItems.open('GET', '/api/toDoItems', true)
        getItems.send()

        getItems.onload = function (e) {
            if (this.status === 200) {
                resolve(getItems.responseText)
            } else {
                resolve('error')
                console.log('hello')
            }
        }
    })
}

export default GetToDoItems
