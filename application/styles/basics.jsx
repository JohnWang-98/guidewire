import { StyleSheet, Dimensions } from 'react-native';
import {
    blue,
    caseLabel1,
    caseLabel2, caseLabel3, caseLabel4,
    caseText1,
    caseText2, caseText3, caseText4,
    cyan,
    darkPurple,
    gray,
    green,
    pink,
    white
} from '../consts/Colors';
import {getHeight} from "../utils/cssfragments";

const basics = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gray,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    appbar: {
        marginLeft: 20,
        marginBottom: '',
        marginTop: 50,
        alignItems: "center"
    },
    text: {
        // textAlign: 'center',
        // paddingHorizontal: 23,
        color: darkPurple,
        fontWeight: "bold",
        fontSize: 18
    },
    card: {
        paddingRight: 10,
        backgroundColor: white,
        borderRadius: 20,
        // marginHorizontal: 20,
        height: getHeight(10),
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: "center",
    },
    searchCard: {
        backgroundColor: white,
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        // marginHorizontal: 20,
        // height: getHeight(20),
    },
    h1:{
        fontFamily: 'NunitoSans_700Bold',
        fontSize: 20
    },
    h2:{
        fontFamily: 'NunitoSans_600SemiBold',
        fontSize: 18
    },
    p:{
        fontFamily: 'NunitoSans_400Regular',
        fontSize: 16
    },
});

export default basics;
