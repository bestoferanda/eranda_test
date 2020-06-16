import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


const SignIn = () => {
    return (
        <View style={styles.signView}>
            <Text style={styles.textStyle}>SignIn</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    signView: {
        padding: 10,

    },
    textStyle: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
        paddingBottom : 10
    },

});

export default SignIn;