import React  from 'react';
import Calculator2 from './calculator2';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();
const CalculatorNavigator = ({setIsCalculated}) => {
    
    return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Calculator">
                {props => <Calculator2 setIsCalculated={setIsCalculated} />}
                </Stack.Screen>
            </Stack.Navigator>
     
    )
}

export default CalculatorNavigator;