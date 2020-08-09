import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, TableInfo, Nav } from '../index';
import { Container } from '../styles';
import { faHeartbeat, faCapsules, faUtensils, faTasks } from '@fortawesome/free-solid-svg-icons';
import { fetchNutrition, fetchHealth, fetchMeds, fetchTasks, setTable } from '../../store/actions/index'



const PatientInfo = () => {
    const dispatch = useDispatch();

    const [patient, setPatient] = useState('df50cac5-293c-490d-a06c-ee26796f850d');

    const healthState = useSelector(state => {
        return state.health;
    });

    const medsState = useSelector(state => {
        return state.meds;
    });

    const nutritionState = useSelector(state => {
        return state.nutrition;
    });

    const tasksState = useSelector(state => {
        return state.tasks;
    });


    let title='health'
    useEffect(() => {
        dispatch(fetchNutrition("df50cac5-293c-490d-a06c-ee26796f850d"))
        dispatch(fetchHealth("df50cac5-293c-490d-a06c-ee26796f850d"))
        dispatch(fetchMeds("df50cac5-293c-490d-a06c-ee26796f850d"))
        dispatch(fetchTasks("df50cac5-293c-490d-a06c-ee26796f850d"))
        dispatch(setTable(healthState, title='health'))
            
        setTimeout(setCards(), 4000);
        
    },[])
    
    const setCards = () => {
        setHealth(healthState);
        setMeds(medsState);
        setNutrition(nutritionState);
        setTasks(tasksState)
        setTable(healthState)
        cardsData();
    }

    const cardsData = () => {
        console.log(health, 'health')
        console.log(nutrition, 'nutrition')
        console.log(meds, 'meds')
        console.log(tasks, 'tasks')
    };

    const [health, setHealth] = useState({
        data: [{
            icon: faHeartbeat,
            title: 'Health',
            notes: 'Not bad at all',
            date: '2020-07-25',
            caregiver_id: 'Helen'
        }]
    });
    const [meds, setMeds] = useState({
        data: [{
            icon: faCapsules,
            title: 'Meds',
            notes: 'Paracetamol, aspirin',
            date: '2020-07-25',
            caregiver_id: 'Adeleine'
        }]
    });

     const [nutrition, setNutrition] = useState({
        data: [{
            icon: faUtensils,
            title: 'Nutrition',
            notes: 'Banana, porridge, coffee',
            date: '2020-07-25',
            caregiver_id: 'Tom'
        }]
    }); 

    const [tasks, setTasks] = useState({
        data: [{
            icon: faTasks,
            title: 'Checks',
            notes: 'Sheets and bin changed',
            date: '2020-01-05',
            caregiver_id: 'Margharet'
        }]
    });

    console.log(health)
    return (
        <div>
            {/* <button onClick={() => dispatch(fetchNutrition("df50cac5-293c-490d-a06c-ee26796f850d"))}>call nutrition</button>
            <button onClick={() => dispatch(fetchHealth("df50cac5-293c-490d-a06c-ee26796f850d"))}>call health data</button>
            <button onClick={() => dispatch(fetchMeds("df50cac5-293c-490d-a06c-ee26796f850d"))}>call meds data</button>
            <button onClick={() => dispatch(fetchTasks("df50cac5-293c-490d-a06c-ee26796f850d"))}>call tasks data</button> */}
            <button onClick={() => setCards()}>get data</button>
            <Nav />
            <Container>
                <Card data={health} icon={faHeartbeat} title='Health' />
                <Card data={meds} icon={faCapsules} title='Meds' />
                <Card data={nutrition} icon={faUtensils} title='Nutrition' />
                <Card data={tasks} icon={faTasks} title='Checks' />
            </Container>
            <TableInfo />

        </div>
    );
};

export default PatientInfo;