import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import TableRow from './TableRow';

export interface ICustomTableProps {
    keys: Array<string>,
    headers: Array<string>,
    data: Array<Object>,
    perPage: number,
    defaultSorted: {
      key: string,
      order: number
    },
    onClick?: Function
}

const Table = styled.table({
    width: '100%',
    height: '100%',
    margin: 0
});

const TableHead = styled.th({
  borderBottom: '1px solid black'
});

const Row = styled.tr({
  '&:hover': {
    cursor: 'pointer'
  }
});

export default function CustomTable (props: ICustomTableProps) {
  const [ page, setPage ] = useState(0);
  const [ items, setItems ] = useState(props.data);
  const [ visibleItems, setVisibleItems ] = useState<Array<Object>>([]);
  const [ sortBy, setSortBy ] = useState({
    key: "",
    order: 1
  });

  useEffect(() => {
    setVisibleItems(items.slice(props.perPage*page, props.perPage*page+props.perPage));
  }, [items, page, props.perPage]);

  useEffect(() => {
    setItems(props.data);
    setPage(0);
  }, [props]);

  useEffect(() => {
    setItems(current => {
      current.sort((a: {[key:string]: any}, b: {[key:string]: any}) => {
        return (a[sortBy.key] > b[sortBy.key] ? 1*sortBy.order : ((a[sortBy.key] < b[sortBy.key]) ? -1*sortBy.order : 0));
      });
      return [...current];
    });
  }, [sortBy]);

  function toggleSortBy(key: string): void {
    setSortBy((current) => ({
      key: key,
      order : (current.key === key ? current.order*-1 : current.order)
    }));
  };

  return (
    <Table>
        <thead>
          <Row>
            {props.headers.map((name, idx) => <TableHead key={idx} onClick={() => toggleSortBy(props.keys[idx])}>{name}</TableHead>)}
          </Row>
        </thead>
        <tbody>
          {visibleItems.map((item, idx) => <TableRow key={idx} data={item} keys={props.keys} onClick={props.onClick}></TableRow>)}
          <tr>
            <td>
              <button onClick={() => setPage(Math.max(page-1, 0))}>Prev Page</button>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPage(Math.max(Number(e.target.value)-1, 0))}
                value={page+1}
                placeholder="Page"
                type="number"
                step="1"
                min="0"
              ></input>
              <button onClick={() => setPage(page+1)}>Next Page</button>
            </td>
          </tr>
        </tbody>
    </Table>
  );
}
