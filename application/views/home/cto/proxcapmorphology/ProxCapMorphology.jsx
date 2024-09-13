import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import cto from '../../../../styles/cto';
import Menu2, { handleResponse } from '../../../../components/hooks/Menu2'

export default function ({ navigation }) {
    return (
        <View style={cto.container}>
            <StatusBar style="auto" />

            <TouchableOpacity onPress={() => navigation.navigate('tapered')}>
                <View style={cto.pink}>
                    <Text style={cto.text}>Tapered</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('blunt')}>
                <View style={cto.blue}>
                    <Text style={cto.text}>Blunt</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('functional')}>
                <View style={cto.cyan}>
                    <Text style={cto.text}>Functional</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('bridging')}>
                <View style={cto.green}>
                    <Text style={cto.text}>Bridging</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('severecalcification')}>
                <View style={cto.pink}>
                    <Text style={cto.text}>Severe Calcification</Text>
                </View>
            </TouchableOpacity>

            <View style={cto.menu}>
                <Menu2 onResponse={handleResponse(navigation, ["CTO", "Prox Cap Morphology", ""])} />
            </View>
        </View>
    )
}