import React from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import cto from '../../../../styles/cto';
import Menu2, { handleResponse } from '../../../../components/hooks/Menu2'
import {collateral, crop, wireExternal} from "../../homedata/cto-data/retrograde_data";
import {getWidth} from "../../../../utils/cssfragments";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {darkPurple} from "../../../../consts/Colors";
import constants from "../../../../styles/constants";

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
                < TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('singleview', {data: collateral, fromRoute: 'Retrograde Approach', pageTitle: "Collateral/Septal Branches"},)}>
                    <View style={cto.pink}>
                        <Text style={cto.text}>Collateral / Septal Branches</Text>
                    </View>
                </TouchableOpacity>

                < TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('singleview', {data: crop, fromRoute: 'Retrograde Approach', pageTitle: "Cap Penetration"},)}>
                    <View style={cto.blue}>
                        <Text style={cto.text}>Cap Penetration</Text>
                    </View>
                </TouchableOpacity>

                < TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('singleview', {data: wireExternal, fromRoute: 'Retrograde Approach', pageTitle: "Wire Externalization"},)}>
                    <View style={cto.cyan}>
                        <Text style={cto.text}>Wire Externalization</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>

            <View style={cto.menu}>
                <Menu2 onResponse={handleResponse(navigation, ["CTO", "Retrograde Approach", ""])} />
            </View>
        </View>
    )
}
