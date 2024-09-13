import React, {useState} from 'react';
import {ActivityIndicator, Image, Linking, Modal, Platform, Text, TouchableOpacity, View} from "react-native";
import basics from "../../../styles/basics";
import caseStudies from "../../../styles/case_studies";
import constants from "../../../styles/constants";
import {getHeight, getWidth} from "../../../utils/cssfragments";
import {ResizeMode, Video} from "expo-av";
import {black, darkPurple, white} from "../../../consts/Colors";
import ImageViewer from "react-native-image-zoom-viewer";
import {FontAwesome} from "@expo/vector-icons";
import * as ScreenOrientation from 'expo-screen-orientation';
import BulletRow from "../../../components/common/BulletRow";
import VideoPlayer from 'expo-video-player'
export default function () {
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0);

    function renderImageModal() {
        const images = [{
            props: {source: require("../../../../assets/cases_detail_images/gwcase21-01.jpg")}
        }]
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
            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Presentation"}
            </Text>
            <BulletRow type={"•"} text={"A 52-year-old man presented with CCS III angina pain and dyspnea on exertion. Stress ECHO showed wall motion abnormalities with ischemia of inferior and inferior basal segment of the left ventricle, and LVEF of 52%."}/>
            <BulletRow type={"•"} text={"Medical history: HTN, HLD, current smoker, PVD, CAD s/p PCIs"}/>
            <BulletRow type={"•"} text={"Medications: Aspirin 81mg, Clopidogrel 75mg, lisinopril 10mg, metoprolol tartrate 25mg BID, rosuvastatin 5mg"}/>
            </View>
	
	
		<Text style={constants.separateTop}/>

		<Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Coronary angiogram showed 2V CAD with CTO ISR of mid RCA, 70-80% stenosis in proximal RCA with 50-60% in mid LAD."}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase21-01.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase21-02.mp4")}

			<Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Left sided angiogram did not show clear LAD septal connection to RCA."}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase21-03.mp4")}





            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"PCI Strategy"}
            </Text>
            <BulletRow type={"•"} text={"ISR CTO length ~ 20-25 mm, No good septal collaterals"}/>
            <BulletRow type={"•"} text={"Planned for Antegrade approach"}/>
            <BulletRow type={"•"} text={"AWE (Fielder > Gaia > Confianza Pro 12) with microcatheter"}/>
            <BulletRow type={"•"} text={"If antegrade failed, would consider retrograde approach but would be challenging as there were no direct septal collaterals."}/>
            </View>
	
	


            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"We started out with Fielder (non tapered polymer jacket tip with tip load of 1g) and FineCross microcatheter to find microchannel of CTO."}/>
            <BulletRow type={"•"} text={"Then AWE was done by changing to Gaia 3 (tapered, hydrophilic coating, composite core with 1:1 torque and tip load of 4.5g) to cross the CTO segment but it was not successful."}/>
            <BulletRow type={"•"} text={"A stiffer wire, Confianza Pro 12 (tapered, hydrophilic coating with tip load of 12.4g) was exchanged for drilling."}/>
            <BulletRow type={"•"} text={"After multiple attempts, Confianza pro 12 went into subintimal space and created multiple dissection planes."}/>
            <BulletRow type={"•"} text={"We had tried to redirect Confianza wire into the true lumen but it was without success."}/>
            <BulletRow type={"•"} text={"In a setting of multiple small dissections, a hydrophilic polymer jacket wire is very useful to negotiate back to the true lumen."}/>
            <BulletRow type={"•"} text={"Another strategy is to use parallel wire technique to wire into the true lumen."}/>
            </View>
	

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wiring Technique"}
            </Text>
			<Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Gaia 3 failed to cross."}
            </Text>
		<TouchableOpacity onPress={event => {
                setIndex(0);
                setModalVisible(true);
            }}>
			 <Image
                source={require("../../../../assets/cases_detail_images/gwcase21-01.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(40),
                    marginVertical: 20, alignSelf: "center"}}
            />
		</TouchableOpacity>

			<Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Negotiating with Confianza Pro 12."}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase21-04.mp4")}


            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wiring Technique"}
            </Text>
            <BulletRow type={"•"} text={"We use a Whisper wire (full Polymer cover with hydrophilic coating and tip load of 1.2g) to negotiate back into the true lumen."}/>
            </View>


			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase21-05.mp4")}

            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"After successful wiring into the true lumen, serial balloon dilatation and scoring balloon PTCA using Angiosculpt was performed."}/>
            <BulletRow type={"•"} text={"Three DES (3.5 x 20mm, 3.5 x 48mm and 2.5 x 38 mm) were placed in proximal, mid and distal RCA respectively with an excellent result."}/>
            </View>
	


			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase21-06.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase21-07.mp4")}





            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"The operator should have a wire escalation plan for the antegrade approach. Here, we used Fielder > Gaia 3 > Confianza Pro 12."}/>
            <BulletRow type={"•"} text={"In a setting of multiple small dissection tracts, it is often challenging to re-direct a stiffer wire into the true lumen."}/>
            <BulletRow type={"•"} text={"We would highly recommend using a polymer jacketed, hydrophilic wire (i.e. Whisper ES) to negotiate back into a true lumen."}/>
            <BulletRow type={"•"} text={"Another option is a parallel wire technique – while a stiff wire leaves in a subintimal space, use another hydrophilic wire to negotiate into the true lumen."}/>
            </View>
	
        </View>
    );
}








