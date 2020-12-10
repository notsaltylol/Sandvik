import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';
import styles from '../styles.js'

/* This is a template component for an input box. It takes in the title, inputted value, set and update functions, units,
and types for each input. */

const GenericInput = ({ title, val, setFunction, updateFunction, unit, numeric='numeric' }) => {
    
    const onTypeBox1 = (unit) => {
        setFunction(unit.toString())
        if(typeof updateFunction !== "undefined") updateFunction()
    }

    return(
        <View>
            <View style={styles.rowStyle}>
                <Text style={styles.inputTitle}>{title}</Text>
                <View>
                    <View style={styles.rowStyle }>
                        <TextInput
                            value={val.toString()}
                            keyboardType={numeric}
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