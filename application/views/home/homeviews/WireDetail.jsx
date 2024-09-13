import React from 'react'
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Modal
} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import library from '../../../styles/library';
import {darkPurple, gray, white} from "../../../consts/Colors";
import {FontAwesome, MaterialIcons} from "@expo/vector-icons";
import constants from "../../../styles/constants";
import {getHeight, getWidth} from "../../../utils/cssfragments";
import caseStudies from "../../../styles/case_studies";
import ImageViewer from "react-native-image-zoom-viewer";

export default class WireDetail extends React.Component {
    state = {
        slideValue: 0,
        modalVisible: false,
    }

    renderPoint(title, text) {
        return (
            <View style={[constants.row, {flex: 1, alignItems: "flex-start", paddingVertical: 10}]}>
                <Text style={[caseStudies.point, { margin: 0, marginTop: 10, marginRight: 10, paddingTop: 0 }]} />
                <Text style={[library.labelCase, {fontFamily: 'NunitoSans_700Bold',}]}>{title}</Text>
                <View style={{flexDirection:'row', flex: 1, justifyContent: "center", marginTop: 4,}}>
                    <Text style={[library.labelCase, {flex: 1, justifyContent: "center", flexWrap: 'wrap', fontSize:16}]}>
                        {text}
                    </Text>
                </View>
            </View>
        );
    }

    renderImageModal() {
        let {navigation, route} = this.props;
        let {params} = route;
        const { modalVisible } = this.state;
        const images = [{
            props: {source: params.image_url},
        }]
        return(
            <Modal visible={modalVisible} onRequestClose={() => {this.setState({modalVisible: false})}}>
                <View style={{height: getHeight(100)}}>
                    <ImageViewer
                        imageUrls={images}
                        enableImageZoom={true}
                        backgroundColor={white}
                        onCancel={() => this.setState({modalVisible: false})}

                        renderImage={props => <Image {...props} />}
                        renderIndicator={currentIndex => null}
                    />
                    <TouchableOpacity
                        onPress={event => this.setState({modalVisible: false})}
                        style={constants.roundedBorder}>
                        <FontAwesome name="close" size={32} color={darkPurple} />
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }

    render() {
        let {navigation, route} = this.props;
        let {params} = route;
        // console.log(params);
        return (
            <View style={[library.container, {paddingHorizontal: 0}]}>
                {this.renderImageModal()}
                <StatusBar style="auto"/>
                <View style={[constants.row, {marginTop: 50, alignItems: "center"}]}>
                    <TouchableOpacity onPress={event => navigation.goBack()} style={constants.radius}>
                    {/*<TouchableOpacity onPress={event => navigation.goBack()} style={{flex: 1, backgroundColor: gray}}>*/}
                        <MaterialIcons name="arrow-back-ios" size={20} color={darkPurple} />
                    </TouchableOpacity>
                    <Text style={[library.title, {flex: 10}]}>{params.model}</Text>
                </View>

                <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 10, paddingHorizontal: 20,}}>
                    {params.image_url && <View style={[library.card, {justifyContent: "center", alignItems: "center"}]}>
                        <TouchableOpacity onPress={event => this.setState({modalVisible: true})}>
                            <Image source={params.image_url}
                                   resizeMode={"contain"}
                                   style={{width: getWidth(85), height: getHeight(15), alignSelf: "center"}}
                            />
                        </TouchableOpacity>
                        <View style={{paddingHorizontal: 10, paddingBottom: 10}}>
                            <Text style={[library.p, {
                                fontSize: 10,
                                textAlign: "center"
                            }]}>{params.copyright_notice}</Text>
                        </View>
                    </View>}
                    <View style={[library.card, {paddingHorizontal: 20, marginTop: 20}]}>
                        {this.renderPoint('Manufacturer: ', params.manufacturer)}
                        {this.renderPoint('Core Material: ',params.core_material)}
                        {this.renderPoint('Core Tapering: ', params.core_tapering)}
                        {this.renderPoint('Diameter: ', params.diameter)}
                        {this.renderPoint('Tip Design: ', params.tip_design)}
                        {this.renderPoint('Tip Coating: ', params.tip_coating)}
                        {this.renderPoint('Tip Load: ', params.tip_load)}
                        {this.renderPoint('Radiopaque Length: ', params.radiopaque_length)}
                        {this.renderPoint('Available Lengths: ', params.available_lengths)}
                        {this.renderPoint('Available Tip styles: ', params.available_tip_styles)}
                        {this.renderPoint('Preferred Use: ', params.preferred_uses)}
                    </View>
                </ScrollView>

                {/*<Menu onResponse={handleResponse(navigation, 1)}/>*/}
            </View>
        )
    }
}
