import React from 'react'
import {Platform, Text, TextInput, ToastAndroid, KeyboardAvoidingView, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import resetpassword from '../../styles/reset_password';
import firebase from "../../components/services/firebase";
import {getWidth} from "../../utils/cssfragments";
import constants from "../../styles/constants";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {white} from "../../consts/Colors";
import login from "../../styles/login";


export default function ({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [isError, setError] = React.useState(false);
    const [errMsg, setErrMsg] = React.useState("");

    function resetPassword() {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email !== '' && reg.test(email) === true) {
            console.log(email);
            firebase.auth().sendPasswordResetEmail(email)
                .then(function (user) {
                    alert('Please check your email...');
                    navigation.navigate('checkemail', email);
                }).catch(function (e) {
                ToastAndroid.show(e.message, ToastAndroid.SHORT)
                console.log(e)
            })
        } else {
            setError(true);
            if(email === "")
                setErrMsg("Email is required..!");
            else if(email.length > 0 && reg.test(email) !== true)
                setErrMsg("Enter valid email..!");
            else
                setErrMsg("");
        }
    }

    return (
        <KeyboardAvoidingView style={resetpassword.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <StatusBar style="auto" />
            <View style={{paddingTop: "10%", paddingLeft: 0, width: getWidth(100), alignItems: "flex-start",}}>
                <TouchableOpacity onPress={event => navigation.goBack()} style={constants.radius}>
                    <MaterialCommunityIcons name="keyboard-backspace" size={24} color={white} />
                </TouchableOpacity>
            </View>

            <View style={{flexGrow: 1, justifyContent: "center", alignItems: "center"}}>
                <Text style={resetpassword.text}>Please enter your registered email to reset your password.</Text>

                <TextInput style={resetpassword.input}
                           onChangeText={text => setEmail(text)}
                           value={email}
                           placeholder='Email Address'
                           placeholderTextColor='#bbbce0'
                />
                {isError && errMsg !== '' && <Text style={login.errorText}>{errMsg}</Text>}
            </View>

            <TouchableOpacity onPress={resetPassword} style={resetpassword.resetPosition}>
                <View style={resetpassword.reset}>
                    <Text style={resetpassword.resetText}>Reset Password</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}