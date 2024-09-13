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







            <BulletRow type={"•"} text={"A 52-year-old man presented with shortness of breath and chest pain. Diagnosed with acute systolic heart failure, type 2 MI, and required invasive ventilation."}/>
            <BulletRow type={"•"} text={"He was medically optimized and TTE showed EF 30%."}/>
            <BulletRow type={"•"} text={"LHC showed 1 V CAD: flush long 100% occlusion of ostial LAD with excellent collaterals from RCA, J-CTO score 3, and syntax score of 20."}/>
            <BulletRow type={"•"} text={"Stress MPI revealed large area of severe anterior wall predominant ischemia with partial scarring."}/>
            <BulletRow type={"•"} text={"Medical History: Hypertension, Hyperlipidemia, Smoker (50 pack yrs), COPD, OSA, Morbid obesity (BMI 36.7)"}/>
            <BulletRow type={"•"} text={"He continued to have symptoms while on maximum medical therapy and then decided to perform PCI of LAD"}/>


            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Angiogram"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase12-01.mp4")}
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase12-02.mp4")}



            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"PCI Strategy"}
            </Text>
            <BulletRow type={"•"} text={"Lesion length: > 20 mm"}/>
            <BulletRow type={"•"} text={"Dual injection (6F VL for left system, 6F IM for right system)"}/>
            <BulletRow type={"•"} text={"Collateral + (Epicardial and faint septal [Rt to left] )"}/>
            <BulletRow type={"•"} text={"Retrograde approach first (Corsair 150 cm with Fielder/Fielder FC)"}/>
            <BulletRow type={"•"} text={"If retrograde fails, will attempt antegrade approach"}/>
            <BulletRow type={"•"} text={"Antegrade approach with AWE ( Fielder/FineCross > Miracle 6 or Gaia 3> Confianza Pro)"}/>
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Case Planning"}</Text>


            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase12-03.mp4")}




            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wiring STEPS"}
            </Text>
            <BulletRow type={"•"} text={"Started the case with retrograde approach with Fielder/Corsair."}/>
            <BulletRow type={"•"} text={"But the wire didn’t through the septal as the collaterals are small size and not have direct communication."}/>
            <BulletRow type={"•"} text={"After we had tried couple of times, we switched to antegrade approach with Fielder/FineCross."}/>
            <BulletRow type={"•"} text={"AWE was done (Fielder > Gaia3)."}/>
            <BulletRow type={"•"} text={"Gaia 3 went to subintimal inadvertently, then changed to > Confianza 12."}/>
    

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Retrograde Approach"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase12-04.mp4")}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"AWE (Fielder > Gaia 3)"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase12-05.mp4")}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Gaia 3 > Confianza 12"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase12-06.mp4")}



            <BulletRow type={"•"} text={"After the Confianza wire crossed, it was exchanged to a workhorse wire, followed by serial balloon dilatation."}/>
            <BulletRow type={"•"} text={"Two DES (3.0/38 and 3.5/38) were placed in proximal and mid LAD with good result."}/>

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase12-07.mp4")}
            
			
			<Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/ostial-lad-cto-pci-via-retrograde-approach-march-2020')} >
                {"The case can be reviewed at https://ccclivecases.org/ostial-lad-cto-pci-via-retrograde-approach-march-2020"}
            </Text>
			
			



            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"Gaia series are made of tapered tip, composite core design compared to traditional design (core to tip), which enhance excellent 1:1 torque control."}/>
            <BulletRow type={"•"} text={"Composite core (Dual Core and Dual coil) is made of multiple wire components to enhance durability and torque transmission."}/>
            <BulletRow type={"•"} text={"However, if Gaia inadvertently enters into subintimal, one should consider MiracleBros/Confianza 12 to redirect into the lumen."}/>
            <BulletRow type={"•"} text={"MiracleBros wire’s tip can be shaped into a desired configuration, compared to Gaia family (came in as 1mm pre-shaped tip) and better in navigating through angulated side branch and aneurysm lesions."}/>
    
    
        </View>
    );
}
