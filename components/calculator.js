import React, { useState } from 'react'
import {StyleSheet, Dimensions, TextInput, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import GenericInput from './genericInput'
import GenericOutput from './genericOutput'
import {ftToMeters, metersToFeet, DrillingIndex, TonHole} from '../mathFunctions.js'
//import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';

import { Header, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get('window').width;



const Calculator = () => {
    const [bit, setBit] = useState(() => {return '7 7/8'});
    const [burden, setBurden] = useState(() => {return 5.5})
    const [spacing, setSpacing] = useState(() => {return 6.1})
    const [subDrilling, setSubDrilling] = useState(() => {return '1.2'})
    const [bench, setBench] = useState(() => {return 12})
    const [rockDensityTon, setRockDensityTon] = useState(() => {return '2.75'})
    const [rockDensityUCS, setRockDensityUCS] = useState(() => {return '157'})
    
    // const [drillingIndex, setDrillingIndex] = useState(() => {
    //         return parseInt(burden * spacing * rockDensityTon)
    //     }
    // )
    
    const [targetProduction, setTargetProduction] = useState('872321')
    const [numHoles, setNumHoles] = useState('685')
    const [mMonth, setMMonth] = useState('85093')
    const [utilizedHours, setUtilizedHours] = useState('511')
    const [penRate, setPenRate] = useState('21.5')

    const tonHole = () => {
        return Math.round(bench * burden * spacing * rockDensityTon);
    };
    const drillingIndex = () =>  {
        const val = Math.round(burden * spacing * rockDensityTon);
        //setDrillingIndex(val);
        return val;
    }

    //drillingIndexVar()

    const pressHandler = () =>{
        Alert.alert("Submit was pressed")
      }
    return(
        <View style={styles.container}>
            <Header
                    backgroundColor='#4682b4'
                    placement="left"
                    centerComponent={{ text: 'Production Estimator Calculator', style: { color: '#fff5ee', 
                                        fontSize: 20, fontWeight: 'bold'} }}
            />

            <ScrollView>
                <GenericInput title={'Bit'} val={bit} setFunction={setBit} unit={'in'}></GenericInput>
                <GenericInput title={'Burden'} val={burden.toString()} setFunction={setBurden} unit={'m'}></GenericInput>
                <GenericInput title={'Spacing'} val = {spacing.toString()} setFunction={setSpacing} unit={'m'}></GenericInput>
                <GenericInput title={'Sub-Drilling'} val={subDrilling} setFunction={setSubDrilling} unit={'m'}></GenericInput>
                <GenericInput title={'Bench'} val={bench.toString()} setFunction={setBench} unit={'m'} ></GenericInput>
                <GenericInput title={'Rock Density'} val={rockDensityTon.toString()} setFunction={setRockDensityTon} unit={'Ton/m3'}></GenericInput>
                <GenericInput title={'Rock Density'} val={rockDensityUCS} setFunction={setRockDensityUCS} unit={'UCS'}></GenericInput>
                {/* <GenericInput title={'Drilling Index'} val={drillingIndex} setFunction={setDrillingIndex} unit={'Ton/m'}></GenericInput> */}
                {/* <GenericInput title={'Ton/Hole'} val={tonHole} setFunction={setTonHole} unit={'Ton'}></GenericInput> */}
                
                <GenericOutput title='Drilling Index' val={drillingIndex()} unit='Ton/m'></GenericOutput>
                <GenericOutput title={'Ton/Hole'} val={tonHole()} unit={'Ton'}></GenericOutput> 

                <GenericInput title={'Target Production T/Month'} val={targetProduction} setFunction={setTargetProduction} unit={'T/Month'}></GenericInput>
                <GenericInput title={'# of Holes Drilled/Unit/Month'} val={numHoles} setFunction={setNumHoles} unit={'Holes/unit/month'}></GenericInput>
                <GenericInput title={'M/Month'} val={mMonth} setFunction={setMMonth} unit={'M/month'}></GenericInput>
                <GenericInput title={'Utilized Hours'} val={utilizedHours} setFunction={setUtilizedHours} unit={'hours'}></GenericInput>
                <GenericInput title={'Current Pen Rate'} val={penRate} setFunction={setPenRate} unit={'Pen Rate'}></GenericInput> 

                <View>
                    <LinearGradient colors={[ '#87cefa', '#4682b4', '#4169e1']}>
                        <Button title='Calculate' 
                        titleStyle={{fontWeight: '600', fontSize: windowWidth*.1, color: '#fff5ee'}}
                        // type='raised'
                        onPress={pressHandler}
                        />
                    </LinearGradient>
                </View>
                    
            </ScrollView>

      </View>
    )
};
Calculator.propTypes = {
    bench : PropTypes.number,
    burden : PropTypes.number,
    spacing : PropTypes.number,
    rockDensityTon : PropTypes.number,
  };
export default Calculator;