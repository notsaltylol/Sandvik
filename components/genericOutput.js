import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';
import styles from '../styles.js'
import PropTypes from 'prop-types';

/* This is a template component for an output box. It takes in the title, outputted value, and units for each output. */

const GenericOutput = ({ title, val, unit }) => {

    return(
        <View>
            <View style={styles.rowStyle}>
                <Text style={styles.outputTitle}>{title}</Text>
                <View>
                    <View style={styles.rowStyle}>
                        <Text
                            style={styles.calcOutput}>{val.toString()}
                        </Text>
                        <Text style={styles.units}>{unit}</Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
}


export default GenericOutput;