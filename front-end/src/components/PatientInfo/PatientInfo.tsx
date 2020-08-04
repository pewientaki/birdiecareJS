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
                        <TableCell>Caretaker ID</TableCell>
                    </TableHead>
                    <TableRow>
                        <TableCell><FontAwesomeIcon icon={faHeartbeat} /> Health</TableCell>
                        <TableCell>pizza margharita</TableCell>
                        <TableCell>Helen</TableCell>
                    </TableRow>
                    <TableHead>
                        <TableCell><FontAwesomeIcon icon={faFrown} /> Mood</TableCell>
                        <TableCell>Note or description</TableCell>
                        <TableCell>Caretaker ID</TableCell>
                    </TableHead>
                    <TableRow>
                        <TableCell><FontAwesomeIcon icon={faUtensils} /> Food</TableCell>
                        <TableCell>pizza margharita</TableCell>
                        <TableCell>Helen</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><FontAwesomeIcon icon={faCapsules} /> Meds</TableCell>
                        <TableCell>paracetamol</TableCell>
                        <TableCell>Helen</TableCell>
                    </TableRow>
                </Table>
            </TableContainer>
        </Container>
    );

};

export default PatientInfo;