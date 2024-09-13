import React from 'react'
import { Image, Text, TouchableOpacity, View, Dimensions, Alert } from 'react-native'
import menu2 from '../../styles/menu2'
import {getHeight} from "../../utils/cssfragments";

let navigation;
let textsInput;

export function handleResponse(nav, ti) {
    navigation = nav;
    textsInput = ti;
}

export default function () {
    const [texts, setTexts] = React.useState(textsInput);
    const [textsOriginals, setTextsOriginals] = React.useState(textsInput);
    const [width, setWidth] = React.useState([0, 0, 0]);
    const [total, setTotal] = React.useState(0);

    const maxLength = 8;

    function clean(index) {
        let textsCopy = [...texts];
        for (let i = index; i < 3; i++) {
            textsCopy[i] = "";
        }
        setTexts(textsCopy);
    }

    function changeWidth(index, w) {
        let widthCopy = [...width];
        widthCopy[index] = w;
        setWidth(widthCopy);
    }

    function process(index, text) {
        if (text != undefined && total > 0) {
            if (text.length > maxLength && totalWidth() > Dimensions.get('window').width - 54 && text.substring(text.length - 2, text.length) != '..') {
                text = text.substring(0, maxLength) + "..";

                let textsCopy = [...texts];
                textsCopy[index] = text;
                setTexts(textsCopy);
            }
        }
        return text;
    }

    function totalWidth() {
        if (total <= 0) {
            setTotal(parseInt(width[0] + width[1] + width[2] - 20));
        }
        return total;
    }

    function correctDir(dir) {
        dir = "" + dir;
        dir = dir.toLowerCase();
        dir = dir.replace(" ", "");
        dir = dir.replace("-", "");
        dir = dir.replace(",", "");
        dir = dir.replace(".", "");
        return dir;
    }

    return (
        <View style={menu2.menu}>
            <TouchableOpacity onPress={() => {
                clean(0);
                navigation.navigate(correctDir('home'));
            }} style={menu2.menuItem}>
                <Image source={require('../../../assets/images/home.png')}
                       style={{height: getHeight(2)}}
                       // height= {getHeight(12)}
                       resizeMode={"contain"}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                clean(1);
                navigation.navigate(correctDir(textsOriginals[0]));
            }} onLayout={(event) => {
                var { width } = event.nativeEvent.layout;
                changeWidth(0, width);
            }} style={texts[0] == "" ? menu2.menuItem1 : menu2.menuItem1} >
                <Text style={menu2.text}>{process(0, texts[0])}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {
                clean(2);
                navigation.navigate(correctDir(textsOriginals[1]));
            }} onLayout={(event) => {
                var { width } = event.nativeEvent.layout;
                changeWidth(1, width);
            }} style={texts[1] == "" ? menu2.hide : [menu2.menuItem2, { left: 27 + width[0] }]}>
                <Text style={menu2.text}>{process(1, texts[1])}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    clean(3);
                    navigation.navigate(correctDir(textsOriginals[2]));
                }}
                onLayout={(event) => {
                    var { width } = event.nativeEvent.layout;
                    changeWidth(2, width);
                }}
                style={texts[2] == "" ? menu2.hide : [menu2.menuItem3, { left: 27 + width[0] - 37 * 0.5 + width[1] }]}>
                <Text style={menu2.text}>{process(2, texts[2])}</Text>
            </TouchableOpacity>
        </View>
    )
}
