import React, { useState, useEffect } from 'react';
import { Form, Input, CleareUpBtn, SubmitBtn } from './NoticesSearch.styled';
import IconSearch from '../Icons/IconSearch';
import IconCrossSmall from '../Icons/IconCrossSmall';

const NoticesSearch = ({ onFormSubmit }) => {
    const [query, setQuery] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        onFormSubmit(query);
    };

    const onInputChange = e => {
        const searchQuery = e.target.value;
        setQuery(searchQuery);
    };



    useEffect(() => {
        onFormSubmit(query);
    }, [query, onFormSubmit]);

    return (
        <Form onSubmit={submitHandler}>
            <Input
                type="text"
                name="query"
                id="searchQuery"
                onChange={onInputChange}
                value={query}
                placeholder="Search"
            />
            <SubmitBtn type="submit" query={query}>
                <IconSearch />
            </SubmitBtn>
            <CleareUpBtn type="button" onClick={() => setQuery('')} query={query}>
                <IconCrossSmall />
            </CleareUpBtn>
        </Form>
    );
};

export default NoticesSearch;