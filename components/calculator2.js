import React, { useState, useEffect } from 'react'
import {StyleSheet, Dimensions, TextInput, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import GenericInput from './genericInput'
import GenericOutput from './genericOutput'
import GenericDropdown from './genericDropdown'
import RigRow from './rigRow.js'
import RigList from './rigList.js'
import { Header, Button, Divider, Card } from 'react-native-elements';
import {ProdEst} from './calculatorFunctions';
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

const Calculator2 = ({navigation}) => {
    const [customerName, setCustomerName] = useState(() => {return ''})
    const [projectName, setProjectName] = useState(() => {return ''})
    const [date, setDate] = useState(() => {return ''})
    const [selectedModel, setSelectedModel] = useState({name:"", type:""});

    const [elevation, setElevation] = useState();
    const [temp, setTemp] = useState();
    const [pipeSize, setPipeSize] = useState();
    const [holeDepth, setHoleDepth] = useState();
    const [rockUCS, setRockUCS] = useState();

    
    //Customer Mine Data
    const [D3, setD3] = useState(() => {return 229});
    const [D4, setD4] = useState(() => {return 5.5})
    const [D5, setD5] = useState(() => {return 6.1})
    const [D6, setD6] = useState(() => {return 1.2})
    const [D7, setD7] = useState(() => {return 12})
    const [D8, setD8] = useState(() => {return 2.75})
    const [D9, setD9] = useState(() => {return 157})
    
    const [D10, setD10] = useState(ProdEst["D10"](D4, D5, D8))
    useEffect(() => {
        setD10(ProdEst["D10"](D4, D5, D8))
    }, [D4, D5, D8])
    
    const [D11, setD11] = useState(ProdEst["D11"](D7, D4, D5, D8));
    useEffect(()=> {
        setD11(ProdEst["D11"](D7, D4, D5, D8));
    }, [D7, D4, D5, D8])
    

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

    
    
    const [D12, setD12] = useState(872321)
    const [D13, setD13] = useState(685)
    const [D14, setD14] = useState(85093)
    const [D15, setD15] = useState(511)
    const [D16, setD16] = useState(D3/D4)//21.5

    const [J10, setJ10] = useState(550)
    const [K10, setK10] = useState(21.5)
    
    
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
    const [customerMineDone, setCustomerMineDone] = useState(() => {return false})
    

    const rot_instant_pen_mtr_per_hr = () => {
        const bit_size = D3/25.4
        const rock_UCS = D9 //units in MPa
        const rig = rigs.find((rig)=>rig.name==selectedModel.name)
        const hole_depth_ft = 20
        const E7 = 100
        const _D7 = (hole_depth_ft-rig.RotaryHeadTravel.SinglepPass-(rig.RotaryHeadTravel.PipeLength*rig.RotaryHeadTravel.LoaderCap)>0?"Too Deep":E7)
        const J7 = 2000 //temp pipe weight
        const I7 = (string(_D7)==="Too Deep"?(J7*rig.RotaryHeadTravel.LoaderCap):J7*(_D7<1?1:_D7+1))
        const J9 = rig.RigPulldown.MaxPulldown/MaxFeedPressure
        const E18 = rock_UCS/0.00689457
        const Rotary_X5 = rig.RotaryBit[4]/25.4
        console.log(Rotary_X5)
        const F9 = rig.RigPulldown.RHWeight + I7 + J9
        const E19 = (2.18*F9*bit_size)/(0.2*E18*(Rotary_X5)^0.9*(E18/10000))
        const E31 = E19/3.28083
        setD16(E31/60)
        if(D16 == "undefined") setD16(D3/D4)
    }

    const dth_instant_pen_mtr_per_hr = () => {
        const bit_size = D3/25.4
        const rock_UCS = D9 //units in MPa
        //const rig = rigs.find((rig)=>rig.name==selectedModel.name)
        const hole_depth_ft = 20
        const M68 = [100.70, 69.11, 44.56, 26.29]
        const dth_M64 = () => {
            if(rock_UCS<=100) return 100.70
            else if(rock_UCS<=200) return 69.11
            else if(rock_UCS<300) return 44.56
            else return 26.29
        }
        const O27 = dth_M64()
        const O20 = O27*3.28084
        const R31 =  O20/3.28083
        setD16(R31)
        if(D16 == "undefined") setD16(D3/D4)
    }
    const update = ()=>{
        //setD3(val)
        setSelectedModel({name: '', type: ''})
        setModelList([...sortModels()])
        setModelList([...sortModels()])
        if(modelList.length==0){
            setCustomerMineDone(false);
            Alert.alert("No models are available")
        }
        else setCustomerMineDone(true);
        console.log(modelList.length)
    }

    const pressHandler = () =>{
        //setIsCalculated(true)
        if (selectedModel.name != ''){
            selectedModel.selectedModel == 'Rotary'?rot_instant_pen_mtr_per_hr():dth_instant_pen_mtr_per_hr();
            let obj = {model: selectedModel, customerName: customerName, projectName:projectName, date:date, D3: D3, D4: D4, D5: D5, D6:D6, D7: D7, D8: D8, D9: D9, D10: D10, D11: D11, D12: D12, D13:D13, D14:D14, D15:D15, D16:D16, J10:J10, K10:K10}
            navigation.navigate('RESULTS', obj);
        }
        else Alert.alert("Select Rig First!");
    }
    
    //console.log(selectedModel)
    return(
        <View style={styles.container}>
            <Header
                    backgroundColor='#80a1d4'
                    placement="center"
                    centerComponent={{ text: 'RIG CALCULATOR', style: { color: '#fff', fontSize: 20, fontWeight: 'bold'} }}
                    />
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={false} directionalLockEnabled={true} style= {{width: "100%", backgroundColor: '#fff', flex: 1, padding: 12}}>
            <Card>
                <Card.Title style={styles.mainCardTitles}>RIG CALCULATIONS</Card.Title>
                <Card.Divider/>
                <GenericInput title={'Customer Name'} val={customerName} setFunction={setCustomerName} updateFunction={update} unit={''} numeric={'default'}/>
                <GenericInput title={'Project Name'} val={projectName} setFunction={setProjectName} updateFunction={update} unit={''} numeric={'default'}/>
                <GenericInput title={'Date'} val={date} setFunction={setDate} updateFunction={update} unit={''} numeric={'default'}/>
            </Card>
            <Card>
                <Card.Title style={styles.mainCardTitles}>CUSTOMER MINE DATA</Card.Title>
                <Card.Divider/>
                <GenericInput title={'Bit'} val={D3} setFunction={setD3} /*updateFunction={update}*/ unit={'mm'}></GenericInput>
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
                <GenericInput title={'Target Per Rig Hours'} val={J10.toString()} setFunction={setJ10} unit={'hours'}></GenericInput>
                <GenericInput title={'Target Per Rig M/Month'} val={K10.toString()} setFunction={setK10} unit={'M/month'}></GenericInput>
                <GenericInput title={'Current Pen Rate'} val={(Math.round(D16)).toString()} setFunction={setD16} unit={'Pen Rate'}></GenericInput>
            </Card>

            <View>
                <Button 
                //type='outline'
                title='GENERATE MODELS'
                style={{ marginTop: '5%', width: '80%', 
                    alignSelf: 'center', justifyContent: 'center',}}
                titleStyle={{fontSize:25, fontWeight:'bold'}}
                buttonStyle={{backgroundColor:'#3f8efc'}}
                onPress={()=>{update()}}
                />
            </View>
                {customerMineDone?<Card>
                    <Card.Title style={styles.mainCardTitles}>CHOOSE A MODEL</Card.Title>
                    <Card.Divider/>
                    <RigList rigs={modelList} setSelectedModel={setSelectedModel} selectedModel={selectedModel} setModelList={setModelList} modelList={modelList}/>
                </Card>:null}
            <View>
                <Button 
                //type='outline'
                title='CALCULATE'
                style={{ marginBottom: '5%', marginTop: '5%', width: '60%', 
                    alignSelf: 'center', justifyContent: 'center',}}
                titleStyle={{fontSize:25, fontWeight:'bold'}}
                buttonStyle={{backgroundColor:'#3f8efc'}}
                onPress={pressHandler}
                />
            </View>
            </ScrollView>
      </View>
    )
};
export default Calculator2;