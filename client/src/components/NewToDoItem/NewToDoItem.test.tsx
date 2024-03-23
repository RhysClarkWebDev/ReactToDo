import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import NewToDoItem from './NewToDoItem'


// Mock the API call
jest.mock('@/API', () => ({
    CreateToDoItem: jest.fn()
}))


test('Renders a text input and an "ADD" button', () => {
    render(<NewToDoItem parentCallback={() => {}} />)

    // Check if the text input is rendered
    const textInput = screen.getByPlaceholderText('New To Do Item...')
    expect(textInput).toBeInTheDocument()

    // Check if the "ADD" button is rendered
    const addButton = screen.getByText('ADD')
    expect(addButton).toBeInTheDocument()
})

test('Handles input change', () => {
    render(<NewToDoItem parentCallback={() => {}} />)

    // Get the text input
    const textInput: HTMLInputElement = screen.getByPlaceholderText('New To Do Item...')

    // Simulate user input
    fireEvent.change(textInput, { target: { value: 'New item text' } })

    // Check if the input value has changed
    expect(textInput.value).toBe('New item text')
})

test('Handles form submission', () => {
    // Mock the parent callback function
    const parentCallbackMock = jest.fn()

    render(<NewToDoItem parentCallback={parentCallbackMock} />)

    // Get the text input
    const textInput = screen.getByPlaceholderText('New To Do Item...')

    // Set input value
    fireEvent.change(textInput, { target: { value: 'New item text' } })

    // Get the "ADD" button
    const addButton = screen.getByText('ADD')

    // Simulate button click
    fireEvent.click(addButton)

    // Expect the parent callback to be called with the correct data
    expect(parentCallbackMock).toHaveBeenCalledWith('New item text')
})
