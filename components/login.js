import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';


const Login = ({setIsSignedIn}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let isValid = false
    let success = 'login failed'
    
    const submit = (event) => {
        event.preventDefault()
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
                <Text style={styles.header}>Sandvik</Text>
                <TextInput
                    style={styles.input}
                    placeholder='username'
                    onChangeText = {username => setUsername(username)}
                    value = {username}
                />
                <TextInput
                    style={styles.input}
                    placeholder='password' secureTextEntry={true}
                    onChangeText = {password => setPassword(password)}
                    value = {password}
                />
                <Button onPress={submit} title='Login' fontSize='30' />
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