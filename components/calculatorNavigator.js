import React  from 'react';
import Calculator from './calculator';
import Calculator2 from './calculator2';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

/*CalculatorNavigator is a Stack Navigator utilizing the Calculator and Results Screen. The Calculator screen parallels
the Rig Calculator Excel Sheet where the the user inputs parameters and selects a rig. The Results page parallels the 
Production Estimator Sheet and displays the results of all calculations as graphs and tables. Using a Stack Navigator allows
the user to toggle between the Calculator and Results pages through clicking buttons*/

const Stack = createStackNavigator();
const CalculatorNavigator = (props) => {
    console.log(props.test)
    return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Calculator" component={Calculator2}/>
                <Stack.Screen name="RESULTS" component={Calculator}/>  
            </Stack.Navigator>
     
    )
}

export default CalculatorNavigator;