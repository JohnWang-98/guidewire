import { StyleSheet } from 'react-native';
import {blue, cyan, darkPurple, green, orange, pink, white} from '../consts/Colors';
import {
    NunitoSans_200ExtraLight,
    NunitoSans_200ExtraLight_Italic,
    NunitoSans_300Light,
    NunitoSans_300Light_Italic,
    NunitoSans_400Regular,
    NunitoSans_400Regular_Italic,
    NunitoSans_600SemiBold,
    NunitoSans_600SemiBold_Italic,
    NunitoSans_700Bold,
    NunitoSans_700Bold_Italic,
    NunitoSans_800ExtraBold, NunitoSans_800ExtraBold_Italic, NunitoSans_900Black, NunitoSans_900Black_Italic
} from "@expo-google-fonts/nunito-sans";
import {getWidth} from "../utils/cssfragments";

const constants = StyleSheet.create({
    row: {
        flexDirection: 'row',
        margin: 0,
        padding: 0
    },
    hide: {
        display: 'none'
    },
    separateRight:
    {
        margin: 0,
        marginRight: 10,
    },
    separateTop:
    {
        margin: 0,
        marginTop: 10,
    },
    pink: {
        backgroundColor: pink,
    },
    blue: {
        backgroundColor: blue,
    },
    cyan: {
        backgroundColor: cyan,
    },
    green: {
        backgroundColor: green,
    },
    oragne: {
        backgroundColor: orange,
    },
    scrollContainer: {
        width: getWidth(100),
        flexGrow: 1,
        justifyContent: 'center',
        paddingBottom: "25%",
        alignItems: "center"
    },
    pageTitle: {
        alignSelf: 'flex-start',
        marginTop: 40,
        fontSize: 20,
        fontFamily: 'NunitoSans_800ExtraBold',
        color: darkPurple,
        marginHorizontal: 22
    },
    moreSectionAppbar: {
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    appbarTitle: {
        flex: 1,
        textAlign: "center",
        fontSize: 24,
        fontFamily: 'NunitoSans_800ExtraBold',
        color: darkPurple,
    },
    // NunitoSans_200ExtraLight,
    // NunitoSans_200ExtraLight_Italic,
    // NunitoSans_300Light,
    // NunitoSans_300Light_Italic,
    // NunitoSans_400Regular,
    // NunitoSans_400Regular_Italic,
    // NunitoSans_600SemiBold,
    // NunitoSans_600SemiBold_Italic,
    // NunitoSans_700Bold,
    // NunitoSans_700Bold_Italic,
    // NunitoSans_800ExtraBold,
    // NunitoSans_800ExtraBold_Italic,
    // NunitoSans_900Black,
    // NunitoSans_900Black_Italic,
    extraLight: {
        fontFamily: 'NunitoSans_200ExtraLight',
    },
    lightFont: {
        fontFamily: 'NunitoSans_300Light',
    },
    regularFont: {
        fontFamily: 'NunitoSans_400Regular',
    },
    boldFont: {
        fontFamily: 'NunitoSans_700Bold',
    },
    semiBold: {
        fontFamily: 'NunitoSans_600SemiBold',
    },
    extraBold: {
        fontFamily: 'NunitoSans_800ExtraBold',
    },
    blackText: {
        fontFamily: 'NunitoSans_900Black',
    },
    viewerHeaderStyle: {
        width: getWidth(100),
        justifyContent: "center",
        alignItems: "flex-end"
    },
    hyperLink:{
        fontFamily: 'NunitoSans_400Regular',
        fontSize: 16,
        color: blue
    },
    smallText:{
        fontFamily: 'NunitoSans_400Regular',
        fontSize: 12,
    },
    smallLinkText:{
        fontFamily: 'NunitoSans_400Regular',
        fontSize: 12,
        color: blue
    },
    justifyText:{
        justifyContent: "flex-start",
        paddingHorizontal: 10,
        marginTop: 10
    },
    roundedBorder:{
        // backgroundColor: pink,
        alignItems: "flex-end",
        justifyContent: "center",
        position: "absolute",
        top: 20,
        right: 0,
        height: 60,
        width: 50,
        paddingRight: 5
    },
    radius: {
        // backgroundColor: pink,
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 100,
    },
    smallRadius: {
        // backgroundColor: pink,
        padding: 20,
        borderRadius: 100,
        position: "absolute",
        top: 30,
        alignSelf: "flex-start"
    },
    appbarWrap: {
        paddingHorizontal: getWidth(8.5),
        paddingTop: 50,
        paddingBottom: 20,
        alignItems: "center",
        width: getWidth(100)
    },
    centerText: {
        textAlign: "center"
    }
});

export default constants;
