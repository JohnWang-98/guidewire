import React from 'react';
import {
  Alert,
  Button,
  Image,
  Modal,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import library from '../../styles/library';
import Menu, { handleResponse } from '../../components/hooks/Menu';
import profile from '../../styles/profile';
import {
  black,
  blue,
  darkPurple,
  gray,
  purpleHolder,
  white,
} from '../../consts/Colors';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import caseStudies from '../../styles/case_studies';
import constants from '../../styles/constants';
import { getHeight, getWidth } from '../../utils/cssfragments';
import ImageViewer from 'react-native-image-zoom-viewer';

export default class LibraryDetail extends React.Component {
  state = {
    slideValue: 0,
    modalVisible: false,
  };

  renderPoint(title, text) {
    return (
      <Text style={{ paddingVertical: 10 }}>
        <Text style={[library.labelCase, { fontFamily: 'NunitoSans_700Bold' }]}>
          {title}
        </Text>
        <Text
          style={[
            library.labelCase,
            {
              flex: 1,
              justifyContent: 'center',
              flexWrap: 'wrap',
              fontSize: 16,
            },
          ]}
        >
          {text}
        </Text>
      </Text>
    );
  }

  renderImageModal() {
    let { navigation, route } = this.props;
    let { params } = route;
    const { modalVisible } = this.state;
    const images = [
      {
        url: params.image_url, // Ensure to use 'url' for remote images
      },
    ];
    return (
      <Modal visible={modalVisible}>
        <View style={{ height: getHeight(100) }}>
          <ImageViewer
            imageUrls={images}
            enableImageZoom={true}
            backgroundColor={white}
            onCancel={() => this.setState({ modalVisible: false })}
            renderIndicator={() => null}
          />
          <TouchableOpacity
            onPress={(event) => this.setState({ modalVisible: false })}
            style={constants.roundedBorder}
          >
            <FontAwesome name="close" size={32} color={darkPurple} />
          </TouchableOpacity>
        </View>
        {/*<ImageViewer*/}
        {/*    imageUrls={images}*/}
        {/*    enableImageZoom={true}*/}
        {/*    backgroundColor={white}*/}
        {/*    renderHeader={(currentIndex) =>*/}
        {/*        <TouchableOpacity*/}
        {/*            onPress={event => this.setState({modalVisible: false})}*/}
        {/*            style={[constants.radius, constants.roundedBorder, {alignSelf: "flex-end"}]}>*/}
        {/*            <FontAwesome name="close" size={30} color={darkPurple} />*/}
        {/*        </TouchableOpacity>*/}
        {/*    }*/}
        {/*/>*/}
      </Modal>
    );
  }

  render() {
    let { navigation, route } = this.props;
    let { params } = route;
    // console.log(params);
    return (
      <View style={[library.container, { paddingHorizontal: 0 }]}>
        {this.renderImageModal()}
        <StatusBar style="auto" />
        <View style={[constants.row, { marginTop: 50, alignItems: 'center' }]}>
          <TouchableOpacity
            onPress={(event) => navigation.goBack()}
            style={constants.radius}
          >
            {/*<TouchableOpacity onPress={event => navigation.goBack()} style={{flex: 1, backgroundColor: gray}}>*/}
            <MaterialIcons name="arrow-back-ios" size={20} color={darkPurple} />
          </TouchableOpacity>
          <Text style={[library.title, { flex: 10 }]}>{params.model}</Text>
        </View>
        {/*<View style={[constants.row, {marginTop: 50, alignItems: "center"}]}>*/}
        {/*    <TouchableOpacity onPress={event => navigation.goBack()} style={{flex: 1}}>*/}
        {/*        <MaterialIcons name="arrow-back-ios" size={20} color={darkPurple} />*/}
        {/*    </TouchableOpacity>*/}
        {/*    <Text style={[library.title, {flex: 10}]}>{params.model}</Text>*/}
        {/*</View>*/}

        <ScrollView
          style={{ marginTop: 20 }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10, paddingHorizontal: 20 }}
        >
          <View
            style={[
              library.card,
              { justifyContent: 'center', alignItems: 'center' },
            ]}
          >
            <TouchableOpacity
              onPress={(event) => this.setState({ modalVisible: true })}
            >
              <Image
                source={{ uri: params.image_url }}
                resizeMode={'contain'}
                style={{
                  width: getWidth(85),
                  height: getHeight(15),
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
            <View style={{ paddingHorizontal: 10, paddingBottom: 10 }}>
              <Text style={[library.p, { fontSize: 10, textAlign: 'center' }]}>
                {params.copyright_notice}
              </Text>
            </View>
          </View>
          <View
            style={[library.card, { paddingHorizontal: 20, marginTop: 20 }]}
          >
            {this.renderPoint('Manufacturer: ', params.manufacturer)}
            {params.core_material &&
              this.renderPoint('Core Material: ', params.core_material)}
            {params.core_tapering &&
              this.renderPoint('Core Tapering: ', params.core_tapering)}
            {params.diameter && this.renderPoint('Diameter: ', params.diameter)}
            {params.tip_design &&
              this.renderPoint('Tip Design: ', params.tip_design)}
            {params.tip_coating &&
              this.renderPoint('Tip Coating: ', params.tip_coating)}
            {params.tip_load && this.renderPoint('Tip Load: ', params.tip_load)}
            {params.radiopaque_length &&
              this.renderPoint('Radiopaque Length: ', params.radiopaque_length)}
            {params.available_lengths &&
              this.renderPoint('Available Lengths: ', params.available_lengths)}
            {params.available_tip_styles &&
              this.renderPoint(
                'Available Tip styles: ',
                params.available_tip_styles
              )}
            {params.preferred_uses &&
              this.renderPoint('Preferred Use: ', params.preferred_uses)}

            {params.tip_od && this.renderPoint('Tip O.D.: ', params.tip_od)}
            {params.crossing_profile &&
              this.renderPoint('Crossing Profile: ', params.crossing_profile)}
            {params.dual_iumen_od &&
              this.renderPoint('Dual Lumen O.D: ', params.dual_iumen_od)}
            {params.proximal_shaft_profile &&
              this.renderPoint(
                'Proximal Shaft Profile: ',
                params.proximal_shaft_profile
              )}
            {params.distal_tip_length &&
              this.renderPoint('Distal Tip Length: ', params.distal_tip_length)}
            {params.distal_id_inches &&
              this.renderPoint('Distal I.D (inch): ', params.distal_id_inches)}
            {params.otw_lumen_exit_port_deflection_angle &&
              this.renderPoint(
                'OTW Lumen Exit\nPort Deflection Angle: ',
                params.otw_lumen_exit_port_deflection_angle
              )}
            {params.proximal_Id_inches &&
              this.renderPoint(
                'Proximal I.D (inch): ',
                params.proximal_Id_inches
              )}
            {params.coating && this.renderPoint('Coating: ', params.coating)}
            {/*{params.available_lengths && this.renderPoint('Tip O.D.: ', params.available_lengths)}*/}
            {params.recommended_guidewire &&
              this.renderPoint(
                'Recommended Guidewire: ',
                params.recommended_guidewire
              )}
            {params.guide_catheter_compatibility &&
              this.renderPoint(
                'Guide Catheter \nCompatibility: ',
                params.guide_catheter_compatibility
              )}
            {params.preferred_use &&
              this.renderPoint('Preferred Uses: ', params.preferred_use)}
          </View>
        </ScrollView>

        {/*<Menu onResponse={handleResponse(navigation, 1)}/>*/}
      </View>
    );
  }
}
