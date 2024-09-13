import React, {useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from "react-native";
import basics from "../../../styles/basics";
import {introduction} from "../basics_data";
import constants from "../../../styles/constants";
import {getHeight, getWidth} from "../../../utils/cssfragments";
import ImageViewer from "react-native-image-zoom-viewer";
import {darkPurple, white} from "../../../consts/Colors";
import {FontAwesome} from "@expo/vector-icons";
import {antogradeRoutes, retrogradeRoutes} from "../../home/homedata/cto-data/cto_routes_data";
import workHorse from "../../../styles/workHorse";
import TextRow from "../../../components/common/TextRow";

export default function () {
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0);

    function renderImageModal() {
        console.log(index);
       const images = [
           {props: {source: require('../../../../assets/basics_images/image1.jpg')},},
           {props: {source: require('../../../../assets/basics_images/image18a.jpg')},},
           {props: {source: require('../../../../assets/basics_images/stainless-steel-nitinol-2.jpg')},},
           {props: {source: require('../../../../assets/basics_images/core-diameter-3.jpg')},},
           {props: {source: require('../../../../assets/basics_images/core-taper-4.jpg')},},
           {props: {source: require('../../../../assets/basics_images/core-to-tip-5.jpg')},},
           {props: {source: require('../../../../assets/basics_images/shapping-ribbon-6.jpg')},},
           {props: {source: require('../../../../assets/basics_images/composite-core-7.jpg')},},
           {props: {source: require('../../../../assets/basics_images/inner-coil-8.jpg')},},
           {props: {source: require('../../../../assets/basics_images/body-9.jpg')},},
           {props: {source: require('../../../../assets/basics_images/image15.jpg')},},
           {props: {source: require('../../../../assets/basics_images/xtand-coil-10.jpg')},},
           {props: {source: require('../../../../assets/basics_images/types-of-coils-11.jpg')},},
           {props: {source: require('../../../../assets/basics_images/image18a.jpg')},},
           {props: {source: require('../../../../assets/basics_images/image19.jpg')},},
           {props: {source: require('../../../../assets/basics_images/full-polymer-tip-13.jpg')},},
           {props: {source: require('../../../../assets/basics_images/spring-coil-tip-14.jpg')},},
           {props: {source: require('../../../../assets/basics_images/micro-cut-nitinol-sleeve-15.jpg')},},
           {props: {source: require('../../../../assets/basics_images/full-polymer-tip-13.jpg')},},
           {props: {source: require('../../../../assets/basics_images/hydrophilic-coating-16.jpg')},},
           // 20
           {props: {source: require('../../../../assets/basics_images/image19.jpg')},},
           {props: {source: require('../../../../assets/basics_images/image4.jpg')},},
           {props: {source: require('../../../../assets/basics_images/image6.jpg')},},
           {props: {source: require('../../../../assets/basics_images/image8.jpg')},},
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

    function bulletRow(type, text) {
        return (
            <View style={[constants.row, constants.justifyText]}>
                <Text style={[basics.p, {paddingRight: 5}]}>{type}</Text>
                {text}
            </View>
        );
    }

    return (
        <View style={{paddingHorizontal: 5, paddingVertical: 20}}>
            {renderImageModal()}

            <Text>
                <Text style={basics.p}>
                    {"The first step to understanding how to use a guidewire is to know the engineering aspects of wire technology, core material, and how different components change the wire's characteristics. Guidewires are comprised of mainly four features :"}
                </Text>
                <Text style={basics.h2}>{" core, tip, body, and coating"}</Text>
                <Text style={basics.p}>{". The small variations in these components have drastic impacts on guidewire characteristics and their intended application. The areas that differentiate over a hundred guidewire are mainly due to various compositions at the wire's distal end.\n"}</Text>
            </Text>
            <Text style={basics.h2}>Guidewire Components</Text>
                {/*<Text style={constants.separateTop}/>*/}
            <TouchableOpacity onPress={event => {
                setIndex(0);
                setModalVisible(true);
            }}>
                    <Image source={require('../../../../assets/basics_images/image1.jpg')}
                           resizeMode={"contain"}
                           style={{width: getWidth(90), height: getHeight(20), alignSelf: "center"}}
                    />
            </TouchableOpacity>
			<Text style={[basics.p, {textAlign: "center"}]}>{"PTFE = polytetrafluoroethylene"}</Text>

            <Text style={{marginTop: 20}}>
                <Text style={basics.h2}>
                    {"I.\tCore: "}
                </Text>
                <Text style={basics.p}>
                    {"It is the stiffest and innermost part of the wire. It provides stability and steerability and extends through the wire’s shaft from the proximal to the distal portion where it tapers."}
                </Text>
            </Text>

            {
                bulletRow("•", textRow("Core Material:  ", "The core is usually made of stainless steel, which provides excellent support with excellent torque transmission but is less flexible and not kink resistant. On the other hand, nitinol core, a super-elastic alloy of nickel and titanium, has more flexibility, excellent resiliency, and kink resistance. Newer wires (hybrid type) are made of stainless steel and nitinol distal tip for better torque transmission and excellent flexibility with kink resistance. (i.e., Runthrough, Minamo, Maestro, Specter)."))
            }
                <TouchableOpacity onPress={event => {
                setIndex(1);
                setModalVisible(true);
            }}>
                <Image source={require('../../../../assets/basics_images/image18a.jpg')}
                   resizeMode={"contain"}
                   style={{width: getWidth(85), alignSelf: "center"}}/>
                </TouchableOpacity>
				<Text style={basics.p}>{"Stainless Steel"}</Text>

            <TouchableOpacity onPress={event => {
                setIndex(20)
                setModalVisible(true)
            }}>
                <Image source={require('../../../../assets/basics_images/image19.jpg')}
                   resizeMode={"contain"}
                   style={{width: getWidth(85), alignSelf: "center"}}/>
            </TouchableOpacity>
							<Text style={basics.p}>{"Nitinol"}</Text>
            <TouchableOpacity onPress={event => {
                setIndex(21);
                setModalVisible(true)
            }}>
                <Image source={require('../../../../assets/basics_images/image4.jpg')}
                       resizeMode={"contain"}
                       style={{width: getWidth(85), alignSelf: "center"}}/>
            </TouchableOpacity>
			<Text style={basics.p}>{"High Tensile Strength Stainless Steel"}</Text>

            <TouchableOpacity onPress={event => {
                setIndex(2);
                setModalVisible(true);
            }}>
            <Image source={require('../../../../assets/basics_images/stainless-steel-nitinol-2.jpg')}
                   resizeMode={"contain"}
                   style={{width: getWidth(85), height: getHeight(30), alignSelf: "center"}}
            /></TouchableOpacity>

            <View style={[constants.row, constants.justifyText]}>
                <Text style={{paddingRight: 5, paddingTop: 2}}>{"•"}</Text>
                <TextRow name={"Core Diameter: "} detail={"It is the part of the wire that tapers to the tip, not the wire’s overall size, and determines the flexibility (smaller diameter) and support (larger diameters)."}/>
            </View>

            <TouchableOpacity onPress={event => {
                setIndex(22);
                setModalVisible(true);
            }}>
                <Image source={require('../../../../assets/basics_images/image6.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center"}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={event => {
                setIndex(3);
                setModalVisible(true);
            }}>
                <Image source={require('../../../../assets/basics_images/core-diameter-3.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center"}}/>
            </TouchableOpacity>

            <View style={[constants.row, constants.justifyText]}>
                <Text style={{paddingRight: 5, paddingTop: 2}}>{"•"}</Text>
                {textRow("Core Taper: ", "This is the part of the wire that extends from the core to the tip. The ability to transmit torque depends on the taper’s length; shorter tapers tend to prolapse but provide more support, while longer tapers offer less support but track successfully.")}
            </View>

            <TouchableOpacity onPress={event => {
                setIndex(23);
                setModalVisible(true);
            }}>
                <Image source={require('../../../../assets/basics_images/image8.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center"}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={event => {
                setIndex(4);
                setModalVisible(true);
            }}>
            <Image source={require('../../../../assets/basics_images/core-taper-4.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center"}}/>
            </TouchableOpacity>

            {textRow("II.\tTip: ", "It is the distal tip of the wire. Various tip designs could affect the steerability of the wire.")}

            <View style={[constants.row, constants.justifyText]}>
                <Text style={{paddingRight: 5, paddingTop: 2}}>{"•"}</Text>
                {textRow("Core to Tip: ", "Core extends to the tip of the wire. This design provides precise tip control and increases the wire’s diameter, enhancing the wire’s stiffness to help cross-resistant lesions.")}
            </View>

            <TouchableOpacity onPress={event => {
                setIndex(5);
                setModalVisible(true);
            }}>
            <Image source={require('../../../../assets/basics_images/core-to-tip-5.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center"}}/>
            </TouchableOpacity>

            <View style={[constants.row, constants.justifyText]}>
                <Text style={{paddingRight: 5, paddingTop: 2}}>{"•"}</Text>
                {textRow("Shaping Ribbon: ", "Core does not reach the distal tip of the wire but is wrapped in a ribbon of flexible metal to make the tip more flexible, atraumatic, and allows shape retention.")}
            </View>

            <TouchableOpacity onPress={event => {
                setIndex(6);
                setModalVisible(true);
            }}>
            <Image source={require('../../../../assets/basics_images/shapping-ribbon-6.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center"}}/>
            </TouchableOpacity>

            <View style={[constants.row, constants.justifyText]}>
                <Text style={{paddingRight: 5, paddingTop: 2}}>{"•"}</Text>
                {textRow("Composite Core (CC) or Inner Coil Technology (ICT): ", "Composite core (Dual Core and Dual coil) is made of multiple wire components to enhance durability and 1:1 torque transmission. The distal part of the composite core wire consists of core and twist wires, whereas the proximal portion of the wire is composed of rope coil, twist, and core wires.")}
            </View>

            <TouchableOpacity onPress={event => {
                setIndex(7);
                setModalVisible(true);
            }}>
            <Image source={require('../../../../assets/basics_images/composite-core-7.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center", height: getHeight(12)}}/>
            </TouchableOpacity>
            <Text style={[basics.h1, {textAlign: "center"}]}>{"Composite Core (Asahi)\n"}</Text>

            <View style={constants.justifyText}>
                <Text style={basics.p}>{"Function of Rope Coil"}</Text>
                {bulletRow("1.", <Text style={[basics.p, {flexShrink: 1}]}>{"Excellent torque transmission"}</Text>)}
                    {bulletRow("2.", <Text style={[basics.p, {flexShrink: 1}]}>{"Wire protection for durability\n"}</Text>)}
                <Text style={basics.p}>{"Function of Twist Wire"}</Text>
                    {bulletRow("1.", <Text style={[basics.p, {flexShrink: 1}]}>{"Allow smaller, more flexible core"}</Text>)}
                    {bulletRow("2.", <Text style={[basics.p, {flexShrink: 1}]}>{"Provide excellent tip durability\n"}</Text>)}
                <Text style={basics.p}>{"Inner coil technology is composed of a stainless steel inner coil affixed directly to the distal portion of the stainless steel core enhances the shape retention and durability of the distal tip, reduces whipping, and provides exceptional torquability. \n"}</Text>
            </View>

            <TouchableOpacity onPress={event => {
                setIndex(8);
                setModalVisible(true);
            }}>
            <Image source={require('../../../../assets/basics_images/inner-coil-8.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center", height: getHeight(20)}}/>
            </TouchableOpacity>
			<Text style={[basics.h1, {textAlign: "center"}]}>{"Inner Coil Technology (Boston Scientific)\n"}</Text>
            {textRow("III.\tBody (Coil, Cover, and Sleeve): ", "The body of the wire surrounding the core is usually made up of coils or polymers (plastic). Coils help maintain constant diameter, torque control, and tactile feedback. Various coil forming technologies have evolved in the contemporary era. Weaving multiple small wires into a coil is the most popular one, resulting in increased strength and a better torquability and torque response than a single coil.\n" +
                "\nXTRAND Coil technology, used in Gaia Next series, is multiple wires braided together to create a coil, and the design avoids coil stretching, and its anti-trapping feature avoids coil damage.\n")}
			<Text style={basics.h1}>{"Single coil"}</Text>
            <TouchableOpacity onPress={event => {
                setIndex(9);
                setModalVisible(true);
            }}>
                <Image source={require('../../../../assets/basics_images/body-9.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center", height: getHeight(24)}}/>
            </TouchableOpacity>
			<Text style={basics.h1}>{"XTRAND Coil"}</Text>
            <TouchableOpacity onPress={event => {
                setIndex(10);
                setModalVisible(true);
            }}>
                <Image source={require('../../../../assets/basics_images/image15.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center", height: getHeight(24)}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={event => {
                setIndex(11);
                setModalVisible(true);
            }}>
            <Image source={require('../../../../assets/basics_images/xtand-coil-10.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center"}}/>
            </TouchableOpacity>
            <Text style={basics.p}>
				{"A polymer can either cover the distal spring coils or the core itself, providing a smoother surface for tracing tortuous vessels. A wire with both a polymer jacket and hydrophilic coating has an approximately 70% reduction in wire surface resistance when compared to an exposed coil and hydrophilic coating.\n" +
                "\nHybrid wires, sometimes called sleeved wires, consists of a polymer cover on the body while leaving the distal spring coils at the tip uncovered."}
            </Text>
            <TouchableOpacity onPress={event => {
                setIndex(12);
                setModalVisible(true);
            }}>
                <Image source={require('../../../../assets/basics_images/types-of-coils-11.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center", height: getHeight(34)}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={event => {
                setIndex(13);
                setModalVisible(true);
            }}>
                <Image
                    source={require('../../../../assets/basics_images/image18a.jpg')}
                    resizeMode={"contain"}
                    style={{width: getWidth(85), alignSelf: "center"}}/>
            </TouchableOpacity>
			<Text style={basics.p}>{"Outer coil ONLY"}</Text>
            <TouchableOpacity onPress={event => {
                setIndex(14);
                setModalVisible(true);
            }}>
                <Image source={require('../../../../assets/basics_images/image19.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center"}}/>
            </TouchableOpacity>
			<Text style={basics.p}>{"Tip Coil ONLY"}</Text>

            <View style={{paddingHorizontal: 10, marginTop: 20}}>
                <Text style={basics.h1}>
                    {"Various Guidewire Construction based on different form of Coils and Covers\n"}
                </Text>
            </View>

            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("Full Spring Coil Tip: ", "Spring coil covering the distal core provides tip resiliency and tactile feedback")}
            </View>
			<View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("Polymer Jacket over the Spring Coil:\n", "A wire with a polymer jacket covering over the spring coil: spring coil promotes tip resiliency while polymer jacket enhances crossability and smooth device tracking.")}
            </View>
			<TouchableOpacity onPress={event => {
                setIndex(14);
                setModalVisible(true);
            }}>
                <Image source={require('../../../../assets/basics_images/image_2021.png')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center"}}/>
            </TouchableOpacity>
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("Full Polymer Tip: ", "Polymer jacket covering the entire distal core’s length: facilitates crossability and smooth device tracking, especially in tortuous vessels.")}
            </View>
            <TouchableOpacity onPress={event => {
                setIndex(15);
                setModalVisible(true);
            }}>
                <Image source={require('../../../../assets/basics_images/full-polymer-tip-13.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center"}}/>
            </TouchableOpacity>

            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("Spring Coil Tip with Polymer Jacket:", " Polymer jacket covers the entire wire except for the tip covered by Spring Coil, called hybrid design. The hybrid design increases tactile feedback and resiliency at the distal end while providing smooth device delivery.")}
            </View>
            <TouchableOpacity onPress={event => {
                setIndex(16);
                setModalVisible(true);
            }}>
                <Image source={require('../../../../assets/basics_images/spring-coil-tip-14.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center"}}/>
            </TouchableOpacity>

            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("Micro-Cut Nitinol Sleeve: ", "It provides efficient transmission of torque energy for more precise turn-by-turn response and control than conventional spring-coil guidewires. The nitinol distal core and hydrophilic coating are designed to enhance wire durability, tactile response, and device delivery for improved overall performance.")}
            </View>

            <TouchableOpacity onPress={event => {
                setIndex(17);
                setModalVisible(true);
            }}>
                <Image source={require('../../../../assets/basics_images/micro-cut-nitinol-sleeve-15.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center", height: getHeight(30)}}/>
            </TouchableOpacity>

            {textRow("IV. Coating: ", "The wire body is coated by an overlay, a specific material that can reduce the surface friction and improve device interaction and guidewire tracking.")}

            <View style={[constants.row, constants.justifyText]}>
                <Text style={{paddingRight: 5, paddingTop: 2}}>{"•"}</Text>
                <Text style={basics.p}>
                    {"Hydrophilic coating attracts water to create a slippery ‘gel-like’ surface when wet and non-slippery when dry. It reduces friction, increases lubricity of the wire that enhances tracking and crossing, although, on occasion, could unintentionally go into false subintimal spaces with increased risk of causing perforation."}
                </Text>
            </View>

            {/*<TouchableOpacity onPress={event => {*/}
            {/*    setIndex(18);*/}
            {/*    setModalVisible(true);*/}
            {/*}}>*/}
            {/*<Image source={require('../../../../assets/basics_images/full-polymer-tip-13.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center"}}/>*/}
            {/*</TouchableOpacity>*/}
            <View style={[constants.row, constants.justifyText]}>
                <Text style={{paddingRight: 5, paddingTop: 2}}>{"•"}</Text>
                <Text style={basics.p}>
                    {"Hydrophobic wires are usually made of silicone and repel water to create a ‘wax-like’ surface, enhancing tactile feedback but decreasing slipperiness and trackability."}
                </Text>
            </View>
            <View style={[constants.row, constants.justifyText]}>
                <Text style={{paddingRight: 5, paddingTop: 2}}>{"•"}</Text>
                <Text style={basics.p}>
                    {"Hybrid wire combines the hydrophobic tip for better tactile feedback with hydrophilic coating for smooth device delivery. In the contemporary era, the vast majority of guidewires have a hydrophilic coating. Put simply, hydrophilic wires increase lubricity, and hydrophobic wires increase tactile feedback."}
                </Text>
            </View>
            <View style={[constants.row, constants.justifyText]}>
                <Text style={{paddingRight: 5, paddingTop: 2}}>{"•"}</Text>
                <Text style={basics.p}>
                    {"There are many proprietary coatings available in the market (e.g., M-Coat, Hydro-Track, or Slip-Coat (Asahi), etc.)"}
                </Text>
            </View>
             <TouchableOpacity onPress={event => {
                setIndex(19);
                setModalVisible(true);
            }}>
            <Image source={require('../../../../assets/basics_images/hydrophilic-coating-16.jpg')} resizeMode={"contain"} style={{width: getWidth(85),alignSelf: "center",  height: getHeight(24)}}/>
            </TouchableOpacity>

            {/*Terminology of Different Wire’s Part:*/}
            <Text style={basics.h2}>
                {"Terminology of different wires’ parts:"}
            </Text>
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("Coil Length: ", "The spring coil length can vary significantly from as low as 2.2cm upwards to 30cm. Generally, shorter coils are found on devices intended for high support and longer coils on trackability and flexibility devices.")}
            </View>
            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow("Radiopaque length: ", "The distal tip, an opaque part under x-rays, is usually about 30mm in length except for specialized CTO wires. It helps to make a measurement of the diseased segment and makes it easier to locate the wire. Some specialty wires have multiple radiopaque segments, such as the Medtronic Zinger Marker and Boston Scientific Forte Support Marker for more accurate measurements.")}
            </View>
        </View>
    )
}
