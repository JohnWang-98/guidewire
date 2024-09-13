import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import basics from "../../styles/basics";
import constants from "../../styles/constants";
import {getWidth} from "../../utils/cssfragments";

export default function (props) {
    let {type, text, key} = props;

    let styles = StyleSheet.create({
        column: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            width: getWidth(89)
        },
        row: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            flex: 1
        },
        bullet: {
            width: 10
        },
        bulletText: {
            flex: 1,
        },
        boldText: {
            fontWeight: 'bold'
        },
        normalText: {
            fontFamily: 'NunitoSans_400Regular',
            fontSize: 16
        }
    });

    return (
        // <View key={key} style={[constants.row, constants.justifyText, {marginTop: 0,}]}>
        //     <Text style={[basics.p, {paddingRight: 5, paddingTop: 0}]}>{type}</Text>
        //     {typeof text == "string" && <Text style={basics.p}>{text}</Text>}
        //     {typeof text != "string" && text}
        // </View>
        <View style={ styles.column }>
            <View style={ styles.row }>
                <View style={ styles.bullet }>
                    <Text>{'\u2022' + " "}</Text>
                </View>
                <View style={ styles.bulletText }>
                    {typeof text == "string" && <Text style={ styles.normalText }>{text}</Text>}
                    {typeof text != "string" && text}
                </View>
            </View>
        </View>
    );
}