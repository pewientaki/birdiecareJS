import React, { useState, useEffect } from 'react';
import { Container, Body, Title, Text, Button, Header } from './cardStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ data }) => {

    // const [health, setHealth] = useState({ title: 'bleble', note: 'dead' });
    const [health, setHealth] = useState(data);
    console.log(health);

    useEffect(() => {
        setHealth(data)
    }, [data])

    return (
        <div>
            <Container>
                <Header><FontAwesomeIcon icon={health.icon} /> {health.title}</Header>
                <Body>
                    {/* <Title><h1>{health.title}</h1></Title> */}
                    <Text>{health.notes}</Text>
                    <Button>
                        More details
                    </Button>
                    <h3>Date: {health.date}</h3>
                </Body>
            </Container>
        </div>
    );
};

export default Card;