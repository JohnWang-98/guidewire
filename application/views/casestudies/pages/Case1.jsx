import React, {useRef, useState} from 'react';
import {
    ActivityIndicator, Button,
    Dimensions,
    Image,
    Linking,
    Modal,
    Platform,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import basics from "../../../styles/basics";
import caseStudies from "../../../styles/case_studies";
import constants from "../../../styles/constants";
import {getHeight, getWidth} from "../../../utils/cssfragments";
import {ResizeMode, Video, VideoFullscreenUpdateEvent} from "expo-av";
import {black, blue, darkPurple, white} from "../../../consts/Colors";
import ImageViewer from "react-native-image-zoom-viewer";
import * as ScreenOrientation from 'expo-screen-orientation';
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import BulletRow from "../../../components/common/BulletRow";
import JWPlayer from "react-native-jw-media-player";
import VideoPlayer from "expo-video-player";
import {setStatusBarHidden} from "expo-status-bar";

export default function () {
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const [inFullscreen, setInFullsreen] = useState(false)
    const refVideo = useRef(null)

    function renderImageModal() {
        const images = [
            {props: {source: require("../../../../assets/cases_detail_images/gwcase01-01.jpg")}},
			{props: {source: require("../../../../assets/cases_detail_images/gwcase01-02.jpg")}}
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
            <View>
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
                       // 
                       
                       resizeMode={ResizeMode.CONTAIN}
                       isLooping
                       onFullscreenUpdate={onFullscreenUpdate}
                       // onPlaybackStatusUpdate={status => setVidStatus(status.isPlaying)}
                />
                {/*{!vidStatus && <TouchableOpacity style={{position: "absolute"}}>*/}
                {/*    <AntDesign name="playcircleo" size={24} color={white}/>*/}
                {/*</TouchableOpacity> }*/}
            </View>
        );
    }

    function bulletRow(type, text) {
        return (
            <View style={[constants.row, constants.justifyText]}>
                <Text style={{paddingRight: 5, paddingTop: 2}}>{type}</Text>
                {typeof text == "string" && <Text style={basics.p}>{text}</Text>}
                {typeof text != "string" && text}
            </View>
        );
    }

    return (
        <View style={caseStudies.itemView}>
            {renderImageModal()}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Presentation"}
            </Text>

            <BulletRow type={"•"} text={"A 73-year-old man present with angina like chest pain and dyspnea on exertion, concerning for unstable angina."}/>
            <BulletRow type={"•"} text={"Pertinent medical history were HTN, HLD, CAD s/p CABG x 3 in 2002."}/>
            <BulletRow type={"•"} text={"Medications: Aspirin 81mg , Clopidogrel 75mg, Metoprolol 50mg, Lisinopril 10mg, Atorvastatin 10mg, Furosemide 40mg, Pantoprazole"}/>
            <BulletRow type={"•"} text={"Coronary angiogram showed 3V CAD with patent LIMA to LAD, 95% thrombotic radial graft to D1, and occluded SVG to LCx. LVEF was 30%. Patient had PCI to OM1 and radial graft to D1."}/>

            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase01-01.mp4")}


            <BulletRow type={"•"} text={"Coronary angiogram showed multiple lesions in severely angulated and tortuous RCA."}/>
            <BulletRow type={"•"} text={"Planned to undergo PCI to multiple angulated lesions of tortuous RCA with LV assist device."}/>

			

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Case Analysis and Planning"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase01-02.mp4")}

           
           
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"Given the presence of a severely tortuous artery, the ideal wire to navigate the lesion should have a soft tip, polymer/hydrophilic cover, or a hybrid type with a hydrophilic body and hydrophobic distal tip."}/>
            <BulletRow type={"•"} text={"We chose Fielder (Asahi) to navigate the tortuous anatomy along with FineCross microcatheter."}/>
            <BulletRow type={"•"} text={"Once Fielder wire reached to the distal part of RCA, FineCross catheter was advanced over the Fielder wire."}/>
            <BulletRow type={"•"} text={"With anticipation of requiring good support for PCI, Grandslam wire (300 cm) was exchanged via FineCross catheter."}/>
            <BulletRow type={"•"} text={"Then guide extension catheter was advanced over the Grandslam."}/>

          
            {/*<Text style={constants.separateTop}/>*/}
            <TouchableOpacity onPress={event => {
                setIndex(0);
                setModalVisible(true);
            }}>
			<Image
                source={require("../../../../assets/cases_detail_images/gwcase01-01.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(40),
                    marginVertical: 20, alignSelf: "center"}}
            />
			</TouchableOpacity>
            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>
                {"The guide extension catheter was slowly advanced up to mid RCA while the balloon was simultaneously deflated.\n" +
                "(Balloon assisted suction technique)"}
            </Text>
            <TouchableOpacity onPress={event => {
                setIndex(1);
                setModalVisible(true);
            }}>
                <Image
                    source={require("../../../../assets/cases_detail_images/gwcase01-02.jpg")}
                    resizeMode={"contain"}
                    style={{
                        width: getWidth(90),
                        height: getHeight(40),
                        marginVertical: 20, alignSelf: "center"}}
                />
            </TouchableOpacity>

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Wiring Technique"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase01-03.mp4")}
            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Then, three DES were placed in proximal, and mid RCA with an excellent result."}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase01-04.mp4")}

            <Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/complex-coronary/october-2012-ccc-live-case')} >
                {"The case can be reviewed at https://ccclivecases.org/complex-coronary/october-2012-ccc-live-case"}
            </Text>
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"The optimal wire for tortuous artery should have a soft tip, polymer/hydrophilic cover and we had used Fielder wire in this case."}/>
            <BulletRow type={"•"} text={"A guide extension catheter with a stiff wire (i.e. Grandslam) can be used for a better support and device delivery."}/>
            <BulletRow type={"•"} text={"Another option would be the use of buddy wire technique to deliver the devices in difficult situation. (i.e. Fielder and Runthrough or two Fielder wires)"}/>
            <BulletRow type={"•"} text={"In case of difficulty in advancing guide extension catheter, the guideliner suction technique is useful to advance the catheter."}/>

        
        </View>
    );
}

