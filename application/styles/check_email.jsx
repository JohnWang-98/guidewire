import { StyleSheet } from 'react-native';
import { darkPurple, purple, white } from '../consts/Colors';

const checkemail = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: purple,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: white,
        width: 256,
        fontSize: 25,
        paddingTop: 25,
        paddingBottom: 20,
        textAlign: 'center'
    },
    text2: {
        color: white,
        width: 326,
        fontSize: 14,
        paddingBottom: 100,
        textAlign: 'center'
    },
    login: {
        backgroundColor: white,
        width: 283,
        height: 60,
        borderRadius: 90,
        marginBottom: 20
    },
    loginText: {
        textAlign: 'center',
        padding: 18,
        color: darkPurple,
        fontWeight: "bold",
        fontSize: 18
    },
    emailApp: {
        backgroundColor: darkPurple,
        width: 283,
        height: 60,
        borderRadius: 90,
        marginBottom: 20
    },
    emailAppText: {
        textAlign: 'center',
        padding: 18,
        color: 'white',
        fontWeight: "bold",
        fontSize: 18
    },
});

export default checkemail;