import React, { useState } from 'react'
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import welcome from '../../styles/welcome';
import more from "../../styles/more";
import aboutUs from "../../styles/about_us";
import library from "../../styles/library";
import {getHeight, getWidth} from "../../utils/cssfragments";
import constants from "../../styles/constants";
import {MaterialIcons} from "@expo/vector-icons";
import {darkPurple} from "../../consts/Colors";

let content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

class AboutUs extends React.Component {

    renderCard(doctor, text, img) {
        return (
            <View style={aboutUs.card}>
                <Image source={img} style={aboutUs.circleImage}/>
                <View style={{padding: 20}}>
                    <Text style={aboutUs.label}>
                        {doctor}
                    </Text>
                    <Text style={aboutUs.labelText}>
                        {text}
                    </Text>
                </View>
            </View>
        );
    }

    render() {
        let {navigation} = this.props;

        return (
            <View style={aboutUs.container}>
                <StatusBar style="auto"/>
                <View style={[constants.row, constants.moreSectionAppbar, {marginBottom: 5}]}>
                    <TouchableOpacity onPress={event => navigation.goBack()}>
                        <MaterialIcons name="arrow-back-ios" size={20} color={darkPurple} />
                    </TouchableOpacity>
                    <Text style={constants.appbarTitle}>About Us</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>
                    {/*<Image source={require('../../../assets/images/doctors-and-specialists.jpg')} style={aboutUs.image}/>*/}

                    {/*<Text style={aboutUs.text}>{content}</Text>*/}

                    {this.renderCard(
                        "Annapoorna Kini, MD, MRCP, FACC",
                        "Director, Cardiac Catheterization Laboratory\n" +
                        "Director, Structural Intervention Program\n" +
                        "Director, Interventional Cardiology Fellowship Program\n" +
                        "Zena and Michael A. Wiener Professor of Medicine\n" +
                        "Icahn School of Medicine at Mount Sinai",
                        require('../../../assets/images/kini-2020.jpg')
                    )}

                    {this.renderCard(
                        "Samin Sharma, MD, FACC, FSCAI",
                        "Director, Clinical and Interventional Cardiology\n" +
                        "President, Mount Sinai Heart Network\n" +
                        "Dean, International Clinical Affiliations\n" +
                        "Anandi Lal Sharma Professor of Medicine\n" +
                        "Icahn School of Medicine at Mount Sinai",
                        require('../../../assets/images/dr-saminsharma.jpg')
                    )}

                    {this.renderCard(
                        "Htoo Kyaw",
                        "Interventional Cardiology Fellow\n" +
                        "Icahn School of Medicine at Mount Sinai",
                        require('../../../assets/images/htoo-kyaw.jpg')
                    )}

                    {this.renderCard(
                        "Andrew Vengrenyuk, MS",
                        "Associate Research Coordinator\n" +
                        "Icahn School of Medicine at Mount Sinai",
                        require('../../../assets/images/andrew-vengrenyuk.jpg')
                    )}

                    {/*<Text style={aboutUs.text}>{content}</Text>*/}
                    <Text style={constants.separateTop}/>
                </ScrollView>
            </View>
        )
    }
}

export default AboutUs;
