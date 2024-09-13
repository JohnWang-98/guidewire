import React, {useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from "react-native";
import basics from "../../../styles/basics";
import {anteGradApproach, charAndFunctionality, ctoApproach, wireSelection} from "../basics_data";
import constants from "../../../styles/constants";
import {getHeight, getWidth} from "../../../utils/cssfragments";
import {Cell, Row, Rows, Table} from "react-native-table-component";
import ImageViewer from "react-native-image-zoom-viewer";
import {blue, darkPurple, gray, white} from "../../../consts/Colors";
import {FontAwesome} from "@expo/vector-icons";
import BulletRow from "../../../components/common/BulletRow";
import { Dimensions } from "react-native";
const win = Dimensions.get('window');

export default function () {
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0);

    function renderImageModal() {
        const images = [{
            props: {source: require('../../../../assets/basics_images/cto-chart-20.png')},
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

    function textRow(name, detail) {
        return (
            <View>
                <Text style={basics.h2}>
                    {name}
                </Text>
                <Text style={basics.p}>
                    {detail}
                </Text>
            </View>
        );
    }

    return (
        <View style={{paddingHorizontal: 5, paddingVertical: 20}}>
            {renderImageModal()}
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow(
                    " a)  Strategies of CTO-PCI (Algorithm):",
                    "There is no single guidewire that can be universally used in all CTO lesions and all possible circumstances. Familiarity with various CTO guidewires, proper selection based on angiographic features, and proper wiring techniques are necessary for CTO PCI success.",
                )}
            </View>
            <TouchableOpacity onPress={event => {
                setIndex(0);
                setModalVisible(true);
            }}>
                <Image source={require('../../../../assets/basics_images/cto-chart-20.png')}
                       resizeMode={"contain"}
                       style={{
                           width: getWidth(90),
                           height: getHeight(25),
                           marginTop: 5,
                           alignSelf: "center"
                       }}
                />
            </TouchableOpacity>


            <Text style={[basics.p, {paddingHorizontal: 10}]}>{"Antegrade dissection and reentry [2-4]; CART = controlled antegrade and retrograde subintimal tracking; RWE = retrograde wire escalation [5-7] "}</Text>
            <Text style={[basics.h1, {paddingHorizontal: 10, marginTop: 20}]}>{"Wire Selection in CTO-PCI:"}</Text>
            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Essential features to consider when selecting a guidewire include 1) tapered tip or not; 2) tip load and stiffness; 3) coated or non-coated polymer; 4) trackability."}
            </Text>

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"1.\tAntegrade Approach:"}</Text>
            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Although multiple guidewires can be used in the CTO intervention, the principle on how to choose the wire is mostly unchanged."}
            </Text>


            <BulletRow type={"•"} text={"For a focal lesion (<10–20 mm length), tapered, straight CTO without a side branch, the first choice is a soft, tapered, polymer-coated wire for initial (micro) channel tracking."}/>
            <BulletRow type={"•"} text={"However, it is essential to be aware that wire manipulation is often tricky, and linear force transmission can be attenuated."}/>
            <BulletRow type={"•"} text={"Antegrade wire escalation (AWE) is mostly recommended in the antegrade approach by penetration or drilling."}/>
            <BulletRow type={"•"} text={"When a wire passes the proximal cap of CTO, it is advisable to exchange the wire for a softer, steerable wire to minimize any inadvertent damage (expansion of subintimal space), called wire step down or escalation-de-escalation."}/>
            <BulletRow type={"•"} text={"The parallel wiring method can be used under the antegrade approach. When the first wire fails to enter the true distal lumen, the second wire (tapered and stiffer wire) is advanced, while the first one can be used as a road map, thereby avoid entering into the subintimal space created by the first wire."}/>

            <View style={{paddingHorizontal: 15, marginTop: 10}}>
                {anteGradApproach.map((value, index) => index < 5 && <View key={index}>
                        <Text style={basics.h2}>
                            {value.name}
                        </Text>
                        {value.sub && <Text style={basics.p}>{value.sub}</Text>}
                        {value.content.map((c, i) => <BulletRow type={"•"} text={c} key={i}/>)}
                    </View>
                )}
            </View>

            {/*TABLE*/}
            <View>
                {
                    ctoApproach.map((value, index) =>
                        <View key={index} style={{marginBottom: 10}}>
                            <View style={[constants.row, {marginTop: 1}]}>
                                <View style={{
                                    flex: 2,
                                    textAlign: "center",
                                    justifyContent: "center",
                                    backgroundColor: blue,
                                    paddingHorizontal: 10,
                                    height: getHeight(15),
                                    paddingVertical: 15,
                                    marginTop: 0}}>
                                    <Text style={[basics.h2, {color: white,}]} adjustsFontSizeToFit={true}>
                                        {"Appearance of CTO"}
                                    </Text>
                                </View>
                                <View style={{
                                    flex: 3,
                                    backgroundColor: gray,
                                    // color: darkPurple,
                                    height: getHeight(15),
                                    justifyContent: "center",
                                    alignContent: "center",
                                    overflow: "hidden",
                                    paddingHorizontal: 10,
                                    // paddingVertical: 15,
                                }}>
                                    <Text style={[basics.p]} adjustsFontSizeToFit={true}>
                                        {value.appearance_cto_text}
                                    </Text>
                                    <Image
                                        style={{
                                            height: getHeight(13),
                                            width: getWidth(20),
                                            alignSelf: "center"
                                        }}
                                        resizeMode={"contain"}
                                        // height={getHeight(1)}
                                        // width={getWidth(5)}
                                        source={value.appearance_cto}
                                    />
                                </View>
                            </View>
                            <View style={[constants.row, {marginTop: 1}]}>
                                <Text style={[basics.h2, {
                                    flex: 2,
                                    backgroundColor: blue,
                                    color: white,
                                    paddingHorizontal: 10,
                                    paddingVertical: 15,
                                    marginTop: 0}]}  adjustsFontSizeToFit={true}>
                                    {"First Choice"}
                                </Text>
                                <Text
                                    style={[basics.p, {
                                        flex: 3,
                                        backgroundColor: gray,
                                        color: darkPurple,
                                        paddingHorizontal: 10,
                                        paddingVertical: 15,
                                    }]}>
                                    {value.first_choice}
                                </Text>
                            </View>
                            <View style={[constants.row, {marginTop: 1}]}>
                                <Text style={[basics.h2, {
                                    flex: 2,
                                    backgroundColor: blue,
                                    color: white,
                                    paddingHorizontal: 10,
                                    paddingVertical: 15,
                                    marginTop: 0}]}  adjustsFontSizeToFit={true}>
                                    {"Second Choice"}
                                </Text>
                                <Text
                                    style={[basics.p, {
                                        flex: 3,
                                        backgroundColor: gray,
                                        color: darkPurple,
                                        paddingHorizontal: 10,
                                        paddingVertical: 15,
                                    }]}>
                                    {value.second_choice}
                                </Text>
                            </View>
                            <View style={[constants.row, {marginTop: 1}]}>
                                <Text adjustsFontSizeToFit={true} style={[basics.h2, {
                                    flex: 2,
                                    backgroundColor: blue,
                                    color: white,
                                    paddingHorizontal: 10,
                                    paddingVertical: 15,
                                    marginTop: 0}]} >
                                    {"Third Choice"}
                                </Text>
                                <Text
                                    style={[basics.p, {
                                        flex: 3,
                                        backgroundColor: gray,
                                        color: darkPurple,
                                        paddingHorizontal: 10,
                                        paddingVertical: 15,
                                    }]}>
                                    {value.third_choice}
                                </Text>
                            </View>
                        </View>
                    )
                }
            </View>
            <Text style={basics.p}>
                {"Choice of CTO wires based on angiographic features [8] "}
            </Text>

            <View style={{paddingHorizontal: 15, marginTop: 10}}>
                {anteGradApproach.map((value, index) => index > 4 && <View key={index}>
                        <Text style={basics.h2}>
                            {value.name}
                        </Text>
                        {value.sub && <Text style={basics.p}>{value.sub}</Text>}
                        {value.content.map((c, i) => <BulletRow type={"•"} text={c} key={i}/>)}
                    </View>
                )}
            </View>


            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"2.\tRetrograde Approach:"}</Text>
            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>
                {"The operator’s ability to manipulate the wire is even more crucial in the retrograde or antegrade-retrograde CTO approach. Steering the guidewire through collateral channels to reach the CTO’s distal end and re-entering the other side of the true lumen is challenging for the operator. This category’s primary requirement is that the wire should be longer, with the lowest tip load and very low friction, hydrophilic/polymer jacket coating."}
            </Text>
            <BulletRow type={"•"} text={"For collateral crossings, the wire choice should be tapered tip polymer-coated wire (Fielder XT, Fielder XT-R) or non-tapered polymer-coated one (Sion Black, Fielder FC) or stainless steel composite core with shaping wire to tip (SUOH 03)."} lineHeight={0}/>
            <BulletRow type={"•"} text={"CTO crossing can be done by many different strategies [direct retrograde crossing, controlled antegrade and retrograde subintimal tracking (CART), and reverse CART]."} lineHeight={0}/>
            <BulletRow type={"•"} text={"The most frequently used retrograde wires are Gaia/Gaia Next series with microcatheter and MiracleBros 3."} lineHeight={0}/>
            <BulletRow type={"•"} text={"Confianza Pro 9 and Confianza Pro 12 are useful to cross a hard segment, while others could use Fielder XT and Fighter as a retrograde ‘knuckle’ wiring to facilitate subintimal passage in a prolonged, calcified occlusion."} lineHeight={0}/>

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>{"The following are the most used wires for a specific purpose:"}</Text>
            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wires for collateral channels/Septal branches:"}
            </Text>
            <BulletRow type={"•"} text={"Fielder, Fielder FC, Fielder XT-R (Asahi Intecc)"}/>
            <BulletRow type={"•"} text={"Sion Black (Asahi Intecc)"}/>
            <BulletRow type={"•"} text={"Suoh 03 (Asahi Intecc)"}/>
            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wires for penetration:"}
            </Text>
            <BulletRow type={"•"} text={"Gaia/Gaia Next (Asahi Intecc)/MiracleBros (Asahi Intecc)"}/>
            <BulletRow type={"•"} text={"Confianza Pro (Asahi Intecc)"}/>

            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 10}]}>
                {"Wires for externalization:"}
            </Text>
            <BulletRow type={"•"} text={"RG3 (Asahi Intecc)"} lineHeight={0}/>
            <BulletRow type={"•"} text={"R350 (Teleflex)"}  lineHeight={0}/>
            <BulletRow type={"•"} text={"ViperWire Advance or Rotawire [11]"}/>
        </View>
    );
}

