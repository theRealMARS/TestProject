import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';

class TestScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

class TestTwoScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Text></Text>
            </View>
        );
    }
}

const TestStack = createStackNavigator({
    Test: TestScreen,
});

const TestTwoStack = createStackNavigator({
    TestTwo: TestTwoScreen
});

TestStack.navigationOptions = {
    tabBarLabel: 'Houses',
}

TestTwoStack.navigationOptions = {
    tabBarLabel: 'Tenants'
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3a3a3a',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

const tabNum = 2;

export default createMaterialTopTabNavigator({
    TestStack,
    TestTwoStack
},
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 12,
            },
            tabStyle: {
                width: Dimensions.get('window').width / tabNum,
            },
            style: {
                backgroundColor: '#2b2b2b',
            },
        }
    }
);