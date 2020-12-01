import React, { useState } from 'react'
import {StyleSheet, Dimensions, TextInput, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import GenericInput from './genericInput'
import GenericDropdown from './genericDropdown'
import { Header, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

rigSpec = {
    D245S: {
        pipe:[114,127,140,152],
    },
    D25KS:{
        pipe:[89, 102, 114, 127,140],
    },
    D45KS_34:{
        pipe:[114,127,140,152, 165, 179],
    },
    D45KS_40:{
        pipe:[114,127,140,152, 165, 179],
    },
    D50KS_34:{
        pipe:[114,127,140,152, 165, 179],
    },
    D50KS_40:{
        pipe:[114,127,140,152, 165, 179],
    },
    D55SP:{
        pipe:[152,159,165,178,194],
    },
    D75KX:{
        pipe:[114,127,140,152],
    },
    DR410iMP:{
        pipe:[114,127,140,152],
    },
    DR410iSP:{
        pipe:[114,127,140,152],
    },
    DR412iMP:{
        pipe:[114,127,140,152],
    },
    DR412iSP:{
        pipe:[114,127,140,152],
    },
    D90KS:{
        pipe:[114,127,140,152],
    },
    D90SP:{
        pipe:[114,127,140,152],
    },
    _1190E:{
        pipe:[114,127,140,152],
    },
    _1190ESP:{
        pipe:[114,127,140,152],
    },
    DR416i:{
        pipe:[114,127,140,152],
    },
}


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
            <Text style = {styles.sectionTitle}>Rig Calculations</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />
            <GenericInput title={'Customer Name'} val={customerName} setFunction={setCustomerName} unit={''}/>
            <GenericInput title={'Project Name'} val={projectName} setFunction={setProjectName} unit={''}/>
            <GenericInput title={'Date'} val={date} setFunction={setDate} unit={''}/>
            <GenericInput title={'Elevation'} val={elevation} setFunction={setElevation} unit={'ft'}/>
            <GenericInput title={'Ambient Temp'} val={temp} setFunction={setTemp} unit={'F'}/>
            <GenericDropdown title={'drop'} options={items} setFunction={setValue} unit={'Rig'}/>   

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