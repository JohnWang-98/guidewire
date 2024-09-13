import React from 'react'
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Menu2, { handleResponse } from '../../../components/hooks/Menu2'
import workHorse from '../../../styles/workHorse';
import constants from '../../../styles/constants';
import {darkPurple, pink} from "../../../consts/Colors";
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import library from "../../../styles/library";
import {getHeight, getWidth} from "../../../utils/cssfragments";
import {wireCharacteristics, wires} from "../homedata/home_route_data";

export default class TabView extends React.Component {
    state = {
        example: false
    }

    render() {
        let {navigation, route} = this.props;
        const {example} = this.state;
        let {data, fromRoute, pageTitle} = route.params;
        let titles = Object.keys(data);
        // console.log(this.props)
        return (
            <View style={workHorse.container}>
                <StatusBar style="auto"/>
                <View style={constants.appbarWrap}>
                    <TouchableOpacity onPress={event => navigation.goBack()}  style={constants.smallRadius}>
                        <MaterialCommunityIcons name="keyboard-backspace" size={24} color={darkPurple} />
                    </TouchableOpacity>


                    <Text style={workHorse.title}>{pageTitle}</Text>
                </View>

                <View style={[constants.row, workHorse.topMenu]}>
                    <TouchableOpacity onPress={() => this.setState({example: false})}>
                        <View style={example ? workHorse.button2 : workHorse.button}>
                            <Text style={example ? workHorse.textButton2 : workHorse.textButton}>{titles[0]}</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.setState({example: true})}>
                        <View style={example ? workHorse.button : workHorse.button2}>
                            <Text style={example ? workHorse.textButton : workHorse.textButton2}>{titles[1]}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/*<Text style={constants.separateTop}/>*/}

                <ScrollView
                    contentContainerStyle={{
                        flexGrow: 1,
                        width: getWidth(100),
                        justifyContent: 'flex-start',
                        paddingTop: 15,
                        paddingBottom: "35%",
                        alignItems: "center",
                        overflow: "visible",
                    }}
                    // style={{flex: 1}}
                    showsVerticalScrollIndicator={false}>
                    <View style={workHorse.box}>
                        {
                            !example ?
                                data[titles[0]].map((i, index) =>
                                    <View key={index} style={[constants.row, {justifyContent: "flex-start"}]}>
                                        <Text style={{paddingRight: 5, paddingTop: 5}}>•</Text>
                                        <Text style={workHorse.text}>{i}</Text>
                                    </View>
                                ) : data[titles[1]].map((i, index) =>
                                    <View key={index} style={[constants.row, {justifyContent: "flex-start"}]}>
                                        {i.linkItems > 0 && <Text style={{paddingRight: 5, paddingTop: 5}}>•</Text>}
                                        <TouchableOpacity onPress={event => {
                                            let w;
                                            if(fromRoute === 'Guidewire Characteristics'){
                                                w = wireCharacteristics.filter(value => {
                                                    if(typeof value.id === 'string'){
                                                        return parseInt(value.id) === i.linkItems;
                                                    } else {
                                                        return value.id === i.linkItems;
                                                    }
                                                });
                                            } else {
                                                w = wires.filter(value => value.id === i.linkItems);
                                            }
                                            if(i.linkItems && i.linkItems !== 0) navigation.navigate('wire', w[0])
                                        }}>
                                            <Text style={i.linkItems == null ? workHorse.text : (i.linkItems && i.linkItems > 0) ? workHorse.text : workHorse.h1}>{i.name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                        }
                    </View>

                    <Text style={[constants.separateTop, {flex: 1}]}/>

                    {
                        data.cases != null &&
                        <TouchableOpacity onPress={() => navigation.navigate('casestudies', data.cases)}>
                            <View style={workHorse.button}>
                                <Image style={{height: getHeight(8), width: getWidth(8)}}
                                       resizeMode={"contain"}
                                       source={require('../../../../assets/images/case_studies2.png')}/>
                                <Text style={constants.separateRight}/>
                                <Text style={workHorse.textButton}>Case Reviews</Text>
                                <Text style={constants.separateRight}/>
                                <Image style={{height: getHeight(8), width: getWidth(8)}}
                                       resizeMode={"contain"}
                                       source={require('../../../../assets/images/arrow_right.png')}/>
                            </View>
                        </TouchableOpacity>
                    }
                </ScrollView>

                <View style={workHorse.menu}>
                    <Menu2 onResponse={handleResponse(navigation, ["Non-CTO", fromRoute, ""])}/>
                </View>
            </View>
        )
    }
}
