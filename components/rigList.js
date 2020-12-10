import React, { useState } from 'react';
import {StyleSheet, TextInput, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Button} from 'react-native-elements';
import styles from '../styles.js'
import rigs from '../data/rigspec.json'

const RigList = ({rigs, setSelectedModel, selectedModel, setModelList, modelList}) => {
	//console.log(setSelectedModel)
	//const [modelList, setModelList]=useState(rigs);

	const selectHandler = (model, type)=>{
		setSelectedModel({name: model.name, type: type})
		setModelList((modelList)=>{
			for(let i = 0; i < modelList.length; i++){
				modelList[i].selectedType = '';
				if(modelList[i].name == model.name){
					modelList[i].selectedType = type;
				}
			}
			return modelList;
		})
	}

	let i = 0
	const models = modelList.map((model)=> {
		//var dthColor = dthcolor
		//var rotaryColor = rotarycolor
		let rowColor = '#f5f5f5';
		if(i%2 == 0){
			rowColor = '#fff';
		}
		i++;

		let buttonColorRot = '#FED8B1'
		let buttonColorDTH = '#FED8B1'
		if(selectedModel.name == model.name){
			if(selectedModel.type == 'DTH'){
				buttonColorDTH = '#FF9436'
			}
			if(selectedModel.type == 'Rotary'){
				buttonColorRot = '#FF9436'
			}
		}

		if(model.dth && model.rotary){
			return(
				<View key={model.name} style={{ flexDirection: 'row', backgroundColor: rowColor}}>
					<View style={{ flex: 100 }}>
					<Text style = {styles.rigTitle}>{model.name}</Text>
					</View>
					<View style={{ flex: 75}}>
					<Button title='DTH' style={{ marginTop: '5%'}} titleStyle={{fontWeight:'bold'}} buttonStyle={{margin: '5%', width:'95%', backgroundColor: buttonColorDTH}} onPress={()=>selectHandler(model, 'DTH')} />
					</View>
	
					<View style={{ flex: 75}}>
					<Button title='Rotary' style={{ marginTop: '5%'}} titleStyle={{fontWeight:'bold'}} buttonStyle={{margin: '5%', width:'95%', backgroundColor: buttonColorRot}} onPress={()=>selectHandler(model, 'Rotary')} />
					</View>
				</View>
			);
		}
		else if(model.dth){
			return(
			<View key={model.name} style={{ flexDirection: 'row', backgroundColor: rowColor}}>
				<View style={{ flex: 100 }}>
				<Text style = {styles.rigTitle} >{model.name}</Text>
				</View>
	
				<View style={{ flex: 75}}>
					<Button title='DTH' style={{ marginTop: '5%'}} titleStyle={{fontWeight:'bold'}} buttonStyle={{margin: '5%', width:'95%', backgroundColor: buttonColorDTH}} onPress={()=>selectHandler(model, 'DTH')} />
				</View>
				<View style={{ flex: 75, backgroundColor: rowColor}}>
					
				</View>
	
			</View>
			);
		}
		else {
		return(
			<View key={model.name} style={{ flexDirection: 'row', backgroundColor: rowColor }}>
					<View style={{ flex: 100}}>
					<Text style = {styles.rigTitle}>{model.name}</Text>
					</View>
					<View style={{ flex: 75, backgroundColor: rowColor}}>
					
					</View>
	
					<View style={{ flex: 75, borderRadius: 30}}>
					<Button title='Rotary' style={{ marginTop: '5%'}} titleStyle={{fontWeight:'bold'}} buttonStyle={{margin: '5%', width:'95%', backgroundColor: buttonColorRot}} onPress={()=>selectHandler(model, 'Rotary')} />
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