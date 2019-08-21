import React, {useEffect} from 'react';
import styled from '@emotion/styled'

import TableRow from './TableRow';
import useSortBy from '../hooks/useSortBy';

export interface ITableProps {
    data: Array<Object>
}


export default function Table (props: ITableProps) {
    const [ sortBy, setSortby] = useSortBy();

    const Table = styled.table({
        backgroundColor: 'white',
        width: '100%',
        borderRadius: '10px',
        overflow: 'hidden',
        margin: 0
    });
    const TableHead = styled.thead({
        backgroundColor: '#36304a',
        height: '60px',
        color: 'white'
    });

    function toggleSort(e: Event) {
        if(e.target) {
            const key: string = (e.target as HTMLTextAreaElement).innerText;
            setSortby({
                sortKey: key,
                sortOrder: (sortBy.sortKey === key ? sortBy.sortKey*-1 : sortBy.sortKey)
            });
        }
    }
  return (
    <Table>
        <TableHead>
            <tr>
                <td onClick={(e)=>console.log(e.target)}>Title</td>
                <td onClick={(e)=>console.log(e.target)}>Poster</td>
                <td onClick={(e)=>console.log(e.target)}>Type</td>
                <td onClick={(e)=>console.log(e.target)}>Year</td>
                <td onClick={(e)=>console.log(e.target)}>ID</td>
            </tr>
        </TableHead>
        <tbody>
            {props.data.map((row, idx) => <TableRow {...row} key={idx}></TableRow>)}
        </tbody>
    </Table>
  );
}
