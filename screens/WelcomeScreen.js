import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import firebase from '../config'
//import Santa from './components/SantaClaus'
//import SantaAnimation from '../components/SantaClaus';
//import db from '../config';
//import firebase from 'firebase';

export default class WelcomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            emailId: '',
            password: ''
        }
    }
    userLogin = (emailId, password) => {

        const auth = firebase.auth()
        auth.signInWithEmailAndPassword(emailId, password).then(cred => {
            alert('Successfull Login')
        }).catch((error) => {
            alert(error)

        })
    }
    userSignup = (emailId, password) => {
        const auth = firebase.auth()
        auth.createUserWithEmailAndPassword(emailId, password).then(cred => {
            alert('Successfull Signup')
        }).catch((error) => {
            alert(error)

        })
    }
    render() {
        return (
            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',margin:20 }}>
                 
                <TextInput
                    placeholder="Enter Email"
                    style={styles.loginBox}
                    keyboardType='email-address'
                    onChangeText={(text) => this.setState({ emailId: text })}
                />


                <TextInput
                    placeholder="Enter Password"
                    style={styles.loginBox}
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({ password: text })}
                />

                <TouchableOpacity style={[styles.btn, { marginTop: 10, marginBottom: 10 }]} onPress={() => this.userLogin(this.state.emailId, this.state.password)}>
                    <Text style={styles.btntext}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, { marginTop: 10, marginBottom: 10 }]} onPress={() => this.userSignup(this.state.emailId, this.state.password)}>
                    <Text style={styles.btntext}>Signup</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginBox: {
        padding: 10,
        width: 275
    },
    btn: {
        padding: 10,
        width: 275,
        backgroundColor: 'purple',
        color: 'white',
    },
    btntext: {
        color: 'white',
        fontWeight: 18,
        textAlign:'center'
    }
})