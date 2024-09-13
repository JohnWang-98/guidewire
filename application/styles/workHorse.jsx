import { StyleSheet, Dimensions } from 'react-native';
import {blue, darkPurple, gray, infoCake, white} from '../consts/Colors';
import {getWidth} from "../utils/cssfragments";

const workHorse = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        // marginLeft: 20,
        // marginBottom: 20,
        // marginTop: 50,
        fontSize: 18,
        fontFamily: 'NunitoSans_700Bold',
        color: darkPurple,
    },
    textButton: {
        textAlign: 'center',
        color: darkPurple,
        fontFamily: 'NunitoSans_800ExtraBold',
        fontSize: 16,
    },
    textButton2: {
        textAlign: 'center',
        color: white,
        fontFamily: 'NunitoSans_700Bold',
        fontSize: 16,
    },
    box: {
        backgroundColor: infoCake,
        borderRadius: 30,
        padding: 24,
        width: getWidth(90),
        height: 'auto',
    },
    text: {
        color: darkPurple,
        fontSize: 16,
        paddingVertical: 5,
        fontFamily: 'NunitoSans_400Regular',
    },
    linkText: {
        color: blue,
        fontSize: 16,
        paddingVertical: 5,
        fontFamily: 'NunitoSans_400Regular',
    },
    menu: {
        backgroundColor: white,
        // width: Dimensions.get('window').width,
        width: getWidth(100),
        height: 80,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: white,
        width: 'auto',
        height: 50,
        borderRadius: 90,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 22,
        paddingRight: 22,
    },
    button2: {
        flexDirection: 'row',
        backgroundColor: darkPurple,
        width: 'auto',
        height: 50,
        borderRadius: 90,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 22,
        paddingRight: 22,
    },
    topMenu: {
        backgroundColor: darkPurple,
        height: 'auto',
        width: 'auto',
        // width: getWidth(70),
        borderRadius: 100,
        padding: 5
    },
    h1: {
        color: darkPurple,
        fontFamily: 'NunitoSans_700Bold',
        fontSize: 16
    },
    h2: {
        color: darkPurple,
        fontFamily: 'NunitoSans_600SemiBold',
        fontSize: 16
    },
    p: {
        color: darkPurple,
        fontFamily: 'NunitoSans_400Regular',
        fontSize: 16
    },
});

export default workHorse;
