//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const Buttonwithloader = ({ text, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.btnStyle}>
            <Text style={styles.textstyle}>{text}</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    btnStyle: {
        margin: 5,
        height: 48,
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6
    }, textstyle: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }
});

//make this component available to the app
export default Buttonwithloader;
