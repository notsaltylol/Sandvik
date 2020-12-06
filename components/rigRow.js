import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';
import styles from '../styles.js'
//import { Header, Button } from 'react-native-elements';


const RigRow = ({model, dth, rotary, selected, index, mods}) => {
    //console.log(mods)

    const [positionX,setPositionX]=useState(150)
    const [positionY,setPositionY]=useState(200)

    const [dthcolor,setDTH]=useState('#000');

    const [rotarycolor,setRotary]=useState('#000');

    const changeSelected = (newMod, sel)=>{
        for(let i = 0; i < mods.length; i++){
            mods[i].selected = 'none';
        }
        for(let i = 0; i < mods.length; i++){
            if(mods[i].name == newMod){
                mods[i].selected = sel;
            }
        }
    }
    
    let color = '#f5f5f5';
    if(index%2 == 0){
        color = '#fff';
    }
    
    const dthHandler = () =>{
        Alert.alert("Selected DTH for " + model)
        changeSelected(model, 'dth')
        setDTH('#f00')
    }

    const rotaryHandler = () =>{
        Alert.alert("Selected Rotary for " + model)
        changeSelected(model, 'rotary')
        setRotary('#f00')
    }

    if(dth && rotary){
        return(
            <View style={{ flexDirection: 'row', backgroundColor: color}}>
                <View style={{ flex: 100 }}>
                <Text style = {styles.rigTitle}>{model}</Text>
                </View>

                <View style={{ flex: 100, backgroundColor: dthcolor, borderRadius: 50}}>
                <Button title='DTH' fontSize='8' onPress={dthHandler} />
                </View>

                <View style={{ flex: 100, backgroundColor: rotarycolor, borderRadius: 50}}>
                <Button title='Rotary' fontSize='8' style={{backgroundColor:'black'}} onPress={rotaryHandler} />
                </View>
            </View>
        )
    }
    else if(dth){
        return(
        <View style={{ flexDirection: 'row', backgroundColor: color }}>
            <View style={{ flex: 100 }}>
            <Text style = {styles.rigTitle} >{model}</Text>
            </View>

            <View style={{ flex: 100, backgroundColor: dthcolor, borderRadius: 50}}>
                <Button title='DTH' fontSize='8' onPress={dthHandler} />
            </View>
            <View style={{ flex: 100, backgroundColor: '#fff', borderRadius: 50}}>
                
            </View>

        </View>
        )
    }
    else {
    return(
        <View style={{ flexDirection: 'row', backgroundColor: color }}>
                <View style={{ flex: 100}}>
                <Text style = {styles.rigTitle}>{model}</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff', borderRadius: 50}}>
                
                </View>

                <View style={{ flex: 100, backgroundColor: rotarycolor, borderRadius: 30}}>
                <Button title='Rotary' fontSize='8' onPress={rotaryHandler} />
                </View>
        </View>
    )
    }
}

export default RigRow;