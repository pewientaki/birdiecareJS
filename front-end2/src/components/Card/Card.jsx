import React, { useState, useEffect } from 'react';
import { Container, Body, Title, Text, Button, Header } from './cardStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment'

const Card = state => {

    const [info, setInfo] = useState({ data: [] });

    useEffect(() => {
        setInfo(state.data)
        console.log(info.data);

    }, [])
    console.log(info.data[0]);

    if (info.data && info.data.length > 0) {
        return (
            <div>
                <Container>
                    <Header><FontAwesomeIcon icon={state.icon} /> {state.title}</Header>
                    <Body>
                        {/* <Title><h1>{health.title}</h1></Title> */}
                        {info.data[0].payload ? (<Text>{info.data[0].payload.note}</Text>) : ''}
                        <Text>{info.data[0].note}</Text>
                        <Button>
                            More details
                    </Button>
                        <button onClick={() => setInfo(state.data)}>set data</button>

                        <h3>Date: {moment(info.data[0].date).format('DD MMM YYYY')}</h3>
                    </Body>
                </Container>
            </div>
        );
    }
    else {
        return (<div></div>);
    }
};

export default Card;