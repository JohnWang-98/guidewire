import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import basics from "../../../styles/basics";
import {charAndFunctionality, commonlyUsedGuideWires, introduction, wireTypes} from "../basics_data";
import constants from "../../../styles/constants";
import {getHeight, getWidth} from "../../../utils/cssfragments";
import {Cell, Row, Rows, Table} from "react-native-table-component";
import {blue, darkPurple, gray, orange, pink, white} from "../../../consts/Colors";

export default function () {
    function tableView(data, title) {
        return(
            <View>
                {
                    data.map((value, index) =>
                        <View key={index} style={{marginBottom: 10}}>
                            <Text style={[basics.h2, {
                                backgroundColor: pink,
                                flex: 1,
                                color: white,
                                textAlign: "center",
                                paddingHorizontal: 10,
                                paddingVertical: 15,
                                marginTop: 0}]}>
                                {value.title}
                            </Text>
                            <View style={[constants.row, {marginTop: 1}]}>
                                <Text style={[basics.h2, {
                                    flex: 2,
                                    backgroundColor: blue,
                                    // width: getWidth(37),
                                    color: white,
                                    paddingHorizontal: 10,
                                    paddingVertical: 15,
                                    marginTop: 0}]}>
                                    Manufacturer
                                </Text>
                                <Text style={[basics.p, {
                                        flex: 3,
                                        backgroundColor: gray,
                                        color: darkPurple,
                                        paddingHorizontal: 10,
                                        paddingVertical: 15,
                                    }]}>
                                    {value.manufacturer}
                                </Text>
                            </View>
                            <View style={[constants.row, {marginTop: 1}]}>
                                <Text style={[basics.h2, {
                                    flex: 2,
                                    backgroundColor: blue,
                                    color: white,
                                    paddingHorizontal: 10,
                                    paddingVertical: 15,
                                    // width: getWidth(37),
                                    marginTop: 0}]}>
                                    Tip Load
                                </Text>
                                <Text style={[basics.p, {
                                        flex: 3,
                                        backgroundColor: gray,
                                        color: darkPurple,
                                        paddingHorizontal: 10,
                                        paddingVertical: 15,
                                    }]}>
                                    {value.tip_load}
                                </Text>
                            </View>
                            <View style={[constants.row, {marginTop: 1}]}>
                                <Text style={[basics.h2, {
                                    flex: 2,
                                    backgroundColor: blue,
                                    color: white,
                                    paddingHorizontal: 10,
                                    paddingVertical: 15,
                                    marginTop: 0}]}>
                                    Properties
                                </Text>
                                <Text style={[basics.p, {
                                        flex: 3,
                                        backgroundColor: gray,
                                        color: darkPurple,
                                        paddingHorizontal: 10,
                                        paddingVertical: 15,
                                    }]}>
                                    {value.properties}
                                </Text>
                            </View>
                        </View>
                    )
                }
            </View>
        );
    }


    return (
        <View style={{paddingHorizontal: 5, paddingVertical: 20}}>
            <Text style={[basics.h2, {paddingHorizontal: 10, textAlign: "center", marginTop: 10}]}>
                {"Polymer Jacket"}
            </Text>
            {tableView(commonlyUsedGuideWires.polymer_jacket)}

            <Text style={[basics.h2, {paddingHorizontal: 10,  textAlign: "center", marginTop: 10}]}>
                {"Non-Polymer Jacket"}
            </Text>
            {tableView(commonlyUsedGuideWires.non_polymer_jacket)}

            <Text style={[basics.h2, {paddingHorizontal: 10,  textAlign: "center", marginTop: 10}]}>
                {"Externalization Wires"}
            </Text>
            {tableView(commonlyUsedGuideWires.externalization_wires)}

            <Text style={[basics.h2, {paddingHorizontal: 10,  textAlign: "center", marginTop: 10}]}>
                {"Wiggle Wire"}
            </Text>
            {tableView(commonlyUsedGuideWires.wiggle_wire)}

            <Text style={[basics.h2, {paddingHorizontal: 10, textAlign: "center", marginTop: 10}]}>{"Extra Support Wires"}</Text>
            {tableView(commonlyUsedGuideWires.extra_support_wires)}
        </View>
    )
}
