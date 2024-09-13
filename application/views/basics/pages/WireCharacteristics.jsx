import React, {useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from "react-native";
import basics from "../../../styles/basics";
import {charAndFunctionality, introduction} from "../basics_data";
import constants from "../../../styles/constants";
import {getHeight, getWidth} from "../../../utils/cssfragments";
import {Cell, Row, Rows, Table} from "react-native-table-component";
import {blue, darkPurple, gray, white} from "../../../consts/Colors";
import ImageViewer from "react-native-image-zoom-viewer";
import {FontAwesome} from "@expo/vector-icons";

export default function () {
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0);

    function renderImageModal() {
        console.log(index);
        const images = [
            {props: {source: require('../../../../assets/basics_images/image25.jpg')},},
            {props: {source: require('../../../../assets/basics_images/tracking-and-diliverabilit-y17.jpg')},},
            {props: {source: require('../../../../assets/basics_images/tip-load-18.jpg')},},
            {props: {source: require('../../../../assets/basics_images/image-28.jpg')},},
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


    function textRow(name, detail) {
        return (
            <Text>
                <Text style={basics.h2}>
                    {name}
                </Text>
                <Text style={basics.p}>
                    {detail}
                </Text>
            </Text>
        );
    }

    return (
        <View style={{paddingHorizontal: 5, paddingVertical: 20}}>
            {renderImageModal()}
            <View>
            {/*    <Text style={[basics.h2, {fontSize: 22}]}>*/}
            {/*        {"Wire characteristics:"}*/}
            {/*    </Text>*/}
                <Text style={basics.p}>
                    {"Small changes in wire design can have a large impact on the overall clinical performance. Thus, appropriate wire selection heavily depends on the understanding of the various wire properties. The following terminologies are often used to describe various guidewire characteristics."}
                </Text>
            </View>

            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("I.\tTorquability: ", "It is an ability to transmit rotating elements applied on the proximal end of the wire (outside of the guiding catheter) to the tip of the wire. It is the crucial determinant of the operator’s ability to steer the wire through the vessel precisely. An ideal wire should provide a 1:1 torque, which can be affected by core composition, tip stiffness, and surface coating.")}
            </View>


            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("II.\tFlexibility: ", "Ability of the wire to flex on its longitudinal axis while maintaining its trackability and torquability. It is the critical determinant of the tip strength. Flexible wires are soft and generally atraumatic. A wire’s flexibility can be labeled extra floppy/light, floppy/soft, and stiff.")}
            </View>
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("III.\tShapeability: ", "The ability to modify the guidewire’s distal tip before the procedure to access difficult anatomies or perform intentional drilling through a CTO.")}
            </View>
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("IV.\tShape Retention: ", "A wire’s ability to retain an intended shape after being exposed to deformation and stress. Different strategies improve shape retention, including Asahi’s composite core, which uses an additional coil and wire inside.")}
            </View>
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("V.\tNitinol wires ", "such as Terumo’s Runthrough, as an inherent characteristic of the metal, have better shape retention than stainless steel.")}
            </View>
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("VI.\tTactile Feedback: ", "Any physical sensation felt through the wire’s proximal end during wire advancement inside the coronary artery. Hydrophobic coatings offer the best feedback, but such wires advance with more difficulty than slippery hydrophilic wires. An additional polymer sleeve could further reduce feedback.")}
            </View>
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("VII.\tTrackability or deliverability or crossing: ", " It is an ability to follow the tip and advance smoothly along the vessel through stenosis or occlusion. Trackability is improved by nitinol core material and longer taper length, hydrophilic coatings, and polymer sleeves. Below, an Asahi Sion Black and conventional guidewire are advanced into an artificial vessel. Additionally, a comparison of guidewire surface roughness in a jacketed wire vs. spring coil wire is illustrated.")}
            </View>
            <TouchableOpacity onPress={event => {
                setIndex(0);
                setModalVisible(true);
            }}>
            <Image source={require('../../../../assets/basics_images/image25.jpg')}
                   resizeMode={"contain"}
                   style={{width: getWidth(85), alignSelf: "center"}}
            />
            </TouchableOpacity>
            <TouchableOpacity onPress={event => {
                setIndex(1);
                setModalVisible(true);
            }}>
            <Image source={require('../../../../assets/basics_images/tracking-and-diliverabilit-y17.jpg')}
                   resizeMode={"contain"}
                   style={{width: getWidth(85), height: getHeight(20), alignSelf: "center"}}
            />
            </TouchableOpacity>

            <View style={{paddingHorizontal: 10, marginTop: 15, marginBottom: 20}}>
                {textRow("VIII.\tTip Load: ", "Tip load can be determined by advancing the wire into a standard surface until it deflects the tip, at 2mm from the tip. A high tip load can help when crossing a resistant or highly stenotic lesion, while a low tip load makes the tip very soft and atraumatic. Tip load is predominantly determined by core material and thickness, with stainless steel core-to-tip style used for the highest tip loads.")}
            </View>
            <TouchableOpacity onPress={event => {
                setIndex(2);
                setModalVisible(true);
            }}>
            <Image source={require('../../../../assets/basics_images/tip-load-18.jpg')}
                   resizeMode={"contain"}
                   style={{width: getWidth(90), height: getHeight(15), alignSelf: "center"}}
            />
            </TouchableOpacity>
            <Text style={[basics.p, {paddingHorizontal: 10, fontSize: 14}]}>{"*There are various ways to measure the tip load depending on the manufacturer. The method shown here is used by Abbott."}</Text>

            <View style={{paddingHorizontal: 10, marginTop: 15}}>
                {textRow("IX.\tSupport: ", "It is a measure of a guidewire's resistance to a bending force. A more supportive wire can aid in device delivery and vessel straightening, while a less supportive one could assist in accessing tortuous anatomy. Support and propensity for wire prolapse are directly related.")}
            </View>

            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("X.\tWhip: ", "A smooth torque input from the operator results in a sudden jerk at the wire’s distal end. This effect can be minimized through hydrophilic coatings and polymer covers/sleeves. In the chart below, the dotted line shows a whip response plotted. The y = x line demonstrates an ideal guidewire with a 1:1 torque response contrasted with the erratic whip visualized by the dotted line.")}
            </View>

            <TouchableOpacity onPress={event => {
                setIndex(3);
                setModalVisible(true);
            }}>
            <Image source={require('../../../../assets/basics_images/image-28.jpg')}
                   resizeMode={"stretch"}
                   style={{width: getWidth(90), height: getHeight(30)}}
            />
                <Text style={[basics.h2, {textAlign: "center"}]}>{"Input rotation at proximal end"}</Text>
            </TouchableOpacity>
            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 20}]}>{"Characteristics and Functionality of the Guidewires"}</Text>

            <View>
                {
                    charAndFunctionality.map((value, index) =>
                        <View key={index} style={{marginBottom: 10}}>
                            <View style={[constants.row, {marginTop: 1}]}>
                                <Text style={[basics.h2, {
                                    flex: 2,
                                    backgroundColor: blue,
                                    color: white,
                                    paddingHorizontal: 10,
                                    paddingVertical: 10,
                                    marginTop: 0}]}>
                                    {"Components"}
                                </Text>
                                <Text
                                    style={[basics.p, {
                                        flex: 3,
                                        backgroundColor: gray,
                                        color: darkPurple,
                                        paddingHorizontal: 10,
                                        paddingVertical: 15,
                                    }]}>
                                    {value.components}
                                </Text>
                            </View>
                            <View style={[constants.row, {marginTop: 1}]}>
                                <Text style={[basics.h2, {
                                    flex: 2,
                                    backgroundColor: blue,
                                    color: white,
                                    paddingHorizontal: 10,
                                    paddingVertical: 15,
                                    marginTop: 0}]}>
                                    {"Functions"}
                                </Text>
                                <Text
                                    style={[basics.p, {
                                        flex: 3,
                                        backgroundColor: gray,
                                        color: darkPurple,
                                        paddingHorizontal: 10,
                                        paddingVertical: 15,
                                    }]}>
                                    {value.functions}
                                </Text>
                            </View>
                        </View>
                        )
                }
            </View>

            {/*<Table  borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>*/}
            {/*    <Row data={["Components", "Functions"]}  flexArr={[2, 3]} textStyle={[basics.h2, {paddingHorizontal: 5}]}/>*/}
            {/*    {*/}
            {/*        charAndFunctionality.map((value, index) => <Row key={index} data={[value.components, value.functions]}  flexArr={[2, 3]} textStyle={[basics.p, {paddingHorizontal: 5}]}/>)*/}
            {/*    }*/}
            {/*</Table>*/}

        </View>
    )
}
