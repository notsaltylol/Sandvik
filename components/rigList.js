import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import styles from '../styles.js'
import rigs from '../data/rigspec.json'

const RigList = () => {

	const [modelList, setModelList]=useState(rigs);
	const [selectedModel, setSelectedModel] = useState({name:"", type:""});

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

		let buttonColorRot = '#000'
		let buttonColorDTH = '#000'
		if(selectedModel.name == model.name){
			if(selectedModel.type == 'dth'){
				buttonColorDTH = '#f00'
			}
			if(selectedModel.type == 'rot'){
				buttonColorRot = '#f00'
			}
		}

		if(model.dth && model.rotary){
			return(
				<View key={model.name} style={{ flexDirection: 'row', backgroundColor: rowColor}}>
					<View style={{ flex: 100 }}>
					<Text style = {styles.rigTitle}>{model.name}</Text>
					</View>
					<View style={{ flex: 75}}>
					<Button title='DTH' fontSize='8' color={buttonColorDTH} onPress={()=>selectHandler(model, 'dth')} />
					</View>
	
					<View style={{ flex: 75}}>
					<Button title='Rotary' fontSize='8' color={buttonColorRot} onPress={()=>selectHandler(model, 'rot')} />
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
					<Button title='DTH' fontSize='8' color={buttonColorDTH} onPress={()=>selectHandler(model, 'rot')} />
				</View>
				<View style={{ flex: 75, backgroundColor: '#fff'}}>
					
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
					<View style={{ flex: 75, backgroundColor: '#fff'}}>
					
					</View>
	
					<View style={{ flex: 75, borderRadius: 30}}>
					<Button title='Rotary' fontSize='8' color={buttonColorRot} onPress={()=>selectHandler(model, 'rot')} />
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