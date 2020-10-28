import React, { useState } from 'react';
import {StyleSheet, TextInput, Button, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import users from '../data/users.json';

const LogOut = ({ navigation }) => {
    const [email, setEmail] = useState('')


    const submit = (event) => {
        event.preventDefault()
        users.forEach(user => {
            if (email == user.email){
                isValid = true  
            }
        })
        if(isValid){
            setIsSignedIn(false)
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
                <Text style={styles.header}>Thanks for visiting Sandvik's Calculator</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Enter your email here'
                    onChangeText = {email => setEmail(email)}
                    value = {email}
                />
                <Button onPress={submit} title='Logout'/>
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
        fontSize: 30,
        marginBottom: 10,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center',
    },
});

export default LogOut;