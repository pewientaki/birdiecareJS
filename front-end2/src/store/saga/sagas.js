import React, { useEffect } from 'react';
import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';

// export const getWeeklyData = () => {
//     console.log('ive been called! 1')
//     const data = [];
//     try {
//         const data = axios.get('https://api.covid19api.com/')
//             // const data = await axios.get('http://localhost:8000/nutrition/df50cac5-293c-490d-a06c-ee26796f850d/')
//             .then(p => console.log(p))
//         return data;
//         console.log('ive been called! 2')

//     } catch (error) {
//         console.log(error)
//         console.log('ive been called! 3')


//     }
//     return data;
// };
export function* helloSaga() {
    console.log('Hello sagas!')
}

export function* fetchWeeklyData(action) {
    try {
        console.log('Im here')
        const somthingResponse = yield call(axios.get, 'http://localhost:8000/nutrition/' + action.payload.patientId);
        yield put({ type: "DATA_WEEKLY_SUCCEEDED", weekly: somthingResponse.data.data })
    } catch (error) {
        yield put({ type: "DATA_WEEKLY_FAILED", message: error.message })
    }
};


export function* mySaga() {
    yield takeEvery("DATA_WEEKLY_REQUESTED", fetchWeeklyData)
};

