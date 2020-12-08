import React, { useState, useEffect } from 'react'
import {StyleSheet, Dimensions, TextInput, View, Alert, Text, ScrollView, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import TableRow from './tableRow'
import GraphRow from './graphRow'
import ResultGraph from './resultGraphs'

import GenericInput from './genericInput'
import GenericOutput from './genericOutput'
import PropTypes from 'prop-types';

import { Header, Button, Divider, Card } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import {tonHoleCalculation, drillingIndexCalculation, H10_func, I10_func, H11_func} from './calculatorFunctions';

const windowWidth = Dimensions.get('window').width;


const Calculator = ({setIsCalculated}, {navigation, route}) => {
    //console.log(route.params.model)

    const [D3, setD3] = useState(() => {return '7 7/8'});
    const [D4, setD4] = useState(() => {return 5.5})
    const [D5, setD5] = useState(() => {return 6.1})
    const [D6, setD6] = useState(() => {return 1.2})
    const [D7, setD7] = useState(() => {return 12})
    const [D8, setD8] = useState(() => {return '2.75'})
    const [D9, setD9] = useState(() => {return '157'})

    const [D10, setD10] = useState(drillingIndexCalculation(D4, D5, D8))
    

    const [D11, setD11] = useState(tonHoleCalculation(D7, D4, D5, D8));
    
    
    const [D12, setD12] = useState(872321)
    const [D13, setD13] = useState(685)
    const [D14, setD14] = useState(85093)
    const [D15, setD15] = useState(511)
    const [D16, setD16] = useState(21.5)

    
    

    //Holes	Metres	Hours	m/hr	Total_Ton	% of Target
    const [H10, setH10] = useState(H10_func(L10, D11));
    
    
    const [H11, setH11] = useState(H11_func(I11, D7, D6));
    const [H12, setH12] = useState(286); //286
    const [H13, setH13] = useState(286);
    const [H14, setH14] = useState(300);

    
    

    const [I10, setI10] = useState(I10_func(J10, K10));
    const [I11, setI11] = useState(10897);
    const [I12, setI12] = useState(3771);
    const [I13, setI13] = useState(3771);
    const [I14, setI14] = useState(3954);

    const [J10, setJ10] = useState(550);
    const [J11, setJ11] = useState(D15);
    const [J12, setJ12] = useState(175);
    const [J13, setJ13] = useState(175);
    const [J14, setJ14] = useState(175);

    const [K10, setK10] = useState(21.5);
    const [K11, setK11] = useState(D16);
    const [K12, setK12] = useState(D16);
    const [K13, setK13] = useState(D16);
    const [K14, setK14] = useState(D16);


    const [L10, setL10] = useState(D12);
    const [L11, setL11] = useState(921493);
    const [L12, setL12] = useState(316272);
    const [L13, setL13] = useState(347899);
    const [L14, setL14] = useState(364808);

    const [M10, setM10] = useState('100%');
    const [M11, setM11] = useState('106%');
    const [M12, setM12] = useState('36%');
    const [M13, setM13] = useState('40%');
    const [M14, setM14] = useState('42%');

    

    useEffect(()=> {
        setD11(tonHoleCalculation(D7, D4, D5, D8));
    }, [D7, D4, D5, D8])

    useEffect(() => {
        setD10(drillingIndexCalculation(D4, D5, D8))
    }, [D4, D5, D8])

    useEffect(()=> {
        setL10(D12 )
    }, [D12])
    
    useEffect(()=> {
        setH10( H10_func(L10, D11) )
    }, [L10, D11])

    useEffect(() => {
        setH11( H11_func(I11, D7, D6) )
    }, [I11, D7, D6])

    useEffect(()=> {
        setI10( I10_func(J10, K10) )
    }, [J10, K10])

    

    const pressHandler = () =>{
        setIsCalculated(false)
        //navigation.navigate('RESULTS', {model: 5})
      }
    return(
        <View style={styles.container}>
            <Header
                    backgroundColor='#80a1d4'
                    placement="center"
                    centerComponent={{ text: 'PRODUCTION ESTIMATOR', style: { color: '#fff', width: windowWidth, 
                                        fontSize: 20, fontWeight: 'bold', textAlign: 'center',} }}
            />

            <ScrollView showsHorizontalScrollIndicator={false} horizontal={false} directionalLockEnabled={true}>
             {/*    <View style={{borderBottomColor: '#fff', borderBottomWidth: 3, marginTop:15}}  />
                <Text style = {styles.sectionTitle}>Drilling Index Calculation</Text>
                <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />
                <GenericInput title={'Bit'} val={D3} setFunction={setD3} unit={'in'}></GenericInput>
                <GenericInput title={'Burden'} val={D4.toString()} setFunction={setD4} unit={'m'}></GenericInput>
                <GenericInput title={'Spacing'} val = {D5.toString()} setFunction={setD5} unit={'m'}></GenericInput>
                <GenericInput title={'Sub-Drilling'} val={D6.toString()} setFunction={setD6} unit={'m'}></GenericInput>
                <GenericInput title={'Bench'} val={D7.toString()} setFunction={setD7} unit={'m'} ></GenericInput>
                <GenericInput title={'Rock Density'} val={D8.toString()} setFunction={setD8} unit={'Ton/m3'}></GenericInput>
                <GenericInput title={'Rock Density'} val={D9} setFunction={setD9} unit={'UCS'}></GenericInput>
                {/* <GenericInput title={'Drilling Index'} val={drillingIndex} setFunction={setDrillingIndex} unit={'Ton/m'}></GenericInput> */}
                {/* <GenericInput title={'Ton/Hole'} val={tonHole} setFunction={setTonHole} unit={'Ton'}></GenericInput> */}
                
               {/*  <GenericOutput title='Drilling Index' val={D10} unit='Ton/m'></GenericOutput>
                <GenericOutput title={'Ton/Hole'} val={D11} unit={'Ton'}></GenericOutput> 

                <GenericInput title={'Target Production T/Month'} val={D12.toString()} setFunction={setD12} unit={'T/Month'}></GenericInput>
                <GenericInput title={'# of Holes Drilled/Unit/Month'} val={D13.toString()} setFunction={setD13} unit={'Holes/unit/month'}></GenericInput>
                <GenericInput title={'M/Month'} val={D14.toString()} setFunction={setD14} unit={'M/month'}></GenericInput>
                <GenericInput title={'Utilized Hours'} val={D15.toString()} setFunction={setD15} unit={'hours'}></GenericInput>
                <GenericInput title={'Current Pen Rate'} val={D16.toString()} setFunction={setD16} unit={'Pen Rate'}></GenericInput>  */}
             


                <Card>
                    <Card.Title style={styles.mainCardTitles}>ACTUAL PRODUCTION</Card.Title>
                    <Card.Divider/>


                {/* <TableRow isFirst = {false} title={''}                  holes={'Holes'} metres={'Metres'}   hours={'Hours'}         setHours = {''}     mhr={'M/Hr'}            setMhr = {''}       totalTon = {'Total Ton'}    pctTarget = {'% Target'}></TableRow> 
                <TableRow isFirst = {true} title={'Target Per Rig'}     holes={H10}     metres={I10}        hours={J10.toString()}  setHours = {setJ10} mhr={K10.toString()}    setMhr = {setK10}   totalTon = {L10}            pctTarget = {M10}></TableRow> 
                <TableRow isFirst = {false} title={'Current Scenario'}  holes={H11}     metres={I11}        hours={J11}             setHours = {setJ10} mhr={K11}               setMhr = {setK10}   totalTon = {L11}            pctTarget = {M11}></TableRow> 
                <TableRow isFirst = {false} title={'Scenario 1'}        holes={H12}     metres={I12}        hours={J12}             setHours = {setJ10} mhr={K12}               setMhr = {setK10}   totalTon = {L12}            pctTarget = {M12}></TableRow> 
                <TableRow isFirst = {false} title={'Scenario 2'}        holes={H13}     metres={I13}        hours={J13}             setHours = {setJ10} mhr={K13}               setMhr = {setK10}   totalTon = {L13}            pctTarget = {M13}></TableRow> 
                <TableRow isFirst = {false} title={'Scenario 3'}        holes={H14}     metres={I14}        hours={J14}             setHours = {setJ10} mhr={K14}               setMhr = {setK10}   totalTon = {L14}            pctTarget = {M14}></TableRow>  
                */}
                             
                <TableRow isFirst = {false} title={''} holes={<Text style={styles.tableTopTitle}>Holes</Text>} metres={<Text style={styles.tableTopTitle}>Metres</Text>} 
                    hours={<Text style={styles.tableTopTitle}>Hours</Text>} 
                    setHours = {''} mhr={<Text style={styles.tableTopTitle}>M/Hr</Text>} setMhr = {''} 
                    totalTon = {<Text style={styles.tableTopTitle}>Total Ton</Text>} pctTarget = {<Text style={styles.tableTopTitle}>% Target</Text>}></TableRow> 
                <TableRow isFirst = {true}  title={'Target Per Rig'}    holes={H10.toString()} metres={I10} hours={J10.toString()} setHours={setJ10} mhr={K10.toString()}  setMhr={setK10} totalTon={L10} pctTarget={M10}></TableRow> 
                <TableRow isFirst = {false} title={'Current Scenario'}  holes={H11.toString()} metres={I11} hours={J11}            setHours={setJ11} mhr={K11}             setMhr={setK11} totalTon={L11} pctTarget={M11}></TableRow> 
                <TableRow isFirst = {false} title={'Scenario 1'}        holes={H12} metres={I12} hours={J12}            setHours={setJ12} mhr={K12}             setMhr={setK12} totalTon={L12} pctTarget={M12}></TableRow> 
                <TableRow isFirst = {false} title={'Scenario 2'}        holes={H13} metres={I13} hours={J13}            setHours={setJ13} mhr={K13}             setMhr={setK13} totalTon={L13} pctTarget={M13}></TableRow> 
                <TableRow isFirst = {false} title={'Scenario 3'}        holes={H14} metres={I14} hours={J14}            setHours={setJ14} mhr={K14}             setMhr={setK14} totalTon={L14} pctTarget={M14}></TableRow> 
                </Card>

                <Card>
                    <Card.Title style={styles.mainCardTitles}>DRILL METRES PER MONTH</Card.Title>
                    <Card.Divider/>
                
                <GraphRow title={''} base={<Text style={styles.tableTopTitle}>Base</Text>} fall={<Text style={styles.tableTopTitle}>Fall</Text>} rise={<Text style={styles.tableTopTitle}>Rise</Text>} ></GraphRow>
                <GraphRow title={'Base'} base={0} fall={0} rise={0} ></GraphRow> 
                <GraphRow title={'Utilisation'} base={0} fall={0} rise={0} ></GraphRow> 
                <GraphRow title={'Increased Bench Height'} base={0} fall={0} rise={0} ></GraphRow> 
                <GraphRow title={'Sandvik Tooling'} base={0} fall={0} rise={0} ></GraphRow> 
                <GraphRow title={'Grand Total'} base={0} fall={0} rise={0} ></GraphRow> 
                
                <ResultGraph base={100} util={200} bench={300} tooling={400} total={500} ></ResultGraph>
                <View style={styles.rowStyle}>
                <Text style = {styles.graphInputTitle}>Base</Text>
                <Text style = {styles.graphInputTitle}>Utilisation</Text>
                <Text style = {styles.graphInputTitle}>Increased Bench Height</Text>
                <Text style = {styles.graphInputTitle}>Sandvik Tooling</Text>
                <Text style = {styles.graphInputTitle}>Grand Total</Text>
                </View>
                </Card>
                <Card>
                    <Card.Title style={styles.mainCardTitles}>TONNES PER MONTH</Card.Title>
                    <Card.Divider/>

                <GraphRow title={''} base={<Text style={styles.tableTopTitle}>Base</Text>} fall={<Text style={styles.tableTopTitle}>Fall</Text>} rise={<Text style={styles.tableTopTitle}>Rise</Text>} ></GraphRow>
                <GraphRow title={'Base'} base={0} fall={0} rise={0} ></GraphRow> 
                <GraphRow title={'Utilisation'} base={0} fall={0} rise={0} ></GraphRow> 
                <GraphRow title={'Increased Bench Height'} base={0} fall={0} rise={0} ></GraphRow> 
                <GraphRow title={'Sandvik Tooling'} base={0} fall={0} rise={0} ></GraphRow> 
                <GraphRow title={'Grand Total'}  base={0} fall={0} rise={0} ></GraphRow> 

                <ResultGraph base={100} util={200} bench={300} tooling={400} total={50} ></ResultGraph>
                <View style={styles.rowStyle}>
                <Text style = {styles.graphInputTitle}>Base</Text>
                <Text style = {styles.graphInputTitle}>Utilisation</Text>
                <Text style = {styles.graphInputTitle}>Increased Bench Height</Text>
                <Text style = {styles.graphInputTitle}>Sandvik Tooling</Text>
                <Text style = {styles.graphInputTitle}>Grand Total</Text>
                </View>
                </Card>

                <View>
                        <Button 
                        //type='outline'
                        title='EDIT CALCULATION INPUTS'
                        style={{ marginTop: '5%', width: '80%', 
                            alignSelf: 'center', justifyContent: 'center',}}
                        titleStyle={{fontSize:20, fontWeight:'bold'}}
                        buttonStyle={{backgroundColor:'#3f8efc'}}
                        onPress={pressHandler}
                        />
                 </View>

            </ScrollView>

      </View>
    )
};
Calculator.propTypes = {
    D7 : PropTypes.number,
    D4 : PropTypes.number,
    D5 : PropTypes.number,
    D6 : PropTypes.number,
    D8 : PropTypes.number,

    D12 : PropTypes.number,
    D13 : PropTypes.number,
    D14 : PropTypes.number,
    D15 : PropTypes.number,
    D16 : PropTypes.number,

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

    J10 : PropTypes.number,
    J11 : PropTypes.number,
    J12 : PropTypes.number,
    J13 : PropTypes.number,
    J14 : PropTypes.number,

    K10 : PropTypes.number,
    K11 : PropTypes.number,
    K12 : PropTypes.number,
    K13 : PropTypes.number,
    K14 : PropTypes.number,

    L10 : PropTypes.number,
    L11 : PropTypes.number,
    L12 : PropTypes.number,
    L13 : PropTypes.number,
    L14 : PropTypes.number,

    // M10 : PropTypes.number,
    // M11 : PropTypes.number,
    // M12 : PropTypes.number,
    // M13 : PropTypes.number,
    // M14 : PropTypes.number,
  };
export default Calculator;