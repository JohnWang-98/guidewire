import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import signup from '../../styles/signup';
import { TextInput } from 'react-native-gesture-handler';

export default function ({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [visible, setVisible] = React.useState(false);

    function next() {
        if (email != '' && password != '') {
            //comprobar si no existe y registrarlo en la db
            navigation.navigate('signup3');
        }
    }

    return (
        <View style={signup.container}>
            <StatusBar style="auto" />
            <Text style={signup.text}>What is your email?</Text>

            <TextInput style={signup.input}
                onChangeText={setEmail}
                value={email}
                placeholder='Email Address'
                placeholderTextColor='#bbbce0'
            />

            <View style={signup.viewInput}>
                <TextInput style={signup.textInput}
                    onChangeText={setPassword}
                    value={password}
                    placeholder='Password'
                    placeholderTextColor='#bbbce0'
                    secureTextEntry={!visible}
                />

                <TouchableOpacity onPress={() => setVisible(!visible)} style={signup.visible}>
                    <Image source={visible ? require('../../../assets/images/eye_open.png') : require('../../../assets/images/eye_close.png')} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={next} style={signup.nextPosition}>
                <View style={signup.next}>
                    <Text style={signup.nextText}>Sign Up</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}