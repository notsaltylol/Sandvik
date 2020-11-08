import React, { useState } from 'react'
import {StyleSheet, TextInput, Button, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'
import GenericTwoInput from './genericTwoInput'
import {ftToMeters, metersToFeet} from '../mathFunctions.js'
// import {readCell, openExcel} from '../Excel/excelFunctions.js'
// import RNFS from 'react-native-fs'
// import walker from 'react-native-fs-walker'

// const walk = walker(RNFS)
import * as FileSystem from 'expo-file-system';

const Calculator = () => {
    const [elevationMeters, setElevationMeters] = useState(() => {return '0'});
    const [elevationFt, setElevationFt] = useState(() => {return '0'});
    const [holeDepth, setHoleDepth] = useState(null);
    const [customerName, setCustomerName] = useState('');

    // const onTypeElevationFt = (ft) => {
    //     setElevation( ftToMeters(ft) );
    // }

    function openExcel(filePath){
        return new Promise( (resolve, reject) => {
            let error = false;
    
            
    
            if (!error){
                let workbook = new Excel.Workbook()
                workbook = workbook.xlsx.readFile(filePath); // replace question_39869739.xls with your file
                resolve(workbook)
            }
            else{
                reject();
            }
            
        });
    }
    
      function readCell(workbook){
        //console.log(typeof workbook)
        
    
        return new Promise( (resolve, reject) => { 
            let error = true;
            if (!error){
                let worksheet = workbook.getWorksheet('Summary'); // replace sheetname with actual sheet name
                const cell = worksheet.getRow('4').getCell('D').value
                resolve(cell);
            }
            else{
                reject('fail');
            }
        })
    }

    const pressHandler = () =>{
        //let result = readCell().then(() => {Alert.alert('Error')});
       
        const filePath = 'file://Production_estimator.xlsx'
        FileSystem.getInfoAsync(filePath).then((info) => {console.log(info)}).catch((err) => {console.log(err)})
        
        //  openExcel(filePath)
        //     .then( (workbook) => {readCell(workbook).then( function(result){console.log(result)} ) .catch( (message) => { Alert.alert(message) })} )
        //     .catch( (err) => {console.log('openExcel failed')})

        // RNFS.readFile(filePath, 'xlsx').then(res => {
        //     Alert.alert('success')
        // })
        // .catch(err => {
        //     console.log(err.message, err.code);
        // });
        // setTimeout(()=>{Alert.alert(`Elevation: ${String(elevationMeters)} ${String(elevationFt)} ${result}`)}, 3000);
        // Alert.alert(`Elevation: ${String(elevationMeters)} ${String(elevationFt)} `)

      }
    return(
        
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.rowStyle}>
                    <Text>Customer name:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => setCustomerName(text)}
                    />
                </View>

                <GenericTwoInput title={'Elevation'} val1={elevationMeters} val2={elevationFt} setFunction1={setElevationFt} setFunction2={setElevationMeters} func1={metersToFeet} func2={ftToMeters} unit1={'m'} unit2={'ft'}></GenericTwoInput>

                <Text> Enter hole depth</Text>
                    <TextInput
                    keyboardType='numeric'
                    style={styles.input}
                    onChangeText={text => setHoleDepth(text)}
                    
                    />
                    <View style={styles.buttonContainer}>
                        <Button title='Calculate' 
                        onPress={pressHandler}
                        />
                    <Text>{elevationMeters}</Text>
                    </View>
                    
            </ScrollView>

        
        
      </View>
    )
};
export default Calculator;