import React, { useState } from 'react';
import 'react-native-gesture-handler';
import {} from 'react-native';
import TabNavigator from './components/tabNavigator'
import LoginNavigator from './components/loginNavigator'

const App = () => {
  const [isSignedIn , setIsSignedIn ] = useState(false)

  if (isSignedIn){
    return(
      //<DrawNavigator/>
      <TabNavigator setIsSignedIn={setIsSignedIn}/>
    );
  }
  else{
    return (
      <LoginNavigator setIsSignedIn={setIsSignedIn}></LoginNavigator>
    );
  }
}


export default App;