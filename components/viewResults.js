import React, { useState } from 'react'
import {StyleSheet, SafeAreaView, View, FlatList, Text} from 'react-native'



const Results = ({props}) => {

    const renderItem = ({item}) => {
        <View>
            <Text>{item.name}</Text>
        </View>
    }
    return(
        <SafeAreaView>
            <FlatList
                data = {props.results}
                renderItem = {renderItem}
            />
            
        </SafeAreaView>
    )
};
export default Results;