import { StyleSheet } from 'react-native';
import {
    black,
    caseLabel1,
    caseLabel2,
    caseLabel3,
    caseLabel4,
    caseText1,
    caseText2,
    caseText3,
    caseText4,
    darkPurple,
    gray,
    white
} from '../consts/Colors';
import {getWidth} from "../utils/cssfragments";

const caseStudies = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginBottom: 30,
        marginTop: 10,
        fontSize: 20,
        fontFamily: 'NunitoSans_800ExtraBold',
        color: darkPurple,
    },
    text: {
        alignSelf: 'center',
        maxWidth: 166,
        marginLeft: 10,
        fontSize: 15
    },
    text2: {
        alignSelf: 'center',
        maxWidth: 166,
        marginLeft: 10,
        fontSize: 13
    },
    cardView: {
        width: getWidth(90),
        backgroundColor: white,
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 10,
        justifyContent: "center",
        // alignItems: "center"
    },
    itemView: {
        // width: getWidth(90),
        marginHorizontal: 30,
        backgroundColor: white,
        paddingVertical: 10,
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 10,
        justifyContent: "center",
        // alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    labels: {
        backgroundColor: white,
        padding: 5,
        // borderRadius: 20,
        // marginBottom: 20,
        textAlign: 'center',
        borderRadius: 90,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 2,
        // fontSize: 20,
        fontFamily: 'NunitoSans_400Regular',
    },
    label1: {
        backgroundColor: caseLabel1,
        color: caseText1,
    },
    label2: {
        backgroundColor: caseLabel2,
        color: caseText2,
    },
    label3: {
        backgroundColor: caseLabel3,
        color: caseText3,
    },
    label4: {
        backgroundColor: caseLabel4,
        color: caseText4,
    },
    scroll: {
        marginTop: 5
    },
    end: {
        marginTop: 80
    },
    //casex
    point: {
        backgroundColor: black,
        borderRadius: 90,
        height: 5,
        width: 5
    },
    textCase: {
        alignSelf: 'center',
        fontSize: 12,
        maxWidth: 50
    },
    labelCase: {
        maxWidth: 300
    },
    videoContainer: {
        overflow: "hidden",
        backgroundColor: black,
        alignSelf: "center",
        width: getWidth(86),
        // height: getWidth(70),
        marginBottom: 20,
        borderRadius: 20,
        // paddingHorizontal: 10,
        // paddingVertical: 20
    },
    iconPadding: {
        paddingLeft: 5,
        paddingRight: 10,
        paddingVertical: 16,
        borderRadius: 100,
    }
});

export default caseStudies;
