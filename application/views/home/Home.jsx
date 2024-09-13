import React from 'react'
import {
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import home from '../../styles/home'
import Menu, { handleResponse } from '../../components/hooks/Menu'
import {StatusBar} from "expo-status-bar";
import {getWidth} from "../../utils/cssfragments";

export default class Home extends React.Component {
    render() {
        let {navigation} = this.props;
        return (
            <View style={home.container}>
                <StatusBar style="auto" />
                <ScrollView
                    contentContainerStyle={{flexGrow: 1, justifyContent: 'center', paddingBottom: "20%"}}
                    showsVerticalScrollIndicator={false}>
                    <Text style={home.text}>Lesion-Based Approach</Text>
                    <Text style={home.text2}>Please choose one of the following lesion types to learn clinical use of
                        guidewires in that particular scenario.</Text>

                    <View
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: 'center',
                            marginTop: 20
                        }}
                    >
                        <TouchableOpacity activeOpacity={20} onPress={() => navigation.navigate('noncto')}>
                            <ImageBackground
                                style={home.noncto}
                                source={require('../../../assets/images/oval_pink.png')}
                                // width={getWidth(100)}
                                resizeMode={"stretch"}
                            >
                                <Text style={home.nonctoText}>NON-CTO</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={20} onPress={() => navigation.navigate('cto')}>
                            <ImageBackground
                                style={home.cto}
                                source={require('../../../assets/images/oval_blue.png')}
                                resizeMode={"stretch"}
                            >
                                <Text style={home.ctoText}>CTO</Text>
                            </ImageBackground>
                        </TouchableOpacity>

                    </View>
                </ScrollView>

                <Menu onResponse={handleResponse(navigation, 0)}/>
            </View>
        )
    }
}
