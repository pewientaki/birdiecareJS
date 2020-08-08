import * as React from 'react';
import { Container, Body, Title, Text, Button } from '../cardStyles/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';

const MedsDetails = () => {
    return (
        <div>
            <Container>
                <Body>
                    <Title><h1>Title</h1></Title>
                    <Text>It'll contain some more details.. soon</Text>

                    <FontAwesomeIcon icon={faHeartbeat} />

                    <Button>
                        Click me!
                    </Button>
                </Body>
            </Container>
        </div>
    );
};

export default MedsDetails;