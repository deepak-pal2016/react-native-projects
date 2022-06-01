//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Textinputwithlabel from '../../component/TextinputwithLabel';
import Buttonwithloader from '../../component/buttonwithloader';
import validator from '../../utils/validation'
import { showError, showSuccess } from '../../utils/helperfunction';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'reduz.db' });

// create a component
const Login = ({ navigation }) => {
    const [state, setState] = useState({
        isLoading: false,
        email: '',
        password: '',
        isSecure: true
    })
    const { isLoading, isSecure, email, password } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = validator({
            email,
            password
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onLogin = () => {
        const checkValid = isValidData()
        console.log(checkValid);
        if (checkValid) {
            db.transaction((tx) => {
                tx.executeSql('SELECT * FROM users where email = ?',
                    [state.email],
                    (tx, result) => {
                        console.log('dfddf', result);
                        if (lenth < 1) {
                            console.log(result);
                            showSuccess('User Register Successfully')
                        } else {
                            showError('Sorry User not register')
                        }
                    }
                )
            })
        }
    }

    return (
        <View style={styles.container}>
            <Textinputwithlabel
                label="Email"
                placeholder='Enter Your Email'
                onChangeText={(email) => updateState({ email })} />

            <Textinputwithlabel
                label="Password"
                placeholder='Enter Your Password'
                // isSecure={isSecure}
                secureTextEntry={true}
                onChangeText={(password) => updateState({ password })} />
            <Buttonwithloader text='Login' onPress={onLogin} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 25,
        backgroundColor: 'white'
    },
});

//make this component available to the app
export default Login