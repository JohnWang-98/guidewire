import { StyleSheet } from 'react-native';
import { darkPurple, purple, purpleHolder, white } from '../consts/Colors';
import {getWidth} from "../utils/cssfragments";

const login = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: purple,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: white,
    fontSize: 25,
    paddingTop: 25,
    paddingBottom: 40,
    fontFamily: 'NunitoSans_400Regular',
  },
  errorText: {
    color: "red",
    fontSize: 10,
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: 'NunitoSans_600SemiBold',
  },
  input: {
    backgroundColor: purpleHolder,
    color: white,
    width: getWidth(80),
    height: 60,
    borderRadius: 90,
    borderStyle: "solid",
    borderWidth: 1,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'NunitoSans_400Regular',
  },
  login: {
    justifyContent: "center",
    backgroundColor: darkPurple,
    width: 283,
    height: 60,
    borderRadius: 90,
    margin: 5,
  },
  loginText: {
    textAlign: 'center',
    padding: 18,
    color: 'white',
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 18
  },
  forgotPassword: {
    width: 283,
    height: 60,
    marginTop: 10,
  },
  forgotPasswordText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    fontFamily: 'NunitoSans_400Regular',
  },
  signup: {
    width: 283,
    height: 60,
    marginTop: 40,
  },
  signupText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    fontFamily: 'NunitoSans_400Regular',
  },
  textInput: {
    flex: 1,
    color: white,
    marginLeft: 40,
    textAlign: 'center',
    fontFamily: 'NunitoSans_400Regular',
  },
  viewInput: {
    flexDirection: 'row',
    backgroundColor: purpleHolder,
    color: white,
    width: getWidth(80),
    height: 60,
    borderRadius: 90,
    borderStyle: "solid",
    borderWidth: 1,
    margin: 10,
    fontFamily: 'NunitoSans_400Regular',
    paddingRight: 10
  },
});

export default login;
