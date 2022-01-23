import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import PostScreen from '../screens/PostScreen';
import {navigationRef} from './NavigationService';

const NavigationStack = () => {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer ref={navigationRef} >
        <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
};

export default NavigationStack;