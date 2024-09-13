import React, {useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from "react-native";
import basics from "../../../styles/basics";
import {atherectomy, charAndFunctionality, wireSelection, wireTypes} from "../basics_data";
import constants from "../../../styles/constants";
import {getHeight, getWidth} from "../../../utils/cssfragments";
import {Cell, Row, Rows, Table} from "react-native-table-component";
import {blue, darkPurple, gray, white} from "../../../consts/Colors";
import ImageViewer from "react-native-image-zoom-viewer";
import * as ScreenOrientation from 'expo-screen-orientation';
import {FontAwesome} from "@expo/vector-icons";
import BulletRow from "../../../components/common/BulletRow";

export default function () {
    const [modalVisible, setModalVisible] = useState(false);
    const [index, setIndex] = useState(0);

    function renderImageModal() {
        console.log(index);
        const images = [
            {props: {source: require('../../../../assets/basics_images/right-coronary-artery-19.jpg')},},
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

    function tableView(name, data, keyName) {
        return(<View>
            <Text style={[basics.h2, {
                backgroundColor: blue,
                color: white,
                paddingHorizontal: 10,
                paddingVertical: 15,
                marginTop: 10}]}>
                {name}
            </Text>
            {
                data.map((value, index) => {
                        if(value[keyName] !== ""){
                            return (<Text key={index}
                                          style={[basics.p, {
                                              backgroundColor: gray,
                                              color: darkPurple,
                                              paddingHorizontal: 10,
                                              paddingVertical: 15,
                                              marginTop: 2,
                                              marginLeft: 15
                                          }]}>
                                {value[keyName]}
                            </Text>);
                        } else {
                            return null;
                        }
                    }
                )
            }
        </View>);
    }

    return (
        <View style={{paddingHorizontal: 5, paddingVertical: 20}}>
            {renderImageModal()}

            <View>
                {/*    <Text style={[basics.h2, {fontSize: 22}]}>*/}
                {/*        {"Wire characteristics:"}*/}
                {/*    </Text>*/}
                <Text style={basics.p}>{wireSelection.intro}</Text>
            </View>

            <View style={{paddingHorizontal: 10, marginTop: 10}}>
                {textRow(wireSelection.wire_tip_config.name, wireSelection.wire_tip_config.content)}
            </View>

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {wireSelection.tip_wire_specific.name}
            </Text>
            <View style={{paddingHorizontal: 15, marginTop: 10}}>
                {textRow(
                    wireSelection.tip_wire_specific.types[0].name,
                    wireSelection.tip_wire_specific.types[0].content
                )}
                {textRow(
                    wireSelection.tip_wire_specific.types[1].name,
                    wireSelection.tip_wire_specific.types[1].content
                )}
                {textRow(
                    wireSelection.tip_wire_specific.types[2].name,
                    wireSelection.tip_wire_specific.types[2].content
                )}
            </View>
            <TouchableOpacity onPress={event => {
                setIndex(0);
                setModalVisible(true);
            }}>

            <Image source={require('../../../../assets/basics_images/right-coronary-artery-19.jpg')}
                   resizeMode={"contain"}
                   style={{height: getHeight(50), marginVertical: 20,  alignSelf: "center"}}
            />
            </TouchableOpacity>

            <Text style={[basics.h2, {paddingHorizontal: 10, marginVertical: 10}]}>
                {"c)  Desirable Wire Characteristics: "}
            </Text>
            {tableView("Workhorse", wireSelection.characteristics, "workhorse")}
            {tableView("Frontline Finesse", wireSelection.characteristics, "frontline_finesse")}
            {tableView("Support", wireSelection.characteristics, "support")}
            {tableView("Specialty", wireSelection.characteristics, "specialty")}
            {/*<Table  borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>*/}
            {/*    <Row data={["Workhorse", "Frontline Finesse", "Support", "Specialty"]}*/}
            {/*         // flexArr={[2, 3]}*/}
            {/*         textStyle={[basics.h2, {paddingHorizontal: 5}]}/>*/}
            {/*    {*/}
            {/*        wireSelection.characteristics.map((value, index) =>*/}
            {/*            <Row key={index} data={[*/}
            {/*                value.workhorse, value.frontline_finesse, value.support, value.specialty*/}
            {/*            ]}*/}
            {/*                 // flexArr={[2, 3]}*/}
            {/*                 textStyle={[basics.p, {paddingHorizontal: 5}]}/>)*/}
            {/*    }*/}
            {/*</Table>*/}

            <Text style={[basics.h2, {paddingHorizontal: 10, marginTop: 10}]}>
                {wireSelection.non_cto.name}
            </Text>
            <View style={{paddingHorizontal: 15, marginTop: 10}}>
                {wireSelection.non_cto.types.map((value, index) => <View key={index}>
                        <Text style={basics.h2}>
                            {value.name}
                        </Text>
                        {value.content.map(c => <BulletRow type={"•"} text={c} key={c}/>)}
                    </View>
                )}
            </View>
        </View>
    );
}

