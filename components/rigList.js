import React, { useState } from 'react';
import RigRow from './rigRow.js'
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';
import styles from '../styles.js'


const RigList = ({modelList}) => {
    var models = [];

	for(let i = 0; i < modelList.length; i++){
		models.push(
            <RigRow model={modelList[i]} dth={true} rotary={true} index={i}/>
		)
	}
	
	return (
		<View>
            {models}
		</View>
	);
}

export default RigList;