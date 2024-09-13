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
            {props: {source: require("../../../../assets/cases_detail_images/gwcase11-01.jpg")}},
			{props: {source: require("../../../../assets/cases_detail_images/gwcase11-02.jpg")}}
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
            <BulletRow type={"•"} text={"A 72-year-old man presented with acute onset of chest pain and shortness of breath."}/>
            <BulletRow type={"•"} text={"Found to have ST elevation in inferior leads and then cardiac catheterization lab was activated for emergent LHC."}/>
            <BulletRow type={"•"} text={"Medical history: HTN, HLD, Ex-smoker"}/>
            <BulletRow type={"•"} text={"Medication : Lisinopril 20mg, Atorvastatin 20mg"}/>
            <BulletRow type={"•"} text={"Coronary angiogram showed 70-80% stenosis in pLCx with mild disease in LAD, acute thrombotic occlusion in distal RCA."}/>



            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Angiogram"}</Text>
        <TouchableOpacity onPress={event => {
                setIndex(0);
                setModalVisible(true);
            }}>
			<Image
                source={require("../../../../assets/cases_detail_images/gwcase11-01.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(40),
                    marginVertical: 20, alignSelf: "center"}}
            />
		</TouchableOpacity>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase11-01.mp4")}
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase11-02.mp4")}
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase11-03.mp4")}



            <BulletRow type={"•"} text={"In a setting of STEMI, we could use any workhorse wire which has a soft tip with hydrophilic or coated property (i.e. Runthrough, Sion Blue)."}/>
            <BulletRow type={"•"} text={"Sion Blue was used here and advanced to the distal RCA without any difficulty."}/>

           
        <TouchableOpacity onPress={event => {
                setIndex(1);
                setModalVisible(true);
            }}>
			<Image
                source={require("../../../../assets/cases_detail_images/gwcase11-02.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(40),
                    marginVertical: 20, alignSelf: "center"}}
            />
		</TouchableOpacity>
        <BulletRow type={"•"} text={"One DES (Promus Elite 3.5/38) was placed in dRCA with good result."}/>

         
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase11-04.mp4")}



            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"The objective in STEMI/acute thrombotic occlusion is to cross the lesion and advances the wire to the distal lumen softly and atraumatically."}/>
            <BulletRow type={"•"} text={"Any workhorse wire can be used in this situation. (i.e., Runthrough, Sion Blue)."}/>
            <BulletRow type={"•"} text={"In subacute occlusion, it may sometimes require a stiffer tip and higher tip load to facilitate the crossing, such as Fielder or Gaia series."}/>

        </View>
    );
}
