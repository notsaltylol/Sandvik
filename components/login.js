import React, { useState } from 'react'
import {View, Button, Text, TextInput} from 'react-native'
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
                placeholder="username"
                onChangeText = {username => setUsername(username)}
                value = {username}
            />
            <TextInput
                placeholder="password"
                onChangeText = {password => setPassword(password)}
                value = {password}
            />
            <Button type="submit" title="Login"/>
        </View>
                
    )
}
