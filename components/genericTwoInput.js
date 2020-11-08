import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';
import styles from '../styles.js'

const GenericTwoInput = ({ title, val1, val2, setFunction1, setFunction2, func1, func2, unit1, unit2 }) => {
    
    const onTypeBox1 = (unit) => {
        setFunction2(unit)
        setFunction1(func1(unit))
    }
    
    
    const onTypeBox2 = (unit) => {
        setFunction1(unit)
        setFunction2(func2(unit))
    }
    return(
        <View>
            <View style={styles.rowStyle}>
                <Text>{title}</Text>
                <View>
                    <View style={styles.rowStyle}>
                        <TextInput
                            value={val1}
                            keyboardType='numeric'
                            style={styles.input}
                            onChangeText={(text) => onTypeBox1(text)}
                        />
                        <Text>{unit1}</Text>
                    </View>

                    <View style={styles.rowStyle}>
                        <TextInput
                            value={val2}
                            keyboardType='numeric'
                            style={styles.input}
                            onChangeText={text => onTypeBox2(text)}
                        />
                        <Text>{unit2}</Text>
                    </View>


                </View>
            </View>
            
        </View>
    )
}

export default GenericTwoInput;