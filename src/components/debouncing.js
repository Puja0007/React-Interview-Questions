import React, { useState, useEffect } from 'react';
import axios from 'axios';

function debounceCall(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [value, delay]);

    return debounceValue;
}

const ApiCallWithDebounce = () => {
    const [search, setSearch] = useState('hooks');
    const [results, setResults] = useState([]);
    const debounceSearch = debounceCall(search, 500);

    useEffect(() => {
        axios.get(`https://hn.algolia.com/api/v1/search?query=${debounceSearch}`)
            .then(res => {
                setResults(res.data.hits);
            })
            .catch(err => {
                console.log(err);
            });
    }, [search]); // Changed dependency to `search` instead of `debounceSearch`

    return (
        <>
            <div>
                <h1>Debouncing</h1>
                <label>Search</label>
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
        </>
    );
}

export default ApiCallWithDebounce;
