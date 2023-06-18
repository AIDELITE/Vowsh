import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import SignInWelcomeScreen from "../screens/authScreens/SignInWelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import RootClientTabs from "./clientTabs";
import ShopsMapScreen from "../screens/ShopsMapScreen";
import DrawerNavigator from "./DrawerNavigator";

const Auth = createStackNavigator();

export default function AuthStack(){
    return (
        <Auth.Navigator>
            <Auth.Screen
                name = "SignInWelcomeScreen"
                component = {SignInWelcomeScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

            <Auth.Screen
                name = "SignInScreen"
                component = {SignInScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

            <Auth.Screen
                name = "DrawerNavigator"
                component = {DrawerNavigator}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

            <Auth.Screen
                name = "ShopsMapScreen"
                component = {ShopsMapScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
        </Auth.Navigator>
    )
}