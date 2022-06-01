import React from 'react'
import Login from '../login/login'
import Signup from '../signup/signup'


export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name="Signup"
                component={Signup} />
            <Stack.Screen
                name="Login"
                component={Login} />

        </>
    )
}