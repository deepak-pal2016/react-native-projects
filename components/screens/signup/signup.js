//import liraries
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Textinputwithlabel from '../../component/TextinputwithLabel';
import Buttonwithloader from '../../component/buttonwithloader';
import validator from '../../utils/validation'
import { showError, showSuccess } from '../../utils/helperfunction';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'reduz.db' });

// create a component
const Signup = ({ navigation }) => {
    const loaddatabase = useCallback(() => {
        db.transaction(function (txn) {
            txn.executeSql(
                "SELECT name FROM sqlite_master WHERE type='table' AND  name='users'",
                [],
                function (txn, res) {
                    console.log('item table data', res.rows.length);
                    if (res.rows.length == 0) {
                        txn.executeSql(
                            'DROP TABLE  IF EXISTS  users',
                            [],
                        );
                        txn.executeSql(
                            'CREATE TABLE IF NOT EXISTS  users(id INTEGER PRIMARY KEY AUTOINCREMENT, username  varchar(50), email  varchar(50), password varchar(50), mobile INT(12))',
                            [],
                        );
                    }
                },
            );
        }, []);
    })

    useEffect(() => {
        loaddatabase()
    }, [loaddatabase()])


    const [state, setState] = useState({
        isLoading: false,
        username: '',
        email: '',
        mobile: '',
        password: '',
        isSecure: true
    })
    const { isLoading, mobile, username, isSecure, email, password } = state
    const updateState = (data) => setState(() => ({ ...state, ...data }))

    const isValidData = () => {
        const error = validator({
            username,
            email,
            password,
            mobile,
        })
        if (error) {
            showError(error)
            return false
        }
        return true
    }

    const onSignup = () => {
        const checkValid = isValidData()
        if (checkValid) {
            db.transaction((tx) => {
                tx.executeSql('SELECT * FROM users where email = ?',
                    [state.email],
                    (tx, result) => {
                        var lenth = result.rows.length
                        console.log('dfddf', lenth);
                        if (lenth < 1) {
                            db.transaction(function (tx) {
                                tx.executeSql(
                                    'INSERT INTO users (username, email, password, mobile)  VALUES (?,?,?,?)',
                                    [state.username,
                                    state.email,
                                    state.password,
                                    state.mobile],
                                    (tx, res) => {
                                        console.log('insert last id', res.insertId);
                                        console.log('Results of ffoline', res.rowsAffected);
                                        showSuccess('User Register Successfully')
                                        navigation.navigate('Login')
                                    }
                                )
                            })
                        } else {
                            showError('User already exits..')
                        }
                    }
                )
            })
        }
    }

    return (
        <View style={styles.container}>
            <Textinputwithlabel
                label="User name"
                placeholder='Enter Your username'
                onChangeText={(username) => updateState({ username })} />
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

            <Textinputwithlabel
                label="mobile"
                placeholder='Enter Your mobile'
                // isSecure={isSecure}
                // secureTextEntry={true}
                onChangeText={(mobile) => updateState({ mobile })} />
            <Buttonwithloader text='Signup' onPress={onSignup} />
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
export default Signup