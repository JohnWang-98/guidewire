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
            {props: {source: require("../../../../assets/cases_detail_images/gwcase01-02.jpg")}}
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
            <BulletRow type={"•"} text={"A 55-year-old woman presented with angina chest pain and dyspnea on exertion."}/>
            <BulletRow type={"•"} text={"A stress MPI revealed moderate antero-septal, and inferior ischemia with mild inferior infarct."}/>
            <BulletRow type={"•"} text={"Medical History: Hypertension, Hyperlipidemia, ESRD on HD"}/>
            <BulletRow type={"•"} text={"Medications: ASA 81mg, Clopidogrel 75mg, Metoprolol XL 50mg, Isosorbide mononitrate 30mg, Atorvastatin 40mg, Ranitidine 300mg"}/>
            <BulletRow type={"•"} text={"Coronary angiogram revealed 2 V CAD; 95% prox RCA, 100% distal RCA BMS ISR and distal vessel fills via LAD collaterals, 90% mid LAD with LVEF 60% and Syntax score of 16."}/>
            <BulletRow type={"•"} text={"Planned for IVUS/OCT guided rotational atherectomy and staged PCI of CTO RCA"}/>
        
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Case Description"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase15-01.mp4")}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Pre Angiogram"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase15-02.mp4")}
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase15-03.mp4")}





            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"PCI Strategy"}
            </Text>
            <BulletRow type={"•"} text={"ISR CTO length ~ 10-15mm with Collateral ++"}/>
            <BulletRow type={"•"} text={"Type: BMS ISR CTO"}/>
            <BulletRow type={"•"} text={"Antegrade approach with AWE (Fielder/FineCross > MiracleBros or Gaia > Confianza 12)"}/>
            <BulletRow type={"•"} text={"May require Rotational Atherectomy for lesion modification with extra support Rotawire"}/>
    

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"First, we used Fielder and FineCross microcatheter."}/>
            <BulletRow type={"•"} text={"Then the wire was exchanged to MiracleBros 6 (Open Coil, Straight tip, high tip stiffness > facilitate for drilling) together with FineCross microcatheter."}/>
            <BulletRow type={"•"} text={"Finally, MiracleBros 6 (Tip load of 8.8g) crossed the CTO."}/>
      

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Wiring Technique"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase15-04.mp4")}




            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"Then, we exchanged MiracleBros with extra support Rotawire to perform rotational atherectomy (RA) with 1.5 burr."}/>
            <BulletRow type={"•"} text={"Rotawire Extra Support has longer spring tip (2.8 cm) compared to Rotawire Floppy (2.2cm) with shorter wire transition at the tip."}/>
            <BulletRow type={"•"} text={"After RA and atherotomy using flextome 3.25/6mm, three DES (3.5/32mm, 3.5/38 mm, 2.5/24mm) were placed in proximal, mid and distal RCA with an excellent result."}/>
      
          

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wire Selection in Rotational Atherectomy"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase15-05.mp4")}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase15-06.mp4")}
            
			<Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/june-2016-ccc-live-case')} >
                {"The case can be reviewed at https://ccclivecases.org/june-2016-ccc-live-case"}
            </Text>
			



            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"In BMS/DES ISR CTO intervention, the presence of stent will help in wiring step and may not require dual injection."}/>
            <BulletRow type={"•"} text={"A stiffer wire with higher tip load is mostly required to go through ISR CTO segment and could use MiracleBros 6, Gaia 3, or Pilot 200T."}/>
            <BulletRow type={"•"} text={"Rotawire selection is paramount and Rotawire Extra Support is particularly useful in ostial lesion, distal and angulated lesion."}/>
            <BulletRow type={"•"} text={"One should have a low threshold to use an additional atherotomy as needed, even after rotational atherectomy performed."}/>

        
        </View>
    );
}
