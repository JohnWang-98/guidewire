import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../../views/login/Login';
import ResetPassword from '../../views/resetpassword/ResetPassword';
import CheckEmail from '../../views/resetpassword/CheckEmail';
import Welcome from '../../views/welcome/Welcome';
import Home from '../../views/home/Home';
import SingleView from '../../views/home/homeviews/SingleView';
import TabView from '../../views/home/homeviews/TabView';
import NonCto from '../../views/home/non_cto/NonCto';
import LesionMorphology from '../../views/home/non_cto/lesionmorphology/LesionMorphology';
import GuidewireCharacteristics from '../../views/home/non_cto/guidewirecharacteristics/GuidewireCharacteristics';
import Cto from '../../views/home/cto/Cto';
import AntegradeApproach from '../../views/home/cto/antegradeapproach/Antegrade Approach';
import RetrogradeApproach from '../../views/home/cto/retrogradeapproach/Retrograde Approach';
import ProxCapMorphology from '../../views/home/cto/proxcapmorphology/ProxCapMorphology';
import Library from '../../views/library/Library';
import Basics from '../../views/basics/Basics';
import BasicsContent from "../../views/basics/BasicsContent";
import CaseStudies from '../../views/casestudies/Case Studies';
import More from '../../views/more/More';
import Casex from '../../views/casestudies/Casex';
import Register from '../../views/signup/Register';
import AboutUs from "../../views/aboutus/AboutUs";
import ContactUS from "../../views/contactus/ContactUs";
import PrivacyPolicy from "../../views/privacypolicy/PrivacyPolicy";
import MyProfile from "../../views/myprofile/MyProfile";
import ChangePassword from "../../views/changepassword/ChangePassword";
import LibraryDetail from "../../views/library/LibraryDetail";
import {
    useFonts,
    NunitoSans_200ExtraLight,
    NunitoSans_200ExtraLight_Italic,
    NunitoSans_300Light,
    NunitoSans_300Light_Italic,
    NunitoSans_400Regular,
    NunitoSans_400Regular_Italic,
    NunitoSans_600SemiBold,
    NunitoSans_600SemiBold_Italic,
    NunitoSans_700Bold,
    NunitoSans_700Bold_Italic,
    NunitoSans_800ExtraBold,
    NunitoSans_800ExtraBold_Italic,
    NunitoSans_900Black,
    NunitoSans_900Black_Italic,
} from '@expo-google-fonts/nunito-sans';
import AppLoading from "expo-app-loading";
import WireDetail from "../../views/home/homeviews/WireDetail";
import LinksView from "../../views/home/homeviews/LinksView";

const Stack = createStackNavigator();

// export default () => {
//     let [fontsLoaded] = useFonts({
//         NunitoSans_200ExtraLight,
//         NunitoSans_200ExtraLight_Italic,
//         NunitoSans_300Light,
//         NunitoSans_300Light_Italic,
//         NunitoSans_400Regular,
//         NunitoSans_400Regular_Italic,
//         NunitoSans_600SemiBold,
//         NunitoSans_600SemiBold_Italic,
//         NunitoSans_700Bold,
//         NunitoSans_700Bold_Italic,
//         NunitoSans_800ExtraBold,
//         NunitoSans_800ExtraBold_Italic,
//         NunitoSans_900Black,
//         NunitoSans_900Black_Italic,
//     });
// }

export default function Navigator(props) {
    let [fontsLoaded] = useFonts({
        NunitoSans_200ExtraLight,
        NunitoSans_200ExtraLight_Italic,
        NunitoSans_300Light,
        NunitoSans_300Light_Italic,
        NunitoSans_400Regular,
        NunitoSans_400Regular_Italic,
        NunitoSans_600SemiBold,
        NunitoSans_600SemiBold_Italic,
        NunitoSans_700Bold,
        NunitoSans_700Bold_Italic,
        NunitoSans_800ExtraBold,
        NunitoSans_800ExtraBold_Italic,
        NunitoSans_900Black,
        NunitoSans_900Black_Italic,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        let {isUser} = props;
        return (
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                {
                    isUser ?
                        <Stack.Screen
                            name='home'
                            component={Home}
                        /> :
                        <Stack.Screen
                            name='welcome'
                            component={Welcome}
                        />
                }
                <Stack.Screen
                    name='login'
                    component={Login}
                />
                <Stack.Screen
                    name='resetpassword'
                    component={ResetPassword}
                />
                <Stack.Screen
                    name='checkemail'
                    component={CheckEmail}
                />
                <Stack.Screen
                    name='signup'
                    component={Register}
                />
                {/*<Stack.Screen*/}
                {/*    name='home'*/}
                {/*    component={Home}*/}
                {/*/>*/}
                <Stack.Screen
                    name='noncto'
                    component={NonCto}
                />
                <Stack.Screen
                    name='lesionmorphology'
                    component={LesionMorphology}
                />
                <Stack.Screen
                    name='guidewirecharacteristics'
                    component={GuidewireCharacteristics}
                />
                <Stack.Screen
                    name='cto'
                    component={Cto}
                />
                <Stack.Screen
                    name='antegradeapproach'
                    component={AntegradeApproach}
                />
                <Stack.Screen
                    name='retrogradeapproach'
                    component={RetrogradeApproach}
                />
                <Stack.Screen
                    name='proxcapmorphology'
                    component={ProxCapMorphology}
                />
                <Stack.Screen
                    name='library'
                    component={Library}
                />
                <Stack.Screen
                    name='librarydetail'
                    component={LibraryDetail}
                />
                <Stack.Screen
                    name='basics'
                    component={Basics}
                />
                <Stack.Screen
                    name='basicsdetail'
                    component={BasicsContent}
                />
                <Stack.Screen
                    name='casestudies'
                    component={CaseStudies}
                />
                <Stack.Screen
                    name='case'
                    component={Casex}
                />
                <Stack.Screen
                    name='more'
                    component={More}
                />
                <Stack.Screen
                    name='profile'
                    component={MyProfile}
                />
                <Stack.Screen
                    name='changepassword'
                    component={ChangePassword}
                />
                <Stack.Screen
                    name='aboutus'
                    component={AboutUs}
                />
                <Stack.Screen
                    name='contactus'
                    component={ContactUS}
                />
                <Stack.Screen
                    name='privacypolicy'
                    component={PrivacyPolicy}
                />
                <Stack.Screen
                    name='singleview'
                    component={SingleView}
                />
                <Stack.Screen
                    name='linksView'
                    component={LinksView}
                />
                <Stack.Screen
                    name='tabview'
                    component={TabView}
                />
                <Stack.Screen
                    name='wire'
                    component={WireDetail}
                />
            </Stack.Navigator>
        );
    }
}
