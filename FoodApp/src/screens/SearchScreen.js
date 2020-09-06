import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    }

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm} 
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <Text style={styles.message}>We have found {results.length} results</Text>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective"
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricier"
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Big Spender" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$$')} 
                    title="First Class"
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    message: {
        marginLeft: 15,
        marginBottom: 10,
        fontSize: 10
    }
});

export default SearchScreen;