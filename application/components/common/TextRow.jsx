import React from 'react';
import {Text, View} from "react-native";
import basics from "../../styles/basics";
import constants from "../../styles/constants";

export default function (props) {
    let {name, detail} = props;
    return (
        <Text>
            <Text style={basics.h2}>
                {name}
            </Text>
            <Text style={basics.p}>
                {detail}
            </Text>
        </Text>
    );
}