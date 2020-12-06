import React, { useState } from 'react';
import {StyleSheet, TextInput, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';
import {Button} from 'react-native-elements'


const Login = ({setIsSignedIn}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let isValid = false
    let success = 'login failed'
    
    const submit = () => {
        //event.preventDefault()
        users.forEach(user => {
            if (username === user.username && password === user.password){
                isValid = true
            }
        })
        if(isValid){
            setIsSignedIn(true)
        }
        else{
            Alert.alert('invalid')
        }
    }

    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Text style={styles.header}>SANDVIK</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    placeholder='username'
                    onChangeText = {username => setUsername(username)}
                    value = {username}
                />
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    placeholder='password' 
                    secureTextEntry={true}
                    onChangeText = {password => setPassword(password)}
                    value = {password}
                />
                <Button 
                title='LOGIN' 
                style={{ marginTop: '5%', width: '60%', 
                            alignSelf: 'center', justifyContent: 'center',}}
                titleStyle={{fontSize:25, fontWeight:'bold'}}
                buttonStyle={{backgroundColor:'#3f8efc'}} 
                onPress={submit}
                />
            </View>
        </TouchableWithoutFeedback>
                
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 42,
        padding: 10,
    },
    input: {
        fontSize: 20,
        marginBottom: 10,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center',
    },
});
export default Login;