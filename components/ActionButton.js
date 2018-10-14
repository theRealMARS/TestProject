import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class ActionButton extends React.Component {

    render() {
        return (
            <View style={styles.actionButton}>

            </View>
        );
    }
}

const ACTION_BUTTON_SIZE = 56;

const styles = StyleSheet.create({
    actionButton: {
        width: ACTION_BUTTON_SIZE,
        height: ACTION_BUTTON_SIZE,
        borderRadius: ACTION_BUTTON_SIZE / 2,
        right: 15,
        bottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    actionButtonIcon: {

    },
});