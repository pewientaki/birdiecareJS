import * as React from 'react';
// import styled from 'styled-components';
import { Table, TableCell, TableContainer, TableRow, TableHead, Paper, Container } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faFrown, faUtensils, faCapsules, faTablets } from '@fortawesome/free-solid-svg-icons';

const PatientInfo = () => {
    return (
        <Container>

            <TableContainer >
                <Table component={Paper}>
                    <TableHead>
                        <TableCell>Event</TableCell>
                        <TableCell>Note or description</TableCell>
                        <TableCell>Last updated:</TableCell>
                    </TableHead>
                    <TableRow>
                        <TableCell><FontAwesomeIcon icon={faHeartbeat} /> Health</TableCell>
                        <TableCell>"last general_observation"</TableCell>
                        <TableCell>"date""</TableCell>
                    </TableRow>
                    <TableHead>
                        <TableCell><FontAwesomeIcon icon={faFrown} /> Mood</TableCell>
                        <TableCell>"last mood_observation"</TableCell>
                        <TableCell>"date""</TableCell>
                    </TableHead>
                    <TableRow>
                        <TableCell><FontAwesomeIcon icon={faUtensils} /> Food</TableCell>
                        <TableCell>"food_intake and drink_intake"</TableCell>
                        <TableCell>"date""</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><FontAwesomeIcon icon={faCapsules} /> Meds</TableCell>
                        <TableCell>"meds_update"</TableCell>
                        <TableCell>"date"</TableCell>
                    </TableRow>
                </Table>
            </TableContainer >
        </Container >
    );

};

export default PatientInfo;