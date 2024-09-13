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
            <BulletRow type={"•"} text={"A 72-year-old man presented with left sided angina and shortness of breath. Stress MPI showed moderate inferior and inferolateral ischemia."}/>
            <BulletRow type={"•"} text={"Medical history: 3V CAD s/p multiple PCIs and s/p CABG (LIMA to LAD, SVG to RCA, SVG to Ramus, SVG to LCx-OM1), Hypertension, Hyperlipidemia, NIDDM."}/>
            <BulletRow type={"•"} text={"Medications: ASA 81mg, Clopidogrel 75mg, Amlodipine 10mg, Lisinopril 10mg, Metoprolol XL 50mg, Aldactone 25mg, Glipizide ER 10mg"}/>
            <BulletRow type={"•"} text={"Coronary angiogram showed patent LIMA to LAD but all vein grafts were closed. PCI to LCx and PTCA of Ramus was done."}/>
            <BulletRow type={"•"} text={"Planned to do ISR CTO of RCA intervention due to persistent symptoms with maximal medical therapy."}/>
            
       

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Analysis and Planning"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase05-01.mp4")}






            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"PCI Strategy (ISR-CTO)"}
            </Text>
            
            <BulletRow type={"•"} text={"CTO length : < 20 mm, blunt stump, collateral++"}/>
            <BulletRow type={"•"} text={"Femoral approach"}/>
            <BulletRow type={"•"} text={"Dual injection, AL 0.75 6F for RCA, 5F JL for LAD."}/>
            <BulletRow type={"•"} text={"Antegrade approach with AWE (Fielder > Gaia3 > Confianza 12) along with a microcatheter."}/>
            <BulletRow type={"•"} text={"If failed, will attempt retrograde approach"}/>
            <BulletRow type={"•"} text={"May need Rotational or Laser atherectomy"}/>
            






            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"STEPS"}
            </Text>
            
            <BulletRow type={"•"} text={"Started the procedure with Fielder/FineCross. Fielder wire successfully crossed in-stent RCA CTO via microchannel."}/>
            <BulletRow type={"•"} text={"As a part wire de-escalation strategy, Fielder was exchanged with Runthrough wire."}/>
            <BulletRow type={"•"} text={"Laser atherectomy was performed by using 80 mJ/mm\u00B2 and 80Hz, followed by sequential balloon inflation."}/>
            <BulletRow type={"•"} text={"IVUS of RCA revealed a significant intimal hyperplasia."}/>
            
         
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"CTO Crossing With Fielder/FineCross"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase05-02.mp4")}


            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Laser Atherectomy"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase05-03.mp4")}





            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"IVUS"}
            </Text>
            
            <BulletRow type={"•"} text={"Prox RCA had MLA of 3.6 mm\u00B2. Mid and distal RCA had two stent layers with significant intimal hyperplasia."}/>
           
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase05-04.mp4")}






            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"Cutting balloon PTCA and DES"}
            </Text>
            <BulletRow type={"•"} text={"With the presence of significant intimal hyperplasia, cutting balloon PTCA was done; followed by the placement of two DES in RCA with an excellent result."}/>
           
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase05-05.mp4")}


            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase05-06.mp4")}





            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"ISR CTO wiring can be difficult in some cases and may even require a stiffer wire with higher tip load, like Astato 20 or 40. In this case, Fielder and FineCross was successfully crossed the CTO lesion."}/>
            <BulletRow type={"•"} text={"Lesion modification (Atherectomy/Atherotomy) is paramount in ISR-CTO after wire crossing."}/>
            <BulletRow type={"•"} text={"Laser atherectomy is particularly useful for lesion modification in balloon un-crossable lesion."}/>
            <BulletRow type={"•"} text={"Imaging guided PCI is highly recommended to evaluate the etiology of ISR CTO."}/>

        </View>
    );
}

