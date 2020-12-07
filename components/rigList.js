import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import styles from '../styles.js'
import rigs from '../data/rigspec.json'

const RigList = () => {

	const [modelList, setModelList]=useState(rigs);
	
	const [dthcolor,setDTH]=useState('#000');

	const [rotarycolor,setRotary]=useState('#000');
	
	const [selectedColor, setSelectedColor]=useState('#000');
    
    let color = '#f5f5f5';
    let selected = ''
    const dthHandler = (model) =>{
		Alert.alert("Selected DTH for " + model.name)
		console.log('dth')
		setModelList((modelList)=>{
			for(let i = 0; i < modelList.length; i++){
				modelList[i].selected = '#000';
			}
			for(let i = 0; i < modelList.length; i++){
				if(modelList[i].name == model.name){
					modelList[i].selected = '#f00';
				}
			}
			return modelList;
		})
    }

    const rotaryHandler = (model) =>{
		Alert.alert("Selected Rotary for " + model.name)
		console.log('rotary')
        setModelList((modelList)=>{
			for(let i = 0; i < modelList.length; i++){
				modelList[i].selected = '#000';
			}
			for(let i = 0; i < modelList.length; i++){
				if(modelList[i].name == model.name){
					modelList[i].selected = '#f00';
				}
			}
			return modelList;
		})
    }

	let i = 0
	const models = modelList.map((model)=> {
		var dthColor = dthcolor
		var rotaryColor = rotarycolor
		color = '#f5f5f5';
		if(i%2 == 0){
			color = '#fff';
		}
		i++;

		if(model.dth && model.rotary){
			return(
				<View key={model.name} style={{ flexDirection: 'row', backgroundColor: color}}>
					<View style={{ flex: 100 }}>
					<Text style = {styles.rigTitle}>{model.name}</Text>
					</View>
	
					<View style={{ flex: 100, backgroundColor: model.selected, borderRadius: 50}}>
					<Button title='DTH' fontSize='8' onPress={()=>dthHandler(model)} />
					</View>
	
					<View style={{ flex: 100, backgroundColor: model.selected, borderRadius: 50}}>
					<Button title='Rotary' fontSize='8' style={{backgroundColor:'black'}} onPress={()=>rotaryHandler(model)} />
					</View>
				</View>
			);
		}
		else if(model.dth){
			return(
			<View key={model.name} style={{ flexDirection: 'row', backgroundColor: color }}>
				<View style={{ flex: 100 }}>
				<Text style = {styles.rigTitle} >{model.name}</Text>
				</View>
	
				<View style={{ flex: 100, backgroundColor: model.selected}}>
					<Button title='DTH' fontSize='8' onPress={()=>dthHandler(model)} />
				</View>
				<View style={{ flex: 100, backgroundColor: '#fff'}}>
					
				</View>
	
			</View>
			);
		}
		else {
		return(
			<View key={model.name} style={{ flexDirection: 'row', backgroundColor: color }}>
					<View style={{ flex: 100}}>
					<Text style = {styles.rigTitle}>{model.name}</Text>
					</View>
					<View style={{ flex: 100, backgroundColor: '#fff'}}>
					
					</View>
	
					<View style={{ flex: 100, backgroundColor: model.selected, borderRadius: 30}}>
					<Button title='Rotary' fontSize='8' onPress={()=>rotaryHandler(model)} />
					</View>
			</View>
		);
		}
	})
	
	return (
		<View>
            {models}
		</View>
	);
}

export default RigList;