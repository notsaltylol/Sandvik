import React, { useState } from 'react'
import {StyleSheet, TextInput, Button, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import GenericTwoInput from './genericTwoInput'
import {ftToMeters, metersToFeet} from '../mathFunctions.js'
import { Header } from 'react-native-elements';


const Calculator = () => {
    const [bit, setBit] = useState(() => {return '0'});
    const [burden, setBurden] = useState(() => {return '0'})
    const [spacing, setSpacing] = useState(() => {return '0'})
    const [subDrilling, setSubDrilling] = useState(() => {return '0'})
    const [bench, setBench] = useState(() => {return '0'})
    const [rockDensityTon, setRockDensityTon] = useState(() => {return '0'})
    const [rockDensityUCS, setRockDensityUCS] = useState(() => {return '0'})
    const [drillingIndex, setDrillingIndex] = useState(() => {return '0'})
    const [tonHole, setTonHole] = useState(() => {return '0'})
    const [targetProduction, setTargetProduction] = useState(() => {return '0'})
    const [numHoles, setNumHoles] = useState(() => {return '0'})
    const [mMonth, setMMonth] = useState(() => {return '0'})
    const [utilizedHours, setUtilizedHours] = useState(() => {return '0'})
    const [penRate, setPenRate] = useState(() => {return '0'})

    // const onTypeElevationFt = (ft) => {
    //     setElevation( ftToMeters(ft) );
    // }

    const pressHandler = () =>{
        Alert.alert(`Elevation: ${String(elevationMeters)} ${String(elevationFt)}`)
      }
    return(
        <View style={styles.container}>
            <Header
                    placement="left"
                    //leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Production Estimator Calculator', style: { color: '#fff', fontSize: 20, fontWeight: 'bold'} }}
                />
            <ScrollView>

                <GenericTwoInput title={'Bit'} val={bit} setFunction={setBit} unit={'in'}></GenericTwoInput>
                <GenericTwoInput title={'Burden'} val={burden} setFunction={setBurden} unit={'m'}></GenericTwoInput>
                <GenericTwoInput title={'Spacing'} val = {spacing} setFunction={setSpacing} unit={'m'}></GenericTwoInput>
                <GenericTwoInput title={'Sub-Drilling'} val={subDrilling} setFunction={setSubDrilling} unit={'m'}></GenericTwoInput>
                <GenericTwoInput title={'Bench'} val={bench} setFunction={setBench} unit={'m'} ></GenericTwoInput>
                <GenericTwoInput title={'Rock Density'} val={rockDensityTon} setFunction={setRockDensityTon} unit={'Ton/m3'}></GenericTwoInput>
                <GenericTwoInput title={'Rock Density'} val={rockDensityUCS} setFunction={setRockDensityUCS} unit={'UCS'}></GenericTwoInput>
                <GenericTwoInput title={'Drilling Index'} val={drillingIndex} setFunction={setDrillingIndex} unit={'Ton/m'}></GenericTwoInput>
                <GenericTwoInput title={'Ton/Hole'} val={tonHole} setFunction={setTonHole} unit={'Ton'}></GenericTwoInput>
                <GenericTwoInput title={'Target Production T/Month'} val={targetProduction} setFunction={setTargetProduction} unit={'T/Month'}></GenericTwoInput>
                <GenericTwoInput title={'# of Holes Drilled/Unit/Month'} val={numHoles} setFunction={setNumHoles} unit={'Holes/unit/month'}></GenericTwoInput>
                <GenericTwoInput title={'M/Month'} val={mMonth} setFunction={setMMonth} unit={'M/month'}></GenericTwoInput>
                <GenericTwoInput title={'Utilized Hours'} val={utilizedHours} setFunction={setUtilizedHours} unit={'hours'}></GenericTwoInput>
                <GenericTwoInput title={'Current Pen Rate'} val={penRate} setFunction={setPenRate} unit={'Pen Rate'}></GenericTwoInput> 

                <Text style = {{textAlign: "center"}}>Submit Responses?</Text>
                    <View style={styles.buttonContainer, {textAlign: "center"}}>
                        <Button title='Calculate' 
                        onPress={pressHandler}
                        />
            
                    </View>
                    
            </ScrollView>

        
        
      </View>
    )
};
export default Calculator;