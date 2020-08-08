import * as React from 'react';
import { Container, Body, Title, Text, Button } from '../cardStyles/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';


const HealthDetails = () => {

    const [health, setHealth] = React.useState({ title: 'bleble', note: 'dead' });
    return (
        <div>
            <Container>
                <Body>
                    <Title><h1>{health.title}</h1></Title>
                    <Text>{health.note}</Text>

                    <FontAwesomeIcon icon={faHeartbeat} />

                    <Button>
                        Click me!
                    </Button>
                </Body>
            </Container>
        </div>
    );
};

export default HealthDetails;