import React, { useState } from 'react';
import LogOut from './logout';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, Dimensions } from 'react-native';
import CalculatorNavigator from './calculatorNavigator';

const windowWidth = Dimensions.get('window').width;


const Tab = createBottomTabNavigator();
const tabNavigator = ({setIsSignedIn}) => {
    const [test, setTest] = useState('test');
    return(
            <NavigationContainer>
                <Tab.Navigator tabBarOptions={{ 
                        activeTintColor: '#4682b4', 
                        labelStyle: {fontSize: windowWidth* .05},
                        style: {backgroundColor: '#f4f4f9',} }}>
                        <Tab.Screen name="CALCULATOR" children={()=><CalculatorNavigator test={test}/>} tabBarIcon=''/>
                        <Tab.Screen name="LOGOUT" children={()=><LogOut setIsSignedIn={setIsSignedIn}/>} />
                </Tab.Navigator>
            </NavigationContainer>
    )   
}

export default tabNavigator;
