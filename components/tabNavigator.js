import React, { useState } from 'react';
import LogOut from './logout'
import Calculator from './calculator';
import Calculator2 from './calculator2'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Calculator2 from './calculator2';


const Tab = createBottomTabNavigator();
const tabNavigator = ({setIsSignedIn}) => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Calculator" component={Calculator} />
                <Tab.Screen name="Calculator 2" component={Calculator2} />
                {/* <Tab.Screen name="View Results" component={ViewResults} /> */}
                <Tab.Screen name="LogOut" children={()=><LogOut setIsSignedIn={setIsSignedIn}/>} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default tabNavigator;