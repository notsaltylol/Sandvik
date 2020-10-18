import React, { useState } from 'react'
import {StyleSheet, TextInput, Button, View, Alert} from 'react-native'
import users from '../data/users.json'


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let isValid = false
    let success = 'login failed'
    
    const submit = (event) => {
        Alert.alert('invalid')
        event.preventDefault()
        users.forEach(user => {
            if (username === user.username && password === user.password){
                success = 'valid'
                console.log('success')
            }
            else {
                Alert.alert('invalid')
            }
        })
    }

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='username'
                onChangeText = {username => setUsername(username)}
                value = {username}
            />
            <TextInput
                style={styles.input}
                placeholder='password'
                onChangeText = {password => setPassword(password)}
                value = {password}
            />
            <Button onPress={submit} title='Login'/>
        </View>
                
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 20,
        marginBottom: 10,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});
export default Login;