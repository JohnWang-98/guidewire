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
            {props: {source: require("../../../../assets/cases_detail_images/gwcase02-01.jpg")}},
            {props: {source: require("../../../../assets/cases_detail_images/gwcase02-02.jpg")}}
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
        <View style={[caseStudies.itemView]}>
            {renderImageModal()}

            <View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"Case Presentation"}
                </Text>
                <BulletRow type={"•"} text={"A 62-year-old man presented with angina like chest pain and stress MPI showed moderate size of inferior and infero-lateral ischemia."}/>
                <BulletRow type={"•"} text={"Cardiac angiogram revealed 2V CAD with 80% long segmental in-stent restenosis after severe proximal tortuosity of ectatic mid RCA and 70% discrete lesion in LCx-OM1. LVEF was 48%."}/>
                <BulletRow type={"•"} text={"Medical History: HTN, NIDDM, HLD, prior MI, Ex smoker, COPD on inhalers, Morbid Obesity"}/>

            </View>
      
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase02-01.mp4")}
            <BulletRow type={"•"} text={"Coronary angiogram showed ectatic, severely long lesion in mid RCA."}/>
            <BulletRow type={"•"} text={"The initial attempt of PCI to RCA in another institution was unsuccessful as the stent could not delivered despite the use of a Guideliner."}/>

            <View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"PCI Strategy"}
                </Text>
                <BulletRow type={"•"} text={"With this challenging anatomy, we planned to start the procedure with long femoral sheath (45 cm) and 7F Amplatz Left 0.75 guide catheter."}/>
                <BulletRow type={"•"} text={"A Runthrough wire with upfront guide extension catheter (i.e. Guidezilla) were used."}/>
            </View>
			

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Planning"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase02-02.mp4")}
         
         
         
            <BulletRow type={"•"} text={"The Runthrough wire was advanced to the distal segment but inadvertently went to under the previous stent strut due to under-expanded stent in mid-RCA."}/>
            <BulletRow type={"•"} text={"The operator pulled the wire back and advanced carefully inside the stent."}/>
         
 
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase02-03.mp4")}
          
          
            <BulletRow type={"•"} text={"Serial balloon dilatation were performed."}/>
            <BulletRow type={"•"} text={"Guidezilla was slowly advanced simultaneously while deflating the balloon which was located at the tip of catheter."}/>
          
       
        <TouchableOpacity onPress={event => {
                setIndex(0);
                setModalVisible(true);
            }}>
		   <Image
                source={require("../../../../assets/cases_detail_images/gwcase02-01.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(40),
                    marginVertical: 20, alignSelf: "center"}}
            />
		</TouchableOpacity>
        
        
        <BulletRow type={"•"} text={"However, we were not able to deliver the stent."}/>
        <BulletRow type={"•"} text={"Then, a buddy wire method was used by placing Fielder wire along with Runthrough and Guidezilla."}/>
        

		<TouchableOpacity onPress={event => {
                setIndex(1);
                setModalVisible(true);
            }}>
            <Image
                source={require("../../../../assets/cases_detail_images/gwcase02-02.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(40),
                    marginVertical: 20, alignSelf: "center"}}
            />
		</TouchableOpacity>

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Buddy Wire Technique"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase02-04.mp4")}


            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Stent Delivery"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase02-05.mp4")}
            <Text style={[basics.p, {paddingHorizontal: 0, marginTop: 10}]}>
                {"One DES (Synergy 4/38mm) was advanced over the Fielder wire which has excellent trackability, lubricity, and flexibility, then deployed in mid RCA with good result."}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase02-06.mp4")}

            <Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/complex-coronary/december-2018-ccc-live-case')} >
                {"The case can be reviewed at https://ccclivecases.org/complex-coronary/december-2018-ccc-live-case"}
            </Text>
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"The optimal wire for tortuous artery should have a soft tip, polymer/hydrophilic cover and we had used Fielder wire in this case."}/>
            <BulletRow type={"•"} text={"A guide extension catheter with a stiff wire (i.e. Grandslam) can be used for a better support and device delivery."}/>
            <BulletRow type={"•"} text={"Another option would be the use of buddy wire technique to deliver the devices in difficult situation. (i.e. Fielder and Runthrough or two Fielder wire)"}/>
            <BulletRow type={"•"} text={"In case of difficulty in advancing guide extension catheter, the guideliner suction technique is useful to advance the catheter."}/>
        </View>
    );
}

