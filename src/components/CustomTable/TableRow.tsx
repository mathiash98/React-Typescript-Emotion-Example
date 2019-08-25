import * as React from 'react';
import styled from '@emotion/styled';

export interface ITableRowProps {
    data: {
      [key: string]: any
    },
    keys: Array<string>,
    onClick?: Function
}

const Row = styled.tr({
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.09)',
    cursor: 'pointer'
  },
  '&:nth-child(2n)': {
    backgroundColor: 'rgba(0,0,0,0.05)'
  }
});

const Cell = styled.td({
  margin: 0,
  padding: '3px',
  overflow: 'hidden',
  height: '30px'
});

export default function TableRow (props: ITableRowProps) {
  return (
    <Row onClick={() => (props.onClick ? props.onClick(props.data) : false)}>
        {props.keys.map((key, idx) => <Cell key={idx}>{props.data[key]}</Cell>)}
    </Row>
  );
}
