import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default class SignInButton extends Component {

    render() {
        const { titleLabel, ...otherProps } = this.props;
        return (
            <TouchableOpacity
                {...otherProps}
                style={styles.buttonStyle}>
                <Text style={styles.buttonTextStyle}>{titleLabel}</Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    buttonStyle: {
        width: '50%',
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 50,
        borderWidth: 1,
        borderColor: 'black'
    },
    buttonTextStyle: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
    }
});