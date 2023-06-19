import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from "react-native-elements";
import RootClientTabs from "./clientTabs";
import { colors } from "../global/styles";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreen";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator()

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={props=><DrawerContent {...props}/>}
        >
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    title: 'Client',
                    drawerIcon:({focussed,size})=>(
                        <Icon
                            type="material-community"
                            name="home"
                            color={focussed ? '#7cc': colors.buttons}
                            size={size}
                        />
                    )
                }}
            />

            <Drawer.Screen
                name="BusinessConsoleScreen"
                component={BusinessConsoleScreen}
                options={{
                    title: 'Business console',
                    drawerIcon:({focussed,size})=>(
                        <Icon
                            type="material-community"
                            name="domain"
                            color={focussed ? '#7cc': colors.buttons}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}