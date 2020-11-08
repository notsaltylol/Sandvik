import React from 'react';
import Calculator from './calculator';
import Calculator2 from './calculator2'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
const drawerNavigator = () => {
    return(
       //******This is code to change menu back to drawer. It needs a lot of modification though */
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Drawer.Screen
            name="Calculator" 
            component={Calculator} 
            options={{
              title: 'My home',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
            // options={{
            //   headerRight: () => (
            //     <Button onPress={() => alert('This is a button!')} title="Info"/>
            //   )
            // }}
          />
          <Drawer.Screen name="Calculator2" component={Calculator2} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
}

export default drawerNavigator;