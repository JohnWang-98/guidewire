import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import signup from '../../styles/signup';
import { TextInput } from 'react-native-gesture-handler';

export default function ({navigation}) {
    const [hospitalName, setHospitalName] = React.useState('');

    function next() {
        if (hospitalName != '') {
            navigation.navigate('signup2');
        }
    }

    return (
        <View style={signup.container}>
            <StatusBar style="auto" />
            <Text style={signup.text}>Where do you work?</Text>

            <TextInput style={signup.input}
                onChangeText={setHospitalName}
                value={hospitalName}
                placeholder='First Name'
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