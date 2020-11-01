import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';
import styles from '../styles.js'

const GenericTwoInput = ({ title, val, setFunction, unit }) => {
    
    /* const onTypeBox1 = (unit) => {
        setFunction2(unit.toString())
        setFunction1(func1(unit).toString())
    }
    
    
    const onTypeBox2 = (unit) => {
        setFunction1(unit.toString())
        setFunction2(func2(unit).toString())
    } */

    const [positionX,setPositionX]=useState(150)
    const [positionY,setPositionY]=useState(200)

    return(
        <View>
                    <View style={styles.rowStyle}>
                        <Text>{title}</Text>
                        <View>
                            <View style={styles.rowStyle }>
                                <TextInput
                                    value={val}
                                    keyboardType='numeric'
                                    style={styles.input}
                                    onChangeText={(text) => onTypeBox1(text)}
                                />
                                <Text>{unit}</Text>
                            </View>

                            {/* <View style={styles.rowStyle}>
                                <TextInput
                                    value={val2}
                                    keyboardType='numeric'
                                    style={styles.input}
                                    onChangeText={text => onTypeBox2(text)}
                                />
                                <Text>{unit2}</Text>
                            </View> */}


                        </View>
                    </View>
                    
                </View>
    )
}

export default GenericTwoInput;