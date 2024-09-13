import React, { useState } from 'react'
import {Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {MaterialIcons} from '@expo/vector-icons';
import privacyPolicy from "../../styles/privacy_p";
import {black, blue, darkPurple, gray, green, pink, white} from "../../consts/Colors";
import caseStudies from "../../styles/case_studies";
import constants from "../../styles/constants";
import {policies} from "./policies";
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

class PrivacyPolicy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            currIndex: null,

            collapsed: true,
            activeSections: [],
            multipleSelect: false,
        }
    }

    setSections(sections) {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections
        });
    };

    renderHeader(section, _, isActive){
        //Accordion Header view
        return (
            <Animatable.View
                duration={400}
                // style={[styles.header, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor">
                <View style={privacyPolicy.rowContainer}>
                    <View style={{flex: 1, justifyContent: "center"}}>
                        <Text style={[privacyPolicy.text, {fontWeight: "bold"}]}>{section.q}</Text>
                    </View>
                    <View style={[privacyPolicy.circle, {backgroundColor: blue,}]}>
                        <Text style={privacyPolicy.headerText}>
                            {isActive ? "-" : "+"}
                        </Text>
                    </View>
                </View>
            </Animatable.View>
        );
    };

    renderContent(section, _, isActive) {
        //Accordion Content view
        return (
            <Animatable.View
                duration={400}
                // style={[styles.content, isActive ? styles.active : styles.inactive]}
                transition="backgroundColor">
                <View style={{borderBottomColor: gray, borderBottomWidth: 1, marginVertical: 20}} />
                <View style={{paddingHorizontal: 10, alignItems: 'flex-start'}}>
                    <Text style={privacyPolicy.text}>{section.a}</Text>
                </View>
                {/*<Animatable.Text*/}
                {/*    animation={isActive ? 'bounceIn' : undefined}*/}
                {/*    style={{ textAlign: 'center' }}>*/}
                {/*    {section.a}*/}
                {/*</Animatable.Text>*/}
            </Animatable.View>
        );
    };

    render() {
        let {navigation} = this.props;
        const {show, policy, collapsed, activeSections, multipleSelect} = this.state;
        return (
            <View style={[privacyPolicy.container, {paddingTop: 20}]}>
                <StatusBar style="auto"/>
                <View style={[constants.row, constants.moreSectionAppbar]}>
                    <TouchableOpacity onPress={event => navigation.goBack()}>
                        <MaterialIcons name="arrow-back-ios" size={20} color={darkPurple} />
                    </TouchableOpacity>
                    <Text style={constants.appbarTitle}>Privacy Policy</Text>
                </View>


                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={privacyPolicy.card}>
                        <Text style={privacyPolicy.title}>GuidewireAID Privacy Policy</Text>
                        <Text style={privacyPolicy.subTitle}>Icahn School of Medicine at Mount Sinai</Text>
                        <Text style={[privacyPolicy.text, {marginTop: 20}]}>
                            {
                                "Icahn School of Medicine at Mount Sinai (the \"School\" or \"we\" or \"us\") wants you to be familiar with how we collect, use and disclose information in connection with the GuidewireAID mobile app. This Privacy Policy describes our practices in connection with information that we collect through the GuidewireAID software made available by us for use on or through computers and mobile devices (the \"App\" or the \"GuidewireAID App\").\n" +
                                "\n" +
                                "Last updated: July 8, 2021"
                            }
                        </Text>
                    </View>
                    <Accordion
                        // containerStyle={privacyPolicy.card}
                        sectionContainerStyle={privacyPolicy.card}
                        activeSections={activeSections}
                        //for any default active section
                        sections={policies}
                        //title and content of accordion
                        touchableComponent={TouchableOpacity}
                        //which type of touchable component you want
                        //It can be the following Touchables
                        //TouchableHighlight, TouchableNativeFeedback
                        //TouchableOpacity , TouchableWithoutFeedback
                        expandMultiple={true}
                        //Do you want to expand mutiple at a time or single at a time
                        renderHeader={this.renderHeader.bind(this)}
                        //Header Component(View) to render
                        renderContent={this.renderContent.bind(this)}
                        //Content Component(View) to render
                        duration={400}
                        //Duration for Collapse and expand
                        onChange={this.setSections.bind(this)}
                        //setting the state of active sections
                    />
                    {/*BODY*/}
                    {/*{policies.map((i, index) => this.renderItem(i, index))}*/}
                </ScrollView>

            </View>
        );
    }
}

export default PrivacyPolicy;
