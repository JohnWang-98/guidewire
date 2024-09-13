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
            {props: {source: require("../../../../assets/cases_detail_images/gwcase03-01.jpg")}},
			{props: {source: require("../../../../assets/cases_detail_images/gwcase03-02.jpg")}},
			{props: {source: require("../../../../assets/cases_detail_images/gwcase03-03.jpg")}},
			{props: {source: require("../../../../assets/cases_detail_images/gwcase03-04.jpg")}},
			{props: {source: require("../../../../assets/cases_detail_images/gwcase03-05.jpg")}}
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
            <BulletRow type={"•"} text={"A 76-year-old woman presented with angina like chest pain and dyspnea on exertion."}/>
            <BulletRow type={"•"} text={"Stress MPI showed lateral ischemia."}/>
            <BulletRow type={"•"} text={"Medical history : HTN, HLD, Gout"}/>
            <BulletRow type={"•"} text={"Medications: Aspirin, Amlodipine, Metoprolol XL, Losartan, Atorvastatin, Allopurinol"}/>

  
			
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase03-01.mp4")}
       


            <BulletRow type={"•"} text={"Coronary angiogram revealed left main disease and long calcified, aneurysmal lesion in LAD."}/>
            <BulletRow type={"•"} text={"Planned to undergo imaging guided complex LAD PCI."}/>

	

            <Text style={[basics.h2, {paddingHorizontal: 0, marginTop: 10}]}>{"Case Planning"}</Text>
                {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase03-02.mp4")}
            <Text style={[basics.h2, {paddingHorizontal: 0, marginTop: 10}]}>{"OCT of LM"}</Text>
                {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase03-03.mp4")}

            <TouchableOpacity onPress={event => {
                setIndex(0);
                setModalVisible(true);
            }}>
			<Image
                source={require("../../../../assets/cases_detail_images/gwcase03-01.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(34),
                    marginTop: 20, alignSelf: "center"}}
            />
			</TouchableOpacity>
            <Text style={[basics.h2, {paddingHorizontal: 0, marginTop: 10, textAlign: "center"}]}>{"LM (MLA) = 4.46 mm\u00B2 (no calcium)"}</Text>
            {/*<View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: "center"}}>*/}
            {/*    /!*View to wrap multiple text*!/*/}
            {/*    <Text style={[basics.h2, {fontSize: 18, lineHeight: 30}]}>*/}
            {/*        LM (MLA) = 4.46 mm*/}
            {/*    </Text>*/}
            {/*    /!*Superscript*!/*/}
            {/*    <Text style={[basics.h2, {fontSize: 12, lineHeight: 18}]}>*/}
            {/*        2*/}
            {/*    </Text>*/}
            {/*    <Text style={[basics.h2, {fontSize: 18, lineHeight: 30}]}>*/}
            {/*        {' '}*/}
            {/*        (no calcium)*/}
            {/*    </Text>*/}
            {/*</View>*/}


            <Text style={[basics.h2, {paddingHorizontal: 0, marginTop: 10}]}>{"OCT of LAD"}</Text>
                {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase03-03.mp4")}

            <TouchableOpacity onPress={event => {
                setIndex(1);
                setModalVisible(true);
            }}>
                <Image source={require("../../../../assets/cases_detail_images/gwcase03-02.jpg")}
                       resizeMode={"contain"}
                       style={{
                           width: getWidth(90),
                           height: getHeight(40),
                           marginTop: 20, alignSelf: "center"}}
                />
            </TouchableOpacity>
            <Text style={[basics.h2, {paddingHorizontal: 0, marginTop: 10, textAlign: "center"}]}>{"LAD (MLA) = 1.47 mm\u00B2 (4 quadrant calcium)"}</Text>

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"PCI Strategy"}
            </Text>
            <BulletRow type={"•"} text={"7F guide catheter"}/>
            <BulletRow type={"•"} text={"With the presence of severely calcified disease, planned to use atherectomy for lesion preparation."}/>
            <BulletRow type={"•"} text={"Initial wire choice: Runthrough and FineCross microcatheter"}/>
            <BulletRow type={"•"} text={"Imaging guided PCI, 2 stents vs provisional strategy"}/>
            <BulletRow type={"•"} text={"If provisional strategy used, planned to use a jailed side branch wire (i.e. Fielder wire)" + "\u00B9"}/>

            <View  style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 10}}>
                <Text style={[basics.h2, {fontSize: 8}]}>
                    1.
                </Text>
                <Text style={constants.smallText}>
                    {" Pan M et al. Structural Damage of Jailed Guidewire During the Treatment of Coronary Bifurcation Lesions: A Microscopic Randomized Trial. JACC Cardiovasc  Interv. 2016;9(18):1917-1924.doi:10.1016/j.jcin.2016.06.030\n"}
                </Text>
            </View>

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"STEPS"}
            </Text>
            <BulletRow type={"•"} text={"The initial choice of wire was Runthrough (180 cm) with FineCross microcatheter. Then, Rota Floppy wire will be exchanged via FineCross, followed by rotational atherectomy (1.75 Burr) of LAD."}/>
            <BulletRow type={"•"} text={"Fielder wire was placed in LCx along with Runthrough wire in LAD."}/>
            <BulletRow type={"•"} text={"One DES(Xience 3.2/38) was placed in mid LAD."}/>
            <BulletRow type={"•"} text={"Another DES (Xience 3.5/23) was placed from LM to LAD while jailing Fielder wire (Polymer jacketed wire) in LCx."}/>
           



            <Text style={[basics.h2, {paddingHorizontal: 0, marginTop: 10}]}>{"Runthrough and FineCross > ROTA Floppy Wire"}</Text>
                {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase03-04.mp4")}
            <Text style={[basics.h2, {paddingHorizontal: 0, marginTop: 10}]}>{"Bifurcation (2 wires)"}</Text>
                {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase03-05.mp4")}
            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>{"After DES placement in LM to LAD, the ostium of LCx was jailed."}</Text>
        <TouchableOpacity onPress={event => {
                setIndex(2);
                setModalVisible(true);
            }}>
			<Image
                source={require("../../../../assets/cases_detail_images/gwcase03-03.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(40),
                    marginVertical: 20, alignSelf: "center"}}
            />
		</TouchableOpacity>

            <BulletRow type={"•"} text={"A kissing balloon inflation was performed in LAD (3.0 compliance balloon) and LCx (3.0 compliance balloon)."}/>

            <TouchableOpacity onPress={event => {
                setIndex(3);
                setModalVisible(true);
            }}>
			<Image
                source={require("../../../../assets/cases_detail_images/gwcase03-04.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(40),
                    marginVertical: 20, alignSelf: "center"}}
            />
		</TouchableOpacity>

            <BulletRow type={"•"} text={"Post OCT showed stent malapposition at the aneurysm area and further optimization was done with NC balloon 4.0/8mm."}/>

            <TouchableOpacity onPress={event => {
                setIndex(4);
                setModalVisible(true);
            }}>
			<Image
                source={require("../../../../assets/cases_detail_images/gwcase03-05.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(40),
                    marginVertical: 20, alignSelf: "center"}}
            />
		</TouchableOpacity>

            <Text style={[constants.smallLinkText, {paddingHorizontal: 10, marginTop: 10}]} onPress={event => Linking.openURL('https://ccclivecases.org/oct-guided-complex-intervention-of-lm-and-long-calcified-aneurysmal-lad-january-21st-2020')} >
                {"The case can be reviewed at https://ccclivecases.org/oct-guided-complex-intervention-of-lm-and-long-calcified-aneurysmal-lad-january-21st-2020"}
            </Text>		
				
			
            <Text style={[basics.h2, {paddingHorizontal: 0, marginTop: 10}]}>{"Final Angiogram"}</Text>
                {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase03-06.mp4")}




            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
            {"Learning Points"}
            </Text>
            <BulletRow type={"•"} text={"In a long calcified lesion, exchanging Rotawire via FineCross is a better option than direct wiring with Rotawire."}/>
            <BulletRow type={"•"} text={"In Bifurcation PCI, polymer-coated wires (Fielder, Whisper MS) should be placed in jailed side branch (bifurcation stenting) as this could alleviate wire damage." + "\u00B9"}/>
            <BulletRow type={"•"} text={"Imaging guided PCI is recommended in LM/LAD disease to delineate whether two stents or provisional strategy."}/>
            <BulletRow type={"•"} text={"To navigate through an aneurysm, the wire should have hydrophobic coated (better tactile feedback), a stiffer tip, and excellent torqueability. Runthrough was able to negotiate the lesion in this case. Other wires choice should be Gaia series and MiracleBros along with a microcatheter."}/>

            <View  style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 10}}>
                <Text style={[basics.h2, {fontSize: 8}]}>
                    {"1."}
                </Text>
                <Text style={constants.smallText}>
                    {"Pan M, Ojeda S, Villanueva E, et al. Structural Damage of Jailed Guidewire During the Treatment of Coronary Bifurcation Lesions: A Microscopic Randomized Trial. JACC Cardiovasc Interv."}
                </Text>
            </View>
			
        </View>
    );
}

