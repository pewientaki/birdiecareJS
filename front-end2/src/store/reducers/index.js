import { initialData } from './initialState';

import { getWeeklyData } from './../saga/sagas'


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

export const dataReducer = (state = initialData, action) => {
    switch (action.type) {
        case "DATA_WEEKLY_SUCCEEDED":
            if (action.weekly)
                state.data = action.weekly;
            console.log("yalla")
            return state;
        case "SET_CARDS":
            return state;
        default:
            return state;
    }
}

