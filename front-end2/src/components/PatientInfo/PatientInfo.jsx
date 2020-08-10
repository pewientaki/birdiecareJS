import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, TableInfo, Nav } from '../index';
import { Container } from '../styles';
import { faHeartbeat, faCapsules, faUtensils, faTasks } from '@fortawesome/free-solid-svg-icons';
import { fetchNutrition, fetchHealth, fetchMeds, fetchTasks } from '../../store/actions/index';
import { setTable } from '../../store/actions';


const PatientInfo = () => {
    const dispatch = useDispatch();

    const [health, setHealth] = useState({
        data: []
    });
    const [meds, setMeds] = useState({
        data: []
    });

    const [nutrition, setNutrition] = useState({
        data: []
    });

    const [tasks, setTasks] = useState({
        data: []
    });

    const [patient, setPatient] = useState('df50cac5-293c-490d-a06c-ee26796f850d');

    const healthState = useSelector(state => state.health);
    const medsState = useSelector(state => state.meds);
    const nutritionState = useSelector(state => state.nutrition);
    const tasksState = useSelector(state => state.tasks);

    useEffect(() => {
        dispatch(fetchNutrition(patient));
        dispatch(fetchHealth(patient));
        dispatch(fetchMeds(patient));
        dispatch(fetchTasks(patient));
        setTimeout(setCards, 4000);
        // eslint-disable-next-line
    }, [patient]);

    // eslint-disable-next-line
    const setCards = () => {
        setHealth(healthState);
        setMeds(medsState);
        setNutrition(nutritionState);
        setTasks(tasksState);
    };

    return (
        <div>
            <Nav />
            <Container>
                <form >
                    <label>
                        Choose patient to change info:
                    </label>
                    <select onChange={e => {
                        setPatient(e.currentTarget.options[e.currentTarget.selectedIndex].value);
                        dispatch(setTable([{ info: health }], 'Health'));
                    }}>
                        <option value="df50cac5-293c-490d-a06c-ee26796f850d">df50cac5-293c-490d-a06c-ee26796f850d</option>
                        <option value="e3e2bff8-d318-4760-beea-841a75f00227">e3e2bff8-d318-4760-beea-841a75f00227</option>
                        <option value="ad3512a6-91b1-4d7d-a005-6f8764dd0111">ad3512a6-91b1-4d7d-a005-6f8764dd0111</option>
                    </select>
                </form>
            </Container>
            <Container>
                <Card data={health} icon={faHeartbeat} title='Health' />
                <Card data={meds} icon={faCapsules} title='Meds' />
                <Card data={nutrition} icon={faUtensils} title='Nutrition' />
                <Card data={tasks} icon={faTasks} title='Checks' />
            </Container>
            <Container>
                <TableInfo />
            </Container>
        </div>
    );
};

export default PatientInfo;