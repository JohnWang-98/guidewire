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
            <BulletRow type={"•"} text={"An 86-year-old woman presented with chronic stable angina CCS Class II and a positive MPI for anterior and lateral wall ischemia for 2 years. She was managed medically."}/>
            <BulletRow type={"•"} text={"Cardiac catheterization revealed severe calcific dLM bifurcation disease, prox LAD focal aneurysm, Syntax score 30 and LVEF 60%."}/>
            <BulletRow type={"•"} text={"She was recommended for CABG but declined by the patient & family due to old age and poor coordination."}/>
            <BulletRow type={"•"} text={"Prior History: Hypertension, Hyperlipidemia, Rt LE DVT"}/>
            <BulletRow type={"•"} text={"Medications : Aspirin 81mg, Atorvastatin 40mg, Metoprolol Succinate 50mg, Apixaban 5mg twice daily, ISMN 60mg, Ranolazine 500mg twice daily"}/>
            <BulletRow type={"•"} text={"Planned for complex intervention of calcific left main bifurcation with provisional stenting technique +/- rotational atherectomy and IVUS guidance."}/>
            </View>

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase19-01.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase19-02.mp4")}





            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"PCI Strategy"}
            </Text>
            <BulletRow type={"•"} text={"Provisional Stenting Strategy"}/>
            <BulletRow type={"•"} text={"Tentative 2 DES for two lesions (1 in LM and 1 in mid LAD)"}/>
            <BulletRow type={"•"} text={"A workhorse wire in LCx and hydrophobic wire in LAD"}/>
            <BulletRow type={"•"} text={"Rotational atherectomy in dLM"}/>
            <BulletRow type={"•"} text={"Post PCI imaging (IVUS) and optimization accordingly"}/>
       
            </View>
		
		<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Review and Planning"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase19-03.mp4")}



            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"With aneurysm segment in dLM and prox LAD, the wire should have hydrophobic coating with a stiffer tip to negotiate into the LAD."}/>
            <BulletRow type={"•"} text={"A good angiographic angle is paramount in this challenging anatomy and we used LAO 58/CAU 19 to tackle this lesion."}/>
            <BulletRow type={"•"} text={"First, we used a Runthrough wire to negotiate the LCx and IVUS was done."}/>
            <BulletRow type={"•"} text={"To negotiate the aneurysmal segment, we used MiracleBros 3 (Asahi) (11 cm hydrophobic coating, 3g tip load) along with FineCross microcatheter."}/>
            <BulletRow type={"•"} text={"Then, exchanged the MiracleBros to Rotawire Floppy and IVUS imaging was performed."}/>
            <BulletRow type={"•"} text={"IVUS of LM showed 360 degree of calcium in dLM and RA with 1.5 rota burr was performed."}/>
       
            </View>
			

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wiring Technique"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase19-04.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase19-05.mp4")}


            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"Serial Balloon inflation was performed in dLM and LAD, followed by the placement of 2 DES (4/12) in LM and (3/24) in LAD with an excellent result, also verified with IVUS imaging."}/>
            <BulletRow type={"•"} text={"Modest reduction in the size of the LAD aneurysm was seen on post PCI angiogram."}/>
       
            </View>


			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase19-06.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase19-07.mp4")}


			<Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/january-2019-ccc-live-case')} >
                {"The case can be reviewed at https://ccclivecases.org/january-2019-ccc-live-case"}
            </Text>
			

            <View> 
               <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"Navigating through an aneurysm is quite challenging and requires appropriate wire selection and equipment."}/>
            <BulletRow type={"•"} text={"Although it is easy to enter into an aneurysm segment, the wire mostly will coil up inside the aneurysm."}/>
            <BulletRow type={"•"} text={"To negotiate through an aneurysm, it often requires a wire with hydrophobic coated and a stiffer tip (better tactile feedback and excellent torqueability), along with a microcatheter for additional support."}/>
            <BulletRow type={"•"} text={"The wire that we used, in this case, was MiracleBros 3 wire."}/>
            <BulletRow type={"•"} text={"In some cases, it may even need angulated catheter to navigate through an aneurysm. (i.e. Supercross 90/120)."}/>
            <BulletRow type={"•"} text={"A microcatheter (FineCross in this case) is useful not only for a better wire support but also for wire exchange."}/>
            <BulletRow type={"•"} text={"Pre and post imaging guided PCI optimization is highly recommended in these challenging left main PCI case."}/>
       
            </View>

        </View>
    );
}




