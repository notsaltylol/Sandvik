import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import users from '../data/users.json';
import styles from '../styles.js';
import DropDownPicker from 'react-native-dropdown-picker';


const GenericInput = ({ title, options, setFunction, unit }) => {

    const [value, setValue] = useState(null);
    const [items, setItems] = useState(options);
    console.log(items)
    let controller;

    return(
        <View>
            
            <View style={styles.rowStyle}>
                <Text style={styles.units}>{unit}</Text>
                <DropDownPicker
                    containerStyle={{width: 150}}
                    items={items}
                    controller={instance => controller = instance}
                    onChangeList={(items, callback) => {
                        new Promise((resolve, reject) => resolve(setItems(items)))
                            .then(() => callback())
                            .catch(() => {});
                    }}               
                    defaultValue={value}
                    onChangeItem={item => setValue(item.value)}
                />
                <Text style={styles.inputTitle}>{title}</Text>
            </View>
      
        </View>
    )
}

export default GenericInput;