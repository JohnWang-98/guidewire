import { StyleSheet, Dimensions } from 'react-native';
import { blue, gray, pink, white } from '../consts/Colors';
import {getWidth} from "../utils/cssfragments";

const nonCto = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    lesion: {
        backgroundColor: pink,
        // width: 327,
        width: getWidth(85),
        height: 70,
        borderRadius: 15,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        shadowOffset: { width: 0, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
    },
    lesionText: {
        textAlign: 'center',
        padding: 23,
        color: white,
        // fontWeight: "bold",
        fontSize: 18
    },
    guidewire: {
        backgroundColor: blue,
        // width: 327,
        width: getWidth(85),
        height: 70,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
        shadowOffset: { width: 0, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
    },
    guidewireText: {
        textAlign: 'center',
        padding: 23,
        color: 'white',
        // fontWeight: "bold",
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
});

export default nonCto;
