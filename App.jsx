import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './application/components/hooks/Navigator';
import { RootSiblingParent } from 'react-native-root-siblings';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import ApiKeys from './application/consts/ApiKey';
import firebase from "firebase/app"
import {ActivityIndicator, View, ImageBackground, Text,} from "react-native";
import welcome from "./application/styles/welcome";
import {darkPurple} from "./application/consts/Colors";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoadingComplete: false,
            isAuthenticationReady: false,
            isAuthenticated: false,
            user: null
        };

        // Initialize firebase...
        if (!firebase.apps.length) { firebase.initializeApp(ApiKeys); }
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    }

    onAuthStateChanged = (user) => {
        setTimeout(() => {
            this.setState({isAuthenticationReady: true});
            // this.setState({user});
            // this.setState({isAuthenticated: !!user});
            }, 3000);
        // this.setState({isAuthenticationReady: true});
        this.setState({user});
        this.setState({isAuthenticated: !!user});
    }

    async componentDidMount() {
        let res = await firebase.auth().currentUser;
        this.setState({
            isLogged: res != null,
            user: res,
        });
    }


  render() {
      if (!this.state.isAuthenticationReady) {
          return (
              <View style={welcome.splashContainer}>
                  <ImageBackground source={require("./assets/splash.png")} style={welcome.image} resizeMode={"contain"}>
                      {/*<ActivityIndicator size="large" color={darkPurple}/>*/}
                  </ImageBackground>
              </View>
          )
      } else {
          return (
              <RootSiblingParent>
                   <NavigationContainer>
                       <Navigator  isUser={this.state.isAuthenticated}/>
                   </NavigationContainer>
               </RootSiblingParent>
           );
      }
  }
}
