import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';
import { ListItem } from 'react-native-elements';

const TrackListScreen = ({ navigation }) => {
    const { fetchTracks, state } = useContext(TrackContext);
    return (
        <View>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList 
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
                            <ListItem chevron title={item.name} />
                        </TouchableOpacity>
                }}
            />
        </View>
    );
};

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

const styles = StyleSheet.create({});

export default TrackListScreen;