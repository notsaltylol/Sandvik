import React, { useState } from 'react'
import {StyleSheet, TextInput, Button, View} from 'react-native'
import users from '../data/users.json'


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let isValid = false
    let success = 'login failed'
    
    const verify = (event) => {
        event.preventDefault()
        users.forEach(user => {
            if (username === user.username && password === user.password){
                success = 'valid'
                console.log('success')
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
            <Button onPress={verify} type='submit' title='Login'/>
        </View>
                
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});