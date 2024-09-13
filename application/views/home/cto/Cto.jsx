import React from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import cto from '../../../styles/cto';
import Menu2, { handleResponse } from '../../../components/hooks/Menu2'
import {getWidth} from "../../../utils/cssfragments";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {darkPurple} from "../../../consts/Colors";
import constants from "../../../styles/constants";

export default function ({ navigation }) {
    return (
        <View style={cto.container}>
            <StatusBar style="auto" />
            <View style={{paddingTop: 25, paddingLeft: 0, width: getWidth(100), alignItems: "flex-start",}}>
                <TouchableOpacity onPress={event => navigation.goBack()} style={constants.radius}>
                    <MaterialCommunityIcons name="keyboard-backspace" size={24} color={darkPurple} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={constants.scrollContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('antegradeapproach')}  activeOpacity={5}>
                    <View style={cto.pink}>
                        <Text style={cto.text}>Antegrade Approach</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('retrogradeapproach')}  activeOpacity={5}>
                    <View style={cto.blue}>
                        <Text style={cto.text}>Retrograde Approach</Text>
                    </View>
                </TouchableOpacity>

                {/*<TouchableOpacity onPress={() => navigation.navigate('proxcapmorphology')}>*/}
                {/*    <View style={cto.cyan}>*/}
                {/*        <Text style={cto.text}>Prox Cap Morphology</Text>*/}
                {/*    </View>*/}
                {/*</TouchableOpacity>*/}
            </ScrollView>

            <View style={cto.menu}>
                <Menu2 onResponse={handleResponse(navigation, ["CTO", "", ""])} />
            </View>
        </View>
    )
}
