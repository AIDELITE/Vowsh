import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import ShopsMapScreen from "../screens/ShopsMapScreen";
import DrawerNavigator from "./DrawerNavigator";
import ShopsHomeScreen from "../screens/ShopsHomeScreen";
import { ClientStack } from "./clientStack";
import RootClientTabs from "./clientTabs";
import MenuProductScreen from "../screens/MenuProductScreen";

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

            <App.Screen
                name = "ShopsHomeScreen"
                component = {ShopsHomeScreen}
                options = {{
                    headerShown: false,
                }}
            />
            <App.Screen
                name = "MenuProductScreen"
                component = {MenuProductScreen}
                options = {{
                    headerShown: false,
                }}
            />

            <App.Screen
                name = "RootClientTabs"
                component = {RootClientTabs}
                options = {{
                    headerShown: false,
                }}
            />
            </App.Navigator>
    )
}