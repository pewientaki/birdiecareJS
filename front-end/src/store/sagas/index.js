import { call, put, takeEvery } from 'redux-saga/effects';
import { get } from 'http';
import axios from 'axios';

function* initSaga() {
  yield takeEvery('DATA_REQUEST', fetchAllData);
}
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const url = 'http://localhost:8000/nutrition/df50cac5-293c-490d-a06c-ee26796f850d';
const ble = 'https://joke-api-strict-cors.appspot.com/jokes/random/'
function* fetchAllData() {
  try {
    const allData = yield call(fetch, url);
    // const allData = yield call(fetch, url);
    // const allData = yield call(axios.get, 'http://localhost:8000/nutrition/df50cac5-293c-490d-a06c-ee26796f850d');
    // const allData = await ('http://localhost:8000/nutrition/df50cac5-293c-490d-a06c-ee26796f850d')
    yield put({ type: 'DATA_REQUEST', allData });
    console.log('all data fetched in saga');
    console.log(allData)
  } catch (Error) {
    yield put({ type: 'DATA_REQUEST_FAILED', Error });
    console.log('fetch data failed')
  }
};

export default initSaga;
