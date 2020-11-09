import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';
import styles from '../styles.js'


const TableRow = ({ isFirst, title, holes, metres, hours, setHours, mhr, setMhr, totalTon, pctTarget}) => {
    const onTypeBoxHours = (hours) => {
        setHours(hours.toString());
    }

    const onTypeBoxMhr = (mhr) => {
        setMhr(mhr.toString());
    }

    //Holes	Metres	Hours	m/hr	Total_Ton	% of Target

    if(isFirst){
    return(
        <View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.units}>{pctTarget}</Text>
                        <Text style={styles.units}>{totalTon}</Text>
                        <TextInput
                            value={mhr}
                            keyboardType='numeric'
                            style={styles.rowProdEstInput}
                            onChangeText={(text) => onTypeBoxHours(text)}
                            placeholder = {'meters/hour'}
                        />
                        <TextInput
                            value={hours}
                            keyboardType='numeric'
                            style={styles.rowProdEstInput}
                            onChangeText={(text) => onTypeBoxMhr(text)}
                            placeholder = {'hours'}
                        />
                        <Text style={styles.units}>{metres}</Text>
                        <Text style={styles.units}>{holes}</Text>
                        <Text style={styles.inputTitle}>{title}</Text>
                    </View>
                </View>
                    
     );
    }
    else {
        //Holes	Metres	Hours	m/hr	Total_Ton	% of Target
        return (
        <View>
        <View style={styles.rowStyle}>
            <Text style={styles.units}>{pctTarget}</Text>
            <Text style={styles.units}>{totalTon}</Text>
            <Text style={styles.units}>{mhr}</Text>
            <Text style={styles.units}>{hours}</Text>
            <Text style={styles.units}>{metres}</Text>
            <Text style={styles.units}>{holes}</Text>
            <Text style={styles.inputTitle}>{title}</Text>
        </View>
        
        
    </View>
    );
        }
    
}

export default TableRow;