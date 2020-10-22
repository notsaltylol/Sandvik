import React, { useState } from 'react'
import {StyleSheet, TextInput, Button, View, Alert, Text} from 'react-native'
import styles from '../styles.js'

const Calculator = () => {
    const [holeDiameter, setHoleDiameter] = useState(null);
    const [holeDepth, setHoleDepth] = useState(null)
    return(
        <View styles={styles.container}>
          <Text> Enter hole diameter</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setHoleDiameter(text)}
          />

          <Text> Enter hole depth</Text>
            <TextInput
            style={styles.input}
            onChangeText={text => setHoleDepth(text)}
            
            />

        
        
      </View>
    )
};
export default Calculator;