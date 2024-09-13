import React from 'react'
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Menu, { handleResponse } from '../../components/hooks/Menu';
import more from '../../styles/more';
import constants from '../../styles/constants';
import fire, {logout} from "../../components/services/firebase";
import privacyPolicy from "../../styles/privacy_p";
import {orange} from "../../consts/Colors";

export default class More extends React.Component {
    async handleLogout() {
        const {navigation} = this.props;
        const res = fire.auth().signOut();
        fire.auth().onAuthStateChanged(user => {
            if(user == null){
                navigation.reset({
                    index: 0,
                    routes: [{name: 'login'}]
                });
            }
        });
    }

    render() {
        let {navigation} = this.props;
        return (
            <View style={more.container}>
                <StatusBar style="auto"/>
                <Text style={constants.pageTitle}>More</Text>

                <View style={{flex: 1, alignItems: "center", paddingBottom: "24%", justifyContent: "center"}}>
                    <ScrollView
                        contentContainerStyle={{flexGrow: 1, alignItems: "center"}}
                        showsVerticalScrollIndicator={false}
                    >
                        <Text style={constants.separateTop}/>
                        {/*<Text style={constants.separateTop}/>*/}
                        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                            <View style={[constants.row, more.item]}>
                                <View style={[more.imageCircle, constants.pink]}>
                                    <Image style={[more.image, {height: 16}]}
                                           source={require('../../../assets/images/user.png')}/>
                                </View>
                                <Text style={more.text}>My Profile</Text>
                                <Image style={more.right} source={require('../../../assets/images/right.png')}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('changepassword')}>
                            <View style={[constants.row, more.item]}>
                                <View style={[more.imageCircle, constants.blue]}>
                                    <Image style={more.image} source={require('../../../assets/images/lock.png')}/>
                                </View>
                                <Text style={more.text}>Change Password</Text>
                                <Image style={more.right} source={require('../../../assets/images/right.png')}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('aboutus')}>
                            <View style={[constants.row, more.item]}>
                                <View style={[more.imageCircle, constants.cyan]}>
                                    <Image style={more.image} source={require('../../../assets/images/hospital.png')}/>
                                </View>
                                <Text style={more.text}>About Us</Text>
                                <Image style={more.right} source={require('../../../assets/images/right.png')}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('privacypolicy')}>
                            <View style={[constants.row, more.item]}>
                                <View style={[more.imageCircle, constants.green]}>
                                    <Image style={more.image} source={require('../../../assets/images/policy.png')}/>
                                </View>
                                <Text style={more.text}>Privacy Policy</Text>
                                <Image style={more.right} source={require('../../../assets/images/right.png')}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('contactus')}>
                            <View style={[constants.row, more.item]}>
                                <View style={[more.imageCircle, constants.pink]}>
                                    <Image style={[more.image, {width: 20, height: 15}]}
                                           source={require('../../../assets/images/mail.png')}/>
                                </View>
                                <Text style={more.text}>Contact Us</Text>
                                <Image style={more.right} source={require('../../../assets/images/right.png')}/>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={this.handleLogout.bind(this)}>
                            <View style={[constants.row, more.item]}>
                                <View style={[more.imageCircle, constants.oragne]}>
                                    <Image style={[more.image, {height: 16}]}
                                           source={require('../../../assets/images/shutdown.png')}/>
                                </View>
                                <Text style={[more.text, {color: orange}]}>Logout</Text>
                                <Image style={more.right} source={require('../../../assets/images/right.png')}/>
                            </View>
                        </TouchableOpacity>

                        <Text style={constants.separateTop}/>

                        <Image style={{height: 40, width: 120}} source={require('../../../assets/images/mountSinai.png')}/>

                        <Text style={constants.separateTop}/>
                    </ScrollView>
                </View>

                <Menu onResponse={handleResponse(navigation, 4)}/>
            </View>
        )
    }
}
