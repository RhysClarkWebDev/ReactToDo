import React from 'react'
import { createRoot } from 'react-dom/client'

import ToDoLayout from '@/Layout/ToDoLayout/ToDoLayout'

const rootElement = document.getElementById('root')

if (rootElement !== null) {
    const root = createRoot(rootElement)

    root.render(
        <ToDoLayout />
    )
} else {
    console.error('Element with ID "root" not found.')
}




