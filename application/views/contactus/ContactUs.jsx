import React, { useState } from 'react'
import {Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import contactUs from "../../styles/contact_us";
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import {darkPurple} from "../../consts/Colors";
import email from 'react-native-email'
import login from "../../styles/login";
import signup from "../../styles/signup";
import constants from "../../styles/constants";


class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mail: "",
            phone: "",
            msg: ""
        }
    }

    handleSubmit() {
        const {name, mail, msg, phone} = this.state;
        const to = 'info@cardiologyapps.com';
        email(to, {
            subject: 'Inquiry from cardiology apps',
            body: `Name: ${name}\n Email: ${mail}\n Phone:${phone}\n\n ${msg}\n`,
        }).catch(console.error)
    }

    render() {
        let {navigation} = this.props;
        const {name, mail, msg, phone} = this.state;
        return (
            <View style={contactUs.container}>
                <StatusBar style="auto"/>
                <View style={[constants.row, constants.moreSectionAppbar, {marginBottom: 5}]}>
                    <TouchableOpacity onPress={event => navigation.goBack()}>
                        <MaterialIcons name="arrow-back-ios" size={20} color={darkPurple} />
                    </TouchableOpacity>
                    <Text style={constants.appbarTitle}>Contact Us</Text>
                </View>

                {/*BODY*/}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={contactUs.card}>
                        {/*LOCATION*/}
                        <View style={{flexDirection: 'row', marginBottom: 20}}>
                            <MaterialIcons name="location-pin" size={18} color={darkPurple} />
                            <View style={{marginLeft: 10}}>
                                <Text style={contactUs.label}>The Mount Sinai Hospital</Text>
                                <Text style={contactUs.labelText}>
                                    {"Cardiac Catheterization Laboratory One Gustave L. Levy Place\nNew York, NY 10029"}
                                </Text>
                            </View>
                        </View>

                        {/*MAIL*/}
                        <View style={{flexDirection: 'row', marginBottom: 20}}>
                            <MaterialIcons name="email" size={18} color={darkPurple} />
                            <View style={{marginLeft: 10}}>
                                <Text style={contactUs.label}>info@cardiologyapps.com</Text>
                                <Text style={contactUs.labelText}>
                                    Get in touch
                                </Text>
                            </View>
                        </View>

                        <Text style={contactUs.boldText}>Leave us a message</Text>
                        <TextInput style={[contactUs.input, , {height: 60}]}
                                   value={name}
                                   onChangeText={text => this.setState({name: text})}
                                   placeholder='Name'
                                   placeholderTextColor='#bbbce0'
                        />
                        <TextInput style={[contactUs.input, , {height: 60}]}
                                   value={mail}
                                   onChangeText={text => this.setState({mail: text})}
                                   placeholder='Email'
                                   placeholderTextColor='#bbbce0'
                        />
                        <TextInput style={[contactUs.input, {height: 60}]}
                                   value={phone}
                                   onChangeText={text => this.setState({phone: text})}
                                   placeholder='Phone Number'
                                   placeholderTextColor='#bbbce0'
                        />
                        <TextInput style={[contactUs.input, {textAlignVertical: 'top'}]}
                                   numberOfLines={10}
                                   value={msg}
                                   onChangeText={text => this.setState({msg: text})}
                                   placeholder='Leave your message'
                                   placeholderTextColor='#bbbce0'
                        />

                        <TouchableOpacity style={contactUs.submit} onPress={this.handleSubmit.bind(this)}>
                            <Text style={contactUs.nextText}>Submit</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={constants.separateTop}/>
                </ScrollView>
            </View>
        );
    }
}

export default ContactUs;
