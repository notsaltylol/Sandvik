import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import Login from './components/login';

const App = () => {
  console.log(Login)
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.header}>Sandvik</Text>
        <Login/>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 42,
    padding: 10,
  }
});
export default App;