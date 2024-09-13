import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import basics from "../../../styles/basics";
import {atherectomy, typesMicroCatheter} from "../basics_data";
import constants from "../../../styles/constants";
import {getHeight, getWidth} from "../../../utils/cssfragments";
import {Cell, Row, Rows, Table} from "react-native-table-component";
import BulletRow from "../../../components/common/BulletRow";

export default function () {

    return (
        <View style={{paddingHorizontal: 5, paddingVertical: 20}}>
            <View>
                {/*<Text style={[basics.h1, {fontSize: 22}]}>*/}
                {/*    {"Microcatheter"}*/}
                {/*</Text>*/}
                <Text style={basics.p}>
                    {"Microcatheter and over-the-wire balloons are low profile and trackable systems with end-holes. It provides good wire support and allows precise wire control by preventing flexion, kinking, and prolapse of the guidewire, especially in complex coronary intervention. It is useful in navigating tortuous or angulated lesion, CTO lesion, complex bifurcation with or without acute angle side branch, and re crossing a jailed side branch. Hence, microcatheter and guidewire are used as a single unit (e.g., Fielder + FineCross) to navigate challenging anatomy in complex coronary intervention."}
                </Text>
            </View>

            <Text style={basics.h2}>{"\nTypes of microcatheters"}</Text>
            {
                typesMicroCatheter.map((value, index) =>
                    <View key={index}>
                        <Text style={[basics.h2, {marginTop: 10}]}>{value.name}</Text>
                        {
                            index === 0 &&
                            <Text style={[basics.p, {paddingHorizontal: 10, marginTop: 4}]}>
                                {"a.\tStandard (Corsair Pro, Tornus, Turnpike, Turnpike Spiral, Nhancer Pro X, Mizuki, Mamba, Teleport control, M-Cath)\n" +
                                "b.\tSmall (Caravel, Turnpike LP, FineCross, MicroCross 14, Mamba Flex, Teleport, Corsair XS"}
                            </Text>
                        }
                        {value.detail.map(c => <BulletRow type={"•"} text={c} key={c}/>)}
                        {/*<Text style={[basics.p, {paddingHorizontal: 10, marginTop: 4}]}>{value.detaill}</Text>*/}
                    </View>
                )
            }
        </View>
    );
}
