import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { BarIndicator } from 'react-native-indicators'
import { colors } from '../global/styles'
const Loader = () => {
return (
    <View>
        <BarIndicator color={colors.buttons} size = {40} count = {5}/>
    </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    container:{
    }
})