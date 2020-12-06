import React, { useState } from 'react'
import { render } from 'react-dom';
import {StyleSheet, Dimensions, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { BarChart, Grid , XAxis} from 'react-native-svg-charts'

const windowWidth = Dimensions.get('window').width;

const ResultGraph = ( {base, util, bench, tooling, total}) => {

    const data = [base, util, bench, tooling, total]
    const fill = '#e5e5e5'

    return (
        <View
        style={{
            //width: windowWidth*0.85,
            height: 150,
            flexDirection: 'row', 
            paddingVertical: 10
        }}>

        <BarChart
            style={{ flex: 1 }}
            data={data}
            svg={{fill}}
            contentInset={{ top: 10, bottom: 10,  }}
            spacingInner={0.3}
            spacingOuter={0}>
            <Grid direction={Grid.Direction.HORIZONTAL} />
        </BarChart>
        </View>
    );
    

}
export default ResultGraph;  