import { StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import { darkPurple, purple, purpleHolder, white } from '../consts/Colors';
import {getWidth} from "../utils/cssfragments";

const resetpassword = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: purple,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: white,
    width: 283,
    fontSize: 13,
    paddingTop: 25,
    paddingBottom: 10
  },
  input: {
    backgroundColor: purpleHolder,
    color: white,
    width: 283,
    height: 60,
    borderRadius: 90,
    margin: 10,
    textAlign: 'center',
  },
  reset: {
    backgroundColor: darkPurple,
    // width: Dimensions.get('window').width,
    width: getWidth(95),
    height: 60,
    borderRadius: 100,
    alignSelf: 'center',
  },
  resetPosition: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  resetText: {
    textAlign: 'center',
    padding: 18,
    color: 'white',
    fontWeight: "bold",
    fontSize: 18
  },
});

export default resetpassword;