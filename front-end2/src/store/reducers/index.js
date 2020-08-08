// import { initialNotes } from './initialState'


// export const noteReducer = (state = initialNotes, action) => {
//     switch (action.type) {
//         case 'ADD_NOTE':
//             return state.text: [...state.text, action.text]

//         default:
//             return state
//     }
// };

export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;

        default:
            return state
    }
};

