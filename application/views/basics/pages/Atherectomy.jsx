import React, {useState} from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from "react-native";
import basics from "../../../styles/basics";
import {atherectomy, wireSelection} from "../basics_data";
import constants from "../../../styles/constants";
import {getHeight, getWidth} from "../../../utils/cssfragments";
import {Cell, Row, Rows, Table} from "react-native-table-component";
import ImageViewer from "react-native-image-zoom-viewer";
import {white} from "../../../consts/Colors";
import BulletRow from "../../../components/common/BulletRow";

export default function () {

    return (
        <View style={{paddingHorizontal: 5, paddingVertical: 20}}>
            <View>
                <Text style={[basics.h1, {fontSize: 22}]}>
                    {"Guidewires for Atherectomy devices"}
                </Text>
                <Text style={basics.p}>
                    {"There are two mechanical Atherectomy devices available in the market, rotational Atherectomy and orbital Atherectomy."}
                </Text>
            </View>
            {
                atherectomy.map((value, index) => <View key={index}>
                        <Text style={[basics.h2, {marginTop: 10}]}>
                            {value.title}
                        </Text>
                        {value.sub && <Text style={basics.p}>{value.sub}</Text>}
                        {value.content.map(c => <BulletRow type={"•"} text={c} key={c}/>)}
                    </View>
                )
                // atherectomy.map((value, index) =>
                //     <View key={index}>
                //         <Text style={[basics.h2, {marginTop: 10}]}>{value.title}</Text>
                //         <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 4}]}>{value.content}</Text>
                //     </View>
                // )
            }
        </View>
    );
}
