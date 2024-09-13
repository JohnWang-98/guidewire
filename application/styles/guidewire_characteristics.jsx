import { StyleSheet, Dimensions } from 'react-native';
import { blue, cyan, gray, green, pink, white } from '../consts/Colors';
import {getWidth} from "../utils/cssfragments";

const guidewireCharacteristics = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    text: {
        textAlign: 'center',
        padding: 23,
        color: 'white',
        fontFamily: 'NunitoSans_700Bold',
        fontSize: 18
    },
    menu: {
        backgroundColor: white,
        width: Dimensions.get('window').width,
        height: 90,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    pink: {
        backgroundColor: pink,
        width: getWidth(85),
        height: 'auto',
        borderRadius: 15,
        marginBottom: 20,
        elevation: 5,
        shadowOffset: { width: 0, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
    },
    blue: {
        backgroundColor: blue,
        width: getWidth(85),
        height: 'auto',
        borderRadius: 15,
        marginBottom: 20,
        elevation: 5,
        shadowOffset: { width: 0, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
    },
    cyan: {
        backgroundColor: cyan,
        width: getWidth(85),
        height: 'auto',
        borderRadius: 15,
        marginBottom: 20,
        elevation: 5,
        shadowOffset: { width: 0, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
    },
    green: {
        backgroundColor: green,
        width: getWidth(85),
        height: 'auto',
        borderRadius: 15,
        marginBottom: 20,
        elevation: 5,
        shadowOffset: { width: 0, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
    },
});

export default guidewireCharacteristics;
