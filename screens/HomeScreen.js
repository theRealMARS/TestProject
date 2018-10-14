import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import HomeStackNavigator from '../navigation/HomeStackNavigator';

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
            backgroundColor: '#141414',
            borderBottomWidth: 0,
        },
        headerTitleStyle: {
            fontSize: 20
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <HomeStackNavigator />
                <View style={styles.inner}>
                    <Text>+</Text>
                </View>
            </View>
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
    inner: {
        backgroundColor: 'yellow',
        elevation: 20,
        width: 56,
        height: 56,
        position: 'absolute',
        bottom: 15,
        right: 15,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
