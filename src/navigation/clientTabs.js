import React from "react";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../global/styles";
import MyOrdersScreen from "../screens/MyOrdersScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import { ClientStack } from "./clientStack";

const clientTabs = createBottomTabNavigator();

export default function RootClientTabs(){
    return(
        <clientTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor:colors.buttons
            }}
        >
            <clientTabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={
                    {
                        tabBarLabel :"Home",
                        tabBarIcon:({color,size})=>(
                            <Icon
                                name="home"
                                type="material"
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />

            <clientTabs.Screen
                name="ClientSearchScreen"
                component={ClientStack}
                options={
                    {
                        tabBarLabel :"Search",
                        tabBarIcon:({color,size})=>(
                            <Icon
                                name="search"
                                type="material"
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />

            <clientTabs.Screen
                name="MyOrdersScreen"
                component={MyOrdersScreen}
                options={
                    {
                        tabBarLabel :"My Orders",
                        tabBarIcon:({color,size})=>(
                            <Icon
                                name="view-list"
                                type="material"
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />

            <clientTabs.Screen
                name="MyAccountScreen"
                component={MyAccountScreen}
                options={
                    {
                        tabBarLabel :"My Account",
                        tabBarIcon:({color,size})=>(
                            <Icon
                                name="person"
                                type="material"
                                color={color}
                                size={size}
                            />
                        )
                    }
                }
            />
        </clientTabs.Navigator>
    )
}