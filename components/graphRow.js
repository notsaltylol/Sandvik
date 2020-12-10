import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';
import styles from '../styles.js'

// Generates component for row in graph of production estimator results
const GraphRow = ({ title, base, fall, rise }) => {

    return(
        <View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.tableInputTitle}>{title}</Text>
                        <Text style={styles.graphVals}>{base}</Text>
                        <Text style={styles.graphVals}>{rise}</Text>
                    </View>
                </View>
                    
     ); 
}

export default GraphRow;