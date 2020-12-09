import React  from 'react';
import Calculator from './calculator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();
const ResultsNavigator = ({setIsCalculated}) => {
    
    return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="RESULTS">
                {props => <Calculator setIsCalculated={setIsCalculated} />}
                </Stack.Screen>
            </Stack.Navigator>
     
    )
}

export default ResultsNavigator;