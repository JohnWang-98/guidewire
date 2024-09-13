import { StyleSheet, Dimensions } from 'react-native';
import { darkPurple, purple, purpleHolder, white } from '../consts/Colors';
import {getWidth} from "../utils/cssfragments";

const signup = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: purple,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: white,
    fontSize: 25,
    paddingTop: 0,
    textAlign: 'center',
    paddingBottom: 10,
    fontFamily: 'NunitoSans_700Bold',
  },
  input: {
    backgroundColor: purpleHolder,
    color: white,
    width: 327,
    height: 60,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'NunitoSans_400Regular',
  },
  viewInput: {
    flexDirection: 'row',
    backgroundColor: purpleHolder,
    color: white,
    width: 327,
    borderStyle: "solid",
    borderWidth: 1,
    height: 60,
    borderRadius: 15,
    margin: 10,
    fontFamily: 'NunitoSans_400Regular',
  },
  textInput: {
    color: white,
    margin: 0,
    marginLeft: 25,
    width: 260,
    textAlign: 'center',
    fontFamily: 'NunitoSans_400Regular',
  },
  visible: {
    margin: 10,
    marginTop: 22
  },
  next: {
    justifyContent: "center",
    backgroundColor: darkPurple,
    // width: Dimensions.get('window').width,
    width: getWidth(90),
    height: 60,
    // borderTopLeftRadius: 15,
    // borderTopRightRadius: 15,
    borderRadius: 100,
  },
  nextPosition: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  nextText: {
    textAlign: 'center',
    padding: 18,
    color: 'white',
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 18
  },
  text2: {
    color: white,
    width: 256,
    fontSize: 25,
    paddingTop: 25,
    paddingBottom: 20,
    textAlign: 'center',
    fontFamily: 'NunitoSans_400Regular',
  },
  text3: {
    color: white,
    width: 326,
    fontSize: 14,
    paddingBottom: 100,
    textAlign: 'center',
    fontFamily: 'NunitoSans_400Regular',
  },
  skip: {
    backgroundColor: white,
    width: 283,
    height: 60,
    borderRadius: 90,
    marginBottom: 20
  },
  skipText: {
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
    color: white,
    fontWeight: "bold",
    fontSize: 18
  },
  scroll: {
    marginTop: 5
  },
  end: {
    // marginTop: 80,
    flex: 1,
  },
});

export default signup;
