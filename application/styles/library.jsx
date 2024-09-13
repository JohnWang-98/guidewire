import { StyleSheet, Dimensions } from 'react-native';
import {
  blue,
  caseLabel1,
  caseLabel2, caseLabel3, caseLabel4,
  caseText1,
  caseText2, caseText3, caseText4,
  cyan,
  darkPurple,
  gray,
  green,
  pink,
  white
} from '../consts/Colors';
import {getHeight, getWidth} from "../utils/cssfragments";

const library = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: gray,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    // marginLeft: 20,
    // marginBottom: 10,
    // marginTop: 50,
    fontSize: 20,
    fontFamily: 'NunitoSans_800ExtraBold',
    color: darkPurple,
  },
  h1: {
    color: darkPurple,
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 16
  },
  h2: {
    color: darkPurple,
    fontFamily: 'NunitoSans_600SemiBold',
    fontSize: 16
  },
  p: {
    color: darkPurple,
    fontFamily: 'NunitoSans_400Regular',
    fontSize: 16
  },
  text: {
    paddingHorizontal: 23,
    color: darkPurple,
    fontFamily: 'NunitoSans_800ExtraBold',
    fontSize: 18
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'NunitoSans_800ExtraBold',
  },
  menu: {
    backgroundColor: white,
    width: Dimensions.get('window').width,
    height: 90,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  input: {
    backgroundColor: white,
    color: white,
    height: 70,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 10,
    // marginHorizontal: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: "center",
  },
  inputText: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'NunitoSans_700Bold',
  },
  searchButton: {
    backgroundColor: blue,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 100,
  },
  card: {
    backgroundColor: white,
    borderRadius: 20,
    // marginHorizontal: 20,
    paddingTop: 10,
    justifyContent: "center",
    // alignItems: "center",
  },
  labels: {
    backgroundColor: white,
    padding: 5,
    // borderRadius: 20,
    marginBottom: 20,
    textAlign: 'center',
    borderRadius: 90,
    paddingLeft: 10,
    paddingRight: 10,
    marginHorizontal: 4,
    alignItems: "center",
    fontFamily: 'NunitoSans_400Regular',
  },
  label1: {
    textAlign: 'center',
    backgroundColor: caseLabel1,
    color: caseText1,
  },
  label2: {
    backgroundColor: caseLabel2,
    color: caseText2,
  },
  label3: {
    backgroundColor: caseLabel3,
    color: caseText3,
  },
  label4: {
    textAlign: 'center',
    backgroundColor: caseLabel4,
    color: caseText4,
    // marginRight: 30
  },
  labelCase: {
    fontSize: 18,
    fontFamily: 'NunitoSans_400Regular',
  },
  fixToText: {
    flexDirection: 'row',
    flexWrap: "wrap",
    // justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  buttonStyle: {
    // backgroundColor: blue,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: blue,
    borderWidth: 2,
    paddingVertical: 8,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  sliderDummy: {
    backgroundColor: '#d3d3d3',
    width: 300,
    height:30,
    borderRadius: 50,
    position: 'absolute',
  },
  sliderReal: {
    backgroundColor: '#119EC2',
    // width: (this.state.slideValue/50) * 300,
    height:10,
  },
  submits: {
    flex: 1,
    backgroundColor: white,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: blue,
    // paddingVertical: 20,
    marginHorizontal: 5,
    marginVertical: 0,
    elevation: 12,
    height: getHeight(8),
    overflow: "hidden"
  },

  thumb:{
    height: 20,
    width: 20,
    borderRadius: 100,
    backgroundColor: white,
    borderColor: darkPurple,
    borderWidth: 2,
    marginTop: 3
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    height: getHeight(4),
    width: getWidth(80),
    backgroundColor: white,
    marginHorizontal: 30,
    marginVertical: 250,
    borderRadius: 50,
    elevation: 12
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchButtonPosition: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,

  },
  searchBottomButton: {
    backgroundColor: darkPurple,
    // width: Dimensions.get('window').width,
    height: 60,
    borderRadius: 100,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,

  },
  searchButtonText: {
    textAlign: 'center',
    padding: 18,
    color: 'white',
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 18
  },
  recentSearches: {
    backgroundColor: white,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  topMenu: {
    backgroundColor: darkPurple,
    height: 'auto',
    // width: 'auto',
    width: getWidth(90),
    borderRadius: 100,
    padding: 5,
    marginTop: 20,
    alignContent: 'center',
    justifyContent: "center"
  },
  button: {
    flexDirection: 'row',
    backgroundColor: white,
    width: getWidth(43),
    // width: "auto",
    height: 50,
    borderRadius: 90,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 22,
    paddingRight: 22,
  },
  button2: {
    flexDirection: 'row',
    backgroundColor: darkPurple,
    width: getWidth(43),
    height: 50,
    borderRadius: 90,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 22,
    paddingRight: 22,
  },
  textButton: {
    textAlign: 'center',
    color: darkPurple,
    fontFamily: 'NunitoSans_800ExtraBold',
    fontSize: 16,
  },
  textButton2: {
    textAlign: 'center',
    color: white,
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 16,
  },
  filterContainer: {
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 10,
    alignItems: "center"
  },
  shadowButton: {
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    overflow: "visible",
  },
});

export default library;
