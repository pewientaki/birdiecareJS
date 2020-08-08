import { combineReducers } from 'redux';
import initialState from './initialState';

export type RootState = Readonly<{
    careRecipients: null;
}>;

export const rootReducer = combineReducers<RootState>({
    careRecipients: (state = initialState, action) => {
        return null;
        switch (action.type) {
            case 'DATA_REQUEST':
                state.data = action.allData;
                break;

            case 'DATA_RESPONSE':
                state.data = action.allData;
                break;

            case 'DATA_RESPONSE_ERROR':
                state.data = [];
                state.error = action.error;
                break;

            default:
                return null;
        }

        return state;

    }
});