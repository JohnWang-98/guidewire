import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Menu2, { handleResponse } from '../../../components/hooks/Menu2'
import workHorse from '../../../styles/workHorse';
import constants from '../../../styles/constants';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {darkPurple} from "../../../consts/Colors";
import {anteGradeCases} from "../homedata/cto-data/ante_grade";
import {retroGradeCases} from "../homedata/cto-data/retrograde_data";
import {wireCharacteristics, wires} from "../homedata/home_route_data";
import {antogradeRoutes, retrogradeRoutes} from "../homedata/cto-data/cto_routes_data";
import {getHeight, getWidth} from "../../../utils/cssfragments";

export default class SingleView extends React.Component {

    render() {
        let {navigation, route} = this.props;
        let {data, fromRoute, pageTitle} = route.params;
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

                <View style={workHorse.box}>
                    {
                            data.map((i, index) =>
                                <View key={index} style={[constants.row, {justifyContent: "flex-start"}]}>
                                    <Text style={{paddingRight: 5, paddingTop: 5}}>•</Text>
                                    <TouchableOpacity onPress={event => {
                                        let w;
                                        if(fromRoute === 'Retrograde Approach'){
                                            w = retrogradeRoutes.filter(value => parseInt(value.id) === i.linkItems);
                                        }
                                        else {
                                            w = antogradeRoutes.filter(value => parseInt(value.id) === i.linkItems);
                                        }
                                        if(i.linkItems !== 0) navigation.navigate('wire', w[0])
                                    }}>
                                        <Text style={i.linkItems > 0 ? workHorse.text : workHorse.h1}>{i.name}</Text>
                                    </TouchableOpacity>
                                    {/*<Text style={workHorse.text}>{i}</Text>*/}
                                </View>
                            )
                    }
                </View>

                <Text style={[constants.separateTop, {flex: 1}]}/>

                <TouchableOpacity onPress={() => {
                    if(fromRoute === 'Antegrade Approach'){
                        // console.log(anteGradeCases);
                        navigation.navigate('casestudies', anteGradeCases);
                    } else {
                        // console.log(retroGradeCases);
                        navigation.navigate('casestudies', retroGradeCases);
                    }
                }}>
                    <View style={workHorse.button}>
                        <Image style={{height: getHeight(8), width: getWidth(8)}}
                               resizeMode={"contain"}
                               source={require('../../../../assets/images/case_studies2.png')}/>
                        <Text style={constants.separateRight}/>
                        <Text style={workHorse.textButton}>Retrograde Cases</Text>
                        <Text style={constants.separateRight}/>
                        <Image style={{height: getHeight(8), width: getWidth(8)}}
                               resizeMode={"contain"}
                               source={require('../../../../assets/images/arrow_right.png')}/>
                    </View>
                </TouchableOpacity>

                <Text style={[constants.separateTop, {marginBottom: 100}]}/>

                <View style={workHorse.menu}>
                    <Menu2 onResponse={handleResponse(navigation, ["CTO", fromRoute, ""])}/>
                </View>
            </View>
        )
    }
}
