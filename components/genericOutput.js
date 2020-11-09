import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';
import styles from '../styles.js'
import PropTypes from 'prop-types';


const GenericOutput = ({ title, val, unit }) => {
    console.log(val)

    return(
        <View>
            <View style={styles.rowStyle}>
                <Text style={styles.units}>{unit}</Text>
                <View>
                    <View style={styles.rowStyle}>
                        <Text
                            style={styles.calcOutput}>{val.toString()}
                        </Text>
                        <Text style={styles.outputTitle}>{title}</Text>
                    </View>
                </View>
            </View>
            
        </View>
    )
}

GenericOutput.propTypes = {
    val: PropTypes.number
  };

export default GenericOutput;