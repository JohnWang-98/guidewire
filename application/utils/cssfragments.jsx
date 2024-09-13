import {Dimensions} from "react-native"
export const fontStyle = {letterSpacing: 0.3,fontFamily:"Lato-Regular",color:"#333"};
export const fontMedium = { fontFamily:"Lato-Regular" };
export const centered = { alignItems: "center", justifyContent: "center" };
export const setRadius = (top, right, bottom, left) => ({borderTopLeftRadius:top,borderTopRightRadius:right,borderBottomRightRadius:bottom,borderBottomLeftRadius:left});
const window = Dimensions.get("window");

// RETURN WIDTH AND HEIGHT IN NUMBER.
export const getHeight = (percentage) => (window.height * percentage)/100;
export const getWidth = (percentage) => (window.width * percentage)/100;
export const getVideoHeightRatio = (videoWidth) => ((videoWidth/16) * 9);
