import React, { useState } from 'react';
import LogOut from './logout';
import Calculator from './calculator';
import Calculator2 from './calculator2';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;


const Tab = createBottomTabNavigator();
const tabNavigator = ({setIsSignedIn}) => {
    return(
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                    activeTintColor: '#4682b4', labelStyle: {fontSize: windowWidth* .05}}}>
                    <Tab.Screen name="Rig Calc" component={Calculator2} />
                    <Tab.Screen name="Prod Est" component={Calculator} tabBarIcon=''/>
                    <Tab.Screen name="LogOut" children={()=><LogOut setIsSignedIn={setIsSignedIn}/>} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default tabNavigator;