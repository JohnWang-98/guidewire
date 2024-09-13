import React, {useState} from 'react';
import {ActivityIndicator, Image, Linking, Modal, Platform, Text, TouchableOpacity, View} from "react-native";
import basics from "../../../styles/basics";
import caseStudies from "../../../styles/case_studies";
import constants from "../../../styles/constants";
import {getHeight, getWidth} from "../../../utils/cssfragments";
import {ResizeMode, Video} from "expo-av";
import {black, darkPurple, white} from "../../../consts/Colors";
import ImageViewer from "react-native-image-zoom-viewer";
import * as ScreenOrientation from 'expo-screen-orientation';
import {FontAwesome} from "@expo/vector-icons";
import BulletRow from "../../../components/common/BulletRow";
import VideoPlayer from 'expo-video-player'

export default function () {
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0);

    function renderImageModal() {
        const images = [
            {props: {source: require("../../../../assets/cases_detail_images/gwcase01-01.jpg")}},
			{props: {source: require("../../../../assets/cases_detail_images/gwcase01-02.jpg")}},
        ]
        return(
            <Modal visible={modalVisible}>
                <View style={{height: getHeight(100)}}>
                    <ImageViewer
                        imageUrls={images}
                        enableImageZoom={true}
                        index={index}
                        backgroundColor={white}
                        onCancel={() => setModalVisible(false)}

                        renderImage={props => <Image {...props} />}
                        renderIndicator={currentIndex => null}
                    />
                    <TouchableOpacity
                        onPress={event => setModalVisible(false)}
                        style={constants.roundedBorder}>
                        <FontAwesome name="close" size={32} color={darkPurple} />
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }

    function textRow(name, detail, k) {
        return (
            <View key={k} style={{marginTop: 10}}>
                <Text style={basics.h2}>
                    {name}
                </Text>
                <Text style={basics.p}>
                    {detail}
                </Text>
            </View>
        );
    }

    const onFullscreenUpdate = async ({fullscreenUpdate}) => {
        if (Platform.OS === 'android') {
            switch (fullscreenUpdate) {
                case Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT:
                    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE)
                    break;
                case Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS:
                    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
                    break;
            }
        }
    }

    function videoPlayer(url) {
        return (
            <View style={caseStudies.videoContainer}>
                <Video
                       source={{ uri: url }}
                       style={{
                           backgroundColor: black,
                           width: getWidth(85),
                           height: getWidth(70),
                           marginTop: 20,
                           marginBottom: 20,
                           borderRadius: 20,
                       }}
                       controls={true}
                       useNativeControls={true}
                       
                       
                       resizeMode={ResizeMode.CONTAIN}
                       isLooping
                       onFullscreenUpdate={onFullscreenUpdate}
                       // onPlaybackStatusUpdate={status => setVidStatus(status.isPlaying)}
                />
            </View>
        );
    }

    return (
        <View style={caseStudies.itemView}>
            {renderImageModal()}



            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Presentation"}
            </Text>
            <BulletRow type={"•"} text={"A 57-year-old man presented with new onset CCS Class IV angina. He was diagnosed with 2 V CAD and had PCI of LCx. But he had 2nd failed attempt at antegrade recanalization of CTO RCA."}/>
            <BulletRow type={"•"} text={"He continued to have Class II angina and a stress MPI revealed moderate inferior wall ischemia."}/>
            <BulletRow type={"•"} text={"Medical History: Hypertension, Hyperlipidemia"}/>
            <BulletRow type={"•"} text={"Medications: ASA 81mg, Prasugrel 5mg, Lisinopril 10mg, Rosuvastatin 20mg, Nebivolol 5mg, ISMN 60mg"}/>
            <BulletRow type={"•"} text={"Coronary angiogram revealed 2 V CAD (CTO of RCA and subtotal occlusion of LCx-LPL branch)."}/>
            <BulletRow type={"•"} text={"LVEF 60% and SYNTAX score 24."}/>
            <BulletRow type={"•"} text={"Planned to do PCI of CTO RCA via retrograde approach due to failed antegrade approach."}/>


			 <Text style={constants.separateTop}/>

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase17-01.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase17-02.mp4")}







            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"PCI Strategy"}
            </Text>
            <BulletRow type={"•"} text={"2 sequential CTO lesions with prior failed antegrade approach"}/>
            <BulletRow type={"•"} text={"Collaterals ++ from LAD septal to RCA."}/>
            <BulletRow type={"•"} text={"Planned to do Retrograde approach"}/>
            <BulletRow type={"•"} text={"Dual injection"}/>
            <BulletRow type={"•"} text={"Initial wire choice: Fielder/Fielder FC with Corsair pro (150cm)"}/>
            <BulletRow type={"•"} text={"Consider wire escalation as needed (Fielder/Fielder FC >MiracleBros 6 > Confianza Pro)"}/>
            <BulletRow type={"•"} text={"Wire externalization with balloon trapping"}/>
            <BulletRow type={"•"} text={"Exchange with FineCross and Runthrough 300 cm"}/>



			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Planning"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase17-03.mp4")}






            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"We used Fielder and Corsair to negotiate from LAD septal branch to RCA"}/>
            <BulletRow type={"•"} text={"Then exchange to Fielder FC as a wire escalation strategy"}/>
            <BulletRow type={"•"} text={"Subsequently, we had done wire escalation to go through distal CTO; Fielder FC > MiracleBros 6> Confianza Pro."}/>
            <BulletRow type={"•"} text={"However, Confianza 9 went to subintimal plane and difficulty in redirecting to the true lumen."}/>
            <BulletRow type={"•"} text={"We finally used Fielder which went into the true lumen and antegrade guide catheter."}/>
      

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wiring Technique (Fielder FC> MiracleBro 6)"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase17-04.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wiring Technique (MicracleBro 6 > Confianza 9)"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase17-05.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Confianza 9 > Fielder"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase17-06.mp4")}




            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"Once the wire reached to RCA guide catheter, we used a balloon (2.5/15) for wire trapping, then advanced Corsair into the RCA guide catheter."}/>
            <BulletRow type={"•"} text={"We can use long wire (330-350 cm) for externalization. Here, we used ViperWire."}/>
            <BulletRow type={"•"} text={"Then, advanced antegrade FineCross/Runthrough wire to perform PCI, followed by removal of ViperWire and Corsair."}/>
            <BulletRow type={"•"} text={"Two DES (3.25/38 and 3.5/38) were placed with good angiographic result."}/>
      
	

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Balloon Trapping Technique"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase17-07.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase17-08.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Overview"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase17-09.mp4")}

			
			<Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/june-2015-ccc-live-case')} >
                {"The case can be reviewed at https://ccclivecases.org/june-2015-ccc-live-case"}
            </Text>
			
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"In Retrograde approach via LAD-septal, selection of an appropriate septal branch is the most important step and if needed, consider to take the selective angiogram of a septal branch via a microcatheter."}/>
            <BulletRow type={"•"} text={"A trans-septal wiring can be done by using a hydrophilic wire with microcatheter (i.e. Fielder/Corsair) and other dedicated retrograde wires [Fielder XT-R, Sion Black (Asahi), Suoh 03 (Asahi)] can also be used."}/>
            <BulletRow type={"•"} text={"Although distal CTO cap is presumptively easier to go through, wire escalation strategy is necessary in some cases. We used Fielder FC, Whisper, Gaia 3, MiracleBros 6, and Confianza 9."}/>
            <BulletRow type={"•"} text={"It is challenging to negotiate a stiff retrograde wire into the guide catheter or true lumen if there are multiple small dissection planes."}/>
            <BulletRow type={"•"} text={"We would strongly recommend to use a soft, hydrophilic wire such as Fielder, Whisper ES to negotiate back into the true lumen."}/>
        </View>
    );
}

