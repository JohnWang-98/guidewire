import React from 'react'
import {ActivityIndicator, Platform, Text, TextInput, ToastAndroid, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import profile from '../../styles/profile';
import privacyPolicy from "../../styles/privacy_p";
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {blue, caseLabel2, darkPurple, green, inputGrey, purpleHolder, white} from "../../consts/Colors";
import firebase from "firebase";
import {dbh} from "../../components/services/firebase";
import constants from "../../styles/constants";
import Toast from "react-native-root-toast";

class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            newPassword: "",
            confirmPassword: "",
            submitting: false
        }
    }

    handleSubmit() {
        const {password, newPassword, confirmPassword, submitting} = this.state;
        if(password !== "" && newPassword !== "" && confirmPassword !== "", !submitting){
            if(newPassword === confirmPassword){
                this.setState({submitting: true,});
                let user = firebase.auth().currentUser;
                let credential = firebase.auth.EmailAuthProvider.credential(user.email, password);

                user.reauthenticateWithCredential(credential).then(() => {
                    user.updatePassword(newPassword).then(() => {
                        this.setState({
                            submitting: false,
                            password: "",
                            newPassword: "",
                            confirmPassword: "",
                        });
                        if(Platform.OS === "ios")
                            alert("Update successful.")
                        else
                        Toast.show("Update successful.", {
                            duration: Toast.durations.SHORT,
                            backgroundColor: blue
                        });
                    }).catch((error) => {
                        this.setState({submitting: false});
                        if(Platform.OS === "ios")
                            alert(error.message)
                        else
                        Toast.show(error.message, {
                            duration: Toast.durations.SHORT,
                            backgroundColor: "red"
                        });
                    });
                    this.setState({submitting: false});
                    console.log('Password is Correct...!');
                }).catch((error) => {
                    // An error happened.
                    this.setState({submitting: false});
                    if(Platform.OS === "ios")
                        alert(error.message)
                    else
                        Toast.show(error.message, {
                            duration: Toast.durations.SHORT,
                            backgroundColor: "red"
                        });
                    console.log(error.message);
                });
            } else {
                if(Platform.OS === "ios")
                    alert("Confirm password is same...!")
                else
                Toast.show("Confirm password is same...!", {
                    duration: Toast.durations.SHORT,
                    backgroundColor: "red"
                })
            }
        } else {
            if(Platform.OS === "ios")
                alert("Some field is empty...!")
            else
            Toast.show("Some field is empty...!", {
                duration: Toast.durations.SHORT,
                backgroundColor: "red"
            })
        }
    }

    render() {
        let {navigation} = this.props;
        const {password, newPassword, confirmPassword, submitting} = this.state;
        return (
            <View style={profile.container}>
                <StatusBar style="auto"/>
                <View style={[constants.row, constants.moreSectionAppbar, {marginBottom: 5}]}>
                    <TouchableOpacity onPress={event => navigation.goBack()}>
                        <MaterialIcons name="arrow-back-ios" size={20} color={white} />
                    </TouchableOpacity>
                    <Text style={profile.title}>Change Password</Text>
                </View>

                {submitting && <ActivityIndicator size="large" color={white} /> }

                {/*NAME FIELD*/}
                <View style={[profile.input, {backgroundColor: purpleHolder}]}>
                    <View>
                        <Text style={[profile.label, {color: white}]}>Enter your old password</Text>
                        <TextInput
                            style={[profile.inputText, {color: white}]}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={text => this.setState({password: text})}
                        />
                    </View>
                </View>

                {/*EMAIL FIELD*/}
                <View style={[profile.input, {backgroundColor: purpleHolder}]}>
                    <View>
                        <Text style={[profile.label, {color: white}]}>Create a new password</Text>
                        <TextInput
                            style={[profile.inputText, {color: white}]}
                            secureTextEntry={true}
                            value={newPassword}
                            onChangeText={text => this.setState({newPassword: text})}
                        />
                    </View>
                </View>

                {/*WORK AT*/}
                <View style={[profile.input, {backgroundColor: purpleHolder}]}>
                    <View>
                        <Text style={[profile.label, {color: white}]}>Confirm your new password</Text>
                        <TextInput
                            style={[profile.inputText, {color: white}]}
                            secureTextEntry={true}
                            value={confirmPassword}
                            onChangeText={text => this.setState({confirmPassword: text})}
                        />
                    </View>
                </View>

                <TouchableOpacity onPress={event => this.handleSubmit()} style={profile.resetPosition}>
                    <View style={profile.reset}>
                        <Text style={profile.resetText}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ChangePassword
