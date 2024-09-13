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
            <BulletRow type={"•"} text={"A 48-year-old man presented with CCS class 1 angina. Nuclear stress test showed moderate to severe lateral and inferior walls ischemia."}/>
            <BulletRow type={"•"} text={"Coronary angiogram showed 2 V CAD (mid RCA CTO and LCx-OM) and had PCI to LCx-OM. LVEF was 50%."}/>
            <BulletRow type={"•"} text={"Medical history: HTN, HLD, NIDDM, Current smoker, ESRD on HD."}/>
            <BulletRow type={"•"} text={"Medications: ASA, Plavix, Amlodipine 10mg, Metoprolol XL 50mg, Lisinopril 10mg, Fenofibrate (Statin intolerance)\n"}/>

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Analysis and Planning"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase06-01.mp4")}










            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"PCI Strategy"}
            </Text>
            <BulletRow type={"•"} text={"CTO length < 20 cm, branch vessel+ near the proximal cap"}/>
            <BulletRow type={"•"} text={"Blunt stump, no good septal collaterals, 1st septal had straight course"}/>
            <BulletRow type={"•"} text={"Dual injection (6F LIMA guide –RCA, JL for LCA)"}/>
            <BulletRow type={"•"} text={"If the guide was not stable, would use 7F or AL 0.75 guide"}/>
            <BulletRow type={"•"} text={"Antegrade approach with AWE (Fielder/Fielder XT > Gaia 3 > Confianza 12) along with a microcatheter"}/>
            <BulletRow type={"•"} text={"If antegrade failed, would consider retrograde approach"}/>
            







            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"First, Fielder with FineCross was used but Fielder wire went to a side branch."}/>
            <BulletRow type={"•"} text={"Then, escalated to Gaia 3 (tapered, hydrophilic coating, high tip stiffness)."}/>
            <BulletRow type={"•"} text={"Gaia 3 crossed the lesion and advanced FineCross to the distal part of RCA."}/>
            <BulletRow type={"•"} text={"Exchanged with Runthrough (workhorse wire), followed by serial balloon dilatation. One DES was placed in mid-RCA with a good result."}/>
            
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wiring Technique"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase06-02.mp4")}


            <Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]}  onPress={event => Linking.openURL('https://ccclivecases.org/may-2018-ccc-live-case')}>
                {"The case can be reviewed at https://ccclivecases.org/may-2018-ccc-live-case"}
            </Text>
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase06-03.mp4")}






            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"The choice of AWE in this case were Fielder/Fieder XT > Gaia 3 > Confianza 12."}/>
            <BulletRow type={"•"} text={"Fielder/Fielder XT (low penetration force 0.3-1.7g) is particularly useful for micro-channel tracking, passive sliding wire control whereas Gaia family (intermediate penetration force 3-4.5 g) is for active wire control (rotation/deflection), fibrocalcific plaque tracking (intimal or subintimal)."}/>
            <BulletRow type={"•"} text={"If a microcatheter doesn’t advance over the wire, we can remove the microcatheter by wire trapping with balloon inflation inside the guide. Then use the lowest profile balloon (1.0 balloon or 1.25 balloon) with serial balloon dilatation for lesion preparation."}/>
            <BulletRow type={"•"} text={"If necessary, laser atherectomy can be used in balloon un-crossable lesion."}/>

           
        </View>
    );
}
