import React, { useState } from 'react'
import { render } from 'react-dom';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { BarChart, Grid , XAxis} from 'react-native-svg-charts'


const ResultGraph = ( {base, util, bench, tooling, total}) => {

    const data = [base, util, bench, tooling, total]
    const fill = 'rgb(134, 65, 244)'

    return (
        <View
        style={{
            height: 150,
            flexDirection: 'row'
        }}>

        <BarChart
            style={{ flex: 1 }}
            data={data}
            svg={{ fill}}
            contentInset={{ top: 10, bottom: 10, left: 10, right: 10 }}
            spacingInner={0.65}
            spacingOuter={0}>
            <Grid direction={Grid.Direction.BOTH} />
        </BarChart>
        </View>
    );
    

}
export default ResultGraph;  