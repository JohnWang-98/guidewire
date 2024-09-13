import React from 'react'
import {ActivityIndicator, LogBox, Text, TextInput, ToastAndroid, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import profile from '../../styles/profile';
import privacyPolicy from "../../styles/privacy_p";
import {AntDesign, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {blue, darkPurple, green, purpleHolder, white} from "../../consts/Colors";
import firebase from "firebase";
import {dbh} from "../../components/services/firebase";
import constants from "../../styles/constants";
import Toast from "react-native-root-toast";

LogBox.ignoreLogs(['Setting a timer']);

class MyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            submitting: false,
            name: "",
            nameEdit: false,
            email: "",
            emailEdit: false,
            workAt: "",
            workEdit: false,
        }
    }

    componentDidMount() {
        let user = firebase.auth().currentUser;
        console.log(user.uid);
        const users = dbh.collection("users");
        if(user){
            users.doc(user.uid).get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    console.log(doc.data());
                    this.setState({
                        name: doc.data().name,
                        email: doc.data().email,
                        workAt: doc.data().hospital_name,
                        loading: false,
                    });
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                    this.setState({
                        loading: false,
                    });
                }
            })
        }
    }

    handleSubmit() {
        const {submitting, name, email, workAt} = this.state;
        if(name !== "" && email !== "" && workAt !== "" & !submitting){
            this.setState({
                submitting: true,
            });
            let user = firebase.auth().currentUser;
            const users = dbh.collection("users");
            if(user !== null){
                users.doc(user.uid).update({
                    name: name,
                    email: email,
                    hospital_name: workAt,
                }).then(() => {
                    this.setState({
                        submitting: false,
                    });
                    Toast.show('Profile successfully updated!', {
                        duration: Toast.durations.SHORT,
                        backgroundColor: blue
                    })
                    // ToastAndroid.show("Document successfully updated!", ToastAndroid.SHORT)
                    console.log("Profile successfully updated!");
                }).catch((error) => {
                    this.setState({submitting: false,});
                    // The document probably doesn't exist.
                    Toast.show(error.message, {
                        duration: Toast.durations.SHORT,
                        backgroundColor: "red"
                    })
                    // ToastAndroid.show(error.message, ToastAndroid.SHORT)
                    console.error("Error updating document: ", error);
                });
            }
        }
    }

    render() {
        let {navigation} = this.props;
        const {loading, submitting, name, email, workAt, nameEdit, workEdit, emailEdit} = this.state;
        return (
            <View style={profile.container}>
                <StatusBar style="auto"/>
                <View style={[constants.row, constants.moreSectionAppbar, {marginBottom: 5}]}>
                    <TouchableOpacity onPress={event => navigation.goBack()}>
                        <MaterialIcons name="arrow-back-ios" size={20} color={white} />
                    </TouchableOpacity>
                    <Text style={profile.title}>My Profile</Text>
                </View>
                {(loading || submitting) && <ActivityIndicator size="large" color={white} /> }
                {!loading && <>

                    {/*NAME FIELD*/}
                    <View style={[profile.input, {backgroundColor: nameEdit ? purpleHolder : white}]}>
                        <View>
                            <Text style={[profile.label, {color: nameEdit ? white : darkPurple}]}>Name</Text>
                            <TextInput
                                editable = {nameEdit}
                                style={[profile.inputText, {color: nameEdit ? white : darkPurple}]}
                                value={name}
                                onChangeText={text => this.setState({name: text})}
                            />
                        </View>
                        <TouchableOpacity onPress={event => this.setState({nameEdit: !nameEdit})}>
                            {!nameEdit
                                ? <MaterialCommunityIcons name="pencil" size={24} color={darkPurple} />
                                : <AntDesign name="checkcircle" size={24} color={"green"} />}
                        </TouchableOpacity>
                    </View>

                    {/*EMAIL FIELD*/}
                    <View style={[profile.input, {backgroundColor: emailEdit ? purpleHolder : white}]}>
                        <View>
                            <Text style={[profile.label, {color: emailEdit ? white : darkPurple}]}>Email Address</Text>
                            <TextInput
                                editable = {emailEdit}
                                style={[profile.inputText, {color: emailEdit ? white : darkPurple}]}
                                value={email}
                                onChangeText={text => this.setState({email: text})}
                            />
                        </View>
                        <TouchableOpacity onPress={event => this.setState({emailEdit: !emailEdit})}>
                            {!emailEdit
                                ? <MaterialCommunityIcons name="pencil" size={24} color={darkPurple} />
                                : <AntDesign name="checkcircle" size={24} color={"green"} />}
                        </TouchableOpacity>
                    </View>

                    {/*WORK AT*/}
                    <View style={[profile.input, {backgroundColor: workEdit ? purpleHolder : white}]}>
                        <View>
                            <Text style={[profile.label, {color: workEdit ? white : darkPurple}]}>Work At</Text>
                            <TextInput
                                editable = {workEdit}
                                style={[profile.inputText, {color: workEdit ? white : darkPurple}]}
                                value={workAt}
                                onChangeText={text => this.setState({workAt: text})}
                            />
                        </View>
                        <TouchableOpacity onPress={event => this.setState({workEdit: !workEdit})}>
                            {!workEdit
                                ? <MaterialCommunityIcons name="pencil" size={24} color={darkPurple} />
                                : <AntDesign name="checkcircle" size={24} color={"green"} />}
                        </TouchableOpacity>
                    </View>
                        {
                            // (emailEdit || nameEdit || workEdit) &&
                            <TouchableOpacity onPress={event => this.handleSubmit()} style={profile.resetPosition}>
                                <View style={profile.reset}>
                                    <Text style={profile.resetText}>Save</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    </>
                }
            </View>
        )
    }
}

export default MyProfile
