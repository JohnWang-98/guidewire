import React from 'react'
import {Image, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native'
import menu from '../../styles/menu'
import {getHeight} from "../../utils/cssfragments";
import {MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import {white} from "../../consts/Colors";

let navigation;
let initialIndex;

export function handleResponse(response, index) {
    navigation = response;
    initialIndex = index;
}

export default function (props) {
    const [selected, setSelected] = React.useState(setInitial());

    function setInitial() {
        return clean(initialIndex);
    }

    function clean(index) {
        let selectedCopy = [0, 0, 0, 0, 0];
        selectedCopy[index] = 1;
        if (setSelected) {
            setSelected(selectedCopy);
        }
        return selectedCopy;
    }

    return (<View style={menu.menu}>
        <TouchableOpacity onPress={() => {
            if(props.action)
                props.action();
            navigation.navigate('home')
        }} style={[selected[0] ? menu.menuItemSelected : menu.menuItem]}>
            <Image
                source={require('../../../assets/images/home.png')}
                style={{height: getHeight(3),  width: getHeight(3)}}
                resizeMode={"contain"}
            />
        </TouchableOpacity>

        {/*<Text style={menu.separate} />*/}

        <TouchableOpacity onPress={() => {
            if(props.action)
                props.action();
            navigation.navigate('library')
        }} style={selected[1] ? menu.menuItemSelected : menu.menuItem}>
            <Image
                source={require('../../../assets/images/library.png')}
                style={{height: getHeight(3.2), width: getHeight(3)}}
                resizeMode={"contain"}
            />
        </TouchableOpacity>

        {/*<Text style={menu.separate} />*/}

        <TouchableOpacity onPress={() => {
            if(props.action)
                props.action();
            navigation.navigate('basics')
        }} style={selected[2] ? menu.menuItemSelected : menu.menuItem}>
            <Image
                source={require('../../../assets/images/basics.png')}
                style={{height: getHeight(3), width: getHeight(3)}}
                resizeMode={"contain"}
            />
        </TouchableOpacity>

        {/*<Text style={menu.separate} />*/}

        <TouchableOpacity onPress={() => {
            if(props.action)
            props.action();
            navigation.navigate('casestudies');
        }} style={selected[3] ? menu.menuItemSelected : menu.menuItem}>
            <Image
                source={require('../../../assets/images/case_studies.png')}
                style={{height: getHeight(3), width: getHeight(3)}}
                resizeMode={"contain"}
            />
        </TouchableOpacity>

        {/*<Text style={menu.separate} />*/}

        <TouchableOpacity onPress={() => {
            if(props.action)
                props.action();
            navigation.navigate('more')
        }} style={selected[4] ? menu.menuItemSelected : menu.menuItem}>
            <Image
                source={require('../../../assets/images/more.png')}
                style={{height: getHeight(3), width: getHeight(3)}}
                resizeMode={"contain"}
            />
        </TouchableOpacity>
    </View>)
}
