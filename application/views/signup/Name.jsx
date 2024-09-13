import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import signup from '../../styles/signup';
import { TextInput } from 'react-native-gesture-handler';

export default function ({navigation}) {
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    function next() {
        if (name != '' && lastName != '') {
            navigation.navigate('signup1');
        }
    }

    return (
        <View style={signup.container}>
            <StatusBar style="auto" />
            <Text style={signup.text}>What is your name?</Text>

            <TextInput style={signup.input}
                onChangeText={setName}
                value={name}
                placeholder='First Name'
                placeholderTextColor='#bbbce0'
            />

            <TextInput style={signup.input}
                onChangeText={setLastName}
                value={lastName}
                placeholder='Last Name'
                placeholderTextColor='#bbbce0'
            />

            <TouchableOpacity onPress={next} style={signup.nextPosition}>
                <View style={signup.next}>
                    <Text style={signup.nextText}>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}