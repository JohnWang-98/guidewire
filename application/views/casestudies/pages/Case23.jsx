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
                <BulletRow type={"•"} text={"A 60-year-old man presented with new onset left sided chest pain on exertion and relieved by rest. Stress MPI showed mild-moderate anteroseptal and inferior ischemia. Echocardiogram showed normal LVEF with 56%."} />
				<BulletRow type={"•"} text={"Medical History: Hypertension, Hyperlipidemia, End-Stage renal disease on hemodialysis, Ex-smoker"} />
				<BulletRow type={"•"} text={"Medications: ASA 81mg daily, Amlodipine 10mg daily, Carvedilol 3.125mg BID, Hydralazine 25mg TID\n"} />

			<Text style={constants.separateTop}/>

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10, marginBottom: 10}]}>
                {"Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase23-01.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase23-02.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase23-03.mp4")}


			<View style={{paddingHorizontal: 0, marginTop: 10}}>
                <Text style={basics.h2}>
                    {"PCI Strategy"}
                </Text>
				<BulletRow type={"•"} text={"The coronary angiogram showed a significant disease in ramus artery with 80-90% stenosis."}/>
				<BulletRow type={"•"} text={"Since the lesion is not calcified or tortuous, it can be classified as ACC/AHA Type A lesion (simple lesion)."}/>
				<BulletRow type={"•"} text={"Plan to use workhorse wire, followed by predilation and stent placement.\n"}/>
            </View>

		    <View style={{paddingHorizontal: 0, marginTop: 10}}>
                <Text style={basics.h2}>
                    {"STEPS"}
                </Text>
				<BulletRow type={"•"} text={"We used VL 3.5 guide catheter (Mach 1: Boston Scientific)."}/>
				<BulletRow type={"•"} text={"For Type A lesion, we can use any workhorse wire which has a soft tip with hybrid coating (hydrophilic coating with distal hydrophobic coating) (i.e. Runthrough, Sion Blue)."}/>
				<BulletRow type={"•"} text={"We used Runthrough to cross the lesion, followed by predilatation using Trek NC 3/12mm balloon."}/>
				<BulletRow type={"•"} text={"Then, Xience Sierra 3.25/18mm was placed in the ramus artery followed by post-dilatation using Trek NC 3.5/12 mm balloon."}/>
				<BulletRow type={"•"} text={"A final angiogram showed an excellent result.\n"}/>
            </View>

            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase23-04.mp4")}

			<View style={{paddingHorizontal: 0, marginTop: 10}}>
                <Text style={basics.h2}>
                    {"Learning Points"}
                </Text>
                <BulletRow type={"•"} text={"In Type A lesion intervention, the goal is to cross the lesion and advance the wire to the distal lumen softly and atraumatically."}/>
				<BulletRow type={"•"} text={"Any workhorse wire can be used per the operator’s preference to perform the coronary intervention.\n"}/>
            </View>
        </View>
    );
}





