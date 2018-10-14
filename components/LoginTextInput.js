import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native';

import Device from '../constants/layouts';

export class LoginTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: 'PlaceHolder', isFocused: false };
    }

    onClick() {
        alert("Testing");
    }

    render() {
        return (
            <View style={{ elevation: 5 }}>
                <TouchableOpacity onPress={this.onClick}>
                    <View style={styles.textInputHeader}>
                        <Text style={styles.title}>[Name of House #1]</Text>
                    </View>
                    <View style={styles.textInput}>
                        <Text
                            style={[styles.textBasic, styles.textPlaceholder]}
                        >{this.state.text}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInputHeader: {
        backgroundColor: 'rgb(250, 255, 12)',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 40,
        padding: 10,
        elevation: 5,
    },
    textInput: {
        width: Device.window.width - 50,
        height: 50,
        backgroundColor: 'rgba(250, 255, 12, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    textBasic: {
        fontSize: 15,
    },
    textPlaceholder: {
        color: 'rgb(183, 183, 183)',
        fontStyle: 'italic',
    },
    text: {
        color: 'rgb(112, 112, 112)',
        fontStyle: 'normal',
    },
    title: {
        color: 'black',
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: 'bold',
    }
});