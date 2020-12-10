import React  from 'react';
import Login from './login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

//Creates login component as Stack Navigator that resets SignedIn value
const Stack = createStackNavigator();
const loginNavigator = ({setIsSignedIn}) => {
    return(
        <NavigationContainer>
            <StatusBar/>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Login">
                {props => <Login {...props} setIsSignedIn={setIsSignedIn} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default loginNavigator;