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

import {ProdEst} from './calculatorFunctions';
import RigList from './rigList.js'
import {WaterFall} from './waterfallFunctions'

const windowWidth = Dimensions.get('window').width;


const Calculator = ({navigation, route}/*{setIsCalculated}, {navigation, route}*/) => {
    let modelName = route.params.model.name + " " + "model of type " + route.params.model.type;

    const data = route.params
    const [D3, setD3] = useState(() => {return data.D3});
    const [D4, setD4] = useState(() => {return data.D4})
    const [D5, setD5] = useState(() => {return data.D5})
    const [D6, setD6] = useState(() => {return data.D6})
    const [D7, setD7] = useState(() => {return data.D7})
    const [D8, setD8] = useState(() => {return data.D8})
    const [D9, setD9] = useState(() => {return data.D9})
    //console.log(D7 + " " + D4 + " " + D5 + " " + D8)

    const [D10, setD10] = useState(ProdEst["D10"](D4, D5, D8))
    //console.log(D10)
    
    
    
    const [D11, setD11] = useState(ProdEst["D11"](D7, D4, D5, D8));
    
    const [D12, setD12] = useState(872321)
    // const [D13, setD13] = useState(685)
    // const [D14, setD14] = useState(85093)
    const [D15, setD15] = useState(511)
    const [D16, setD16] = useState(21.5)
    
    //Holes	Metres	Hours	m/hr	Total_Ton	% of Target


    const [J10, setJ10] = useState(data.J10);
    const [J11, setJ11] = useState(ProdEst["J11"](D15));
    const [J12, setJ12] = useState(ProdEst["J12"](WaterFall["B32"],WaterFall["B12"])); 
    const [J13, setJ13] = useState(J12)
    const [J14, setJ14] = useState(J12)

    const [N13, setN13] = useState(WaterFall["N13"])
    const [N14, setN14] = useState(WaterFall["I33"] (D6, D7));

    const [K10, setK10] = useState(data.K10);
    const [K11, setK11] = useState(D16);
    const [K12, setK12] = useState(D16);
    const [K13, setK13] = useState(D16);
    const [K14, setK14] = useState(ProdEst["K14"](K13,N14));

    const [I10, setI10] = useState(ProdEst["I10"](J10, K10));
    const [I11, setI11] = useState(ProdEst["I11"](J11, K11));
    const [I12, setI12] = useState(ProdEst["I12"](J12, K12));
    const [I13, setI13] = useState(ProdEst["I13"](J13,K13));
    const [I14, setI14] = useState(ProdEst["I14"](J14,K14));

    const [L10, setL10] = useState(D12);
    const [L11, setL11] = useState(921493);
    const [L12, setL12] = useState(316272);
    const [L13, setL13] = useState(347899);
    const [L14, setL14] = useState(364808);

    const [H10, setH10] = useState(ProdEst["H10"](L10, D11));
    const [H11, setH11] = useState(ProdEst["H11"](I11, D7, D6));
    const [H12, setH12] = useState(ProdEst["H12"](I12, D7, D6));
    const [H13, setH13] = useState(ProdEst["H13"](I13, D7, D6));
    const [H14, setH14] = useState(ProdEst["H14"](I14, D7, D6));

    const [M10, setM10] = useState('100%');
    const [M11, setM11] = useState('106%');
    const [M12, setM12] = useState('36%');
    const [M13, setM13] = useState('40%');
    const [M14, setM14] = useState('42%');

    

    // useEffect(()=> {
    //     states["D11"] = ProdEst["D11"](states["D7"], states["D4"], states["D5"], states["D8"]);
    // }, [states])

    // useEffect(() => {
    //     states["D10"] =ProdEst["D10"](states["D4"], states["D5"], states["D8"])
    // }, [states])

    // useEffect(()=> {
    //     states["L10"] = states["D12"] 
    // }, [states])
    
    // useEffect(()=> {
    //     states["H10"] =  ProdEst["H10"](states["L10"], states["D11"]) 
    // }, [states])

    // useEffect(() => {
    //     states["H11"] = ProdEst["H11"](states["I11"], states["D7"], states["D6"]) 
    // }, [states])

    // useEffect(()=> {
    //     states["I10"] =  ProdEst["I10"](states["J10"], states["K10"]) 
    // }, [states])

    // useEffect(()=> {
    //     setL10()
    // }, [])

    

    const pressHandler = () =>{
        //setIsCalculated(false)
        navigation.goBack()
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
             

             <Card>
                    <Card.Title style={styles.mainCardTitles}>SELECTED RIG MODEL</Card.Title>
                    <Card.Divider/>
                <View><Text style={styles.header}>{modelName}</Text></View>


                </Card>

                <Card>
                    <Card.Title style={styles.mainCardTitles}>ACTUAL PRODUCTION</Card.Title>
                    <Card.Divider/>
                             
                <TableRow isFirst = {false} title={''} holes={<Text style={styles.tableTopTitle}>Holes</Text>} metres={<Text style={styles.tableTopTitle}>Metres</Text>} 
                    hours={<Text style={styles.tableTopTitle}>Hours</Text>} 
                    setHours = {''} mhr={<Text style={styles.tableTopTitle}>M/Hr</Text>} setMhr = {''} 
                    totalTon = {<Text style={styles.tableTopTitle}>Total Ton</Text>} pctTarget = {<Text style={styles.tableTopTitle}>% Target</Text>}></TableRow> 
                <TableRow isFirst = {false}  title={'Target Per Rig'}    holes={H10} metres={I10} hours={J10.toString()} setHours={setJ10} mhr={K10.toString()}  setMhr={setK10} totalTon={L10} pctTarget={M10}></TableRow> 
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
                        style={{ marginBottom: '5%', marginTop: '5%', width: '80%', 
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