import React, { useState, useEffect } from 'react'

import './style.css'

import GetToDoItems from '@/API/GetToDoItems'
import ToDoItem from '@/Components/ToDoItem/ToDoItem'
import ToDoItemMobile from '@/Components/ToDoItemMobile/ToDoItemMobile'
import NewToDoItem from '@/Components/NewToDoItem/NewToDoItem'



interface ToDoItemType {
    _id: string
    text: string
    complete: boolean
}

function ToDoLayout (): React.ReactElement {
    const [todos, setToDos] = useState<ToDoItemType[]>([])
    const [forDesktop, setForDesktop] = useState(true)


    useEffect(() => {
        const fetchData = async (): Promise<string> => {
            let data = ''

            try {
                data = await GetToDoItems()

                return data
            } catch (error) {
            // Handle any errors here
            }

            return data
        }

        fetchData()
            .then((result) => {
                if (result !== '') {
                    setToDos(JSON.parse(result))
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, [])



    useEffect(() => {
        getDisplayWidth()
    })

    function getDay (): string {
        switch (new Date().getDay()) {
            case 0: return 'Sunday'

            case 1: return 'Monday'

            case 2: return 'Tuesday'

            case 3: return 'Wednesday'

            case 4: return 'Thursday'

            case 5: return 'Friday'

            case 6: return 'Saturday'

            default: return 'Unknown'
        }
    }

    function getDisplayWidth (): void {
        const width = screen.width

        if (width < 670) {
            setForDesktop(false)
        } else {
            setForDesktop(true)
        }
    }

    window.addEventListener('resize', getDisplayWidth)

    function handleCallback (childData: ToDoItemType): void {
        setToDos([
            ...todos, childData
        ])
    }

    if (forDesktop && todos !== null && todos !== undefined) {
        return (
            <>
                <div className="to-do">
                    <div className="to-do-inner">
                        <div className="to-do-top">
                            <h1>TO DO LIST</h1>
                            <p>Today is: {getDay()}</p>
                        </div>

                        {Array.isArray(todos) && todos.map((item: ToDoItemType) => {
                            return (
                                <div key={item._id}>
                                    <ToDoItem props={item}/>
                                </div>
                            )
                        })

                        }

                        <NewToDoItem parentCallback={handleCallback}/>
                    </div>
                </div>

            </>
        )
    }

    return (
        <>
            <div className="to-do mobile-to-do">
                <div className="to-do-inner">
                    <div className="to-do-top">
                        <h1>TO DO LIST</h1>
                        <p>Today is: {getDay()}</p>
                    </div>

                    {Array.isArray(todos) && todos.map((item: ToDoItemType) => {
                        return (
                            <div key={item._id}>
                                <ToDoItemMobile props={item}/>
                            </div>
                        )
                    })

                    }

                    <NewToDoItem parentCallback={handleCallback}/>
                </div>
            </div>

        </>
    )
}

export default ToDoLayout
