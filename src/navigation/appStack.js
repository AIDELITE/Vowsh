import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import ShopsMapScreen from "../screens/ShopsMapScreen";
import DrawerNavigator from "./DrawerNavigator";

const App = createStackNavigator();
export default function AppStack(){
    return(
        <App.Navigator>
        <App.Screen
                name = "App"
                component = {DrawerNavigator}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

            <App.Screen
                name = "ShopsMapScreen"
                component = {ShopsMapScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
            </App.Navigator>
    )
}