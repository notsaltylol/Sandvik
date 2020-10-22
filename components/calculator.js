import React, { useState } from 'react'
<<<<<<< HEAD
import {StyleSheet, TextInput, Button, ScrollView, Alert, Text, SafeAreaView} from 'react-native'



const Calculator = () => {
    
    return(
        <ScrollView>
            <Text>Hi, Im calc</Text>

        </ScrollView>
=======
import {StyleSheet, TextInput, Button, View, Alert, Text, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import styles from '../styles.js'

const Calculator = () => {
    const [holeDiameter, setHoleDiameter] = useState(null);
    const [holeDepth, setHoleDepth] = useState(null);

    const pressHandler = () =>{
        Alert.alert('Attempting to calculate something')
      }
    return(
        
        <View styles={styles.container}>
            <ScrollView>
                <Text> Enter hole diameter</Text>
                <TextInput
                    keyboardType='numeric'
                    style={styles.input}
                    onChangeText={text => setHoleDiameter(text)}
                />

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
>>>>>>> enterdata
    )
};
export default Calculator;