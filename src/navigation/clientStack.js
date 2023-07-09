import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen';
import SearchResultScreen from '../screens/SearchResultsScreen';
import ShopsHomeScreen from '../screens/ShopsHomeScreen';

const ClientSearch = createStackNavigator();
export function ClientStack() {
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