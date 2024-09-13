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
            <BulletRow type={"•"} text={"A 36-year-old presented with new onset angina chest pain."}/>
            <BulletRow type={"•"} text={"A stress MPI revealed moderate anterior, septal, apical, and inferior walls ischemia with TID."}/>
            <BulletRow type={"•"} text={"Medical history: HLD, NIDDM"}/>
            <BulletRow type={"•"} text={"Medications: ASA 81mg, Ticagrelor 90mg BID, Metoprolol XL 50mg, ISMN 60mg, Glipizide 10mg, Rosuvastatin 10mg"}/>
            <BulletRow type={"•"} text={"Cardiac catheterization revealed 3 V CAD; 100% mid RCA, 95% prox LAD, 80% OM2 and 90% LCx-LPL with LVEF 50% and Syntax score of 26."}/>
            <BulletRow type={"•"} text={"Heart team discussion was done for revascularization options and patient chose multivessels PCI approach."}/>
            <BulletRow type={"•"} text={"Planned for staged PCI of CTO RCA via antegrade approach using CenterCross device or via retrograde septal collaterals."}/>
          

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Angiogram"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase14-01.mp4")}
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase14-01.mp4")}








            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"PCI Strategy"}
            </Text>
            <BulletRow type={"•"} text={"CTO lesion length ~10 mm"}/>
            <BulletRow type={"•"} text={"Collaterals ++"}/>
            <BulletRow type={"•"} text={"Antegrade approach with wire escalation"}/>
            <BulletRow type={"•"} text={"Dual injection"}/>
            <BulletRow type={"•"} text={"May use a support catheter (i.e. CenterCross) along with microcatheter"}/>
            <BulletRow type={"•"} text={"If antegrade approach fails, would attempt retrograde approach"}/>
            <BulletRow type={"•"} text={"Planned AWE (Fielder/Micro14 > Miraclebros > Hornet 14 or Confianza 12)"}/>
            

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Case Planning"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase14-03.mp4")}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Devices Discussion"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase14-04.mp4")}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"CenterCross Device"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase14-05.mp4")}




            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"With the support of 7F guide catheter, we positioned CenterCross catheter along with the Runthrough wire and Micro14 microcatheter."}/>
            <BulletRow type={"•"} text={"Then AWE performed by using Fielder, then changed to Miraclebros 6."}/>
            <BulletRow type={"•"} text={"The wire was not able to advance, then exchanged to Hornet 14 (Tip diameter 0.008, with tip load of 14 g) without success."}/>
            <BulletRow type={"•"} text={"Confianza 12 was used to cross the lesion. However, it was not successful."}/>
            <BulletRow type={"•"} text={"Then we exchanged Micro14 to FineCross and tried with Gaia 3 wire, which was subsequently escalated to Progress 200T (0.009” tip with tip load of 13.3g)."}/>
            <BulletRow type={"•"} text={"Progress 200T finally passed the distal cap of CTO, followed by serial balloon dilatation and two DES were placed to mid and distal RCA with an excellent result."}/>
           

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"CTO Crossing"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase14-06.mp4")}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase14-07.mp4")}
            
			<Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/may-2016-ccc-live-case')} >
                {"The case can be reviewed at https://ccclivecases.org/may-2016-ccc-live-case"}
            </Text>
			
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"The use of different type of wires in the antegrade wire escalation is very important and the operator should have the pre-planned strategy for AWE."}/>
            <BulletRow type={"•"} text={"The operator successfully crossed CTO with Pilot 200T which has hydrophilic tapering tip from 0.014” to 0.009”, intermediate polymer sleeve with distal 3cm uncoated."}/>
            <BulletRow type={"•"} text={"The CenterCross device is useful to keep the wire in the center of the lumen during AWE while providing an additional support."}/>
           
        </View>
    );
}
