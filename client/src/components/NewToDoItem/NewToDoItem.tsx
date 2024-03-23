import React, { useState, useRef } from 'react'

import './style.css'

import CreateToDoItem from '@/API/CreateToDoItem'

interface ParentCallback {
    parentCallback: (childData: object) => void
}

function NewToDoItem (props: ParentCallback): React.ReactElement {
    const [message, setMessage] = useState('')
    const [showError, setShowError] = useState('')
    const textRef = useRef<HTMLInputElement>()


    async function addItem (): Promise<void> {
        const text = textRef.current?.value

        if (text === '') {
            setShowError('Please enter Text')
        } else {
            const response = text !== null && await CreateToDoItem(text) as object
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
                        ref={textRef}
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
