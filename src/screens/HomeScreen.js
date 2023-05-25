import React,{ useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity,ScrollView } from "react-native";
import HomeHeader from "../components/HomeHeader";
import { colors, parameters } from "../global/styles";
import { Icon } from "react-native-elements";

export default function HomeScreen(){

    const [deliver, setDelivery] = useState(true);
    return(
        <View style={styles.container}>
            <HomeHeader/>
        <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator= {true}
        >
            <View>
                <View style={{marginTop:10, flexDirection:'row',justifyContent:'space-evenly'}}>
                    <TouchableOpacity
                        onPress={()=>{setDelivery(true)}}
                    >
                        <View style={{...styles.deliveryButton,backgroundColor:deliver? colors.buttons : colors.grey5}}>
                            <Text style={styles.deiveryText}>Delivery</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={()=>{setDelivery(false)}}
                    >
                        <View style={{...styles.deliveryButton,backgroundColor:deliver? colors.grey5 : colors.buttons}}>
                            <Text style={styles.deiveryText}>Pick Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.filterView}>
                <View style={styles.addressView}>
                    <View style={{flexDirection:'row',alignItems:'center',paddingLeft:10}}>
                        <Icon
                            type="material-community"
                            name="map-marker"
                            color={colors.grey1}
                            size={26}
                        />

                        <Text style={{marginLeft:10}}>Kireka, Kampala</Text>
                    </View>

                    <View style={styles.clockView}>
                        <Icon
                            type="material-community"
                            name="clock"
                            color={colors.grey1}
                            size={26}
                        />

                        <Text style={{marginLeft:10, marginRight:5}}>Now</Text>
                    </View>
                </View>

                <View>
                    <Icon
                        type="material-community"
                        name="tune"
                        color={colors.grey1}
                        size={26}
                    />
                </View>
            </View>

            <View style={styles.headerTextView}>
                <Text style={styles.headerText}>Categories</Text>
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    deliveryButton:{
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical:5
    },
    deiveryText:{
        marginLeft:5,
        fontSize:16
    },
    filterView:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:20,
        marginVertical:10,
        justifyContent:'space-evenly'
    },
    clockView:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:20,
        backgroundColor:colors.cardbackground,
        borderRadius:15,
        paddingHorizontal:5,
        marginRight:20
    },
    addressView:{
        flexDirection:'row',
        backgroundColor:colors.grey5,
        borderRadius:15,
        paddingVertical:5,
        justifyContent:'space-between',
        paddingHorizontal:20
    },
    headerText: {
        color:colors.grey2,
        fontSize:24,
        fontWeight:'bold',
        paddingLeft:10
    },
    headerTextView:{
        backgroundColor:colors.grey5,
        paddingVertical:3
    }
})