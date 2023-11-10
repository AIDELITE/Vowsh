import React,{useLayoutEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultsScreen';
import ShopsHomeScreen from '../screens/ShopsHomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const ClientSearch = createStackNavigator();
export function ClientStack({navigation,route}) {

    useLayoutEffect(()=>{
        const routeName = getFocusedRouteNameFromRoute(route);
        if(routeName==="ShopsHomeScreen"){
            navigation.setOptions({
                tabBarStyle: { display: 'none' },
              });
        }
        else{
            navigation.setOptions({
                tabBarStyle: { display: 'flex' },
              });
        }
    },[navigation,route])
    return (
        <ClientSearch.Navigator>
            <ClientSearch.Screen
                name='SearchScreen'
                component={SearchScreen}
                options={()=>({
                    headerShown: false
                })}
            />

            <ClientSearch.Screen
                name='SearchResultsScreen'
                component={SearchResultScreen}
                options={()=>({
                    headerShown: false
                })}
            />

            <ClientSearch.Screen
                name='ShopsHomeScreen'
                component={ShopsHomeScreen}
                options={()=>({
                    headerShown: false
                })}
            />

        </ClientSearch.Navigator>
    )
}

const styles = StyleSheet.create({})