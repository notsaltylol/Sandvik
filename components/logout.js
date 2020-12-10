import React, { useState } from 'react';
import {StyleSheet, TextInput, View, Alert, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Button} from 'react-native-elements';

//Generates LogOut component and resets SignedIn boolean
const LogOut = ({ setIsSignedIn }) => {
    const [email, setEmail] = useState('')

    //Once submit is pressed, SignedIn is no longer true
    const submit = (event) => {
        setIsSignedIn(false)
    }

    //Returns Logout component as View with text
    return(
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.container}>
                <Text style={styles.header}>THANKS FOR USING SANDVIK'S CALCULATOR</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    placeholder='email@example.com'
                    onChangeText = {email => setEmail(email)}
                    value = {email}
                />
                <Button 
                    style={{ marginTop: '5%', width: '60%', 
                    alignSelf: 'center', justifyContent: 'center',}}
                    titleStyle={{fontSize:30, fontWeight:'bold'}}
                    buttonStyle={{backgroundColor:'#3f8efc'}}
                    onPress={submit} title='LOGOUT'/>
            </View>
        </TouchableWithoutFeedback>
    )
}

// Design of style for Logout Page/Component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        textAlign: 'center',
        fontSize: 37,
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