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
        const images = [{
            props: {source: require("../../../../assets/cases_detail_images/gwcase09-01.jpg")}
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

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Presentation"}
            </Text>
            <BulletRow type={"•"} text={"A 73-year-old man presented with angina chest pain. Stress MPI showed anterior and inferior ischemia while planning for lower limb vascular surgery."}/>
            <BulletRow type={"•"} text={"PMH: Extensive PAD s/p multiple PTAs, HTN, HLD, s/p MI"}/>
            <BulletRow type={"•"} text={"Medications : Plavix 75mg, Apixaban 5mg daily, Rosuvastatin 20mg, Isosorbide Mononitrate 30mg, Furosemide 20mg PRN"}/>
            <BulletRow type={"•"} text={"Coronary angiogram showed 2V CAD : 100% prox RCA occlusion with collaterals from LCx, 80-90% calcified angulated prox-mid LAD lesion."}/>
            <BulletRow type={"•"} text={"Syntax score 23 and LVEF 30%."}/>
            <BulletRow type={"•"} text={"Underwent Heart team discussion and decided for Impella assisted LAD PCI."}/>



            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Angiogram"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase09-01.mp4")}
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase09-02.mp4")}







            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"Given the presence of severely calcified lesion in LAD, we had decided to perform lesion modification with orbital atherectomy (OA)."}/>
            <BulletRow type={"•"} text={"To wire the calcified artery, the wire should possess excellent support, good tactile feedback, floppiness, and torquability/trackability."}/>
            <BulletRow type={"•"} text={"We used Fielder/FineCross to cross LAD lesion and then exchanged to ViperWire for OA."}/>

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"LAD wiring and OA"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase09-03.mp4")}

            <BulletRow type={"•"} text={"After OA done, rewired the LAD with a workhorse wire (i.e. Runthrough) and polymer jacketed wire (i.e. Fielder) to Diagonal 3."}/>
            <BulletRow type={"•"} text={"Provisional strategy was performed with the placement of 1 DES (Xience 3/38) in mid LAD, jailing Fielder wire in D3."}/>
            <BulletRow type={"•"} text={"The jailed wire, Fielder, was removed from D3 and post dilatation in proximal part of the stent was performed with noncompliance balloon 3.5/15mm."}/>
            <BulletRow type={"•"} text={"IVUS showed good distal stent apposition."}/>

        <TouchableOpacity onPress={event => {
                setIndex(0);
                setModalVisible(true);
            }}>
			<Image
                source={require("../../../../assets/cases_detail_images/gwcase09-01.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(40),
                    marginVertical: 20, alignSelf: "center"}}
            />
		</TouchableOpacity>
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Stenting and Optimization"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase09-04.mp4")}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase09-05.mp4")}
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase09-06.mp4")}

            <Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/june-2019-ccc-live-case')} >
                {"The case can be reviewed at https://ccclivecases.org/june-2019-ccc-live-case"}
            </Text>
			







            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"To negotiate a severely calcified artery, the wire should possess a good support, excellent tactile feedback, floppiness, and torquability/trackability."}/>
            <BulletRow type={"•"} text={"The choice of wire should be Fielder, Whisper ES, and Pilot 50."}/>
            <BulletRow type={"•"} text={"In case where you need more wire support for device delivery, we can exchange to Iron man or Mailman after the lesion is crossed and lesion modification performed."}/>
            <BulletRow type={"•"} text={"We used orbital atherectomy in this case. However, if one wants to use rotational atherectomy, strongly recommend to use a smaller burr (1.25) in a calcified and tortuous lesion."}/>

           
        </View>
    );
}
