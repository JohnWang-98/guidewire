import React from 'react'
import {
    ActivityIndicator, Alert,
    Image,
    KeyboardAvoidingView, Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import login from '../../styles/login';
import {emailLogin} from "../../components/services/firebase";
import {purpleHolder, white} from "../../consts/Colors";
import {getHeight, getWidth} from "../../utils/cssfragments";
import signup from "../../styles/signup";

export default function ({ navigation }) {
    const [loading, setLoading] = React.useState(false);
    const [visible, setVisible] = React.useState(false);
    const [isError, setError] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loginErrMsg, setLogMsg] = React.useState('');
    const [passErrMsg, setPassMsg] = React.useState('');

    function loginAction() {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email !== '' &&  password !== '' && !loading) {
            setLoading(true);
            setLogMsg("");
            setPassMsg("");
            emailLogin(email, password).then((res) => {
                    setLoading(false);
                    navigation.replace('home');
                }).catch((error) => {
                setLoading(false);
                    switch (error.code) {
                        case "auth/wrong-password":
                            Alert.alert("Login failed.",
                                "The password you entered is incorrect.",);
                            break
                        case "auth/user-not-found":
                            Alert.alert("Login failed.",
                                "There is no account under this email address.",);
                            break
                        default:
                            alert(error.message);
                            break
                    }
                    console.log(error.code);
                }).finally(() => setLoading(false));
        }
        else {
            // Alert.alert("Login failed.",
            //     "please enter email & password.",);
            setError(true);
            // FOR EMAIL
            if(email === "")
                setLogMsg("Email is required..!");
            // else if(email.length > 0 && reg.test(email) !== true)
            //     setLogMsg("Enter valid email..!");
            else
                setLogMsg("");

            // FOR PASSWORD
            if(password === "")
                setPassMsg("Password is required..!");
            // else itPassMsg("Password length is too short..!");
            else
                setPassMsg("");
        }
    }

    return (
        <KeyboardAvoidingView style={login.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <StatusBar style="auto" />
            <ScrollView
                contentContainerStyle={{flexGrow: 1, alignItems:"center", justifyContent: 'center', paddingTop: Platform.OS === "ios" ? "10%" : "5%"}}
                showsVerticalScrollIndicator={false}>
                <Image source={require('../../../assets/favicon.png')}
                       style={{
                           height: getHeight(20),
                       }}
                       resizeMode={"contain"}
                />
                <Text style={login.text}>GuidewireAID</Text>

                <TextInput style={[login.input, {borderColor: (isError && loginErrMsg !== '') ? "red" : purpleHolder}]}
                           onChangeText={setEmail}
                           value={email}
                           keyboardType={'email-address'}
                           selectionColor={white}
                           autoCapitalize='none'
                           placeholder='Email Address'
                           placeholderTextColor='#bbbce0'
                />
                {isError && loginErrMsg !== '' && <Text style={login.errorText}>{loginErrMsg}</Text>}

                <View style={[login.viewInput, {borderColor: (isError && passErrMsg !== '') ? "red" : purpleHolder}]}>
                    <TextInput style={login.textInput}
                               onChangeText={setPassword}
                               value={password}
                               selectionColor={white}
                               autoCapitalize='none'
                               placeholder='Password'
                               placeholderTextColor='#bbbce0'
                               secureTextEntry={!visible}
                    />

                    <TouchableOpacity onPress={() => setVisible(!visible)} style={signup.visible}>
                        <Image source={visible ? require('../../../assets/images/eye_open.png') : require('../../../assets/images/eye_close.png')}/>
                    </TouchableOpacity>
                </View>

                {isError && passErrMsg !== '' && <Text style={login.errorText}>{passErrMsg}</Text>}

                <TouchableOpacity onPress={loginAction}>
                    <View style={login.login}>
                        {!loading && <Text style={login.loginText}>Log In</Text>}
                        {loading && <ActivityIndicator color={white} />}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('resetpassword')}>
                    <View style={login.forgotPassword}>
                        <Text style={login.forgotPasswordText}>Forgot your password?</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                    <View style={[login.signup, {marginTop: 0}]}>
                        <Text style={login.signupText}>Create a new account</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
