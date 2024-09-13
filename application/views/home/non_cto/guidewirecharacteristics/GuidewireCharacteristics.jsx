import React from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Menu2, { handleResponse } from '../../../../components/hooks/Menu2'
import guidewireCharacteristics from '../../../../styles/guidewire_characteristics';
import {extraSupport, frontlineFinesse, Specialty, work} from "../../homedata/guidewire_characteristics";
import {getWidth} from "../../../../utils/cssfragments";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {darkPurple} from "../../../../consts/Colors";
import constants from '../../../../styles/constants';


export default function ({ navigation }) {
    return (
        <View style={guidewireCharacteristics.container}>
            <StatusBar style="auto" />
            <View style={{paddingTop: 25, paddingLeft: 0, width: getWidth(100), alignItems: "flex-start",}}>
                <TouchableOpacity onPress={event => navigation.goBack()} style={constants.radius}>
                    <MaterialCommunityIcons name="keyboard-backspace" size={24} color={darkPurple} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={constants.scrollContainer}>
                < TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('tabview', {data: work, fromRoute: 'Guidewire Characteristics', pageTitle: "Workhorse Wires", from: "wire"})}>
                    <View style={guidewireCharacteristics.pink}>
                        <Text style={guidewireCharacteristics.text}>Workhorse (Simple)</Text>
                    </View>
                </TouchableOpacity>

                < TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('tabview', {data: extraSupport, fromRoute: 'Guidewire Characteristics', pageTitle: "Extra Support", from: "wire"})}>
                    <View style={guidewireCharacteristics.cyan}>
                        <Text style={guidewireCharacteristics.text}>Extra Support (Tortuous, Ostial)</Text>
                    </View>
                </TouchableOpacity>

                < TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('tabview', {data: frontlineFinesse, fromRoute: 'Guidewire Characteristics', pageTitle: "Frontline Finesse", from: "wire"})}>
                    <View style={guidewireCharacteristics.blue}>
                        <Text style={guidewireCharacteristics.text}>Frontline Finesse (Angulated, Calcified, Tortuous)</Text>
                    </View>
                </TouchableOpacity>

                < TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('tabview', {data: Specialty, fromRoute: 'Guidewire Characteristics', pageTitle: "Specialty", from: "wire"})}>
                    <View style={guidewireCharacteristics.green}>
                        <Text style={guidewireCharacteristics.text}>Specialty (Thrombotic/CTO Challenging)</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>

            <View style={guidewireCharacteristics.menu}>
                <Menu2 onResponse={handleResponse(navigation, ["Non-CTO", "Guidewire Characteristics", ""])} />
            </View>
        </View>
    )
}
