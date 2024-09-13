import {Dimensions, StyleSheet} from 'react-native';
import {black, blue, darkPurple, gray, inputGrey, purple, purpleHolder, white} from "../consts/Colors";
import {getHeight, getWidth} from "../utils/cssfragments";

const contactUs = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gray,
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    title: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginBottom: 30,
        marginTop: 10,
        fontSize: 30,
        fontWeight: "bold",
    },
    text: {
        alignSelf: 'center',
        // maxWidth: 166,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        fontSize: 16,
        lineHeight: getHeight(3)
    },
    image: {
        // width: 100,
        height: getHeight(35),
        // borderRadius: 10
    },
    circleImage: {
        height: 150,
        width: 150,
        borderRadius: 100
    },
    card: {
        backgroundColor: white,
        borderRadius: 20,
        marginTop: 10,
        padding: 20
    },
    label: {
        fontSize: 16,
        color: darkPurple,
        fontFamily: 'NunitoSans_700Bold',
        marginBottom: 5,
    },
    labelText: {
        lineHeight: 20,
        color: darkPurple,
        fontSize: 12,
        fontFamily: 'NunitoSans_400Regular'
    },
    boldText: {
        fontSize: 16,
        color: darkPurple,
        fontFamily: 'NunitoSans_700Bold',
        marginBottom: 5,
        marginTop: 20,
    },
    input: {
        backgroundColor: inputGrey,
        color: darkPurple,
        // width: 327,
        // height: 60,
        borderRadius: 15,
        marginVertical: 10,
        padding: 10,
        fontFamily: 'NunitoSans_400Regular'
    },
    submit: {
        backgroundColor: darkPurple,
        height: 60,
        borderRadius: 100,
        marginTop: 10,
        fontFamily: 'NunitoSans_700Bold',
    },
    nextText: {
        textAlign: 'center',
        padding: 18,
        color: 'white',
        fontFamily: 'NunitoSans_700Bold',
        fontSize: 18,
    },
});

export default contactUs;
