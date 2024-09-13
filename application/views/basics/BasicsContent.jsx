import React from 'react'
import {Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import library from '../../styles/library';
import constants from "../../styles/constants";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import {darkPurple, white} from "../../consts/Colors";
import basics from "../../styles/basics";
import {getWidth} from "../../utils/cssfragments";
import WebView from "react-native-webview";
import Introduction from "./pages/Introduction";
import WireBasics from "./pages/WireBasics";
import WireCharacteristics from "./pages/WireCharacteristics";
import WireTypes from "./pages/WireTypes";
import Atherectomy from "./pages/Atherectomy";
import MicroCatheter from "./pages/MicroCatheter";
import Reference from "./pages/Reference";
import WireSelection from "./pages/WireSelection";
import CTOApproachAndWiresSelection from "./pages/CTOApproachAndWiresSelection";
import CommonlyUsedCTOGuidewires from "./pages/CommonlyUsedCTOGuidewires";
import workHorse from "../../styles/workHorse";

export default class BasicsContent extends React.Component {
    render() {
        let {navigation, route} = this.props;
        let {params} = route;
        return (
            <View style={[library.container, {paddingHorizontal: 0}]}>
                <StatusBar style="auto"/>
                <View style={[constants.appbarWrap, {paddingHorizontal: 50}]}>
                    <TouchableOpacity onPress={event => navigation.goBack()}  style={constants.smallRadius}>
                        <MaterialIcons name="arrow-back-ios" size={24} color={darkPurple} />
                    </TouchableOpacity>


                    <Text style={[library.title, {fontSize: 18, alignSelf: "flex-start"}]}>{params}</Text>
                </View>

                <View style={[{backgroundColor: white,  paddingHorizontal: 10, borderRadius: 0, flex: 1}]}>
                    <ScrollView>
                        {params === "Introduction" && <Introduction/>}
                        {params === "Wire Basics" && <WireBasics/>}
                        {params === "Wire Characteristics" && <WireCharacteristics/>}
                        {params === "Wire Types" && <WireTypes/>}
                        {params === "Wire Selection" && <WireSelection/>}
                        {params === "CTO Approach and Wires Selection" && <CTOApproachAndWiresSelection/>}
                        {params === "Commonly Used CTO Guidewires" && <CommonlyUsedCTOGuidewires/>}
                        {params === "Atherectomy" && <Atherectomy/>}
                        {params === "Microcatheter" && <MicroCatheter/>}
                        {params === "References" && <Reference/>}
                    </ScrollView>
                </View>
            </View>
        )
    }
}
