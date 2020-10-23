import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './components/login';
import Calculator from './components/calculator';
import {} from 'react-native';
import uploadCSV from './components/uploadCSV'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ViewResults from './components/viewResults'
import LogOut from './components/logout'


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();





const App = () => {
  const [isSignedIn , setIsSignedIn ] = useState(false)

  if (isSignedIn){
    return(
      
      //******This is code to change menu back to drawer. It needs a lot of modification though */
      // <NavigationContainer>
      //   <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      //     <Drawer.Screen
      //       name="Calculator" 
      //       component={Calculator} 
      //       options={{
      //         title: 'My home',
      //         headerStyle: {
      //           backgroundColor: '#f4511e',
      //         },
      //         headerTintColor: '#fff',
      //         headerTitleStyle: {
      //           fontWeight: 'bold',
      //         },
      //       }}
      //       // options={{
      //       //   headerRight: () => (
      //       //     <Button onPress={() => alert('This is a button!')} title="Info"/>
      //       //   )
      //       // }}
      //     />
      //     <Drawer.Screen name="uploadCSV" component={uploadCSV} />
      //   </Drawer.Navigator>
      // </NavigationContainer>

      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Calculator" component={Calculator} />
        <Tab.Screen name="Upload CSV" component={uploadCSV} />
        {/* <Tab.Screen name="View Results" component={ViewResults} /> */}
        <Tab.Screen name="Logout" component={LogOut} />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
  else{
    return (
      <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Login">
            {props => <Login {...props} setIsSignedIn={setIsSignedIn} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;