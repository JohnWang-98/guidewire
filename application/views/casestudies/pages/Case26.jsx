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
			
			
			<View style={{paddingHorizontal: 0, marginTop: 10}}>
                <Text style={basics.h2}>
                    {"Case Presentation"}
                </Text>
                <BulletRow type={"•"} text={"An 88-year-old man presented with a new onset CCS class III angina. Found to have NSTEMI with troponin level of 2.41. Cath @ OSH showed severe and tortuous disease in RCA and was not able to intervene due to difficulty in wiring along with devices delivery. Then, patient was transferred to tertiary center for complex coronary intervention."}/>
                <BulletRow type={"•"} text={"PMH: HTN, Hyperlipidemia, COPD, CVA with left hemiparesis"}/>
                <BulletRow type={"•"} text={"Medications: Aspirin, Clopidogrel, Metoprolol tartrate, amlodipine, Atorvastatin"}/>
                 </View>
			
			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10, marginBottom: 5}]}>
                {"Pre-Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase26-01.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase26-02.mp4")}
			
			<View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"PCI Strategy"}
                </Text>
                <BulletRow type={"•"} text={"AL 0.75 with SH"}/>
                <BulletRow type={"•"} text={"Fielder and FineCross microcatheter"}/>
                <BulletRow type={"•"} text={"Given the presence of severely angulated and tortuous lesion, the wire choice should have a soft tip, polymer/hydrophilic cover, moderate support"}/>
                <BulletRow type={"•"} text={"Plan to escalate the wire as needed; MiracleBros 3, Gaia Next 3, Pilot 200, Fighter"}/>
				<BulletRow type={"•"} text={"Predilation and stenting\n"}/>
            </View>
			
			<View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"STEPS"}</Text>
                <BulletRow type={"•"} text={"We used Fielder and FineCross microcatheter."}/>
                <BulletRow type={"•"} text={"As Fielder wire was not able to advance, the wire escalation was performed using MiracleBros 3, Gaia Next3, and pilot 200."}/>
                <BulletRow type={"•"} text={"Finally, we were able to negotiate the lesion by using fighter wire (tapering tip with hydrophilic coating)."}/>
               </View>
			
			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10, marginBottom: 5}]}>
                {"Wiring Technique"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase26-03.mp4")}
			
			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
			<BulletRow type={"•"} text={"The predilation in mid and distal RCA was performed by using TREK NC 2.5/20, followed by the placement two DESs (promus elite 2.75/32 and promus elite 2.5/38).\n"}/>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase26-04.mp4")}
			
			
			 <View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"Learning Points"}
                </Text>
                <BulletRow type={"•"} text={"With the presence of severely angulated and tortuous lesion, the wire should possess a soft tip, polymer/hydrophilic cover, and moderate support."}/>
                <BulletRow type={"•"} text={"First, we had used a higher tip load with or without hydrophobic tip as well as hydrophilic coating such as MiracleBros 3, Gaia Next 3, and Pilot 200."}/>
                <BulletRow type={"•"} text={"As these wires failed, we had switched to tapered tip, polymer/hydrophilic cover with moderate support wire such as Fighter wire which was able to negotiate the lesion successfully."}/>
				<BulletRow type={"•"} text={"when to switch the wire is paramount to have a successful PCI.\n"}/>
            </View>
        </View>
    );
}

			
			
			
			