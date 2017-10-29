const initialState = {
    notes: [
        {
            id: '27812b',
            title: 'An Example Note',
            details: 'This is an example of a note'
        },
        {
            id: '2337812b',
            title: 'Another Example Note',
            details: 'This is an example of a note .. again'
        },
        {
            id: '278923812b',
            title: 'An Example Note',
            details: 'This is an example of a note and more'
        }
    ],
    name: 'Manny'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, action.note]
            };

        case 'REMOVE_NOTE':
            return {
                ...state,
                notes: state.notes.filter(note => note !== action.note)
            };

        case 'GET_NOTES':
            return {
                ...state
            };

        default:
            return state;
    }
}