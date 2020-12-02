import React, { useState } from 'react';
import LogOut from './logout';
import Calculator from './calculator';
import Calculator2 from './calculator2';
import Results from './results';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;


const Tab = createBottomTabNavigator();
const tabNavigator = ({setIsSignedIn}) => {
    const [test, setTest] = useState('test');

    return(
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{ 
                    activeTintColor: '#4682b4', 
                    labelStyle: {fontSize: windowWidth* .05},
                    style: {backgroundColor: '#E9F7FA',} }}>
                    <Tab.Screen name="Calculator" component={Calculator2} tabBarIcon=''/>
                    <Tab.Screen name="Results" component={Calculator} tabBarIcon=''/>
                    <Tab.Screen name="LogOut" children={()=><LogOut setIsSignedIn={setIsSignedIn}/>} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default tabNavigator;


// <Tab.Screen name="Rig Calc" component={Calculator2} />