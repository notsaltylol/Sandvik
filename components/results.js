import React, { useState } from 'react'
import {StyleSheet, Dimensions, TextInput, View, Alert, Text, ScrollView, Box, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import GenericInput from './genericInput'
import GenericDropdown from './genericDropdown'
import { Header, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';


const windowWidth = Dimensions.get('window').width;

const Results = () => {
    const [customerName, setCustomerName] = useState(() => {return ''})
    const [projectName, setProjectName] = useState(() => {return ''})
    const [date, setDate] = useState(() => {return ''})
    const [elevation, setElevation] = useState(() => {return ''})
    const [temp, setTemp] = useState(() => {return ''})
    const [rockUCS, setRockUCS] = useState(() => {return ''})
    const [fracturization, setFracturization] = useState(() => {return ''}) //options
    const [pipeSize, setPipeSize] = useState(() => {return ''}) //options
    const [holeDepth, setRigModel] = useState(() => {return ''}) //options

    const [value, setValue] = useState(null);
    const [items, setItems] = useState([ 'D245S', 'D25KS']);
    let controller;
    
    //DTH
    const [compDTH, setCompDTH] = useState(() => {return ''})//options
    const [WAPDTH, setWAPDTH] = useState(() => {return ''})//options
    const [bitDTH, setBitDTH] = useState(() => {return ''})//options
    const [estWeightOnBitDTH, setEstWeightOnBitDTH] = useState(() => {return ''})
    const [instaPenDTH, setInstaPenDTH] = useState(() => {return ''})
    const [netPenDTH, setNetPenDTH] = useState(() => {return ''})
    const [estCycleTimeDTH, setEstCycleTimeDTH] = useState(() => {return ''})

    //Rotary
    const [pulldownROT, setpulldownROT] = useState(() => {return ''})
    const [compROT, setCompROT] = useState(() => {return ''})//options
    const [bitROT, setBitROT] = useState(() => {return ''})//options
    const [RPMROT, setRPMROT] = useState(() => {return ''})
    const [estWeightOnBitROT, setEstWeightOnBitROT] = useState(() => {return ''})
    const [instaPenROT, setInstaPenROT] = useState(() => {return ''})
    const [netPenROT, setNetPenROT] = useState(() => {return ''})
    const [estCycleTimeROT, setEstCycleTimeROT] = useState(() => {return ''})

    // const onTypeElevationFt = (ft) => {
    //     setElevation( ftToMeters(ft) );
    // }

    const pressHandler = () =>{
        Alert.alert(`Pressed`)
      }
    return(
        <View style={styles.container}>
            <Header
                    placement="left"
                    //leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'View Results', style: { color: '#fff', fontSize: 20, fontWeight: 'bold'} }}
                />
            <ScrollView style= {{width: "100%", backgroundColor: '#add8e6', flex: 1, padding: 5}}>
            <View style={{ flex: 100, backgroundColor: '#fff' }}>
                <Text style = {styles.resultsHeading}>Here are your results:        </Text>
                <View style={{borderBottomColor: '#add8e6', borderBottomWidth: 3, }}  />
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#ddd' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#ddd' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#ddd' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#ddd' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#ddd' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#ddd' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#ddd' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#ddd' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#ddd' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#ddd' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#ddd' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#ddd' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#ddd' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#ddd' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
            </View>
            </ScrollView>
      </View>
    )
};
export default Results;