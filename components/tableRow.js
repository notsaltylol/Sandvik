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
                        <Text style={styles.tableInputTitle}>{title}</Text>
                        <Text style={styles.rowVals}>{holes}</Text>
                        <Text style={styles.rowVals}>{metres}</Text>
                        <TextInput
                            value={hours}
                            keyboardType='numeric'
                            style={styles.rowProdEstInput}
                            onChangeText={(text) => onTypeBoxMhr(text)}
                            placeholder = {'hours'}
                        />
                        <TextInput
                            value={mhr}
                            keyboardType='numeric'
                            style={styles.rowProdEstInput}
                            onChangeText={(text) => onTypeBoxHours(text)}
                            placeholder = {'meters/hour'}
                        />
                        <Text style={styles.rowVals}>{totalTon}</Text>
                        <Text style={styles.rowVals}>{pctTarget}</Text>

                    </View>
                </View>
                    
     );
    }
    else {
        //Holes	Metres	Hours	m/hr	Total_Ton	% of Target
        return (
        <View>
        <View style={styles.tableRowStyle}>
            <Text style={styles.tableInputTitle}>{title}</Text>
            <Text style={styles.rowVals}>{holes}</Text>
            <Text style={styles.rowVals}>{metres}</Text>
            <Text style={styles.rowVals}>{hours}</Text>
            <Text style={styles.rowVals}>{mhr}</Text>
            <Text style={styles.rowVals}>{totalTon}</Text>
            <Text style={styles.rowVals}>{pctTarget}</Text>
        </View>
        
        
    </View>
    );
        }
    
}

export default TableRow;