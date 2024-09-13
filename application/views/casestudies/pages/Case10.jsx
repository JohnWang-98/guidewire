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
            {props: {source: require("../../../../assets/cases_detail_images/gwcase10-01.jpg")}},
			{props: {source: require("../../../../assets/cases_detail_images/gwcase10-02.jpg")}}
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
            <BulletRow type={"•"} text={"A 62-year-old man presented with angina chest pain for a few days. Stress MPI showed moderate infero-lateral and apical ischemia."}/>
            <BulletRow type={"•"} text={"LHC showed 3V CAD (calcified long CTO of mid RCA with bridging collaterals and collaterals from LAD/LCx, 95% proximal LAD, and 90% prox LCx). Syntax score 28 and LVEF 60%."}/>
            <BulletRow type={"•"} text={"After Heart team discussion, patient opted for mutivessels staged PCI. He underwent successful DES PCI of pLCA and pLCx."}/>
            <BulletRow type={"•"} text={"Medical History: HTN, HLD, NIDDM, FH+"}/>
            <BulletRow type={"•"} text={"Medications: ASA 81mg, Ticagrelor 90mg, Metoprolol XL 50mg, Atorvastatin 40 mg, fenofibrate 145 mg, Isosorbide Mononitrate 60mg, Metformin XL 1G, Empagliflozin 10mg"}/>

    
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Angiogram"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase10-01.mp4")}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Description and Planning"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase10-02.mp4")}








            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"PCI Strategy"}
            </Text>
            <BulletRow type={"•"} text={"CTO length ~ 20 mm, taper proximal cap"}/>
            <BulletRow type={"•"} text={"Bridging Collaterals ++"}/>
            <BulletRow type={"•"} text={"6F IM guide catheter"}/>
            <BulletRow type={"•"} text={"AWE (Fielder/Caravel microcatheter > Gaia 3 > Confianza Pro)"}/>
            <BulletRow type={"•"} text={"If the antegrade failed, would consider a retrograde approach"}/>










            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"Since there was a small branch near the proximal cap, Fielder went to the branch during wire advancement."}/>
            <BulletRow type={"•"} text={"AWE done using Gaia 3 which inadvertently went to acute marginal branch."}/>
            <BulletRow type={"•"} text={"Then, Confianza 9 with Micro14 catheter was changed."}/>
            <BulletRow type={"•"} text={"Since the guide catheter didn’t provide enough support, decided to exchange to AL 0.75 guide catheter."}/>
         



            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"AWE (Fielder > Gaia)"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase10-03.mp4")}


            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"STEPS"}</Text>

            <BulletRow type={"•"} text={"The Confianza 9 was successfully negotiated to the distal RCA."}/>
            <BulletRow type={"•"} text={"Since we couldn’t advance the microcatheter, planned to use balloon trapping technique to remove the microcatheter."}/>

           
        <TouchableOpacity onPress={event => {
                setIndex(0);
                setModalVisible(true);
            }}>
			<Image
                source={require("../../../../assets/cases_detail_images/gwcase10-01.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(40),
                    marginVertical: 20, alignSelf: "center"}}
            />
		</TouchableOpacity>

        <BulletRow type={"•"} text={"For 6F guide catheter, we used 2.5 balloon(14 atm) to trap the wire at distal end and removed the microcatheter."}/>

         
        <TouchableOpacity onPress={event => {
                setIndex(1);
                setModalVisible(true);
            }}>
			<Image
                source={require("../../../../assets/cases_detail_images/gwcase10-02.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(40),
                    marginVertical: 20, alignSelf: "center"}}
            />
		</TouchableOpacity>
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wiring And Balloon Trapping Technique"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase10-04.mp4")}















            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"After removal of microcatheter, we used a guide catheter extension (Guidezilla in this case)."}/>
            <BulletRow type={"•"} text={"First, semicompliant balloon 1.2/6 mm was used, followed by NC 2.0/20 balloon dilatation."}/>
            <BulletRow type={"•"} text={"One DES (Xience 3/38) was placed in RCA with an excellent result."}/>
           
			
			<Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/july-2018-ccc-live-case')} >
                {"The case can be reviewed at https://ccclivecases.org/july-2018-ccc-live-case"}
            </Text>

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase10-05.mp4")}








            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"Pre-procedural planning is vital in CTO intervention along with planned AWE. Confianza Pro 9 crossed the CTO segment in this case."}/>
            <BulletRow type={"•"} text={"If Gaia wire goes into subintimal space, we would strongly suggest to pull back and re-enter from a different entry point using a different wire. Here, we used Confianza wire."}/>
            <BulletRow type={"•"} text={"If a microcatheter could not advance after wire crossed, consider to use balloon trapping technique to remove the microcatheter, followed by a serial balloon dilatation (starting from 1.0 > 1.2 > 1.5 > 2.0 mm)."}/>
           
           
        </View>
    );
}
