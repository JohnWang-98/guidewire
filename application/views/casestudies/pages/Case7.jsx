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
            {props: {source: require("../../../../assets/cases_detail_images/gwcase07-03.jpg")}},
			{props: {source: require("../../../../assets/cases_detail_images/gwcase07-03.jpg")}},
			{props: {source: require("../../../../assets/cases_detail_images/gwcase07-05.jpg")}},
			{props: {source: require("../../../../assets/cases_detail_images/gwcase07-01.jpg")}},
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
            <BulletRow type={"•"} text={"A 74-year-old male presented with angina like chest pain, mainly exertional but occasionally at rest, and relieved with SL NTG or NTG patch."}/>
            <BulletRow type={"•"} text={"PMH: HTN, HLD, DM, prior non-Q wave MI in 2005, PAD s/p PTAs, former smoker, obesity."}/>
            <BulletRow type={"•"} text={"Cardiac History: CAD s/p CABG x 2 vessel (LIMA to LAD, SVG to OM1) in 1994, and s/p multiple PCIs."}/>
            <BulletRow type={"•"} text={"Medications: ASA 81mg, Clopidogrel 75mg, Amlodipine 10mg, Valsartan 160mg, Metoprolol XL 50mg, Rosuvastatin 40mg, Metformin 1G."}/>

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Diagnostic coronary angiogram"}</Text>
            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>{"Subtotal occlusion of left main, total occlusion of LAD, subtotal occlusion of LCx."}</Text>
            <TouchableOpacity onPress={event => {
                setIndex(3);
                setModalVisible(true);
            }}>
                <Image
                    source={require("../../../../assets/cases_detail_images/gwcase07-01.jpg")}
                    resizeMode={"contain"}
                    style={{
                        width: getWidth(90),
                        height: getHeight(30),
                        marginVertical: 0, alignSelf: "center"}}
                />
            </TouchableOpacity>
            {/*{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase07-01.mp4")}*/}

            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>{"Mild disease in RCA."}</Text>
            <TouchableOpacity onPress={event => {
                setIndex(3);
                setModalVisible(true);
            }}>
                <Image
                    source={require("../../../../assets/cases_detail_images/gwcase07-02.jpg")}
                    resizeMode={"contain"}
                    style={{
                        width: getWidth(90),
                        height: getHeight(32),
                        marginVertical: 0, alignSelf: "center"}}
                />
            </TouchableOpacity>
            {/*{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase07-02.mp4")}*/}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Grafts"}</Text>
            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>{"Patent LIMA to LAD"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase07-01.mp4")}

            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>{"90-95% stenosis located in SVG graft after severely angulated band (U shaped bend)"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase07-02.mp4")}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 0}]}>
                {"PCI Strategy"}
            </Text>
            {/*{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase07-02.mp4")}*/}
            <BulletRow type={"•"} text={"With the presence of severely angulated bend prior the lesion, we anticipated that the device delivery will be difficult"} />
            <BulletRow type={"•"} text={"6F AL guide with upfront use of guide extension catheter"} />
            <BulletRow type={"•"} text={"Buddy wire technique with a stiffer wire and workhorse wire" +
            "With the support of AL1 6F guide catheter and Guidezilla, Runthrough was used to negotiate the lesion.\n"} />

            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase07-03.mp4")}
            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>
                {"PTCA with compliance balloon 2/12 performed. (14 atm)"}
            </Text>
        <TouchableOpacity onPress={event => {
                setIndex(0);
                setModalVisible(true);
            }}>
			<Image
                source={require("../../../../assets/cases_detail_images/gwcase07-03.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(35),
                    marginVertical: 10, alignSelf: "center"}}
            />
		</TouchableOpacity>

            <BulletRow type={"•"} text={"Since the lesion was not adequately expanded, we had used cutting balloon angioplasty (i.e. Wolverine 2.5/6mm) at 8 atm."} />

        <TouchableOpacity onPress={event => {
                setIndex(1);
                setModalVisible(true);
            }}>
			<Image
                source={require("../../../../assets/cases_detail_images/gwcase07-03.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(80),
                    height: getHeight(36),
                    marginVertical: 10, alignSelf: "center"}}
            />
		</TouchableOpacity>








            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"With these challenging anatomy, we used buddy wire technique (Grand Slam and Runthrough) to deliver the equipment."}/>
            <BulletRow type={"•"} text={"Initial attempt was not successful to deliver the stent on Runthrough wire."}/>
            <BulletRow type={"•"} text={"Then, we delivered the stent on Grand Slam wire and deployed with a good result."}/>
       

            <Text style={[basics.h1, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Stent Position"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase07-04.mp4")}
        <TouchableOpacity onPress={event => {
                setIndex(2);
                setModalVisible(true);
            }}>
			<Image
                source={require("../../../../assets/cases_detail_images/gwcase07-05.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(85),
                    height: getHeight(30),
                    marginVertical: 10, alignSelf: "center"}}
            />
		</TouchableOpacity>
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 0}]}>
                {"Final Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase07-05.mp4")}








            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"In a tortuous or severely angulated vein graft intervention, use of adequate guide-catheter support, a guide extension catheter, and strong support coronary guidewire are vital to have a procedural success."}/>
            <BulletRow type={"•"} text={"Buddy wire technique is useful in difficult circumstances with delivering the device/stents. (i.e. Grand Slam and Runthrough)"}/>
            <BulletRow type={"•"} text={"Coronary stent can be delivered either on soft wire or extra-support wire (Grand Slam). We delivered the stent successfully via Grand Slam in this case."}/>

        </View>
    );
}

