import React from 'react';
import './App.css';
import { PatientInfo } from './components/';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './store/actions/';
// import { fetchWeeklyData } from '../src/store/saga/sagas'

function App() {

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(fetchData("df50cac5-293c-490d-a06c-ee26796f850d"))}>calldata</button>
      <PatientInfo/>
    </div>
  );
};

export default App;
