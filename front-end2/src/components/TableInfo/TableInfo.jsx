import React from 'react';
import { useSelector } from 'react-redux';
import { StyledTable } from './tableStyles';
import moment from 'moment';

const TableInfo = () => {

    const info = useSelector(state => state.table.data ? state.table.data : { tableData: [], title: '' },
        (oldState, newState) => oldState.table !== newState.table)

        if(info)return  (
        <div>
            <StyledTable>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>{info.title} event description</th>
                        <th>Date</th>
                        <th>Caretaker_id</th>
                    </tr>
                </thead>
                <tbody>
                    {info.tableData.map((e, i) =>
                        <tr>
                            <td>{i + 1}</td>
                            <td>{e.note}</td>
                            <td>{moment(e.date).format('DD MMM YYYY')}</td>
                            <td>{e.caregiver_id}</td>
                        </tr>
                    )}
                </tbody>
            </StyledTable>
        </div>
    );
};

export default TableInfo;