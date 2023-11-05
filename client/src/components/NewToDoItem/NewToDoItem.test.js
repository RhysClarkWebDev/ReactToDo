import {screen, render} from '@testing-library/react';

const Item = require('./NewToDoItem');


test('Displays a text box and submit button to add a new item', () => {
    render(<Item/>)
});