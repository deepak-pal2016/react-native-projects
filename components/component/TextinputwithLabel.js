//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const Textinputwithlabel = ({
    label,
    value,
    placeholder,
    isSecure,
    onChangeText,
    ...props
}) => {
    return (
        <View style={{marginBottom:16}}>
            <Text style={{
                fontSize: 15,
                marginBottom: 8,
                fontWeight: 'bold',
            }}>{label}</Text>
            <TextInput
                value={value}
                placeholder={placeholder}
                onChangeText={onChangeText}
                style={styles.inputStyle}
                {...props} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    inputStyle: {
        height: 48,
        borderWidth: 1,
        borderColor: 'gray',
        color: 'black',
        paddingHorizontal: 16,
       // width: 360,
    }
});

//make this component available to the app
export default Textinputwithlabel;
