import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Start, {result.review_count} Review</Text>
        </View>
    );

}

const styles= StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 8,
        marginBottom: 5,
    },
    name: {
        fontWeight: 'bold',
    }
});

export default ResultsDetail;