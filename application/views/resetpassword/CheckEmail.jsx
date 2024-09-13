import React from 'react'
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import checkemail from '../../styles/check_email';
import firebase, {isLogged} from "../../components/services/firebase";

export default class CheckEmail extends React.Component {
    state = {
        // isLogged: false,
        user: {},
        email: ""
    }

    async componentDidMount() {
        let {route} = this.props;
        let {params} = route;
                this.setState({
                    // user: res,
                    email: params,
                });
    }

    openMailApp() {

    }


    render() {
        let {navigation} = this.props;
        return (
            <View style={checkemail.container}>
                <StatusBar style="auto"/>
                <Image source={require('../../../assets/images/airplane.png')}/>
                <Text style={checkemail.text}>Reset Password Link Sent Successfully</Text>
                <Text style={checkemail.text2}>We sent an email to {this.state.email} with the link to reset
                    your password.</Text>

                <TouchableOpacity onPress={() => navigation.navigate('login')}>
                    <View style={checkemail.login}>
                        <Text style={checkemail.loginText}>Login Now</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.openMailApp.bind(this)}>
                {/*<TouchableOpacity onPress={() => Linking.openURL('mailto:')}>*/}
                    <View style={checkemail.emailApp}>
                        <Text style={checkemail.emailAppText}>Open Email App</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}