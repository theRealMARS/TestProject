import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import HomeStackNavigator from '../navigation/HomeStackNavigator';
import { grey } from 'ansi-colors';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerTintColor: '#ffffff',
        // headerBackground: (
        //     <Image
        //         style={StyleSheet.absoluteFillObject}
        //         source={require('../assets/icon.png')}
        //     />
        // ),
        headerStyle: {
            backgroundColor: '#2F95D6',
            borderBottomColor: '#ffffff',
            borderBottomWidth: 0,
        },
        headerTitleStyle: {
            fontSize: 20
        }
    }

    render() {
        return (
            <HomeStackNavigator/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
