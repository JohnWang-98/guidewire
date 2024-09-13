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
                <BulletRow type={"•"} text={"A 65-year-old man presented with a new onset CCS class II angina. CTA coronary showed high calcium score of 2684 with 2 V CAD (RCA and LAD)."}/>
                <BulletRow type={"•"} text={"PMH: Non insulin dependent DM, Hyperlipidemia"}/>
                <BulletRow type={"•"} text={"Medications: Aspirin, Rosuvastatin, Metoprolol, Metformin"}/>
                <BulletRow type={"•"} text={"Angiogram showed severely calcified 2 V CAD: 90% mid RCA, and multiple calcified severely angulated proximal and mid LAD/Diagonal bifurcation lesions."}/>
                <BulletRow type={"•"} text={"Patient underwent successful PCI of RCA and here for staged PCI of LAD with the use of angulated catheter."}/>
            </View>

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 15}]}>
                {"Case Description"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase25-01.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Pre-Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase25-02.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase25-03.mp4")}

            <View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"PCI Strategy"}
                </Text>
                <BulletRow type={"•"} text={"6F guide catheter"}/>
                <BulletRow type={"•"} text={"Runthrough wire with an angulated catheter to navigate the angulated LAD lesion"}/>
                <BulletRow type={"•"} text={"Lesion modification with cutting balloon angioplasty, followed by stent placement"}/>
                <BulletRow type={"•"} text={"Provision stenting technique\n"}/>
            </View>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase23-04.mp4")}

            <View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"STEPS"}
                </Text>
                <BulletRow type={"•"} text={"First, navigate Runthrough wire into the diagonal branch."}/>
                <BulletRow type={"•"} text={"Followed by Venture catheter advancement up to the LAD-Diagonal bifurcation."}/>
                <BulletRow type={"•"} text={"Then, pull the wire back while maintaining the tip of Venture at the level of bifurcation."}/>
                <BulletRow type={"•"} text={"Perform clockwise rotation of Venture to create 90-degree bend, followed by navigating Runthrough wire into the angulated LAD lesion.\n"}/>
            </View>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase25-05.mp4")}

            <View style={[basics.h2, {paddingHorizontal: 0, marginTop: 10}]}>
                <BulletRow type={"•"} text={"Then, the lesion modification was performed by using 3.5/6 mm Wolverine balloon."}/>
                <BulletRow type={"•"} text={"Two DES were placed in proximal LAD (Promus 4/28 mm) and mid LAD (Promus 3/38 mm) with an excellent result.\n"}/>
            </View>

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase25-06.mp4")}

            <View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"Learning Points"}
                </Text>
                <BulletRow type={"•"} text={"Case planning is paramount in the angulated lesion intervention."}/>
                <BulletRow type={"•"} text={"Wiring technique in angulated lesions is complex and often require adjunct device to negotiate the lesions"}/>
                <BulletRow type={"•"} text={"Angulated catheters such as SuperCross, Venture, and Swift Ninja could help the guidewire to advance through the lesions in challenging and complex coronary artery disease interventions.\n"}/>
            </View>
        </View>
    );
}
