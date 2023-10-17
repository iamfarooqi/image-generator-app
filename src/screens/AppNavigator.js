import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import { StyleSheet } from 'react-native';
import Home from './tabs/Home';
import ImageGenerator from './tabs/ImageGenerator';


const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen name="Welcome" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Generator" component={ImageGenerator} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;

