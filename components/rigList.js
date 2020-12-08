import React, { useState } from 'react';
import {StyleSheet, TextInput, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Button} from 'react-native-elements';
import styles from '../styles.js'
import rigs from '../data/rigspec.json'

const RigList = ({rigs}) => {
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

		let buttonColorRot = '#D1D1D1'
		let buttonColorDTH = '#D1D1D1'
		if(selectedModel.name == model.name){
			if(selectedModel.type == 'dth'){
				buttonColorDTH = '#FF9436'
			}
			if(selectedModel.type == 'rot'){
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
					<Button title='DTH' style={{ marginTop: '5%'}} titleStyle={{fontWeight:'bold'}} buttonStyle={{width:'95%', backgroundColor: buttonColorDTH}} onPress={()=>selectHandler(model, 'dth')} />
					</View>
	
					<View style={{ flex: 75}}>
					<Button title='Rotary' style={{ marginTop: '5%'}} titleStyle={{fontWeight:'bold'}} buttonStyle={{backgroundColor: buttonColorRot}} onPress={()=>selectHandler(model, 'rot')} />
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
					<Button title='DTH' style={{ marginTop: '5%'}} titleStyle={{fontWeight:'bold'}} buttonStyle={{width:'95%', backgroundColor: buttonColorDTH}} onPress={()=>selectHandler(model, 'dth')} />
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
					<Button title='Rotary' style={{ marginTop: '5%'}} titleStyle={{fontWeight:'bold'}} buttonStyle={{backgroundColor: buttonColorRot}} onPress={()=>selectHandler(model, 'rot')} />
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