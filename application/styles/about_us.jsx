import { StyleSheet } from 'react-native';
import {black, blue, darkPurple, gray, purple, white} from "../consts/Colors";
import {getHeight, getWidth} from "../utils/cssfragments";

const aboutUs = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gray,
        paddingHorizontal: 20,
        paddingTop: 20
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
        alignItems: 'center',
        justifyContent: 'center',
        // marginLeft: 20,
        // marginRight: 20,
        marginTop: 10,
        paddingTop: 40,
    },
    labelText: {
        lineHeight: 20,
        fontFamily: 'NunitoSans_400Regular',
        color: blue,
    },
    label: {
        fontSize: 18,
        color: blue,
        fontFamily: 'NunitoSans_700Bold',
        marginBottom: 10,
    }
});

export default aboutUs;
