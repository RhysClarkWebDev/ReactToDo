import React, { useState } from 'react'

import './style.css'

import CreateToDoItem from '@/API/CreateToDoItem'

interface ParentCallback {
    parentCallback: (childData: object) => void
}

function NewToDoItem (props: ParentCallback): React.ReactElement {
    const [message, setMessage] = useState('')
    const [showError, setShowError] = useState('')


    async function addItem (): Promise<void> {
        const text: string = (document.getElementById('next-to-do') as HTMLInputElement).value

        if (text === '') {
            setShowError('Please enter Text')
        } else {
            const response = await CreateToDoItem(text) as object
            props.parentCallback(response)
            setMessage('')
            setShowError('')
        }
    }

    function handleChange (event: any): void {
        setMessage(event.target.value)
    }

    return (
        <>
            <div className="new-to-do-item">
                <div className="new-to-do-item-input">
                    <input
                        type="text"
                        id="next-to-do"
                        placeholder="New To Do Item..."
                        onChange={handleChange}
                        value={message}
                    />
                </div>
                <div className="add-new-to-do-item" onClick={() => { void addItem() }}>
                    <p>ADD</p>
                </div>
            </div>
            <p
                className="error"
                style={showError !== '' ? { display: 'block' } : { display: 'none' }}
            >
                Please enter some Text
            </p>
        </>
    )
}


export default NewToDoItem
