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
            <BulletRow type={"•"} text={"A 48-year-old man presented with new onset of crescendo angina (CCS class III) and stress MPI showed moderate size inferior wall ischemia."}/>
            <BulletRow type={"•"} text={"Prior History: Hypertension, Hyperlipidemia"}/>
            <BulletRow type={"•"} text={"Medications: ASA 81mg, Metoprolol XL 100mg, Ranolazine 1000mg, ISMN 30mg, Simvastatin 40mg, Enalapril 5mg."}/>
            <BulletRow type={"•"} text={"Cardiac catheterization revealed 1V CAD; total occlusion of distal RCA filling via bridge and septal retrograde collaterals."}/>
            <BulletRow type={"•"} text={"LVEF 60% and SYNTAX score 12."}/>
            <BulletRow type={"•"} text={"Planned to do recanalization of distal RCA CTO using retrograde approach via LAD-septal collaterals."}/>


         

            <Text style={constants.separateTop}/>

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase16-01.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase16-02.mp4")}





            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"PCI Strategy"}
            </Text>
            <BulletRow type={"•"} text={"CTO length ~20 mm with good collaterals from LAD-septal."}/>
            <BulletRow type={"•"} text={"Initial approach: Retrograde, Dual injection."}/>
            <BulletRow type={"•"} text={"Initial wire would be Fielder with Corsair microcatheter."}/>
            <BulletRow type={"•"} text={"Caution: Stent in LAD"}/>
            <BulletRow type={"•"} text={"Wire escalation with retrograde approach to enter the distal lumen."}/>
            <BulletRow type={"•"} text={"If Retrograde approach failed, would try antegrade approach."}/>
           

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Planning"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase16-03.mp4")}






            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"First, we started with Fielder and Corsair microcatheter to wire LAD septal to RCA."}/>
            <BulletRow type={"•"} text={"Once we reached to rPDA, changed to a stiffer wire to go through the distal cap of CTO."}/>
            <BulletRow type={"•"} text={"Wire escalation was done accordingly from MiracleBros 6 > Confianza 9 > Progress 200T > Astato XS 20."}/>
            <BulletRow type={"•"} text={"Finally, Astato XS 20 (Tip load of 20g) went through distal CTO cap and wire externalization using ViperWire was performed."}/>
            <BulletRow type={"•"} text={"FineCross microcatheter and a workhorse wire (Runthrough 300) was advanced into the RCA, followed by removal of ViperWire and Corsair."}/>



			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Retrograde Wiring"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase16-04.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase16-05.mp4")}


			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wire Externalization and Exchange to Workhorse Wire"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase16-06.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase16-07.mp4")}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"After Runthrough wire was advanced into the RCA, predilatation with NC 2.5/30mm was done, followed by three DES stents placement (4/16, 3/38, and 2.75/28 mm)."}/>
			
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase16-08.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Overview"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase16-09.mp4")}

            <Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/september-2015-ccc-live-case')} >
                {"The case can be reviewed at https://ccclivecases.org/september-2015-ccc-live-case"}
            </Text>
			
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"Presence of bifurcation near the distal cap (CTO) makes the retrograde approach challenging to wire into the vessel (like in this case) and will require a stiffer wire with higher tip load to go through the distal cap."}/>
            <BulletRow type={"•"} text={"Like AWE, the operator should have a wire escalation plan in retrograde approach."}/>
            <BulletRow type={"•"} text={"We used Fielder > MiracleBros 6 > Confianza 9 > Progress 200T > Astato XS 20."}/>
            <BulletRow type={"•"} text={"Be careful not to push hard if there is any resistance while advancing Corsair through LAD stent strut; as it could disrupt the LAD stent architecture."}/>
            
         
        </View>
    );
}

