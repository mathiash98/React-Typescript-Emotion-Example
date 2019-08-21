import { useState } from 'react';

export default function useSortBy(): Array<any> {
    const [ sortBy, setSortBy ] = useState({
        sortKey: "Title",
        sortOrder: 1
    });

    return [
        sortBy,
        setSortBy
    ]
}