import React from "react";
import { Dimensions,Text, View,TouchableOpacity,Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import {colors, parameters} from "../global/styles";


export default function ProductCard({
    onPressProductCard,
    businessName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReview,
    businessAddress,
    farAway,
    averageReview,
    images,
    screenWidth
}){
    return(
        <TouchableOpacity
        onPress={onPressProductCard}
        >
            <View style={{...styles.cardbody, width: screenWidth}}>
                <Image
                    style={{...styles.image, width: screenWidth}}
                    source={images}
                />

                <View>
                    <View>
                        <Text style={styles.businessName}>{businessName}</Text>
                    </View>

                    <View style={{flex:1, flexDirection:'row'}}>
                        <View style={styles.distance}>
                            <Icon
                                name='place'
                                type="material"
                                color={colors.grey2}
                                size={18}
                                iconStyle={{marginTop:3}}
                            />
                            <Text style={styles.min}>{farAway} Min</Text>
                        </View>
                        <View style={{flex:9, flexDirection:'row'}}>
                            <Text style={styles.address}>{businessAddress}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.review}>
                <Text style={styles.average}>{averageReview}</Text>
                <Text style={styles.numberOfReview}>{numberOfReview} Reviews</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create(
    {
        cardbody:{
            marginHorizontal:9,
            marginTopRightRadius:15,
            marginTopLeftRadius:5,
            borderBottomLeftRadius:5,
            borderBottomRightRadius:15,
            borderWidth:1,
            borderColor:colors.grey4
        },
        image:{
            borderTopLeftRadius:5,
            borderTopRightRadius:5,
            height:180
        },
        businessName:{
            fontSize:17,
            fontWeight:'bold',
            color:colors.grey1,
            marginTop:5
        },
        distance:{
            flex:4,
            flexDirection:'row',
            borderRightColor: colors.grey4,
            paddingHorizontal:5,
            borderRightWidth:1
        },
        min:{
            fontSize:12,
            fontWeight:'bold',
            paddingTop:5,
            color:colors.grey2
        },
        address:{
            fontSize:12,
            paddingTop:5,
            color:colors.grey2,
            paddingHorizontal:10,
            marginBottom:5
        },
        review:{
            position:'absolute',
            top:0,
            right:10,
            backgroundColor:'rgba(52,52,52,0.3)',
            padding:2,
            alignItems:'center',
            justifyContent:'center',
            borderTopRightRadius:5,
            borderBottomLeftRadius:12
        },
        average:{
            color:'white',
            fontSize:20,
            fontWeight:'bold',
            marginTop:-3
        },
        numberOfReview:{
            color:'white',
            fontSize:13,
            marginRight:0,
            marginLeft:0
        }
    }
)