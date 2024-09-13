import React from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import cto from '../../../../styles/cto';
import Menu2, { handleResponse } from '../../../../components/hooks/Menu2';
import {awe, distalCap, drilling, microchannel, proximalCap, vessel} from "../../homedata/cto-data/ante_grade";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {darkPurple, pink} from "../../../../consts/Colors";
import {getHeight, getWidth} from "../../../../utils/cssfragments";
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
                    < TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('linksView', {data: awe, fromRoute: 'awe', pageTitle: "AWE Stepwise Approach "},)}>
                        <View style={cto.pink}>
                            <Text style={cto.text}>Antegrade Wire Escalation</Text>
                        </View>
                    </TouchableOpacity>

                    < TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('linksView', {data: microchannel, fromRoute: 'microchannel', pageTitle: "Wires for Microchannel\nTracking"},)}>
                        <View style={cto.blue}>
                            <Text style={cto.text}>Microchannel Tracking</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('linksView', {data: proximalCap, fromRoute: 'proximalCap', pageTitle: "Wires for Crossing\nProximal Cap"},)}>
                        <View style={cto.cyan}>
                            <Text style={cto.text}>Crossing Proximal Cap</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('linksView', {data: drilling, fromRoute: 'drilling', pageTitle: "Wires for Drilling"},)}>
                        <View style={cto.green}>
                            <Text style={cto.text}>For Drilling</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('linksView', {data: vessel, fromRoute: 'vessel', pageTitle: "Wires for Navigating\nThrough The Vessel"},)}>
                        <View style={cto.pink}>
                            <Text style={cto.text}>{"Through the Vessel"}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={5} onPress={() => navigation.navigate('linksView', {data: distalCap, fromRoute: 'distalCap', pageTitle: "Wires for Distal\nCap Crossing"},)}>
                        <View style={cto.blue}>
                            <Text style={cto.text}>Distal Cap Crossing</Text>
                        </View>
                    </TouchableOpacity>
            </ScrollView>

            <View style={cto.menu}>
                <Menu2 onResponse={handleResponse(navigation, ["CTO", "Antegrade Approach", ""])} />
            </View>
        </View>
    )
}
