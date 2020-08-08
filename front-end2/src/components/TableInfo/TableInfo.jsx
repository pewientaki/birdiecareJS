import React from 'react';
import { StyledTable } from './tableStyles';

const TableInfo = () => {
    return (
        <div>
            <StyledTable>
                <table >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Health</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Caretaker_id</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Good</td>
                            <td>Feeling good, responsive</td>
                            <td>18 Nov 1962</td>
                            <td>Helen</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Bad</td>
                            <td>Seemed fine, talking</td>
                            <td>18 Dec 1962</td>
                            <td>Gorge</td>
                        </tr>
                    </tbody>
                </table>
            </StyledTable>
        </div>
    );
};

export default TableInfo;