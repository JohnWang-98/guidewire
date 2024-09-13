import { StyleSheet } from 'react-native';
import {darkPurple, orange, purple, purpleHolder, white} from '../consts/Colors';
import {getHeight, getWidth} from "../utils/cssfragments";

const welcome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: purple,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashContainer: {
    flex: 1,
    backgroundColor: white,
    flexDirection: "column",
    // width: "100%",
    // paddingBottom: getHeight(10)
    // alignItems: 'stretch',
    // justifyContent: 'center',
  },
  text: {
    color: white,
    fontSize: 25,
    paddingTop: 25,
    paddingBottom: 50,
    fontFamily: 'NunitoSans_700Bold',
  },
  login: {
    backgroundColor: darkPurple,
    width: 283,
    height: 60,
    borderRadius: 90,
  },
  loginText: {
    textAlign: 'center',
    padding: 18,
    color: 'white',
    fontFamily: 'NunitoSans_800ExtraBold',
    fontSize: 18
  },
  signup: {
    backgroundColor: white,
    width: 283,
    height: 60,
    borderRadius: 90,
    marginBottom: 20
  },
  signupText: {
    textAlign: 'center',
    padding: 18,
    color: darkPurple,
    fontFamily: 'NunitoSans_800ExtraBold',
    fontSize: 18
  },
  image: {
    flex: 1,
    // flexGrow: 1,
    // resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default welcome;
