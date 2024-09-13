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
            <BulletRow type={"•"} text={"A 71-year-old man presented with new onset CCC class III angina and found to have positive exercise EKG stress test with significant ST-segment depression in multiple leads."}/>
            <BulletRow type={"•"} text={"PMH: HTN, Ex-smoker"}/>
            <BulletRow type={"•"} text={"Medications : ASA 81mg, Clopidogrel 75mg, Metoprolol XL 50mg, Isosorbide mononitrate 30mg, Atorvastatin 20mg"}/>
            <BulletRow type={"•"} text={"Coronary angiogram showed calcific 3V CAD; 80% calcified prox-mid RCA, 90% calcified prox LAD with angulated diagonal bifurcation, and small sized 80% LCx-LPL1"}/>
            <BulletRow type={"•"} text={"Syntax score 24 , LVEF 65%"}/>
            <BulletRow type={"•"} text={"He was planned to undergo PCI of LAD and angulated diagonal bifurcation."}/>
       

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Angiogram"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase13-01.mp4")}
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase13-02.mp4")}






            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"PCI Strategy"}
            </Text>
            <BulletRow type={"•"} text={"7F VL guide system"}/>
            <BulletRow type={"•"} text={"Upfront two stents strategy"}/>
            <BulletRow type={"•"} text={"May need lesion modification (Atherectomy) in LAD"}/>
            <BulletRow type={"•"} text={"Workhorse wire in LAD (i.e. Runthrough wire)"}/>
            <BulletRow type={"•"} text={"Probably require an angulated catheter to wire a severely angulated diagonal branch"}/>
         

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Case Planning"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase13-03.mp4")}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Venture Catheter"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase13-04.mp4")}







            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"Atherectomy of LAD was performed by using Orbital atherectomy."}/>
            <BulletRow type={"•"} text={"Venture catheter was used to wire the side branch but it was unsuccessful."}/>
            <BulletRow type={"•"} text={"Then proximal optimization and PTCA of LAD with 3.0 balloon was done."}/>
          
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase13-05.mp4")}






           
            <BulletRow type={"•"} text={"Supercross 120 microcatheter with 300cm Runthrough wire was successfully navigated into the side branch."}/>
            <BulletRow type={"•"} text={"Runthrough wire was used here to wire the side branch as Fielder went into the subintimal."}/>
            <BulletRow type={"•"} text={"Two stents approach by using Mini Crush technique was done (30/12mm in LAD and 2.5/28mm in diagonal branch) followed by serial balloon dilatation and kissing balloon inflation."}/>
        


            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Wiring Diagonal Branch (Supercross 120 + Runthrough)"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase13-06.mp4")}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Bifurcation Technique"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase13-07.mp4")}

            <Text style={[constants.row, {paddingHorizontal: 10, marginTop: 0, textAlign: "center"}]}>
                <Text style={basics.p}>{"The various bifurcation stenting techniques can be reviewed in the BifurcAID app "}</Text>
                <Text style={constants.hyperLink} onPress={event => Linking.openURL("https://apps.apple.com/us/app/bifurcaid/id1287636020")}>
                    {"Apple App store"}
                </Text>
                <Text>{" / "}</Text>
                <Text style={constants.hyperLink} onPress={event => Linking.openURL("https://play.google.com/store/apps/details?id=org.sinaiapplabs.bifurcaid&amp;hl=en&amp;gl=US")}>
                    {"Google Play store"}
                </Text>
                <Text>{"\nOr the new fully 3D-animated BifurcAID 3D app:\n"}</Text>
                <Text style={basics.p}>{"Web App: "}</Text>
                <Text style={constants.hyperLink} onPress={event => Linking.openURL("www.CardiologyApps.com/BifurcAID-3D")}>
                    {"www.CardiologyApps.com/BifurcAID-3D\n"}
                </Text>
                <Text style={basics.p}>{"Mobile App: "}</Text>
                <Text style={constants.hyperLink} onPress={event => Linking.openURL("https://apps.apple.com/us/app/bifurcaid-3d/id1570640326")}>
                    {"Apple App store"}
                </Text>
                <Text style={basics.p}>{" / "}</Text>
                <Text style={constants.hyperLink} onPress={event => Linking.openURL("https://play.google.com/store/apps/details?id=org.mountsinai.bifurcaid3d&hl=en&gl=US")}>
                    {"Google Play store"}
                </Text>
            </Text>

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 0}]}>
                {"Final Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase13-08.mp4")}
           

		   <Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/january-2017-ccc-live-case')} >
                {"The case can be reviewed at https://ccclivecases.org/january-2017-ccc-live-case"}
            </Text>
			
		
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"The wire choice for bifurcation lesion is a regular workhorse wire in the main branch and polymer coated wire in a side branch to minimize the risk of wire retrieval damage."}/>
            <BulletRow type={"•"} text={"The operator used Runthrough in diagonal branch wiring as Fielder wire went into subintimal."}/>
            <BulletRow type={"•"} text={"The angulated microcatheter (Supercross, Venture) is especially useful to navigate in a severely angulated side branch and aneurysm lesion."}/>
            {/*<BulletRow type={"•"} text={"The operator choice’s of bifurcation stenting method is mini crush technique and other techniques can be reviewed on the BifurcAID app."}/>*/}
            <BulletRow type={"•"} text={"The operator’s choice of bifurcation stenting method is mini crush technique. This and other techniques can be reviewed in the BifurcAID app"}/>

        </View>
    );
}
