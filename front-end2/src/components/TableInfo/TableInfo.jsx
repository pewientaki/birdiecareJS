import React, { useState, useEffect } from 'react';
import { useSelector, connect, shallowEqual } from 'react-redux';
import { StyledTable } from './tableStyles';
import { tableReducer } from '../../store/reducers';
import moment from 'moment';

const TableInfo = () => {

    // const { data, title } = tableState;
    // const [info, setInfo] = useState({ tableData: [], title: '' });
    // const [info, setInfo] = useState({ tableData: [] });
    //const { data, title } = info;

    // useEffect(() => {
    //     console.log(info)
    //     //setTimeout(() => { setInfo(tableState) }, 2000)
    // }, [info])

    const info = useSelector(state => state.table.data ? state.table.data : { tableData: [], title: '' },
        (oldState, newState) => oldState.table !== newState.table)
    // const setTableState = () => {
    //     setInfo(tableState)
    // };

    const print = () => {
        console.log(info)
        //console.log(tableState)
        //const { data, title } = tableState;
        console.log('data')
        //console.log(data)

        info.tableData.map(p => console.log(p.id))
    }

    return (
        <div>
            {/* <button onClick={() => setInfo(tableState)}>set info</button> */}
            <button onClick={() => print()}>console</button>
            <StyledTable>
                <table >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>{info.title}</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Caretaker_id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info.tableData.map((e, i) =>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{e.payload.note}</td>
                                <td>{e.caregiver_id}</td>
                                <td>{moment(e.date).format('DD MMM YYYY')}</td>
                                <td>{e.care_recipient_id}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </StyledTable>
        </div>
    );
};

export default TableInfo