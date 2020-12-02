import React, { useState, useEffect } from 'react'
import {StyleSheet, Dimensions, TextInput, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import GenericInput from './genericInput'
import GenericOutput from './genericOutput'
import GenericDropdown from './genericDropdown'
import RigRow from './rigRow.js'
import { Header, Button } from 'react-native-elements';
import {tonHoleCalculation, drillingIndexCalculation, H10_func} from './calculatorFunctions';
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
    const [modelItems, setItems] = useState([ 'D245S', 'D25KS', 'D45KS "34"', 'D45KS "40"', 'D50KS "34"', 'D50KS "40"', 'D55SP', 'D75KX', 'DR410i MP', 'DR410i SP', 'DR412i MP', 'DR412i SP', 'D90KS', 'D']);
    let controller;


    //Customer Mine Data
    const [D3, setD3] = useState(() => {return '7 7/8'});
    const [D4, setD4] = useState(() => {return 5.5})
    const [D5, setD5] = useState(() => {return 6.1})
    const [D6, setD6] = useState(() => {return 1.2})
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
    
    const [D12, setD12] = useState(872321)
    const [D13, setD13] = useState(685)
    const [D14, setD14] = useState(85093)
    const [D15, setD15] = useState(511)
    const [D16, setD16] = useState(21.5)
    
    
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

    //DrillingCalc Rotary Outputs

    
    //DrillingCalc DTH Outputs

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
            <GenericDropdown title={'drop'} options={modelItems} setFunction={setValue} unit={'Rig'}/> 
            <GenericInput title={'Rock UCS'} val={temp} setFunction={setRockUCS} unit={'MPa'}/>
            <GenericDropdown title={'Fracturizaton'} options={modelItems} setFunction={setValue} unit={'Rig'}/> 
            <GenericInput title={'Pipe Size'} val={pipeSize} setFunction={setPipeSize} unit={'F'}/>
            <GenericInput title={'Hole Depth'} val={holeDepth} setFunction={setRigModel} unit={'F'}/>

            <ScrollView style= {{width: "100%", backgroundColor: '#fff', flex: 1, padding: 12}}>
            <View style={{ flex: 100, backgroundColor: '#fff' }}>
                <Text style = {styles.sectionTitle}>Choose a Model</Text>
                <View style={{borderBottomColor: '#000', borderBottomWidth: 3, }}  />
                <RigRow model={'Hi'} dth={true} rotary={true} index={1}/>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#f5f5f5' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#f5f5f5' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#f5f5f5' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#f5f5f5' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#f5f5f5' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#f5f5f5' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <Text style = {styles.inputTitle}>Hey There</Text>
                </View>
            </View>
            </ScrollView>

            <View style={{borderBottomColor: '#fff', borderBottomWidth: 3, marginTop:15}}  />
            <Text style = {styles.sectionTitle}>Customer Mine Data</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />
            <GenericInput title={'Bit'} val={D3} setFunction={setD3} unit={'in'}></GenericInput>
            <GenericInput title={'Burden'} val={D4.toString()} setFunction={setD4} unit={'m'}></GenericInput>
            <GenericInput title={'Spacing'} val = {D5.toString()} setFunction={setD5} unit={'m'}></GenericInput>
            <GenericInput title={'Sub-Drilling'} val={D6} setFunction={setD6} unit={'m'}></GenericInput>
            <GenericInput title={'Bench'} val={D7.toString()} setFunction={setD7} unit={'m'} ></GenericInput>
            <GenericInput title={'Rock Density'} val={D8.toString()} setFunction={setD8} unit={'Ton/m3'}></GenericInput>
            <GenericInput title={'Rock Density'} val={D9} setFunction={setD9} unit={'UCS'}></GenericInput>
            <GenericOutput title='Drilling Index' val={D10} unit='Ton/m'></GenericOutput>
            <GenericOutput title={'Ton/Hole'} val={D11} unit={'Ton'}></GenericOutput> 
            <GenericInput title={'Target Production T/Month'} val={D12.toString()} setFunction={setD12} unit={'T/Month'}></GenericInput>
            <GenericInput title={'# of Holes Drilled/Unit/Month'} val={D13.toString()} setFunction={setD13} unit={'Holes/unit/month'}></GenericInput>
            <GenericInput title={'M/Month'} val={D14.toString()} setFunction={setD14} unit={'M/month'}></GenericInput>
            <GenericInput title={'Utilized Hours'} val={D15.toString()} setFunction={setD15} unit={'hours'}></GenericInput>
            <GenericInput title={'Current Pen Rate'} val={D16.toString()} setFunction={setD16} unit={'Pen Rate'}></GenericInput> 

            <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />
            <Text style = {styles.sectionTitle}>DTH</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />

            <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />
            <Text style = {styles.sectionTitle}>Rotary</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  /> 

            <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />
            <Text style = {styles.sectionTitle}>WOB</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  /> 

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