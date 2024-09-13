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
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"Case Presentation"}
                </Text>
                    <BulletRow type={"•"} text={"A 74-year-old man presented with class II angina and stress MPI done as pre-op for renal transplant evaluation, revealed moderate multivessels ischemia (apical, inferior and infero-lateral)."}/>
                    <BulletRow type={"•"} text={"Coronary angiogram revealed calcified 3 V CAD and LVEF 55%. He was evaluated by CTS and had Heart team discussion; then declined CABG."}/>
                    <BulletRow type={"•"} text={"Medical History: Controlled Hypertension, Hyperlipidemia, ESRD on HD, Diet controlled DM."}/>
                    <BulletRow type={"•"} text={"Medications : Aspirin, Atorvastatin, Metoprolol XL, Lisinopril, Amlodipine."}/>
                    <BulletRow type={"•"} text={"Angoigram revealed 3 V CAD: 80% long calcified mid RCA, 100% RCA-AV cont, subtotal calcified long segmental mid-distal LAD, 60% D1, 80% LCx-OM2, 80% LCx-LPL, LVEF 55% and Syntax score 33."}/>
                    <BulletRow type={"•"} text={"Planned for high risk multivessel PCI with appropriate use of imaging, rotational atherectomy and Impella LV assist as deemed necessary."}/>
            </View>
		<Text style={constants.separateTop}/>

		<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Angiogram"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase20-01.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase20-02.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Review and Planning"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase20-03.mp4")}

            <View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"PCI Strategy"}
                </Text>
                <BulletRow type={"•"} text={"Plan to do PCI to LAD"}/>
                <BulletRow type={"•"} text={"With the presence of long calcified lesion in LAD, may require adequate lesion modification (i.e., Rotational atherectomy)."}/>
                <BulletRow type={"•"} text={"Initial wire choice: Fielder/FineCross"}/>
                <BulletRow type={"•"} text={"Second wire choice: Gaia series and MiracleBros"}/>
            </View>

            <View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"STEPS"}
                </Text>
            <BulletRow type={"•"} text={"We first used Fielder (non-tapered polymer jacketed tip) with FineCross microcatheter. However Fielder didn’t cross the calcified lesion."}/>
            <BulletRow type={"•"} text={"Then we switched to Gaia 3 (tapered, hydrophilic coating, composite core with 1:1 torque) and able to navigate through the calcific LAD lesion."}/>
            <BulletRow type={"•"} text={"Exchanged to Rotawire via FineCross microcatheter."}/>
            <BulletRow type={"•"} text={"Rota ablation was performed with 1.5 Burr, followed by PTCA and two DES (3.5/38 and 3/18 mm) placement in mid and distal LAD."}/>
            </View>


		<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wiring Technique"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase20-04.mp4")}


		<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase20-05.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase20-06.mp4")}

		<Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/complex-multivessel-pci-in-a-high-syntax-score-patient-october-2020')} >
                {"The case can be reviewed at https://ccclivecases.org/complex-multivessel-pci-in-a-high-syntax-score-patient-october-2020"}
            </Text>

            <View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"Learning Points"}
                </Text>
                <BulletRow type={"•"} text={"Composite core technology, used in Gaia series, enables to perform an excellent 1:1 torque control, compared to a traditional one."}/>
                <BulletRow type={"•"} text={"Composite core consists of dual core and dual coil with multiple wire components to enhance durability and torque transmission."}/>
                <BulletRow type={"•"} text={"We used Gaia 3 wire in this case and able to perform very fine movement to negotiate the subtotal long calcific lesion while providing an additional support via a microcatheter."}/>
            </View>
        </View>
    );
}




