import React from 'react';
import './App.css';
import { PatientInfo } from './components/';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNutrition } from './store/actions/';
// import { fetchWeeklyData } from '../src/store/saga/sagas'

function App() {

  const dispatch = useDispatch();

  return (
    <div>
      <PatientInfo/>
    </div>
  );
};

export default App;
