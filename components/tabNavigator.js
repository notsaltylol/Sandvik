import React, { useState } from 'react';
import LogOut from './logout'
import Calculator from './calculator';
import uploadCSV from './uploadCSV'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
const tabNavigator = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Calculator" component={Calculator} />
                <Tab.Screen name="Upload CSV" component={uploadCSV} />
                {/* <Tab.Screen name="View Results" component={ViewResults} /> */}
                <Tab.Screen name="Logout" component={LogOut} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default tabNavigator;