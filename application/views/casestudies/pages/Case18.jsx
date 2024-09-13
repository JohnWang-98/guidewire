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



            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Presentation"}
            </Text>
            <BulletRow type={"•"} text={"A 62-year-old man presented with new onset crescendo angina and positive stress echo for infero-lateral ischemia."}/>
            <BulletRow type={"•"} text={"Coronary angiogram showed 3V CAD. CABG was recommended but patient declined."}/>
            <BulletRow type={"•"} text={"He underwent Resolute Integrity (3.5/30mm) DES PCI of distal LCx."}/>
            <BulletRow type={"•"} text={"Prior History: Hypertension, NIDDM, Family history +"}/>
            <BulletRow type={"•"} text={"Medications: Aspirin 81mg, Prasugrel 5mg, Atenolol 50mg, Amlodipine 5mg, Metformin XR 1000mg, Glimepiride 2mg, Omeprazole 20mg"}/>
            <BulletRow type={"•"} text={"Coronary angiogram revealed 3 V CAD (60% prox LAD, 80% distal LCx and 100% distal RCA) and normal LV function; SYNTAX score 22."}/>
            <BulletRow type={"•"} text={"Planned for PCI of distal RCA CTO using retrograde recanalization."}/>
            </View>

		<Text style={constants.separateTop}/>



        <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"PCI Strategy"}
            </Text>
            <BulletRow type={"•"} text={"CTO Length ~ 20-25 mm, Multiple bridging collaterals, Septal collateral to RCA ++"}/>
            <BulletRow type={"•"} text={"Retrograde approach: Dual injection, 6F guide catheter"}/>
            <BulletRow type={"•"} text={"Initial wire: Fielder/Corsair 150 cm"}/>
            <BulletRow type={"•"} text={"Wire escalation as needed"}/>
            <BulletRow type={"•"} text={"Externalization and antegrade wiring with FineCross and Runthrough"}/>
            <BulletRow type={"•"} text={"Coronary angiogram revealed 3 V CAD (60% prox LAD, 80% distal LCx and 100% distal RCA) and normal LV function; SYNTAX score 22."}/>
            <BulletRow type={"•"} text={"If retrograde fails, consider antegrade approach"}/>
            </View>



		<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Analysis"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase18-01.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"How to Approach Retrograde PCI"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase18-02.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Three Challenges in Retrograde Approach"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase18-03.mp4")}



            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"We used Fielder and Corsair 150 cm to negotiate through LAD septal branches without any difficulty."}/>
            <BulletRow type={"•"} text={"Then changed to MiracleBros 6 which went through the distal CTO cap."}/>
            <BulletRow type={"•"} text={"A stiff wire (i.e. MiracleBros) was not able to navigate into the guide catheter."}/>
            <BulletRow type={"•"} text={"We attempted an antegrade trapping balloon with Runthrough wire to facilitate MiracleBros advancement into the guide but it wasn’t successful."}/>
            <BulletRow type={"•"} text={"MiracleBros 6 was then exchanged to Fielder which successfully entered into the RCA guide."}/>
       
            </View>


			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase18-04.mp4")}

		<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wiring Technique"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase18-05.mp4")}



            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"Balloon trapping and advancing Corsair catheter into the RCA guide catheter was subsequently performed."}/>
       
            </View>
		

			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase18-06.mp4")}



            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"Then, a long wire (i.e. ViperWire) was advanced via Corsair from LAD to RCA guide catheter, called wire externalization."}/>
            <BulletRow type={"•"} text={"Then, FineCross was advanced over the ViperWire, followed by a removal of Corsair and ViperWire."}/>
            <BulletRow type={"•"} text={"A Runthrough wire was negotiated via FineCross microcatheter into the RCA."}/>
            <BulletRow type={"•"} text={"Three DES were placed in the RCA with an excellent result."}/>
       
            </View>


			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase18-07.mp4")}

		<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase18-08.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Overview"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase18-09.mp4")}

			<Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/august-2013-ccc-live-case')} >
                {"The case can be reviewed at https://ccclivecases.org/august-2013-ccc-live-case"}
            </Text>
			

            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"The case planning and selection of septal branch is paramount for procedural success."}/>
            <BulletRow type={"•"} text={"A hydrophilic wire with microcatheter can be used to navigate through the septal branch into the RCA, followed by wire escalation as needed."}/>
            <BulletRow type={"•"} text={"Manipulation of a stiff wire into the guide catheter is often challenging and a soft, hydrophilic wire (i.e. Fielder in this case) is highly recommended in these situations."}/>
       
            </View>

        </View>
    );
}
