import React, { useState } from 'react'
import {StyleSheet, TextInput, Button, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import GenericTwoInput from './genericTwoInput'
import TableRow from './tableRow'
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

    const pressHandler = () =>{
        Alert.alert('Submitted!')
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
                <View style={styles.buttonContainer, {textAlign: "center"}, {marginBottom: '60%'}, {backgroundColor: 'add8e6'}}>
                    <Button style = {styles.buttonContainer} title='Calculate' backgroundColor= 'add8e6'
                    onPress={pressHandler}
                    />
        
                </View>
                <Text style = {styles.sectionTitle}>Production Estimator</Text>

                
            </ScrollView>

        
        
      </View>
    )
};
export default Calculator;