import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Menu2, { handleResponse } from '../../../components/hooks/Menu2'
import workHorse from '../../../styles/workHorse';
import constants from '../../../styles/constants';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {darkPurple} from "../../../consts/Colors";
import {anteGradeCases, distalCap, drilling} from "../homedata/cto-data/ante_grade";
import {retroGradeCases} from "../homedata/cto-data/retrograde_data";
import {wireCharacteristics, wires} from "../homedata/home_route_data";
import {antogradeRoutes, retrogradeRoutes} from "../homedata/cto-data/cto_routes_data";
import {getHeight, getWidth} from "../../../utils/cssfragments";

export default class LinksView extends React.Component {

    handleNavigate(linkItems) {
        let {navigation, route} = this.props;
        let w = antogradeRoutes.filter(value => parseInt(value.id) === linkItems);
        navigation.navigate('wire', w[0]);
    }

    renderAWE() {
        return (
            <View style={workHorse.box}>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5}}>•</Text>
                    <Text style={constants.row}>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(1)}>
                            {"Fielder"}
                        </Text>
                        <Text style={workHorse.text}>{" (non tapered polymer jacket tip) Fielder "}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(2)}>{" XT"}</Text>
                        <Text style={workHorse.text}>{"/"}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(3)}>{"XT-A"}</Text>
                        <Text style={workHorse.text}>{"/"}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(4)}>{"XT-R "}</Text>
                        <Text style={workHorse.text}>{"(Tapered polymer jacket tip)"}</Text>
                    </Text>
                </View>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5}}>•</Text>
                    <Text style={constants.row}>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(5)}>
                            {"MiracleBros"}
                        </Text>
                        <Text style={workHorse.text}>{" (Open Coil, Straight tip, high tip stiffness > facilitate for drilling and can create the curve) OR "}</Text>
                        {/*<Text style={workHorse.linkText} onPress={event => this.handleNavigate(6)}>{" Gaia 3"}</Text>*/}
                        {/*<Text style={workHorse.text}>{" OR (Tapered, hydrophilic coating, composite core with 1:1 torque, high tip stiffness)"}</Text>*/}
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(12)}>
                            {"Gaia 2"}
                        </Text>
                        <Text style={workHorse.text}>
                            {" / "}
                        </Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(6)}>
                            {"3"}
                        </Text>
                        <Text style={workHorse.text}>{" (Tapered, hydrophilic coating, composite core with 1:1 torque, high tip stiffness) "}</Text>
                    </Text>
                </View>
                {/*<View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>*/}
                {/*    <Text style={{paddingRight: 5}}>•</Text>*/}
                {/*    <Text style={constants.row}>*/}
                {/*        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(12)}>*/}
                {/*            {"Gaia 2"}*/}
                {/*        </Text>*/}
                {/*        <Text style={workHorse.text}>*/}
                {/*            {" / "}*/}
                {/*        </Text>*/}
                {/*        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(6)}>*/}
                {/*            {"3"}*/}
                {/*        </Text>*/}
                {/*        <Text style={workHorse.text}>{" (Tapered, hydrophilic coating, composite core with 1:1 torque, high tip stiffness) "}</Text>*/}
                {/*    </Text>*/}
                {/*</View>*/}
                <View style={[constants.row, {justifyContent: "flex-start",  paddingTop: 5}]}>
                    <Text style={{paddingRight: 5}}>•</Text>
                    <Text style={constants.row}>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(7)}>
                            {"Confianza 9/12"}
                        </Text>
                        <Text style={workHorse.text}>{" (Tapered, hydrophilic coating, high tip stiffness)"}</Text>
                    </Text>
                </View>
            </View>
        );
    }

    renderMicroChannel() {
        return (
            <View style={workHorse.box}>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5}}>•</Text>
                    <Text style={constants.row}>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(8)}>{"Fielder"}</Text>
                        <Text style={workHorse.text}>{", "}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(9)}>{"Fielder XT"}</Text>
                        <Text style={workHorse.text}>{", "}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(10)}>{"Fielder XT-A"}</Text>
                    </Text>
                </View>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5}}>•</Text>
                    <Text style={constants.row}>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(11)}>{"Gaia 1"}</Text>
                        <Text style={workHorse.text}>{", "}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(12)}>{"Gaia 2"}</Text>
                    </Text>
                </View>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5}}>•</Text>
                    <Text style={constants.row}>
                        <Text style={workHorse.text}>{"High torque "}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(13)}>{"Pilot 50"}</Text>
                        <Text style={workHorse.text}>{"/"}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(14)}>{"150"}</Text>
                    </Text>
                </View>
            </View>
        );
    }

    renderProximalCap() {
        return (
            <View style={workHorse.box}>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5}}>•</Text>
                    <Text style={constants.row}>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(15)}>{"Fielder "}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(16)}>{"Fielder XT"}</Text>
                        <Text style={workHorse.text}>{"/"}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(17)}>{"XT-A"}</Text>
                        <Text style={workHorse.text}>{"/"}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(18)}>{"XT-R"}</Text>
                        <Text style={workHorse.text}>{" (find microchannel)"}</Text>
                    </Text>
                </View>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5}}>•</Text>
                    <Text style={constants.row}>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(19)}>{"Gaia 2"}</Text>
                        <Text style={workHorse.text}>{", "}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(20)}>{"Gaia 3"}</Text>
                    </Text>
                </View>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5}}>•</Text>
                    <Text style={constants.row}>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(21)}>{"MiracleBros 3, 4.5, 6"}</Text>
                    </Text>
                </View>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5}}>•</Text>
                    <Text style={constants.row}>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(22)}>{"Confianza Pro"}</Text>
                    </Text>
                </View>
            </View>
        );
    }

    renderDrilling() {
        return (
            <View style={workHorse.box}>
                {
                    drilling.map((i, index) =>
                        <View key={index} style={[constants.row, {justifyContent: "flex-start"}]}>
                            {i.linkItems > 0 && <Text style={{paddingRight: 5, paddingTop: 5}}>•</Text>}
                            <TouchableOpacity onPress={event => {
                                if(i.linkItems !== 0) this.handleNavigate(i.linkItems)
                            }}>
                                <Text style={i.linkItems > 0 ? workHorse.linkText : workHorse.h1}>{i.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        );
    }

    renderVessel() {
        return(
            <View style={workHorse.box}>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5}}>•</Text>
                    <Text style={constants.row}>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(30)}>{"Gaia"}</Text>
                        <Text style={workHorse.text}>{"/"}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(31)}>{"Gaia Next Series"}</Text>
                    </Text>
                </View>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5, paddingTop: 5}}>•</Text>
                    <Text style={workHorse.linkText} onPress={event => this.handleNavigate(32)}>{"MiracleBros 4.5, 6"}</Text>
                </View>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5, paddingTop: 5}}>•</Text>
                    <Text style={workHorse.linkText} onPress={event => this.handleNavigate(33)}>{"Confianza Pro"}</Text>
                </View>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5,  paddingTop: 5}}>•</Text>
                    <Text style={workHorse.linkText} onPress={event => this.handleNavigate(34)}>{"ULTIMATEbros 3"}</Text>
                </View>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5}}>•</Text>
                    <Text style={constants.row}>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(35)}>{"Progress 140T"}</Text>
                        <Text style={workHorse.text}>{", "}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(36)}>{"200T"}</Text>
                    </Text>
                </View>
            </View>
        );
    }

    renderDistalCap() {
        return(
            <View style={workHorse.box}>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5}}>•</Text>
                    <Text style={constants.row}>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(37)}>{"Confianza Pro 12"}</Text>
                        <Text style={workHorse.text}>{" (calcified distal cap)"}</Text>
                    </Text>
                </View>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5,  paddingTop: 5}}>•</Text>
                    <Text style={workHorse.linkText} onPress={event => this.handleNavigate(38)}>{"Progress 200T"}</Text>
                </View>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5,  paddingTop: 5}}>•</Text>
                    <Text style={workHorse.linkText} onPress={event => this.handleNavigate(39)}>{"Hornet 14"}</Text>
                </View>
                <View style={[constants.row, {justifyContent: "flex-start", paddingTop: 5}]}>
                    <Text style={{paddingRight: 5,  paddingTop: 5}}>•</Text>
                    <Text style={constants.row}>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(40)}>{"Astato 20"}</Text>
                        <Text style={workHorse.text}>{", "}</Text>
                        <Text style={workHorse.linkText} onPress={event => this.handleNavigate(41)}>{"40"}</Text>
                    </Text>
                </View>
            </View>
        );
    }

    render() {
        let {navigation, route} = this.props;
        let {fromRoute, pageTitle} = route.params;

        return (
            <View style={workHorse.container}>
                <StatusBar style="auto"/>
                <View style={constants.appbarWrap}>
                    <TouchableOpacity onPress={event => navigation.goBack()}  style={constants.smallRadius}>
                        <MaterialCommunityIcons name="keyboard-backspace" size={24} color={darkPurple} />
                    </TouchableOpacity>


                    <Text style={workHorse.title}>{pageTitle}</Text>
                </View>

                <Text style={constants.separateTop}/>

                {fromRoute === "awe" && this.renderAWE()}
                {fromRoute === "microchannel" && this.renderMicroChannel()}
                {fromRoute === "proximalCap" && this.renderProximalCap()}
                {fromRoute === "drilling" && this.renderDrilling()}
                {fromRoute === "vessel" && this.renderVessel()}
                {fromRoute === "distalCap" && this.renderDistalCap()}

                <Text style={[constants.separateTop, {flex: 1}]}/>

                <TouchableOpacity onPress={() => {
                    // if(fromRoute === 'Antegrade Approach'){
                    //     // console.log(anteGradeCases);
                        navigation.navigate('casestudies', anteGradeCases);
                    // } else {
                    //     // console.log(retroGradeCases);
                    //     navigation.navigate('casestudies', retroGradeCases);
                    // }
                }}>
                    <View style={workHorse.button}>
                        <Image style={{height: getHeight(8), width: getWidth(8)}}
                               resizeMode={"contain"}
                               source={require('../../../../assets/images/case_studies2.png')}/>
                        <Text style={constants.separateRight}/>
                        <Text style={workHorse.textButton}>Antegrade Cases</Text>
                        <Text style={constants.separateRight}/>
                        <Image style={{height: getHeight(8), width: getWidth(8)}}
                               resizeMode={"contain"}
                               source={require('../../../../assets/images/arrow_right.png')}/>
                    </View>
                </TouchableOpacity>

                <Text style={[constants.separateTop, {marginBottom: 100}]}/>

                <View style={workHorse.menu}>
                    <Menu2 onResponse={handleResponse(navigation, ["CTO", "Antegrade Approach", ""])}/>
                </View>
            </View>
        )
    }
}
