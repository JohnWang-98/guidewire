import { StyleSheet, Dimensions } from 'react-native';
import { blue, cyan, green, pink, white } from '../consts/Colors';

const menu = StyleSheet.create({
    menu: {
        height: 90,
        flexDirection: 'row',
        paddingLeft: 27,
        paddingTop: 20
    },
    menuItem: {
        backgroundColor: pink,
        width: 37,
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
        zIndex: 3,
    },
    menuItem1: {
        backgroundColor: blue,
        width: 'auto',
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 90,
        borderBottomRightRadius: 90,
        position: 'absolute',
        bottom: 33,
        left: 27+37*0.5,
        zIndex: 2,
    },
    menuItem2: {
        backgroundColor: green,
        width: 'auto',
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 90,
        borderBottomRightRadius: 90,
        position: 'absolute',
        bottom: 33,
        left: 27 + 37 * 0.5,
        zIndex: 1,
    },
    menuItem3: {
        backgroundColor: cyan,
        width: 'auto',
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 90,
        borderBottomRightRadius: 90,
        position: 'absolute',
        left: 27 + 37 * 0.5,
        bottom: 33,
        zIndex: 0,
    },
    hide: {
        display: 'none'
    },
    text: {
        paddingLeft: 37*0.5+10,
        paddingRight: 10,
        fontSize: 12,
        color: white
    }

});

export default menu;
