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
            props: {source: require("../../../../assets/cases_detail_images/gwcase24-01.jpg")}
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

    function sub(base, exponent){
        return (<View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'flex-end'}}>
                <Text style={{fontSize: 13}}>{base}</Text>
            </View>
            <View style={{alignItems: 'flex-start'}}>
                <Text style={{fontSize: 10}}>{exponent}</Text>
            </View>
        </View>);
    }

    return (
        <View style={caseStudies.itemView}>
            {renderImageModal()}
            <View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"Case Presentation"}
                </Text>
                <BulletRow type={"•"} text={"A 43-year-old man presented with angina chest pain and dyspnea on exertion."}/>
                <BulletRow type={"•"} text={"PMH: Hyperlipidemia, IDDM, h/o MI, h/o CVA without deficit, positive lupus anticoagulant, ESRD on hemodialysis"}/>
                <BulletRow type={"•"} text={"Medications: Aspirin, Metoprolol XL, Isosorbide Mononitrate, Atorvastatin, Losartan, Nifedipine, Insulin, Warfarin\n"}/>
            </View>

			{/*<Text style={constants.separateTop}/>*/}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Pre-Angiogram"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase24-01.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase24-02.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Case Discussion"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase24-03.mp4")}

            <View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"Cont's"}
                </Text>
				<BulletRow type={"•"} text={"LHC revealed severely calcified 2 V CAD: 90% mid LAD, multiple calcified 80-99% lesions in extremely tortuous RCA, and LVEF 55%."}/>
				<BulletRow type={"•"} text={"He underwent PCI of LAD with an excellent result."}/>
				<BulletRow type={"•"} text={"Since RCA is extremely tortuous and severely calcified, plan to use lesion modification probably rotational atherectomy with guide extension catheter.\n"}/>
            </View>

			<View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"PCI Strategy"}
                </Text>
				<BulletRow type={"•"} text={"7F AL 0.75 guide catheter"}/>
				<BulletRow type={"•"} text={"1.75 Rota burr for mid RCA lesion"}/>
				<BulletRow type={"•"} text={"1.25 Rota burr for distal RCA lesion through 7F guide extension catheter"}/>
				<BulletRow type={"•"} text={"RotaWire choice: RotaWire Extra Support for distal RCA lesion"}/>
				<BulletRow type={"•"} text={"Runthrough and Fielder wires"}/>
				<BulletRow type={"•"} text={"May required two stents (mRCA and dRCA)\n"}/>
            </View>

		<View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"STEPS"}
                </Text>
				<BulletRow type={"•"} text={"We used 7F AL 0.75 guide catheter via femoral approach."}/>
				<BulletRow type={"•"} text={"To perform rotational atherectomy, we used Fielder and FineCross cross microcatheter to negotiate the lesion then exchange to RotaWire Extra Support."}/>
				<BulletRow type={"•"} text={"However, there was significant wire bias once Rota burr was attempted to advance into the RCA.\n"}/>
            </View>

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wiring Technique"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase24-04.mp4")}

			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Rota Extra Support Wire Bias"}
            </Text>
            {videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase24-05.mp4")}
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase24-06.mp4")}


			<View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"Rota Extra Support Wire Bias"}
                </Text>
				<BulletRow type={"•"} text={"There is significant RotaWire bias (black arrow) which prevents from advancing the Rota burr.\n"} />
            </View>
		<TouchableOpacity onPress={event => {
                setIndex(0);
                setModalVisible(true);
            }}>
			 <Image
                source={require("../../../../assets/cases_detail_images/gwcase24-01.jpg")}
                resizeMode={"contain"}
                style={{
                    width: getWidth(90),
                    height: getHeight(40),
                    alignSelf: "center"}}
            />
		</TouchableOpacity>
			<View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 0}]}>
                    {"Selection of Rotawire Guidewires"}
                </Text>
                <Text style={[basics.p, {paddingHorizontal: 0}]}>
                    {"Rotawire Floppy Guidewire"}
                </Text>
				<BulletRow type={"•"} text={"Used in 75% of cases."}/>
				<BulletRow type={"•"} text={"First line wire due to:"}/>
                <View style={{marginLeft: 40}}>
                    <View style={[constants.row, constants.justifyText, {marginTop: 0,}]}>
                        <Text style={[basics.p, {paddingRight: 5, paddingTop: 0}]}>{"o"}</Text>
                        <Text style={basics.p}>{"Significantly reduced guidewire bias."}</Text>
                    </View>
                    <View style={[constants.row, constants.justifyText, {marginTop: 0,}]}>
                        <Text style={[basics.p, {paddingRight: 5, paddingTop: 0}]}>{"o"}</Text>
                        <Text style={basics.p}>{"Spring tip (2.2 cm).\n"}</Text>
                    </View>
                </View>

            </View>
			
			<View>
                <Text style={[basics.p, {paddingHorizontal: 0}]}>
                    {"Rotawire Extra Support Guidewire"}
                </Text>
				<BulletRow type={"•"} text={"A stiffer frontline wire for:"}/>
                <View style={{marginLeft: 40}}>
                    <View style={[constants.row, constants.justifyText, {marginTop: 0,}]}>
                        <Text style={[basics.p, {paddingRight: 5, paddingTop: 0}]}>{"o"}</Text>
                        <Text style={basics.p}>{"Distal lesions."}</Text>
                    </View>
                    <View style={[constants.row, constants.justifyText, {marginTop: 0,}]}>
                        <Text style={[basics.p, {paddingRight: 5, paddingTop: 0}]}>{"o"}</Text>
                        <Text style={basics.p}>{"Heavily calcified proximal lesion."}</Text>
                    </View>
                    <View style={[constants.row, constants.justifyText, {marginTop: 0,}]}>
                        <Text style={[basics.p, {paddingRight: 5, paddingTop: 0}]}>{"o"}</Text>
                        <Text style={basics.p}>{"Spring tip (2.8cm).\n"}</Text>
                    </View>
                </View>
            </View>


			<View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"STEPS"}
                </Text>
				<BulletRow type={"•"} text={" Then, we decided to exchange from RotaWire Extra Support (0.009 core diameter with tip diameter of 0.014”, and short core taper) to Rota Floppy wire (0.009 core diameter with tip diameter of 0.014”, and long core taper) to reduce wire bias."}/>
				<BulletRow type={"•"} text={" Rotational atherectomy with 1.75 burr was performed in midRCA without any difficulty."}/>
				<BulletRow type={"•"} text={" For distal RCA lesion, we use 7F guide extension catheter (Guidezilla) to perform rotational atherectomy using 1.25 burr\n"}/>
            </View>
			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Technique of dRCA rotational atherectomy"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase24-08.mp4")}

			<View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"STEPS"}
                </Text>
				<BulletRow type={"•"} text={" After RA of mid and distal RCA/RPL, PTCA and two DES were placed in mid RCA (Xience 4/23) and dRCA/RPL (Xience 2.5/38) with an excellent result.\n"}/>
            </View>
			<Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Final Angiogram"}
            </Text>
			{videoPlayer("https://guidewireaid.s3.us-east-2.amazonaws.com/gwcase24-09.mp4")}

			<View>
                <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                    {"Learning Points"}
                </Text>
                <BulletRow type={"•"} text={"In complex calcified tortuous lesion intervention, an excellent guide support is paramount."}/>
				<BulletRow type={"•"} text={"The operators couldn’t emphasize more about the awareness of RotaWire bias and must exchange to Rota Floppy wire if there is significant wire bias to prevent untoward complications."}/>
				<BulletRow type={"•"} text={"The main difference between RotaWire Floppy and Extra Support is length of core tapering (13cm vs 5cm)."}/>
				<BulletRow type={"•"} text={"Here, we exchanged RotaWire Extra Support to Floppy wire."}/>
				{/*<BulletRow type={"•"} text={"In a tortuous lesion and complex CTO intervention, a guide extension catheter could help to deliver various devices to the distal segment. Through 7F guide extension catheter, Rota burr ≤ 1.5 can be used[1-3]."}/>*/}
				<BulletRow type={"•"} text={"In a tortuous lesion and complex CTO intervention, a guide extension catheter could help to deliver various devices to the distal segment. Through 7F guide extension catheter, Rota burr ≤ 1.5 can be used.\u00B9 \u207B \u00B3"}/>
                <BulletRow type={"•"} text={"The operators need to be familiar with various techniques of advancing the Rota burr into the distal lesion to perform calcified complex coronary intervention."}/>
            </View>

			<View style={{paddingHorizontal: 10, marginTop: 10}}>
                <View style={[constants.row, constants.justifyText, {marginTop: 0,}]}>
                    <Text style={[constants.smallText, {paddingRight: 5, paddingTop: 0}]}>{"1."}</Text>
                    <Text style={constants.smallText}>{"Kovacic, J. C., Sharma, A. B., Roy, S., Li, J. R., Narayan, R., KIM, D. B., … & Kini, A. S. (2013). GuideLiner mother‐and‐child guide catheter extension: A simple adjunctive tool " +
                    "in PCI for balloon uncrossable chronic total occlusions. Journal of interventional cardiology, 26(4), 343-350."}</Text>
                </View>
                <View style={[constants.row, constants.justifyText, {marginTop: 0,}]}>
                    <Text style={[constants.smallText, {paddingRight: 5, paddingTop: 0}]}>{"2."}</Text>
                    <Text style={constants.smallText}>{"Senguttuvan NB, Sharma SK, Kini A. Percutaneous intervention of chronic total occlusion of anomalous right coronary artery originating from left sinus – Use of mother and child technique using guideliner. Indian Heart J. 2015 Dec;67 Suppl 3(Suppl 3):S41-2. doi: 10.1016/j.ihj.2015.10.300. Epub 2016 Jan 18. PMID: 26995429; PMCID: PMC4799001."}</Text>
                </View>
                <View style={[constants.row, constants.justifyText, {marginTop: 0,}]}>
                    <Text style={[constants.smallText, {paddingRight: 5, paddingTop: 0}]}>{"3."}</Text>
                    <Text style={constants.smallText}>{"Bharadwaj AS, Bhatheja S, Sharma SK, Kini AS. Utility of the guideliner catheter for percutaneous coronary interventions in patients with prior transcatheter aortic valve replacement. Catheter Cardiovasc Interv. 2018 Feb 1;91(2):271-276. doi: 10.1002/ccd.27211. Epub 2017 Aug 10. PMID: 28795527."}</Text>
                </View>
			</View>

        </View>
    );
}
