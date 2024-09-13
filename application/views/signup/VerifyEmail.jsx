import React from 'react'
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import signup from '../../styles/signup';

export default function ({ navigation }) {
    return (<View style={signup.container}>
        <StatusBar style="auto" />
        <Image source={require('../../../assets/images/airplane.png')} />
        <Text style={signup.text2}>Please Verify Your Email Address</Text>
        <Text style={signup.text3}>We sent a verificationemail to {"\nvincent.jewess@yahoo.com"}. Please verify your email to unlock the advanced features.</Text>

        <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <View style={signup.skip}>
                <Text style={signup.skipText}>Skip</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('mailto:')}>
            <View style={signup.emailApp}>
                <Text style={signup.emailAppText}>Open Email App</Text>
            </View>
        </TouchableOpacity>
    </View>)
}