import React, { useState } from 'react'
import {StyleSheet, TextInput, Button, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'

const Calculator = () => {
    const [elevation, setElevation] = useState('');
    const [holeDepth, setHoleDepth] = useState(null);
    const [customerName, setCustomerName] = useState('');

    const ftToMeters = (ft) => {
        return ft * 0.3048;
    }

    const onTypeElevationFt = (ft) => {
        setElevation( ftToMeters(ft) );
    }

    const pressHandler = () =>{
        console.log(elevation)
        Alert.alert('Elevation: ', String(elevation))
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

                <View>
                    <View style={styles.rowStyle}>
                        <Text>Elevation</Text>
                        <View>
                            <View style={styles.rowStyle}>
                                <TextInput
                                    keyboardType='numeric'
                                    style={styles.input}
                                    onChangeText={(text) => setElevation(text)}
                                />
                                <Text>m</Text>
                            </View>

                            <View style={styles.rowStyle}>
                                <TextInput
                                    keyboardType='numeric'
                                    style={styles.input}
                                    onChangeText={text => onTypeElevationFt(text)}
                                />
                                <Text>ft</Text>
                            </View>


                        </View>
                    </View>
                    
                </View>

                <Text> Enter hole depth</Text>
                    <TextInput
                    keyboardType='numeric'
                    style={styles.input}
                    onChangeText={text => setHoleDepth(text)}
                    
                    />
                    <View style={styles.buttonContainer}>
                        <Button title='Calculate' onPress={pressHandler}/>
                    </View>
            </ScrollView>

        
        
      </View>
    )
};
export default Calculator;