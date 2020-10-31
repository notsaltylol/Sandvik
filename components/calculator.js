import React, { useState } from 'react'
import {StyleSheet, TextInput, Button, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import GenericTwoInput from './genericTwoInput'
import {ftToMeters, metersToFeet} from '../mathFunctions.js'


const Calculator = () => {
    const [elevationMeters, setElevationMeters] = useState(() => {return '0'});
    const [elevationFt, setElevationFt] = useState(() => {return '0'});
    const [benchHeightMeters, setBenchHeightMeters] = useState(() => {return '0'});
    const [benchHeightFt, setBenchHeightFt] = useState(() => {return '0'});
    const [subDrillingMeters, setSubDrillingMeters] = useState(() => {return '0'});
    const [subDrillingFt, setSubDrillingFt] = useState(() => {return '0'});
    const [holeDepth, setHoleDepth] = useState(null);
    const [customerName, setCustomerName] = useState('');

    // const onTypeElevationFt = (ft) => {
    //     setElevation( ftToMeters(ft) );
    // }

    const pressHandler = () =>{
        Alert.alert(`Elevation: ${String(elevationMeters)} ${String(elevationFt)}`)
      }
    return(
        
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.rowStyle}>
                    <Text>Customer name:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setCustomerName(text)}
                    />
                </View>

                <GenericTwoInput title={'Elevation'} val1={elevationMeters} val2={elevationFt} setFunction1={setElevationFt} setFunction2={setElevationMeters} func1={metersToFeet} func2={ftToMeters} unit1={'m'} unit2={'ft'}></GenericTwoInput>
                <GenericTwoInput title={'Bit Size'} val1={elevationMeters} val2={elevationFt} setFunction1={setElevationFt} setFunction2={setElevationMeters} func1={metersToFeet} func2={ftToMeters} unit1={'mm'} unit2={'in'}></GenericTwoInput>
                <GenericTwoInput title={'Drill Pipe OD'} val1={elevationMeters} val2={elevationFt} setFunction1={setElevationFt} setFunction2={setElevationMeters} func1={metersToFeet} func2={ftToMeters} unit1={'mm'} unit2={'in'}></GenericTwoInput>
                <GenericTwoInput title={'Bench Height'} val1={benchHeightMeters} val2={benchHeightFt} setFunction1={setBenchHeightFt} setFunction2={setBenchHeightMeters} func1={metersToFeet} func2={ftToMeters} unit1={'m'} unit2={'ft'}></GenericTwoInput>
                <GenericTwoInput title={'Sub-Drilling'} val1={subDrillingMeters} val2={subDrillingFt} setFunction1={setSubDrillingFt} setFunction2={setSubDrillingMeters} func1={metersToFeet} func2={ftToMeters} unit1={'m'} unit2={'ft'}></GenericTwoInput>

                <Text> Enter hole depth</Text>
                    <TextInput
                    keyboardType='numeric'
                    style={styles.input}
                    onChangeText={text => setHoleDepth(text)}
                    
                    />
                    <View style={styles.buttonContainer}>
                        <Button title='Calculate' 
                        onPress={pressHandler}
                        />
                    <Text>{elevationMeters}</Text>
                    </View>
                    
            </ScrollView>

        
        
      </View>
    )
};
export default Calculator;