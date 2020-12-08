import React, { useState, useEffect } from 'react'
import {StyleSheet, Dimensions, TextInput, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import GenericInput from './genericInput'
import GenericOutput from './genericOutput'
import GenericDropdown from './genericDropdown'
import RigRow from './rigRow.js'
import RigList from './rigList.js'
import { Header, Button, Divider, Card } from 'react-native-elements';
import {tonHoleCalculation, drillingIndexCalculation, H10_func} from './calculatorFunctions';
import { LinearGradient } from 'expo-linear-gradient';
import rigs from '../data/rigspec.json'


//Rotary Instant Pen
//=IF(OR('Rig Spec'!C4=4,'Rig Spec'!C4=3),"",IF($AU$10,DrillingCalc!E31/60,DrillingCalc!G31/60))
// Drilling Calc E31 = E19/3.28083
// Drilling Calc G31 = E31/0.3048
// Drilling Calc E19 = SUM((2.18*F9*Calculator!L33)/(0.2*E18*(Rotary!X5)^0.9*(E18/10000)))
// Drilling Calc F9 = SUM('Rig Spec'!I28+I7)+J9
// Calculator L33 = (input) Bit size 
// Drilling Calc E18 = Calculator!K17/0.00689457
// Calculator K17 = (input) Rock UCS
// Rotary X5 = Rotary Bit in mm / 25.4
// Rig Spec I28 = Rotary Rig PullDown RH Weight
// Drilling Calc I7 =IF(D7="Too Deep", SUM(J7*'Rig Spec'!M49),J7*IF(D7<1,1,D7+1))

//DTH Instant Pen 
//=IF(OR('Rig Spec'!C4=11,'Rig Spec'!C4=12,'Rig Spec'!C4=13,'Rig Spec'!C4=14,'Rig Spec'!C4=15,'Rig Spec'!C4=5,'Rig Spec'!C4=6,'Rig Spec'!C4=16),"",IF($AU$10,DrillingCalc!R31/60,DrillingCalc!T31/60))
//


const windowWidth = Dimensions.get('window').width;

const Calculator2 = () => {
    const [customerName, setCustomerName] = useState(() => {return ''})
    const [projectName, setProjectName] = useState(() => {return ''})
    const [date, setDate] = useState(() => {return ''})


    
    //Customer Mine Data
    const [D3, setD3] = useState(() => {return 406});
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
    
    
    const sortModels = () =>{
        const models = []
        for(const model of rigs){
            if(model.RotaryBit.includes(parseInt(D3))){
                models.push(model)
            }
        }
        return models
    }
    const [modelList, setModelList] = useState([...sortModels()]);
    

    const bit_size = D3/25.4
    const rock_UCS = D9 //units in MPa
    const rig = rigs[0]
    const hole_depth_ft = 20
    const rot_instant_pen_mtr_per_hr = () => {
        const E7 = 1
        const D7 = (hole_depth_ft-rig.RotaryHeadTravel.SinglepPass-(rig.RotaryHeadTravel.PipeLength*rig.RotaryHeadTravel.LoaderCap)>0?"Too Deep":E7)
        const J7 = 2000 //temp pipe weight
        const I7 = (string(D7)==="Too Deep"?(J7*rig.RotaryHeadTravel.LoaderCap):J7*(D7<1?1:D7+1))
        const J9 = rig.RigPulldown.MaxPulldown/MaxFeedPressure
        const E18 = rock_UCS/0.00689457
        const Rotary_X5 = rig.RotaryBit[4]/25.4
        const F9 = rig.RigPulldown.RHWeight + I7 + J9
        const E19 = (2.18*F9*bit_size)/(0.2*E18*(Rotary_X5)^0.9*(E18/10000))
        const E31 = E19/3.28083
        return E31/60
    }

    const dth_instant_pen_mtr_per_hr = () => {
        M68 = [100.70, 69.11, 44.56, 26.29]
        const dth_M64 = () => {
            if(rock_UCS<=100) return 100.70
            else if(rock_UCS<=200) return 69.11
            else if(rock_UCS<300) return 44.56
            else return 26.29
        }
        const O27 = dth_M64
        const O20 = O27*3.28084
        const R31 =  O20/3.28083
        return R31
    }
    const update = ()=>{
        console.log(sortModels())
        setModelList([...sortModels()])
    }

    return(
        <View style={styles.container}>
            <Header
                    backgroundColor='#80a1d4'
                    placement="center"
                    centerComponent={{ text: 'RIG CALCULATOR', style: { color: '#fff', fontSize: 20, fontWeight: 'bold'} }}
                    />
            <ScrollView style= {{width: "100%", backgroundColor: '#fff', flex: 1, padding: 12}}>
            <Card>
                <Card.Title>RIG CALCULATIONS</Card.Title>
                <Card.Divider/>
                <GenericInput title={'Customer Name'} val={customerName} setFunction={setCustomerName} unit={''}/>
                <GenericInput title={'Project Name'} val={projectName} setFunction={setProjectName} unit={''}/>
                <GenericInput title={'Date'} val={date} setFunction={setDate} unit={''}/>
            </Card>
            <Card>
                <Card.Title>Customer Mine Data</Card.Title>
                <Card.Divider/>
                <GenericInput title={'Bit'} val={D3.toString()} setFunction={setD3} updateFunction={update} unit={'mm'}></GenericInput>
                <GenericInput title={'Burden'} val={D4.toString()} setFunction={setD4} unit={'m'}></GenericInput>
                <GenericInput title={'Spacing'} val = {D5.toString()} setFunction={setD5} unit={'m'}></GenericInput>
                <GenericInput title={'Sub-Drilling'} val={D6.toString()} setFunction={setD6} unit={'m'}></GenericInput>
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
            </Card>

            <Card>
                <Card.Title>CHOOSE A MODEL</Card.Title>
                <Card.Divider/>
                <View style={{ flex: 100, backgroundColor: '#fff' }}>
                    <RigList rigs={modelList}/>
                    {modelList.length==0?<Text centerComponent={true}>no models available</Text>:null}
                </View>
            </Card>

       
            {/*
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
                <RigList modelList={modelItems}/>
            </View>
            </ScrollView>


            <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />
            <Text style = {styles.sectionTitle}>DTH</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  />

            <View style={{borderBottomColor: 'black', borderBottomWidth: 0, }}  />
            <Text style = {styles.sectionTitle}>Rotary</Text>
            <View style={{borderBottomColor: 'black', borderBottomWidth: 3, }}  /> 

            <View style={{borderBottomColor: 'black', borderBottomWidth: 0, }}  />
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