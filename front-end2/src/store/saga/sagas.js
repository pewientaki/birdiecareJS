import axios from 'axios';
import { call, put, takeEvery, all } from 'redux-saga/effects';

export function* fetchNutritionData(action) {
    try {
        const nutritionResponse = yield call(axios.get, 'https://birdiecare-api.herokuapp.com/nutrition/' + action.payload.patientId);
        yield put({ type: "DATA_NUTRITION_SUCCEEDED", nutrition: nutritionResponse.data.data });
    } catch (error) {
        yield put({ type: "DATA_WEEKLY_FAILED", message: error.message });
    };
};

export function* fetchHealthData(action) {
    try {
        const healthResponse = yield call(axios.get, 'https://birdiecare-api.herokuapp.com/health/' + action.payload.patientId);
        yield put({ type: "DATA_HEALTH_SUCCEEDED", health: healthResponse.data.data });
    } catch (error) {
        yield put({ type: "DATA_HEALTH_FAILED", message: error.message });
    };
};

export function* fetchMedsData(action) {
    try {
        const medsResponse = yield call(axios.get, 'https://birdiecare-api.herokuapp.com/meds/' + action.payload.patientId);
        yield put({ type: "DATA_MEDS_SUCCEEDED", meds: medsResponse.data.data });
    } catch (error) {
        yield put({ type: "DATA_MEDS_FAILED", message: error.message });
    };
};

export function* fetchTasksData(action) {
    try {
        const tasksResponse = yield call(axios.get, 'https://birdiecare-api.herokuapp.com/checks/' + action.payload.patientId);
        yield put({ type: "DATA_TASKS_SUCCEEDED", tasks: tasksResponse.data.data });
    } catch (error) {
        yield put({ type: "DATA_TASKS_FAILED", message: error.message });
    };
};

export function* getTableData(action) {
    try {
        const tableDisplay = action.payload;
        const { tableData, title } = tableDisplay
        yield put({ type: "DATA_TABLE_SUCCEEDED", table: { tableData: tableData[0].info.data, title: title } });
    } catch (error) {
        yield put({ type: "DATA_TABLE_FAILED", message: error.message });
    };
};

export function* mySaga() {
    yield all([
        takeEvery("NUTRITION_DATA_REQUESTED", fetchNutritionData),
        takeEvery("HEALTH_DATA_REQUESTED", fetchHealthData),
        takeEvery("MEDS_DATA_REQUESTED", fetchMedsData),
        takeEvery("TASKS_DATA_REQUESTED", fetchTasksData),
        takeEvery("TABLE_DATA_REQUESTED", getTableData)
    ]);
};

