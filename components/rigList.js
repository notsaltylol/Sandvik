import React, { useState } from 'react';
import RigRow from './rigRow.js'
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';
import styles from '../styles.js'


const RigList = ({modelList}) => {
	var models = [];
	
	/*const [modss, changeSelected] = useState((newMod, sel)=>{
		let mods = modss;
        for(let i = 0; i < mods.length; i++){
            mods[i].selected = 'none';
        }
        for(let i = 0; i < mods.length; i++){
            if(mods[i].name == newMod){
                mods[i].selected = sel;
            }
		}
		return mods;
    }*/

	for(let i = 0; i < modelList.length; i++){
		models.push(
            <RigRow model={modelList[i].name} dth={modelList[i].dth} rotary={modelList[i].rotary} selected={modelList[i].selected} index={i} mods={modelList}/>
		)
	}
	
	return (
		<View>
            {models}
		</View>
	);
}

export default RigList;