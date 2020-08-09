import styled from 'styled-components';

export const StyledTable = styled.table`

td , th{
 padding: 15px 20px;
 text-align: center;
}
th{
 background-color: #b49fcc;
 color: #fafafa;
 font-family: 'Open Sans',Sans-serif;
 font-weight: 200;
 text-transform: uppercase;

}
tr{
 width: 100%;
 background-color: #fafafa;
 font-family: 'Montserrat', sans-serif;
}
tr:nth-child(even){
 background-color: #eeeeee;
}
`;