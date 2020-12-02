import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';
import styles from '../styles.js'


const RigRow = ({model, dth, rotary, index}) => {

    const [positionX,setPositionX]=useState(150)
    const [positionY,setPositionY]=useState(200)
    
    let color = '#f5f5f5';
    if(index%2 == 0){
        color = '#fff'
    }
    
    const dthHandler = () =>{
        Alert.alert("Selected DTH")
    }

    const rotaryHandler = () =>{
        Alert.alert("Selected Rotary")
    }

    if(dth && rotary){
        return(
        <View style={{ flex: 100, backgroundColor: {color} }}>
            <Text style = {styles.inputTitle}>{model}</Text>
            <Button title='DTH' fontSize='10' onPress={dthHandler} />
            <Button title='Rotary' fontSize='10' onPress={rotaryHandler}/>
        </View>
        )
    }
    else if(dth){
        return(
        <View style={{ flex: 100, backgroundColor: {color} }}>
            <Text style = {styles.inputTitle}>{model}</Text>
            <Button title='DTH' fontSize='10' onPress={dthHandler} />
        </View>
        )
    }
    else {
    return(
        <View style={{ flex: 100, backgroundColor: {color} }}>
        <Text style = {styles.inputTitle}>{model}</Text>
        <Button title='DTH' fontSize='10' onPress={dthHandler} />
        <Button title='Rotary' fontSize='10' onPress={rotaryHandler}/>
    </View>
    )
    }
}

export default RigRow;