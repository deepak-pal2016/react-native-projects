import React from 'react'
import Home from '../home/home'
import Profile from '../profile/profile'

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name="Home"
                component={Home} />
            <Stack.Screen
                name="Profile"
                component={Profile} />
        </>
    )
}