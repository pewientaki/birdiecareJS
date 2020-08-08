import React from 'react';
import './App.css';
import { PatientInfo } from './components/';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/actions/'

function App() {

  return (
    <div>
      <PatientInfo />
    </div>
  );
};

export default App;
