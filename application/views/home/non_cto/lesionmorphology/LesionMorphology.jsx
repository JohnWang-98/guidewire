import React from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Menu2, { handleResponse } from '../../../../components/hooks/Menu2'
import lesionMorphology from '../../../../styles/lesion_morphology';
import constants from '../../../../styles/constants';
import {_simple, angulated, bifurcation, calcified, thrombotic, tortuous} from "../../homedata/lesion_morphology";
import {getWidth} from "../../../../utils/cssfragments";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {darkPurple} from "../../../../consts/Colors";

export default function ({ navigation }) {
    return (
        <View style={lesionMorphology.container}>
            <StatusBar style="auto" />
            {/*APPBAR*/}
            <View style={{paddingTop: 25, paddingLeft: 0, width: getWidth(100), alignItems: "flex-start",}}>
                <TouchableOpacity onPress={event => navigation.goBack()} style={constants.radius}>
                    <MaterialCommunityIcons name="keyboard-backspace" size={24} color={darkPurple} />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={constants.scrollContainer}>
                <TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('tabview', {data: _simple, fromRoute: 'Lesion Morphology', pageTitle: "Simple/Uncomplicated Lesion", from: "lesion"},)}>
                    <View style={lesionMorphology.pink}>
                        <Text style={lesionMorphology.text}>Simple</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('tabview', {data: tortuous, fromRoute: 'Lesion Morphology', pageTitle: "Tortuous Vessel", from: "lesion"})}>
                    <View style={lesionMorphology.blue}>
                        <Text style={lesionMorphology.text}>Tortuous</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('tabview', {data: calcified, fromRoute: 'Lesion Morphology', pageTitle: "Calcified Lesion", from: "lesion"})}>
                    <View style={lesionMorphology.cyan}>
                        <Text style={lesionMorphology.text}>Calcified</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('tabview', {data: bifurcation, fromRoute: 'Lesion Morphology', pageTitle: "Bifurcation Lesion", from: "lesion"})}>
                    <View style={lesionMorphology.green}>
                        <Text style={lesionMorphology.text}>Bifurcation</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('tabview', {data: thrombotic, fromRoute: 'Lesion Morphology', pageTitle: "Thrombotic Occlusion", from: "lesion"})}>
                    <View style={lesionMorphology.pink}>
                        <Text style={lesionMorphology.text}>Thrombotic</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('tabview', {data: angulated, fromRoute: 'Lesion Morphology', pageTitle: "Angulated Lesion", from: "lesion"})}>
                    <View style={lesionMorphology.blue}>
                        <Text style={lesionMorphology.text}>Angulated</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

            <View style={lesionMorphology.menu}>
                <Menu2 onResponse={handleResponse(navigation, ["Non-CTO", "Lesion Morphology", ""])} />
            </View>
        </View>
    )
}
