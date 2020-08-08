import React, { useState } from 'react';
import { Card, TableInfo, Nav } from '../index';
import { Container } from '../styles';
import { faHeartbeat, faCapsules, faUtensils, faTasks } from '@fortawesome/free-solid-svg-icons'



const PatientInfo = () => {

    const [health, setHealth] = useState({
        icon: faHeartbeat,
        title: 'Health',
        notes: 'Not bad at all',
        date: '25.07.2020',
        caretaker_id: 'Helen'
    });
    const [meds, setMeds] = useState({
        icon: faCapsules,
        title: 'Meds',
        notes: 'Paracetamol, aspirin',
        date: '10.03.2020',
        caretaker_id: 'Adeleine'
    }); const [nutrition, setNutrition] = useState({
        icon: faUtensils,
        title: 'Nutrition',
        notes: 'Banana, porridge, coffee',
        date: '25.07.2020',
        caretaker_id: 'Tom'
    }); const [checks, setChecks] = useState({
        icon: faTasks,
        title: 'Checks',
        notes: 'Sheets and bin changed',
        date: '01.05.2020',
        caretaker_id: 'Margharet'
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
            <Nav />
            <Container>
                <Card data={health} />
                <Card data={meds} />
                <Card data={nutrition} />
                <Card data={checks} />
            </Container>
            <TableInfo />
            
        </div>
    );
};

export default PatientInfo;