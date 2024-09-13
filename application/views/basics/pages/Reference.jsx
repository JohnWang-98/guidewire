import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import basics from "../../../styles/basics";
import {atherectomy} from "../basics_data";
import constants from "../../../styles/constants";
import {getHeight, getWidth} from "../../../utils/cssfragments";
import {Cell, Row, Rows, Table} from "react-native-table-component";

export default function () {
    function textRow(name, detail) {
        return (
            <View style={[constants.row, {paddingRight: 10, paddingBottom: 10}]}>
                <Text style={[basics.p, {flexWrap: 'wrap'}]} >
                    {name}
                </Text>
                <Text style={[basics.p, {flexShrink: 1}]}>
                    {detail}
                </Text>
            </View>
        );
    }

    return (
        <View style={{paddingHorizontal: 5, paddingVertical: 20}}>
            {/*<Text style={[basics.h1, {fontSize: 22}]}>*/}
            {/*    {"Guidewires for Atherectomy devices"}*/}
            {/*</Text>*/}
            {textRow("01) \t ", "Simpson JB, Baim DS, Robert EW, et al. A new catheter system for coronary angioplasty. Am J Cardiol 1982;49:1216–22.")}
            {textRow("02) \t ", "Colombo A, Mikhail GW, Michev I, et al. Treating chronic total occlusions using subintimal tracking and reentry: the STAR technique. Catheter Cardiovasc Interv 2005;64:407–11, discussion 412.")}
            {textRow("03) \t ", "Galassi AR, Tomasello SD, Costanzo L, et al. Mini-STAR as bail-out strategy for percutaneous coronary intervention of chronic total occlusion. Catheter Cardiovasc Interv 2012;79:30 – 40.")}
            {textRow("04) \t ", "Brilakis ES, Badhey N, Banerjee S. “Bilateral knuckle” technique and Stingray re-entry system for retrograde chronic total occlusion intervention. J Invasive Cardiol 2011;23:E37–9.")}
            {textRow("05) \t ", "Brilakis ES, Grantham JA, Rinfret S, et al. A percutaneous treatment algorithm for crossing coronary chronic total occlusions. J Am Coll Cardiol Intv 2012;5:367–79.")}
            {textRow("06) \t ", "Harding SA, Wu EB, Lo S, et al. A new algorithm for crossing chronic total occlusions from the Asia Pacific Chronic Total Occlusion Club. J Am Coll Cardiol Intv 2017;10:2135–43.")}
            {textRow("07) \t ", "Galassi AR, Werner GS, Boukhris M, et al. Percutaneous recanalisation of chronic total occlusions: 2019 consensus document from the EuroCTO Club. EuroIntervention 2019;15:198–208.")}
            {textRow("08) \t ", "Kini A, Sharma S, Narula J. Practical Manual of Interventional Cardiology, 2014.")}
            {textRow("09) \t ", "Pan M, Ojeda S, Villanueva E, et al. Structural Damage of Jailed Guidewire During the Treatment of Coronary Bifurcation Lesions: A Microscopic Randomized Trial. JACC Cardiovasc Interv. 2016;9(18):1917-1924. doi:10.1016/j.jcin.2016.06.030.")}
            {textRow("10) \t", "Barbato E, Colombo A, Heyndrickx GR. Interventional technology: rotational atherectomy. Percutaneous Interventional Cardiovascular Medicine: The EAPCI Textbook 2012, vol II, 3–6, 195–211." +
                "Joyal D, Thompson CA, Grantham JA, Buller CEH, Rinfret S. The retrograde technique for recanalization of chronic total occlusions: a step-by-step approach. J Am Coll Cardiol Intv 2012;5:1–11.")}
            {textRow("11) \t", "Joyal D, Thompson CA, Grantham JA, Buller CEH, Rinfret S. Theretrograde  technique  for  recanalization  of  chronic  total  occlusions:  a step-by-step approach. J Am Coll Cardiol Intv 2012;5:1–11.")}
        </View>
    );
}

