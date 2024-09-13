import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import nonCto from '../../../styles/non_cto';
import Menu2, { handleResponse } from '../../../components/hooks/Menu2'
import constants from "../../../styles/constants";
import {getWidth} from "../../../utils/cssfragments";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {darkPurple} from "../../../consts/Colors";

export default function ({ navigation }) {
    return (
        <View style={nonCto.container}>
            <StatusBar style="auto" />
            <View style={{paddingTop: 25, paddingLeft: 0, width: getWidth(100), alignItems: "flex-start",}}>
                <TouchableOpacity onPress={event => navigation.goBack()} style={constants.radius}>
                    <MaterialCommunityIcons name="keyboard-backspace" size={24} color={darkPurple} />
                </TouchableOpacity>
            </View>

            <View style={constants.scrollContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('lesionmorphology')} activeOpacity={5}>
                    <View style={nonCto.lesion}>
                        <Text style={[nonCto.lesionText, constants.boldFont]}>Lesion Morphology</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('guidewirecharacteristics')} activeOpacity={5}>
                    <View style={nonCto.guidewire}>
                        <Text style={[nonCto.guidewireText, constants.boldFont]}>Guidewire Characteristics</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={nonCto.menu}>
                <Menu2 onResponse={handleResponse(navigation, ["Non-CTO", "", ""])} />
            </View>
        </View>
    )
}
