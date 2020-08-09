import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Body, Title, Text, Button, Header, Date } from './cardStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setTable } from '../../store/actions';
import moment from 'moment';

const Card = props => {

    const dispatch = useDispatch();
    const [info, setInfo] = useState({ data: [] });
    const timer = () => {
        setTimeout(() => { setInfo(props.data) }, 5000)
        console.log('timer')
    }

    useEffect(() => {
        console.log(info.data);
        timer();
    }, [props]);

    if (info.data && info.data.length > 0) {
        return (
            <Container>
                <Header><FontAwesomeIcon icon={props.icon} /> {props.title}</Header>
                <Body>
                    <Text>{info.data[0].note}</Text>
                    <Date>Date: {moment(info.data[0].date).format('DD MMM YYYY')}</Date>
                    <Button onClick={() => dispatch(setTable([{ info }], props.title))}>
                        More details
                    </Button>
                </Body>
            </Container>
        );
    }
    else {
        return (<div></div>);
    }
};

export default Card;