import { StyleSheet } from 'react-native';
import {black, blue, darkPurple, gray, inputGrey, pink, purple, white} from '../consts/Colors';
import {getHeight, getWidth} from "../utils/cssfragments";

const home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
    paddingTop: 30
    // justifyContent: 'center',
  },
  text: {
    color: darkPurple,
    fontSize: 20,
    alignSelf: 'flex-start',
    // fontWeight: "bold",
    marginTop: "10%",
    marginHorizontal: 20,
    fontFamily: 'NunitoSans_800ExtraBold'
  },
  text2: {
    color: darkPurple,
    fontSize: 16,
    alignSelf: 'flex-start',
    marginTop: "10%",
    marginHorizontal: 20,
    fontFamily: 'NunitoSans_600SemiBold'
  },
  noncto: {
    backgroundColor: pink,
    margin: 0,
    padding: 0,
    height: getHeight(25),
    width: getWidth(90),
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    // overflow: "hidden",
    elevation: 12,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: pink,
    shadowOpacity: 0.5,
    zIndex:999,
  },
  nonctoText: {
    color: white,
    // fontWeight: "bold",
    fontSize: 25,
    fontFamily: 'NunitoSans_800ExtraBold'
  },
  cto: {
    backgroundColor: blue,
    margin: 0,
    padding: 0,
    height: getHeight(25),
    width: getWidth(90),
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    // overflow: "hidden",
    elevation: 12,
    shadowOffset: { width: 0, height: 5 },
    shadowColor: blue,
    shadowOpacity: 0.5,
    zIndex:999,
  },
  ctoText: {
    color: white,
    // fontWeight: "bold",
    fontSize: 25,
    fontFamily: 'NunitoSans_800ExtraBold'
  },
});

export default home;
