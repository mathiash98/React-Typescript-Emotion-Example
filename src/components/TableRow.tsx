import * as React from 'react';
import styled from '@emotion/styled'

import Img from './Img';

export interface ITableRowProps {
    data: any
}

export default function TableRow (props: any) {
    const TableRow = styled.tr({
        borderBottom: '1px solid black',
        height: '50px'
    });

    const TableCell = styled.td({
        height: '60px'
    });

  return (
    <TableRow>
      <TableCell>{props.Title}</TableCell>
      <TableCell><Img src={props.Poster}></Img></TableCell>
      <TableCell>{props.Type}</TableCell>
      <TableCell>{props.Year}</TableCell>
      <TableCell>{props.imdbID}</TableCell>
    </TableRow>
  );
}
