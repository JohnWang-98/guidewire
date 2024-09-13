import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import { darkPurple, purple, purpleHolder, white } from '../consts/Colors';

const profile = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: purple,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        // marginLeft: 20,
        // marginBottom: 30,
        // marginTop: 50,
        fontSize: 20,
        fontFamily: 'NunitoSans_800ExtraBold',
        color: white,
    },
    input: {
        backgroundColor: white,
        color: white,
        height: 70,
        borderRadius: 20,
        marginTop: 20,
        // marginHorizontal: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
        justifyContent: "space-between",
        flexDirection: 'row',
        alignItems: "center"
    },
    label: {
        // width: 283,
        fontSize: 13,
        fontFamily: 'NunitoSans_700Bold'
        // paddingTop: 25,
        // paddingBottom: 10
    },
    inputText: {
        fontSize: 18,
        fontFamily: 'NunitoSans_400Regular'
    },
    reset: {
        backgroundColor: darkPurple,
        // width: Dimensions.get('window').width,
        height: 60,
        borderRadius: 100,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
    },
    resetPosition: {
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
    },
    resetText: {
        textAlign: 'center',
        padding: 18,
        color: 'white',
        fontWeight: "bold",
        fontSize: 18
    },
});

export default profile;
