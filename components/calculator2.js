import React, { useState } from 'react'
import {StyleSheet, Dimensions, TextInput, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import GenericInput from './genericInput'
import GenericDropdown from './genericDropdown'
import {ftToMeters, metersToFeet} from '../mathFunctions.js'
import { Header, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';


const windowWidth = Dimensions.get('window').width;

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
                    centerComponent={{ text: 'Rig Calculator', style: { color: '#fff', fontSize: 20, fontWeight: 'bold'} }}
                />
            <ScrollView>
            <GenericInput title={'Customer Name'} val={customerName} setFunction={setCustomerName} unit={''}/>
            <GenericInput title={'Project Name'} val={projectName} setFunction={setProjectName} unit={''}/>
            <GenericInput title={'Date'} val={date} setFunction={setDate} unit={''}/>
            <GenericInput title={'Elevation'} val={elevation} setFunction={setElevation} unit={'ft'}/>
            <GenericInput title={'Ambient Temp'} val={temp} setFunction={setTemp} unit={'F'}/>
            <GenericDropdown title={'drop'} options={items} setFunction={setValue} unit={'rig'}/>   

            {/*<View>
                <LinearGradient colors={[ '#87cefa', '#4682b4', '#4169e1']}>
                    <Button title='Calculate' 
                    titleStyle={{fontWeight: '600', fontSize: windowWidth*.1, color: '#fff5ee'}}
                    // type='raised'
                    onPress={pressHandler}
                    />
                </LinearGradient>
            </View>*/}
                    
            </ScrollView>
      </View>
    )
};
export default Calculator2;