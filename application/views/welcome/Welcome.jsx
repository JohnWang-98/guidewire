import React, { useState } from 'react'
import {ActivityIndicator, Image, Text, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import welcome from '../../styles/welcome';
import firebase, {isLogged} from "../../components/services/firebase";
import ApiKeys from "../../consts/ApiKey";
import {darkPurple} from "../../consts/Colors";
import {getHeight} from "../../utils/cssfragments";

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingComplete: false,
            isAuthenticationReady: false,
            isAuthenticated: false,
            user: null
        };

        // Initialize firebase...
        if (!firebase.apps.length) { firebase.initializeApp(ApiKeys); }
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    }

    onAuthStateChanged = (user) => {
        this.setState({isAuthenticationReady: true});
        this.setState({user});
        this.setState({isAuthenticated: !!user});
    }

    async componentDidMount() {
        let res = await firebase.auth().currentUser;
        console.log(res);
        this.setState({
            isLogged: res != null,
            user: res,
        });
    }

    render() {
        const {navigation} = this.props;
        let email = this.state.user ? this.state.user.email : "";
        if (!this.state.isAuthenticationReady) {
            return (
                <View style={welcome.container}>
                    <ActivityIndicator size="large" color={darkPurple}/>
                </View>
            )
        } else if(this.state.isAuthenticated && this.state.user) {
            return (
                <View style={welcome.container}>
                    <StatusBar style="auto"/>
                    <Image source={require('../../../assets/icon.png')}/>
                    <Text style={welcome.text}>GuidewireAID</Text>

                    <Text style={welcome.text}>Welcome {email}</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('home')}>
                        <View style={welcome.signup}>
                            <Text style={welcome.signupText}>Home</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <View style={welcome.container}>
                    <StatusBar style="auto"/>
                    <Image source={require('../../../assets/images/logo.png')} style={{height: getHeight(30)}} resizeMode={"contain"}/>
                    <Text style={welcome.text}>GuidewireAID</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('signup')}>
                        <View style={welcome.signup}>
                            <Text style={welcome.signupText}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('login')}>
                        <View style={welcome.login}>
                            <Text style={welcome.loginText}>I Have An Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            )
        }
    }
}

export default Welcome;
