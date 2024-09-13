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
        const images = [{
            props: {source: require("../../../../assets/cases_detail_images/gwcase08-01.jpg")}
        }]
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




            <BulletRow type={"•"} text={"A 74-year-old male presented with left sided chest pain at rest and dyspnea on exertion."}/>
            <BulletRow type={"•"} text={"Medical history: HTN, HLD, CAD s/p multiple PCIs and CABG 1999."}/>
            <BulletRow type={"•"} text={"Medications: ASA 81mg, Losartan 50mg, Metoprolol XL 100mg, Isosorbide Mononitrate 30m, Atorvastatin 40mg"}/>
            <BulletRow type={"•"} text={"Coronary angiogram revealed 3V CAD : mid LAD-CTO, Ramus 80-90%, and aneurysmal RCA with 90% stenosis (just distal to aneurysmal segment) and patent LIMA to LAD."}/>
            <BulletRow type={"•"} text={"Planned for aneurysmal RCA intervention."}/>
            
        

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Angiogram"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase08-01.mp4")}
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase08-02.mp4")}
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase08-03.mp4")}

           <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"PCI Strategy"}
            </Text>






            <BulletRow type={"•"} text={"Given the presence of aneurysm prior to the lesion, we anticipated the difficult wiring through the aneurysmal segment of RCA."}/>
            <BulletRow type={"•"} text={"AL 0.75 6F guide catheter"}/>
            <BulletRow type={"•"} text={"To negotiate through an aneurysm, planned to use a wire with hydrophobic coated and a stiffer tip (better tactile feedback and excellent torqueability), along with a microcatheter for additional support."}/>
            <BulletRow type={"•"} text={"Our wire choice – Fielder and FineCross > Gaia > MiracleBros and would consider angulated microcatheter as needed."}/>
            <BulletRow type={"•"} text={"With AL 0.75 6F guide catheter,  Fielder and FineCross microcatheter was used to navigate the lesion but it was unsuccessful to exit the aneurysmal segment."}/>

           
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase08-04.mp4")}




            <BulletRow type={"•"} text={"Then, we exchanged to Gaia second (Asahi), followed by Gaia third (Asahi) to negotiate the artery without success."}/>
            <BulletRow type={"•"} text={"Finally, we opted to use an angulated microcatheter (Supercross 90) and Fielder, then able to navigate through the aneurysmal segment."}/>

        
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase08-05.mp4")}




            <BulletRow type={"•"} text={"A Guidezilla 6F was advanced for a better support."}/>
            <BulletRow type={"•"} text={"Predilatation was done by using non compliance balloon 3.5/12 mm."}/>

         
        <TouchableOpacity onPress={event => {
                setIndex(0);
                setModalVisible(true);
            }}>
			<Image
                source={require("../../../../assets/cases_detail_images/gwcase08-01.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(30),
                    marginVertical: 20, alignSelf: "center"}}
            />
		</TouchableOpacity>
            <BulletRow type={"•"} text={"With the support of 6F AL 0.75 and Guidezilla, one DES (4/16mm) was implanted in dRCA without any difficulty.\n"}/>
            {/*<Text style={[basics.p, {paddingHorizontal: 10, marginTop: 0}]}>*/}
            {/*    {"With the support of 6F AL 0.75 and Guidezilla, one DES (4/16mm) was implanted in dRCA without any difficulty.\n"}*/}
            {/*</Text>*/}
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase08-06.mp4")}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase08-07.mp4")}











            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"Use of microcatheter is important as much as guidewire selection in a challenging case."}/>
            <BulletRow type={"•"} text={"The presence of wire’s flexibility and excellent trackability is essential to tackle these challenging anatomy."}/>
            <BulletRow type={"•"} text={"The challenging part to wire an aneurysm is that the wire tends to coil up inside the aneurysm and often requires a stiffer wire with hydrophobic coated tip (i.e. MiracleBros, Gaia) to negotiate through the exit of the aneurysmal segment."}/>
            <BulletRow type={"•"} text={"Angulated microcatheter (i.e. Supercross, Venture) provides a better support and facilitates in wiring through a severely angulated side branch and aneurysmal lesion."}/>
          
        </View>
    );
}
