import React  from 'react';
import Calculator from './calculator';
import Calculator2 from './calculator2';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();
const CalculatorNavigator = (props) => {
    console.log(props.test)
    return(
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Calculator" component={Calculator2}/>
                {/* {(props) => <Calculator2  {...props} setIsCalculated={setIsCalculated} />} */}
               
                <Stack.Screen name="RESULTS" component={Calculator}/>
                {/* {props => <Calculator setIsCalculated={setIsCalculated} />} */}
                
            </Stack.Navigator>
     
    )
}

export default CalculatorNavigator;