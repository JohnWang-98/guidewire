import React, {useState} from 'react';
import {Linking, Modal, Platform, Text, TouchableOpacity, View} from "react-native";
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
                {/*<VideoPlayer*/}
                {/*    videoProps={{*/}
                {/*        shouldPlay: false,*/}
                {/*        resizeMode: Video.RESIZE_MODE_CONTAIN,*/}
                {/*        source: {uri: url,},*/}
                {/*    }}*/}
                {/*    defaultControlsVisible*/}
                {/*    timeVisible*/}
                {/*    fullscreen={onFullscreenUpdate}*/}
                {/*    errorCallback={error => null}*/}
                {/*    playbackCallback={status => null}*/}
                {/*    style={{height: getWidth(70),}}*/}
                {/*/>*/}
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
            <BulletRow type={"•"} text={"A 64-year-old man presented with angina chest pain and dyspnea on exertion. Stress MPI showed anterior, apical, and septal ischemia."}/>
            <BulletRow type={"•"} text={"Coronary angiogram revealed 2V CAD (Prox LAD CTO bifurcation with D1{Medina 1,1,1}, LCx-OM2). LVEF was 60%."}/>
            <BulletRow type={"•"} text={"Medications: ASA 81 mg daily, Metoprolol XL 50mg daily, Amlodipine 5 mg daily, Atorvastatin 40mg daily"}/>

  

            <Text style={constants.separateTop}/>
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Analysis"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase04-01.mp4")}
            



            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"PCI Strategy"}
            </Text>
            {/*<Text style={basics.p}>*/}
            {/*{"Length of CTO : < 20 mm"}*/}
            {/*</Text>*/}
            <BulletRow type={"•"} text={"Length of CTO : < 20 mm"}/>
            <BulletRow type={"•"} text={"Femoral approach"}/>
            <BulletRow type={"•"} text={"7F VL guide catheter"}/>
            <BulletRow type={"•"} text={"Dual injection"}/>
            <BulletRow type={"•"} text={"Antegrade approach with wire escalation (Fielder > MiracleBros > Gaia/Confianza 12), along with a microcatheter (i.e. FineCross)"}/>
            <BulletRow type={"•"} text={"2 stents strategy (Mini Crush)"}/>
            
            
           




            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"Wiring Steps of LAD"}
            </Text>
            
            <BulletRow type={"•"} text={"Started with Fielder and FineCross. Fielder (Asahi) didn’t cross the lesion, then changed to MiracleBros 6 (Straight tip-Asahi) for drilling. But failed to cross with MiracleBros 6."}/>
            <BulletRow type={"•"} text={"Exchanged to Gaia 3 as the CTO was short, angulated with bifurcation disease. However, it was not successful."}/>
            <BulletRow type={"•"} text={"Confianza 12 (tapered, hydrophilic coating, high tip stiffness) was used as a planned AWE and successfully crossed the CTO."}/>
            
           
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"AWE (Fielder > MiracleBros 6)"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase04-02.mp4")}
            
            
            
            
            
            
            
            
            
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"Wiring Steps of D1"}
            </Text>
            
            <BulletRow type={"•"} text={"It was challenging to wire into D1 – branching vessel (Lower branch of D1)."}/>
            <BulletRow type={"•"} text={"Superior branch of D1 was successfully wired with Fielder wire."}/>
            <BulletRow type={"•"} text={"Initial plan was to wire the lower branch of D1 with Runthrough and escalate to MiracleBros 3/6 with FineCross or Gaia series as needed."}/>
            <BulletRow type={"•"} text={"Finally, the lower branch of D1 was successfully negotiated with Runthrough."}/>

          
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"Wiring Technique (AWE, SB wiring)"}</Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase04-03.mp4")}

            <BulletRow type={"•"} text={"Mini Crush technique with 2 DES was placed in LAD and D1 with an excellent result.\n"}/>

            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase04-04.mp4")}


          <Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/november-2017-ccc-live-case')} >
                {"The case can be reviewed at https://ccclivecases.org/november-2017-ccc-live-case"}
            </Text>

		  
			
			



            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"Learning Points"}
            </Text>
            
            <BulletRow type={"•"} text={"The operator should have a blueprint of AWE, although the choice of wires can be different among CTO operators."}/>
            <BulletRow type={"•"} text={"The operator had used AWE by using Fielder and FineCross > MiracleBros 6 > Gaia 3 > Confianza 12. Confianza 12 was finally crossed LAD-CTO segment in this case."}/>
            <BulletRow type={"•"} text={"In this challenging anatomy like angulated side branch, the wire should possess hydrophobic coated with excellent torqueability and sometimes, may require specialty CTO wires."}/>
            <BulletRow type={"•"} text={"First, we tried with Fielder (hydrophilic and polymer jacketed) but not able to navigate into the lower branch of LAD-D1."}/>
            <BulletRow type={"•"} text={"In this case, Runthrough (hydrophilic wire with distal 2mm hydrophobic silicone coating) was successfully negotiated into the lower branch of D1."}/>
            <BulletRow type={"•"} text={"We planned to use MiracleBros or Gaia series with FineCross microcatheter if Runthrough failed to cross the lesion."}/>

        
        </View>
    );
}
