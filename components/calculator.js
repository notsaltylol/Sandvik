import React, { useState, useEffect } from 'react'
import {StyleSheet, Dimensions, TextInput, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import TableRow from './tableRow'

import GenericInput from './genericInput'
import GenericOutput from './genericOutput'
//import { Header } from 'react-native-elements';
import PropTypes from 'prop-types';

import { Header, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import {tonHoleCalculation, drillingIndexCalculation} from './calculatorFunctions';

const windowWidth = Dimensions.get('window').width;


const Calculator = () => {
    const [D3, setD3] = useState(() => {return '7 7/8'});
    const [D4, setD4] = useState(() => {return 5.5})
    const [D5, setD5] = useState(() => {return 6.1})
    const [D6, setD6] = useState(() => {return '1.2'})
    const [D7, setD7] = useState(() => {return 12})
    const [D8, setD8] = useState(() => {return '2.75'})
    const [D9, setD9] = useState(() => {return '157'})

    const [D10, setD10] = useState(drillingIndexCalculation(D4, D5, D8))
    useEffect(() => {
        setD10(drillingIndexCalculation(D4, D5, D8))
    }, [D4, D5, D8])

    const [D11, setD11] = useState(tonHoleCalculation(D7, D4, D5, D8));
    useEffect(()=> {
        setD11(tonHoleCalculation(D7, D4, D5, D8));
    }, [D7, D4, D5, D8])
    
    const [D12, setD12] = useState('872321')
    const [D13, setD13] = useState('685')
    const [D14, setD14] = useState('85093')
    const [D15, setD15] = useState('511')
    const [D16, setD16] = useState('21.5')

    //Holes	Metres	Hours	m/hr	Total_Ton	% of Target
    const [H10, setH10] = useState(788);
    const [H11, setH11] = useState(832);
    const [H12, setH12] = useState(286);
    const [H13, setH13] = useState(286);
    const [H14, setH14] = useState(300);

    const [I10, setI10] = useState(11825);
    const [I11, setI11] = useState(10897);
    const [I12, setI12] = useState(3771);
    const [I13, setI13] = useState(3771);
    const [I14, setI14] = useState(3954);

    const [hours, setHours] = useState(() => {return 'Hours'})
    var J11 = D15;
    var J12 = 175;
    var J13 = 175;
    var J14 = 175;

    const [mhr, setMhr] = useState(() => {return 'M/Hr'})
    var mhrB = D16;
    var mhrC = D16;
    var mhrD = D16;
    var mhrE = D16;

    var tonA = '872321';
    var tonB = '921493';
    var tonC = '316272';
    var tonD = '347899';
    var tonE = '364808';

    var targetA = '100%';
    var targetB = '106%';
    var targetC = '36%';
    var targetD = '40%';
    var targetE = '42%';

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
                <GenericInput title={'Bit'} val={D3} setFunction={setD3} unit={'in'}></GenericInput>
                <GenericInput title={'Burden'} val={D4.toString()} setFunction={setD4} unit={'m'}></GenericInput>
                <GenericInput title={'Spacing'} val = {D5.toString()} setFunction={setD5} unit={'m'}></GenericInput>
                <GenericInput title={'Sub-Drilling'} val={D6} setFunction={setD6} unit={'m'}></GenericInput>
                <GenericInput title={'Bench'} val={D7.toString()} setFunction={setD7} unit={'m'} ></GenericInput>
                <GenericInput title={'Rock Density'} val={D8.toString()} setFunction={setD8} unit={'Ton/m3'}></GenericInput>
                <GenericInput title={'Rock Density'} val={D9} setFunction={setD9} unit={'UCS'}></GenericInput>
                {/* <GenericInput title={'Drilling Index'} val={drillingIndex} setFunction={setDrillingIndex} unit={'Ton/m'}></GenericInput> */}
                {/* <GenericInput title={'Ton/Hole'} val={tonHole} setFunction={setTonHole} unit={'Ton'}></GenericInput> */}
                
                <GenericOutput title='Drilling Index' val={D10} unit='Ton/m'></GenericOutput>
                <GenericOutput title={'Ton/Hole'} val={D11} unit={'Ton'}></GenericOutput> 

                <GenericInput title={'Target Production T/Month'} val={D12} setFunction={setD12} unit={'T/Month'}></GenericInput>
                <GenericInput title={'# of Holes Drilled/Unit/Month'} val={D13} setFunction={setD13} unit={'Holes/unit/month'}></GenericInput>
                <GenericInput title={'M/Month'} val={D14} setFunction={setD14} unit={'M/month'}></GenericInput>
                <GenericInput title={'Utilized Hours'} val={D15} setFunction={setD15} unit={'hours'}></GenericInput>
                <GenericInput title={'Current Pen Rate'} val={D16} setFunction={setD16} unit={'Pen Rate'}></GenericInput> 

                <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />
                <Text style = {styles.sectionTitle}>Actual Production</Text>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />

                <TableRow isFirst = {false} title={''} holes={'Holes'} metres={'Metres'} hours={'Hours'} setHours = {setHours} mhr={'M/Hr'} setMhr = {setMhr} totalTon = {'Total Ton'} pctTarget = {'% Target'}></TableRow> 
                <TableRow isFirst = {true} title={'Target Per Rig'} holes={H10} metres={I10} hours={hours} setHours = {setHours} mhr={mhr} setMhr = {setMhr} totalTon = {tonA} pctTarget = {targetA}></TableRow> 
                <TableRow isFirst = {false} title={'Current Scenario'} holes={H11} metres={I11} hours={J11} setHours = {setHours} mhr={mhrB} setMhr = {setMhr} totalTon = {tonB} pctTarget = {targetB}></TableRow> 
                <TableRow isFirst = {false} title={'Scenario 1'} holes={H12} metres={I12} hours={J12} setHours = {setHours} mhr={mhrC} setMhr = {setMhr} totalTon = {tonC} pctTarget = {targetC}></TableRow> 
                <TableRow isFirst = {false} title={'Scenario 2'} holes={H13} metres={I13} hours={J13} setHours = {setHours} mhr={mhrD} setMhr = {setMhr} totalTon = {tonD} pctTarget = {targetD}></TableRow> 
                <TableRow isFirst = {false} title={'Scenario 3'} holes={H14} metres={I14} hours={J14} setHours = {setHours} mhr={mhrE} setMhr = {setMhr} totalTon = {tonE} pctTarget = {targetE}></TableRow> 
               {/*  <TableRow isFirst = {true} title={'Yo'} val={D16} setFunction={setD16} unit={'Pen Rate'}></TableRow> 
                <TableRow isFirst = {false} title={'Yo'} val={D16} setFunction={setD16} unit={'Pen Rate'}></TableRow> 
                <TableRow isFirst = {false} title={'Yo'} val={D16} setFunction={setD16} unit={'Pen Rate'}></TableRow> 
                <TableRow isFirst = {false} title={'Yo'} val={D16} setFunction={setD16} unit={'Pen Rate'}></TableRow> 
                <TableRow isFirst = {false} title={'Yo'} val={D16} setFunction={setD16} unit={'Pen Rate'}></TableRow>  */}

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
    D7 : PropTypes.number,
    D4 : PropTypes.number,
    D5 : PropTypes.number,
    D8 : PropTypes.number,

    H10 : PropTypes.number,
    H11 : PropTypes.number,
    H12 : PropTypes.number,
    H13 : PropTypes.number,
    H14 : PropTypes.number,

    I10 : PropTypes.number,
    I11 : PropTypes.number,
    I12 : PropTypes.number,
    I13 : PropTypes.number,
    I14 : PropTypes.number,

    J11 : PropTypes.number,
    J12 : PropTypes.number,
    J13 : PropTypes.number,
    J14 : PropTypes.number,
  };
export default Calculator;