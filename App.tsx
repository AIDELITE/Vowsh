import React, { useEffect } from "react";
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { colors } from "./src/global/styles";
import RootNavigator from "./src/navigation/RootNavigator";
import SplashScreen from "react-native-splash-screen";
import { SignInContextProvider } from "./src/context/authContext";

export default function App(){
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return(
    <SignInContextProvider>
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}
      />
      <RootNavigator/>
    </View>
    </SignInContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})