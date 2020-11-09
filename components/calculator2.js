import React, { useState } from 'react'
import {StyleSheet, TextInput, Button, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import GenericInput from './genericInput'
import {ftToMeters, metersToFeet} from '../mathFunctions.js'
import { Header } from 'react-native-elements';


const Calculator2 = () => {
    const [customerName, setCustomerName] = useState(() => {return ''})
    const [projectName, setProjectName] = useState(() => {return ''})
    const [date, setDate] = useState(() => {return ''})
    const [elevation, setElevation] = useState(() => {return ''})
    const [temp, setTemp] = useState(() => {return ''})
    const [rockUCS, setRockUCS] = useState(() => {return ''})
    const [fracturization, setFracturization] = useState(() => {return ''}) //options
    const [pipeSize, setPipeSize] = useState(() => {return ''}) //options
    const [holeDepth, setRigModel] = useState(() => {return ''}) //options
    
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
                    centerComponent={{ text: 'Rig Calculator', style: { color: '#fff', fontSize: 20, fontWeight: 'bold'} }}
                />
            <ScrollView>
            <GenericInput title={'Customer Name'} val={customerName} setFunction={setCustomerName} unit={''}/>
            <GenericInput title={'Project Name'} val={projectName} setFunction={setProjectName} unit={''}/>
            <GenericInput title={'Date'} val={date} setFunction={setDate} unit={''}/>
            <GenericInput title={'Elevation'} val={elevation} setFunction={setElevation} unit={'m'}/>
            <GenericInput title={'Ambient Temp'} val={temp} setFunction={setTemp} unit={'C'}/>
            

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
export default Calculator2;