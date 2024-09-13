import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import basics from "../../../styles/basics";
import {introduction} from "../basics_data";
import constants from "../../../styles/constants";

export default function () {
    return (
        <View style={{paddingHorizontal: 5, paddingVertical: 20}}>
            {/*<Text style={basics.h1}>{introduction.title}</Text>*/}
            {/*<Text style={constants.separateTop}/>*/}
            <Text style={basics.p}>{introduction.content}</Text>
        </View>
    )
}
