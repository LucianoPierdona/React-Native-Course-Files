import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const searchApi = async searchTerm => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'sao paulo'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something Went wrong, try again later');
        }
    };

    // Call searchApi when component is first rendered
    // searchApi('pasta') BAD
    useEffect(() => {
        searchApi('');
    }, []);

    return [searchApi, results, errorMessage];
};