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
    gray,
    pink,
    white
} from '../consts/Colors';

const privacyPolicy = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: gray,
        paddingHorizontal: 20
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        textAlign: "center",
        fontFamily: 'NunitoSans_700Bold'
    },
    subTitle: {
        fontSize: 14,
        textAlign: "center",
    },
    card: {
        backgroundColor: white,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'center',
        marginVertical: 10,
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        paddingHorizontal: 0,
    },
    text: {
        fontSize: 16,
        textAlign: "left",
        fontFamily: 'NunitoSans_400Regular'
        // marginHorizontal: 10,
    },
    circle: {
        height: 35,
        width: 35,
        // marginRight: 30,
        justifyContent: 'center',
        borderRadius: 100,
    },
    cardText: {
        color: white,
        textAlign: 'center',
        fontWeight: "700",
        fontSize: 18,
        fontFamily: 'NunitoSans_400Regular'
    },
    headerText: {
        color: white,
        textAlign: 'center',
        fontWeight: "700",
        fontSize: 18,
    }
});

export default privacyPolicy;
