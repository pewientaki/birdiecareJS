import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Body, Title, Text, Button, Header } from './cardStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setTable } from '../../store/actions';
import moment from 'moment';

const Card = props => {

    const dispatch = useDispatch();
    const [info, setInfo] = useState({ data: [] });


    // const setDisplayed = () => {
    //     setInfo(props.data)
    // };

    const timer = () => {
        setTimeout(() => { setInfo(props.data) }, 6000)
        console.log('timer')
    }

    useEffect(() => {
        console.log(info.data);
        timer();
    }, [props])

    if (info.data && info.data.length > 0) {
        let lastEventWithNote = info.data.find(event => event.task_description !== null)
        return (
            <div>
                <Container>
                    <Header><FontAwesomeIcon icon={props.icon} /> {props.title}</Header>
                    <Body>
                        {/* <Title><h1>{health.title}</h1></Title> */}
                        {info.data[0].payload ? (<Text>{info.data[0].payload.note}</Text>) : ''}
                        <Text>{lastEventWithNote.task_description}</Text>
                        <Text>{info.data[0].note}</Text>
                        <Button>
                            More details
                    </Button>
                        <button onClick={() => timer()}>set {props.title}</button>
                        <button onClick={() => dispatch(setTable([{info}], props.title))}>set table data</button>



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