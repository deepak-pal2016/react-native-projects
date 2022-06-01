import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import mainstack from './mainstack';
import Authstack from './authstack';


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {true ? Authstack(Stack) : mainstack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}