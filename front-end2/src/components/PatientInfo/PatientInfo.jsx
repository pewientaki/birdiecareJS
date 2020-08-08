import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, TableInfo, Nav } from '../index';
import { Container } from '../styles';
import { faHeartbeat, faCapsules, faUtensils, faTasks } from '@fortawesome/free-solid-svg-icons';
import { fetchData } from '../../store/actions/index'



const PatientInfo = () => {
    const dispatch = useDispatch();

    const [patient, setPatient] = useState('df50cac5-293c-490d-a06c-ee26796f850d');

    const [health, setHealth] = useState({
        data: [{
            icon: faHeartbeat,
            title: 'Health',
            notes: 'Not bad at all',
            date: '2020-07-25',
            caregiver_id: 'Helen'
        }]
    });

    const getData = () => {

    }

    const cardsData = () => {

        console.log(health)
    };
    const healthState = useSelector(state => {
        return state.data;
    })

    useEffect(() => {
        cardsData();
        setHealth(healthState);
    }, [health])





    const [meds, setMeds] = useState({
        data: [{
            icon: faCapsules,
            title: 'Meds',
            notes: 'Paracetamol, aspirin',
            date: '2020-07-25',
            caregiver_id: 'Adeleine'
        }]
    }); const [nutrition, setNutrition] = useState({
        data: [{
            icon: faUtensils,
            title: 'Nutrition',
            notes: 'Banana, porridge, coffee',
            date: '2020-07-25',
            caregiver_id: 'Tom'
        }]
    }); const [checks, setChecks] = useState({
        data: [{
            icon: faTasks,
            title: 'Checks',
            notes: 'Sheets and bin changed',
            date: '2020-01-05',
            caregiver_id: 'Margharet'
        }]
    });

    const [more, setMore] = useState(null);
    const tableData = {
        title: '',
        desc: '',
        notes: '',
        date: '',
        caretaker: ''
    }

    console.log(health)
    return (
        <div>
            <button onClick={() => dispatch(fetchData("df50cac5-293c-490d-a06c-ee26796f850d"))}>calldata</button>
            <button onClick={() => cardsData()}>set data</button>
            <Nav />
            <Container>
                <Card data={health} icon={faHeartbeat} title='Health' />
                <Card data={meds} icon={faCapsules} title='Meds' />
                <Card data={nutrition} icon={faUtensils} title='Nutrition' />
                <Card data={checks} icon={faTasks} title='Checks' />
            </Container>
            <TableInfo />

        </div>
    );
};

export default PatientInfo;