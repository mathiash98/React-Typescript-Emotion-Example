import React, { useState, useEffect } from 'react';
import { Form, Input } from '../styledComponents/theme';

export interface IFilterFormProps {
    onUpdate: (query: any) => void
}

export default function FilterForm (props: IFilterFormProps) {
    const [ values, setValues ] = useState({
        search: "",
        year: "",
        rating: ""
    });

    useEffect(() => {
        props.onUpdate(values);
    }, [values]);

    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        e.persist();
        const target = (e.target as HTMLInputElement);
        const name = target.name;
        let value: any = null;
        if (target.type === 'checkbox') {
            value = target.checked;
        } else if (target.type === 'file') {
            value = target.files;
        } else {
            value = target.value;
        }
        setValues((current) => ({
            ...current,
            [name]: value
        }));
    }

    function handleSubmit(e: React.FormEvent) {
        props.onUpdate(values);
    }

  return (
      <div>
        <h2>Filter movies</h2>
        <Form onSubmit={e => handleSubmit(e)}>
            <div>
                <span>Title: </span>
                <Input type="text" name="search" placeholder="Title" onChange={e => handleChange(e)} value={values.search}/>
            </div>
            <div>
                <span>Year: </span>
                <Input type="text" name="year" placeholder="Year" onChange={e => handleChange(e)} value={values.year}/>
            </div>
            <div>
                <span>Rating more than: </span>
                <Input type="text" name="rating" placeholder="Rating" onChange={e => handleChange(e)} value={values.rating}/>
            </div>
        </Form>
      </div>
  );
}
