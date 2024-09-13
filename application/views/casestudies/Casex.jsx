import React from 'react'
import {ScrollView, Text, TouchableOpacity, View, SafeAreaView} from 'react-native'
import {StatusBar} from 'expo-status-bar';
import constants from '../../styles/constants';
import {darkPurple} from '../../consts/Colors'
import library from "../../styles/library";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Case1 from "./pages/Case1";
import {casesListing} from "./CasesListing";
import Case2 from "./pages/Case2";
import Case3 from "./pages/Case3";
import Case4 from "./pages/Case4";
import Case5 from "./pages/Case5";
import Case6 from "./pages/Case6";
import Case7 from "./pages/Case7";
import Case8 from "./pages/Case8";
import Case9 from "./pages/Case9";
import Case11 from "./pages/Case11";
import Case12 from "./pages/Case12";
import Case13 from "./pages/Case13";
import Case14 from "./pages/Case14";
import Case15 from "./pages/Case15";
import Case16 from "./pages/Case16";
import Case17 from "./pages/Case17";
import Case18 from "./pages/Case18";
import Case19 from "./pages/Case19";
import Case20 from "./pages/Case20";
import Case21 from "./pages/Case21";
import Case22 from "./pages/Case22";
import Case23 from "./pages/Case23";
import Case24 from "./pages/Case24";
import Case25 from "./pages/Case25";
import Case10 from "./pages/Case10";
import Case26 from "./pages/Case26";

export default function(props) {
    let {navigation, route} = props;
    let {params} = route;

    return (
        <View style={[library.container, {paddingHorizontal: 0}]}>
            <StatusBar style="auto"/>
            <View
                style={[constants.row, {marginTop: 50, marginBottom: 30, marginHorizontal: 20, alignItems: "center"}]}>
                <TouchableOpacity onPress={event => navigation.goBack()} style={{flex: 1}}>
                    <MaterialCommunityIcons name="keyboard-backspace" size={24} color={darkPurple}/>
                </TouchableOpacity>
                <Text style={[library.title, {fontSize: 18, flex: 8}]}>{params}</Text>
            </View>

            <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: "center"}}>
                {params === casesListing[0].title && <Case1/>}
                {params === casesListing[1].title && <Case2/>}
                {params === casesListing[2].title && <Case3/>}
                {params === casesListing[3].title && <Case4/>}
                {params === casesListing[4].title && <Case5/>}
                {params === casesListing[5].title && <Case6/>}
                {params === casesListing[6].title && <Case7/>}
                {params === casesListing[7].title && <Case8/>}
                {params === casesListing[8].title && <Case9/>}
                {params === casesListing[9].title && <Case10/>}
                {params === casesListing[10].title && <Case11/>}
                {params === casesListing[11].title && <Case12/>}
                {params === casesListing[12].title && <Case13/>}
                {params === casesListing[13].title && <Case14/>}
                {params === casesListing[14].title && <Case15/>}
                {params === casesListing[15].title && <Case16/>}
                {params === casesListing[16].title && <Case17/>}
                {params === casesListing[17].title && <Case18/>}
                {params === casesListing[18].title && <Case19/>}
                {params === casesListing[19].title && <Case20/>}
                {params === casesListing[20].title && <Case21/>}
                {params === casesListing[21].title && <Case22/>}
                {params === casesListing[22].title && <Case23/>}
                {params === casesListing[23].title && <Case24/>}
                {params === casesListing[24].title && <Case25/>}
                {params === casesListing[25].title && <Case26/>}
            </ScrollView>

        </View>
    );
}
