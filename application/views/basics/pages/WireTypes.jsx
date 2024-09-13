import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import basics from "../../../styles/basics";
import {charAndFunctionality, introduction, wireTypes} from "../basics_data";
import constants from "../../../styles/constants";
import {getHeight, getWidth} from "../../../utils/cssfragments";
import {Cell, Row, Rows, Table} from "react-native-table-component";
import {blue, darkPurple, gray, orange, pink, white} from "../../../consts/Colors";

export default function () {
    function tableView(name, data, keyName) {
        return(<View>
            <Text style={[basics.h2, {
                backgroundColor: blue,
                color: white,
                paddingHorizontal: 10,
                paddingVertical: 15,
                marginTop: 10}]}>
                {name}
            </Text>
            {
                data.map((value, index) =>
                    <Text key={index}
                          style={[basics.p, {
                              backgroundColor: gray,
                              color: darkPurple,
                              paddingHorizontal: 10,
                              paddingVertical: 15,
                              marginTop: 2,
                              marginLeft: 15
                          }]}>
                        {value[keyName]}
                    </Text>)
            }
        </View>);
    }


    return (
        <View style={{paddingHorizontal: 5, paddingVertical: 20}}>
            <View>
                <Text style={[basics.h2, {
                    backgroundColor: blue,
                    color: white,
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    marginTop: 10}]}>
                    Workhorse
                </Text>
                {
                    wireTypes.workhorse.map((value, index) =>
                        <View key={index}>
                            <Text style={[basics.p, {
                                      backgroundColor: pink,
                                      color: white,
                                      paddingHorizontal: 10,
                                      paddingVertical: 15,
                                      marginTop: 2,
                                      marginLeft: 15
                                  }]}>
                                {value.name}
                            </Text>
                            {
                                value.items.map((item , i)=> <Text key={i} style={[basics.p, {
                                    backgroundColor: gray,
                                    color: darkPurple,
                                    paddingHorizontal: 10,
                                    paddingVertical: 15,
                                    marginTop: 2,
                                    marginLeft: 30
                                }]}>
                                    {item}
                                </Text>)
                            }
                        </View>)
                }
            </View>
            <View>
                <Text style={[basics.h2, {
                    backgroundColor: blue,
                    color: white,
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    marginTop: 10}]}>
                    Polymer Jacketed
                </Text>
                {
                    wireTypes.polymer.map((value, index) =>
                        <View key={index}>
                            <Text style={[basics.p, {
                                      backgroundColor: pink,
                                      color: white,
                                      paddingHorizontal: 10,
                                      paddingVertical: 15,
                                      marginTop: 2,
                                      marginLeft: 15
                                  }]}>
                                {value.name}
                            </Text>
                            {
                                value.items.map((item , i)=> <Text key={i} style={[basics.p, {
                                    backgroundColor: gray,
                                    color: darkPurple,
                                    paddingHorizontal: 10,
                                    paddingVertical: 15,
                                    marginTop: 2,
                                    marginLeft: 30
                                }]}>
                                    {item}
                                </Text>)
                            }
                        </View>)
                }
            </View>
            <View>
                <Text style={[basics.h2, {
                    backgroundColor: blue,
                    color: white,
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    marginTop: 10}]}>
                    Stiff
                </Text>
                {
                    wireTypes.stiff.map((value, index) =>
                        <View key={index}>
                            <Text style={[basics.p, {
                                      backgroundColor: gray,
                                      color: darkPurple,
                                      paddingHorizontal: 10,
                                      paddingVertical: 15,
                                      marginTop: 2,
                                      marginLeft: 15
                                  }]}>
                                {value}
                            </Text>
                        </View>)
                }
            </View>
            <View>
                <Text style={[basics.h2, {
                    backgroundColor: blue,
                    color: white,
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    marginTop: 10}]}>
                    Extra Support
                </Text>
                {
                    wireTypes.extraSupport.map((value, index) =>
                        <View key={index}>
                            <Text style={[basics.p, {
                                      backgroundColor: gray,
                                      color: darkPurple,
                                      paddingHorizontal: 10,
                                      paddingVertical: 15,
                                      marginTop: 2,
                                      marginLeft: 15
                                  }]}>
                                {value}
                            </Text>
                        </View>)
                }
            </View>
            <View>
                <Text style={[basics.h2, {
                    backgroundColor: blue,
                    color: white,
                    paddingHorizontal: 10,
                    paddingVertical: 15,
                    marginTop: 10}]}>
                    Other
                </Text>
                {
                    wireTypes.other.map((value, index) =>
                        <View key={index}>
                            <Text style={[basics.p, {
                                      backgroundColor: gray,
                                      color: darkPurple,
                                      paddingHorizontal: 10,
                                      paddingVertical: 15,
                                      marginTop: 2,
                                      marginLeft: 15
                                  }]}>
                                {value}
                            </Text>
                        </View>)
                }
            </View>
            {/*{tableView("Workhorse", wireTypes, "workhorse")}*/}
            {/*{tableView("Polymer Jacketed", wireTypes, "polymer")}*/}
            {/*{tableView("Stiff", wireTypes, "stiff")}*/}
            {/*{tableView("Extra Support", wireTypes, "extraSupport")}*/}
            {/*{tableView("Other", wireTypes, "other")}*/}
            {/*<Table  borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>*/}
            {/*    <Row data={["Workhorse", "Polymer Jacketed", "Stiff", "Extra Support", "Other"]} textStyle={[basics.h2, {textAlign: "center"}]}/>*/}
            {/*    {*/}
            {/*        wireTypes.map((value, index) => <Row*/}
            {/*            key={index}*/}
            {/*            data={[value.workhorse, value.polymer, value.stiff, value.extraSupport, value.other]}*/}
            {/*            textStyle={[basics.p, {textAlign: "center"}]}*/}
            {/*        />)*/}
            {/*    }*/}
            {/*</Table>*/}

        </View>
    )
}
