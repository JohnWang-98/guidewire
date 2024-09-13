import { StyleSheet, Dimensions } from 'react-native';
import { darkPurple, purpleMenu } from '../consts/Colors';
import {getHeight, getWidth} from "../utils/cssfragments";

const menu = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        flexGrow: 1,
        flex: 1,
        backgroundColor: darkPurple,
        height: 72,
        borderRadius: 90,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 10,
        left: 5,
        right: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    menuItem: {
        backgroundColor: darkPurple,
        // width: getHeight(8),
        // height: getHeight(8),
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 100,
    },
    menuItemSelected: {
        backgroundColor: purpleMenu,
        // width: getHeight(8),
        // height: getHeight(8),
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 100,
    },
    menuIcon: {
      // height: getHeight(3),
        //   width: getWidth(5)
      // height: 10,
      //   width: 10
    },
    separate:
    {
        margin: 0,
        marginRight: 10,
    }
});

export default menu;
