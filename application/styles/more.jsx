import { StyleSheet } from 'react-native';
import { gray, pink, white } from '../consts/Colors';
import {getHeight, getWidth} from "../utils/cssfragments";

const more = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gray,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        width: 16,
        height: 20,
    },
    imageCircle: {
        borderRadius: 90,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 16,
    },
    right: {
        alignContent: 'flex-end'
    },
    item: {
        backgroundColor: white,
        borderRadius: 20,
        // width: 333,
        width: getWidth(90),
        height: 70,
        alignItems: 'center',
        // justifyContent: "space-between",
        padding: 16,
        marginBottom: 20
    },
    text: {
        flex: 1,
        // width: getWidth(58),
        marginLeft: 16,
        fontFamily: 'NunitoSans_700Bold',
    },
});

export default more;
