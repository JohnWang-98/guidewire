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
            <BulletRow type={"•"} text={"A 75-year-old woman with PMH HTN, HLD and NIDDM presented with new onset CCS class II angina for few weeks and stress MPI revealed moderate apical and inferior ischemia."}/>
            <BulletRow type={"•"} text={"Home medication: Aspirin, Atorvastatin, Metoprolol XL, Losartan, Amlodipine, Metformin, Vitamins"}/>
            <BulletRow type={"•"} text={"LHC revealed 2 V CAD: 95% prox RCA, 90-95% calcified, angulated, severely tortuous mid-distal LAD with D1 bifurcation, 30-50% pLCx and LPL, LVEF 60% and Syntax score 18"}/>
            <BulletRow type={"•"} text={"Pt underwent PCI of pRCA one with one DES (Xience Sierra) and discharged home same day. Pt still has CCS class I angina on GDMT."}/>
            <BulletRow type={"•"} text={"Planned for staged PCI of extremely tortuous angulated mid LAD/Diagonal bifurcation lesion. Likely will require angulated catheters for wire advancement."}/>
            </View>


			<Text style={constants.separateTop}/>

		<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Pre Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase22-01.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase22-02.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Description and Planning"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase22-03.mp4")}




            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"PCI Strategy"}
            </Text>
            <BulletRow type={"•"} text={"6F guide catheter."}/>
            <BulletRow type={"•"} text={"Anticipate to have difficulty wiring into the LAD, especially from the diagonal branch which may even require angulated catheters (Venture or SuperCross)"}/>
            <BulletRow type={"•"} text={"If it is difficult to wire into the distal LAD, would consider to place stent into the LAD first (before diagonal branch) then attempt to wire into the distal LAD"}/>
            <BulletRow type={"•"} text={"Provisional LAD stenting"}/>
            <BulletRow type={"•"} text={"Wire choice would be hydrophilic, polymer jacketed one (Fielder or Fielder FC)"}/>
            </View>


            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"First, we used Fielder wire to negotiate from LAD into the diagonal branch."}/>
            <BulletRow type={"•"} text={"Another Fielder wire with Venture catheter was advanced and attempted to redirect the wire into the distal LAD which was not successful."}/>
            <BulletRow type={"•"} text={"Then we did PTCA of first LAD lesion, then reattempted to wire the LAD. However, it was unsuccessful even with Venture catheter."}/>
            <BulletRow type={"•"} text={"After careful consideration, we had changed our strategy to place the stent into the LAD (prior to the diagonal branch) first, then will try to wire into the distal LAD."}/>
            </View>



			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Discussion and First Stent Placement"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase22-04.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Angiogram (Post First Stent)"}
            </Text>
            <BulletRow type={"•"} text={"Xience 3.25/18 was placed in the mid LAD.\n"}/>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase22-05.mp4")}

            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"After the stent placement in mid LAD, we had planned to negotiate the wire into the distal LAD using various techniques – 1) Supercross 120 catheter with Fielder or Fielder XT-A; 2) FineCross with MicracleBros; and 3) Use of dual-lumen catheter with Fielder or Fielder XT-A."}/>
            <BulletRow type={"•"} text={"First, SuperCross 120 with Fielder wire was used to negotiate into the distal LAD. After a few attempts, Fielder wire was successfully advanced into the LAD."}/>
            </View>
		

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Discussion of Various Methods and Distal LAD Rewiring"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase22-06.mp4")}


            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"Subsequently, we exchanged the Fielder wire (LAD) into 300 cm Runthrough via SuperCross microcatheter."}/>
            <BulletRow type={"•"} text={"It was followed by PTCA and placement of one DES (Xience 3/15 mm) with an excellent result, confirmed by OCT."}/>
            </View>
		

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Overview of Wiring Techniques"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase22-07.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"One vs Two Stent Strategy"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase22-08.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase22-09.mp4")}

            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"Wiring into angulated artery is particularly challenging and careful pre-procedural planning is paramount in these cases."}/>
            <BulletRow type={"•"} text={"Angulated catheters (SuperCross or Venture) with hydrophilic, polymer jacketed wire (i.e Fielder) is useful to negotiate angulated and tortuous artery."}/>
            <BulletRow type={"•"} text={"In two sequential and angulated lesions, stenting of proximal lesion could help to negotiate the wire into the distal segment, like in this case."}/>
         
            </View>
		
        </View>
    );
}






