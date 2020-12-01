import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';
import styles from '../styles.js'


const GenericInput = ({ title, val, setFunction, unit }) => {
    
    const onTypeBox1 = (unit) => {
        setFunction(unit.toString())
    }

    const [positionX,setPositionX]=useState(150)
    const [positionY,setPositionY]=useState(200)

    return(
        <View>
            <View style={styles.rowStyle}>
                <Text style={styles.inputTitle}>{title}</Text>
                <View>
                    <View style={styles.rowStyle }>
                        <TextInput
                            value={val}
                            keyboardType='numeric'
                            style={styles.calcInput}
                            onChangeText={(text) => onTypeBox1(text)}
                            placeholder = {unit}
                        />
                        <Text style={styles.units}>{unit}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default GenericInput;