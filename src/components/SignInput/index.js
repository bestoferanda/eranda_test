import React, { Component } from 'react'
import { StyleSheet, View, TextInput, Text } from "react-native";
import { isEmpty } from 'lodash'

export default class SignInput extends Component {

    render() {
        const { validationMessage, inputLabel, ...otherProps } = this.props;
        return (
            <View style={styles.inputView}>
                <View style={styles.labelView}>
                    <Text style={styles.itemStyle}>{inputLabel}</Text>
                </View>
                <View style={styles.textView}>
                    <TextInput
                        style={styles.inputStyle}
                        keyboardType={inputLabel==='Email'? 'email-address' : 'default'}
                        secureTextEntry={inputLabel==='Email'? false : true}
                        {...otherProps} />
                    {!isEmpty(validationMessage) &&
                        <Text style={styles.validateText}>{validationMessage}</Text>
                    }
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        padding: 10
    },
    labelView: {
        width: '30%',
        alignItems: 'flex-start'
    },
    textView: {
        flexDirection : 'column',
        width: '70%',
        alignItems: 'flex-end'
    },
    itemStyle: {
        fontSize: 22,
        color: 'black'
    },
    validateText: {
        marginVertical : 10,
        fontSize: 16,
        color: 'red',
        textAlign: 'right',
    },
    inputStyle: {
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 20,
    },
});