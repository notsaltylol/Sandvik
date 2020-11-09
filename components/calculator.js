import React, { useState } from 'react'
import {StyleSheet, Dimensions, TextInput, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import TableRow from './tableRow'

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

    //Holes	Metres	Hours	m/hr	Total_Ton	% of Target
    var holesA = '0';
    var holesB = '0';
    var holesC = '0';
    var holesD = '0';
    var holesE = '0';

    var metresA = '0';
    var metresB = '0';
    var metresC = '0';
    var metresD = '0';
    var metresE = '0';

    const [hours, setHours] = useState(() => {return 'Hours'})
    var hoursB = utilizedHours;
    var hoursC = '0';
    var hoursD = '0';
    var hoursE = '0';

    const [mhr, setMhr] = useState(() => {return 'M/Hr'})
    var mhrB = penRate;
    var mhrC = penRate;
    var mhrD = penRate;
    var mhrE = penRate;

    var tonA = '0';
    var tonB = '0';
    var tonC = '0';
    var tonD = '0';
    var tonE = '0';

    var targetA = '0';
    var targetB = '0';
    var targetC = '0';
    var targetD = '0';
    var targetE = '0';

    // const onTypeElevationFt = (ft) => {
    //     setElevation( ftToMeters(ft) );
    // }

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
                <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />
                <Text style = {styles.sectionTitle}>Drilling Index Calculation</Text>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />
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

                <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />
                <Text style = {styles.sectionTitle}>Actual Production</Text>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />

                <TableRow isFirst = {false} title={''} holes={'Holes'} metres={'Metres'} hours={'Hours'} setHours = {setHours} mhr={'M/Hr'} setMhr = {setMhr} totalTon = {'Total Ton'} pctTarget = {'% Target'}></TableRow> 
                <TableRow isFirst = {true} title={'Target Per Rig'} holes={holesA} metres={metresA} hours={hours} setHours = {setHours} mhr={mhr} setMhr = {setMhr} totalTon = {tonA} pctTarget = {targetA}></TableRow> 
                <TableRow isFirst = {false} title={'Current Scenario'} holes={holesB} metres={metresB} hours={hoursB} setHours = {setHours} mhr={mhrB} setMhr = {setMhr} totalTon = {tonB} pctTarget = {targetB}></TableRow> 
                <TableRow isFirst = {false} title={'Scenario 1'} holes={holesC} metres={metresC} hours={hoursC} setHours = {setHours} mhr={mhrC} setMhr = {setMhr} totalTon = {tonC} pctTarget = {targetC}></TableRow> 
                <TableRow isFirst = {false} title={'Scenario 2'} holes={holesD} metres={metresD} hours={hoursD} setHours = {setHours} mhr={mhrD} setMhr = {setMhr} totalTon = {tonD} pctTarget = {targetD}></TableRow> 
                <TableRow isFirst = {false} title={'Scenario 3'} holes={holesE} metres={metresE} hours={hoursE} setHours = {setHours} mhr={mhrE} setMhr = {setMhr} totalTon = {tonE} pctTarget = {targetE}></TableRow> 
               {/*  <TableRow isFirst = {true} title={'Yo'} val={penRate} setFunction={setPenRate} unit={'Pen Rate'}></TableRow> 
                <TableRow isFirst = {false} title={'Yo'} val={penRate} setFunction={setPenRate} unit={'Pen Rate'}></TableRow> 
                <TableRow isFirst = {false} title={'Yo'} val={penRate} setFunction={setPenRate} unit={'Pen Rate'}></TableRow> 
                <TableRow isFirst = {false} title={'Yo'} val={penRate} setFunction={setPenRate} unit={'Pen Rate'}></TableRow> 
                <TableRow isFirst = {false} title={'Yo'} val={penRate} setFunction={setPenRate} unit={'Pen Rate'}></TableRow>  */}

                <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />  
                <Text style = {styles.sectionTitle}>Submit Responses?</Text>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  /> 
                
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