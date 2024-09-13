import React from 'react'
import {
    ActivityIndicator, Alert,
    Image, KeyboardAvoidingView,
    LogBox, Platform, SafeAreaView,
    ScrollView,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View,
    YellowBox
} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import signup from '../../styles/signup';
import { TextInput } from 'react-native-gesture-handler';
import {darkPurple, purple, purpleHolder, white} from '../../consts/Colors';
import firebase, {dbh, register} from '../../components/services/firebase';
import {getWidth} from "../../utils/cssfragments";
import constants from "../../styles/constants";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import login from "../../styles/login";

class Register extends React.Component {
    state = {
        loading: false,
        name: '',
        lastName: '',
        hospitalName: '',
        email: '',
        password: '',
        visible: false,
        isValidate: false,
        fNameErrMsg: "First Name is required..!",
        lNameErrMsg: "Last Name is required..!",
        hNameErrMsg: "Hospital Name is required..!",
        emailErrMsg: "Email is required..!",
        passErrMsg: "Password is required..!",
        entered: false
    };
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         loading: false,
    //         name: '',
    //         lastName: '',
    //         hospitalName: '',
    //         email: '',
    //         password: '',
    //         visible: false,
    //     }
    // }


    registerUser() {
        // if (name != '' && lastName != '' && hospitalName != '' && email != '' && password != '') {
        //     if(register(email, password))
        //     {

        //         console.log(register(email, password));
        //         // navigation.navigate('login');
        //     }
        // }
    }


    async handleSubmit() {
        const {navigation} = this.props;
        const {name, lastName, hospitalName, password, loading, email, entered} = this.state;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,100})+$/;
        if (name !== '' && lastName !== '' && hospitalName !== '' && email !== '' && password !== '' && !loading) {
            this.setState({loading: true});
            register(email, password).then((user) => {
                if(user){
                    let currentUser = firebase.auth().currentUser;
                    LogBox.ignoreLogs(['Setting a timer']);
                    dbh.collection("users").doc(currentUser.uid).set({
                        name: name,
                        last_name: lastName,
                        hospital_name: hospitalName,
                        email: email,
                    }).then(() => {
                        console.log("Document successfully written!");
                        ToastAndroid.show("User successfully created!", ToastAndroid.SHORT)
                        navigation.navigate('login');
                    }).catch((error) => {
                        this.setState({loading: false});
                        alert(error.message);
                        // if (Platform.OS !== 'android') {
                        //     Alert.alert(
                        //         "Error writing document:",
                        //         error.message,
                        //         [],
                        //         { cancelable: true }
                        //     );
                        // } else {
                        //     ToastAndroid.show("Error writing document: ", ToastAndroid.SHORT)
                        // }
                        console.error("Error writing document: ", error);
                    }).finally(() => this.setState({loading: false}));
                }
            }).catch(error => {
                console.log(error);
                alert(error.message);
                // if (Platform.OS !== 'android') {
                //     Alert.alert(
                //         "Alert!",
                //         error.message,
                //         [],
                //         { cancelable: true }
                //     );
                // } else {
                //     ToastAndroid.show(error.message, ToastAndroid.LONG)
                // }

            }).finally(() => this.setState({loading: false}));
        }
        else {
            this.setState({isValidate: true,});
            this.handleValidate();
        }
    }

    handleValidate() {
        const {name, lastName, hospitalName, password, loading, email, entered} = this.state;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        // FOR FIRST NAME
        if(name === "")
            this.setState({fNameErrMsg:  "First name is required..!"});
        else if(name.length < 3)
            this.setState({fNameErrMsg:  "First name length is too short..!"});
        else
            this.setState({fNameErrMsg: ""});

        // FOR LAST NAME
        if(lastName === "")
            this.setState({lNameErrMsg:  "Last name is required..!"});
        else if(lastName.length < 3)
            this.setState({lNameErrMsg:  "Last name length is too short..!"});
        else
            this.setState({lNameErrMsg: ""});

        // FOR HOSPITAL NAME
        if(hospitalName === "")
            this.setState({hNameErrMsg:  "Hospital name is required..!"});
        else if(hospitalName.length < 4)
            this.setState({hNameErrMsg:  "Hospital name length is too short..!"});
        else
            this.setState({hNameErrMsg: ""});

        // FOR EMAIL
        if(email === "")
            this.setState({emailErrMsg:  "Email is required..!"});
        else if(email.length > 0 && reg.test(email) !== true)
            this.setState({emailErrMsg:  "Enter valid email..!"});
        else
            this.setState({emailErrMsg: ""});

        // FOR PASSWORD
        if(password === "")
            this.setState({passErrMsg:  "Password is required..!"});
        else if(password.length < 6)
            this.setState({passErrMsg:  "Password length is too short..!"});
        else
            this.setState({passErrMsg: ""});
    }

    render() {
        const {navigation} = this.props;
        const {name, lastName, hospitalName, email, password, visible, loading,
            isValidate,
            fNameErrMsg,
            lNameErrMsg,
            hNameErrMsg,
            emailErrMsg,
            passErrMsg} = this.state;

        return (
            <KeyboardAvoidingView
                style={{flex: 1, backgroundColor: purple,}}
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={{paddingTop: Platform.OS === "ios" ? "8%" : "0%", paddingLeft: 0, width: getWidth(100), alignItems: "flex-start",}}>
                    <TouchableOpacity onPress={event => navigation.goBack()} style={constants.radius}>
                        <MaterialCommunityIcons name="keyboard-backspace" size={24} color={white} />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    contentContainerStyle={{
                        backgroundColor: purple,
                        alignItems:"center",
                        paddingBottom: "22%"
                    }}
                >
                    <StatusBar barStyle="dark-content" hidden={false} backgroundColor={purple} translucent={false}/>
                    <Text style={signup.text}>What is your name?</Text>

                    <TextInput style={[signup.input, {borderColor: (isValidate && fNameErrMsg !== "") ? "red" : purpleHolder}]}
                               onChangeText={(text) => this.setState({name: text})}
                               value={name}
                               selectionColor={white}
                               placeholder='First Name'
                               placeholderTextColor='#bbbce0'
                               caption={"msg::::"}
                    />
                    {isValidate && fNameErrMsg !== "" && <Text style={login.errorText}>{fNameErrMsg}</Text>}

                    <TextInput style={[signup.input, {borderColor: (isValidate && lNameErrMsg !== "") ? "red" : purpleHolder}]}
                               onChangeText={(text) => this.setState({lastName: text})}
                               value={lastName}
                               selectionColor={white}
                               placeholder='Last Name'
                               placeholderTextColor='#bbbce0'
                    />
                    {isValidate && lNameErrMsg !== "" && <Text style={login.errorText}>{lNameErrMsg}</Text>}

                    <Text style={signup.text}>Where do you work?</Text>

                    <TextInput style={[signup.input, {borderColor: (isValidate && hNameErrMsg !== "") ? "red" : purpleHolder}]}
                               onChangeText={(text) => this.setState({hospitalName: text})}
                               value={hospitalName}
                               selectionColor={white}
                               placeholder='Hospital Name'
                               placeholderTextColor='#bbbce0'
                    />
                    {isValidate && hNameErrMsg !== "" && <Text style={login.errorText}>{hNameErrMsg}</Text>}

                    <Text style={signup.text}>What is your email?</Text>

                    <TextInput style={[signup.input, {borderColor: (isValidate && emailErrMsg !== "") ? "red" : purpleHolder}]}
                               keyboardType={'email-address'}
                               autoCapitalize='none'
                               onChangeText={(text) => this.setState({email: text})}
                               value={email}
                               selectionColor={white}
                               placeholder='Email Address'
                               placeholderTextColor='#bbbce0'
                    />
                    {isValidate && emailErrMsg !== '' && <Text style={login.errorText}>{emailErrMsg}</Text>}

                    <View style={[signup.viewInput, {borderColor: (isValidate && passErrMsg !== "") ? "red" : purpleHolder}]}>
                        <TextInput style={signup.textInput}
                                   onChangeText={(text) => this.setState({password: text})}
                                   value={password}
                                   selectionColor={white}
                                   autoCapitalize='none'
                                   placeholder='Set Password'
                                   placeholderTextColor='#bbbce0'
                                   secureTextEntry={!visible}
                        />

                        <TouchableOpacity onPress={() => this.setState({visible: !visible})} style={signup.visible}>
                            <Image
                                source={visible ? require('../../../assets/images/eye_open.png') : require('../../../assets/images/eye_close.png')}/>
                        </TouchableOpacity>
                    </View>
                    {isValidate && passErrMsg !== '' && <Text style={login.errorText}>{passErrMsg}</Text>}

                    {/*<Text style={signup.end}/>*/}
                </ScrollView>

                <TouchableOpacity onPress={this.handleSubmit.bind(this)} style={signup.nextPosition}>
                    <View style={signup.next}>
                        {!loading && <Text style={signup.nextText}>Sign Up</Text>}
                        {loading &&  <ActivityIndicator color={white} />}
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

export default Register
