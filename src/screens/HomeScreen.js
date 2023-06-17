import React,{ useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity,ScrollView, Image, FlatList, Pressable, Dimensions } from "react-native";
import Countdown from 'react-native-countdown-component';
import HomeHeader from "../components/HomeHeader";
import { colors, parameters } from "../global/styles";
import { Icon } from "react-native-elements";
import { filterData, productData } from "../global/Data";
import ProductCard from "../components/ProductCard";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen(){

    const [deliver, setDelivery] = useState(true);
    const [indexCheck, setIndexCheck] = useState("0");
    return(
        <View style={styles.container}>
            <HomeHeader/>
        <ScrollView
            stickyHeaderIndices={[0]}
            showsVerticalScrollIndicator= {true}
        >
            <View style={{backgroundColor:colors.cardbackground, paddingBottom:10}}>
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

            <View>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    data={filterData}
                    keyExtractor={(item)=>item.id}
                    extraData={indexCheck}
                    renderItem={({item,index})=>(
                        <Pressable
                            onPress={()=>{setIndexCheck(item.id)}}
                        >
                            <View style={indexCheck===item.id? {...styles.smallCardSelected} : {...styles.smallCard}}>
                                <Image
                                    style={{height:75, width:70, borderRadius: 30,}}
                                    source={item.image}
                                />
                                <View>
                                    <Text style={indexCheck===item.id ? {...styles.smallCardTextSelected}:{...styles.smallCardText}}>
                                        {item.name}
                                    </Text>
                                </View>
                            </View>
                        </Pressable>)}
                />
            </View>
            <View style={styles.headerTextView}>
                <Text style={styles.headerText}>Flash Sales</Text>
            </View>

            <View>
                <View style={{flexDirection:'row', alignItems:'center',marginTop:10}}>
                    <Text style={{marginLeft:15,fontSize:16, marginTop:-10, marginRight:5}}>Offers Ending In: </Text>
                    <Countdown
                        until={3600}
                        size={14}
                        digitStyle={{backgroundColor:colors.buttons}}
                        digitTxtStyle = {{color:colors.cardbackground}}
                        timeToShow={['D', 'H', 'M', 'S']}
                        onFinish={() => alert('Offers Ended.')}
                        timeLabels={{d: 'Days', h: 'Hrs', m: 'Mins', s: 'Secs'}}
                    />
                </View>
                <FlatList
                    style={{marginTop:10, marginBottom:10}}
                    horizontal={true}
                    data={productData}
                    keyExtractor={(item,index)=>index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=>(
                        <View style={{marginRight:5}}>
                            <ProductCard
                                screenWidth={SCREEN_WIDTH*0.8}
                                images={item.images}
                                businessName={item.businessName}
                                businessAddress={item.businessAddress}
                                farAway={item.farAway}
                                averageReview={item.averageReview}
                                numberOfReview={item.numberOfReview}
                            />
                        </View>
                    )}

                />
            </View>

            <View style={styles.headerTextView}>
                <Text style={styles.headerText}>Promotions Available</Text>
            </View>

            <View>
                <FlatList
                    style={{marginTop:10, marginBottom:10}}
                    horizontal={true}
                    data={productData}
                    keyExtractor={(item,index)=>index.toString()}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item})=>(
                        <View style={{marginRight:5}}>
                            <ProductCard
                                screenWidth={SCREEN_WIDTH*0.8}
                                images={item.images}
                                businessName={item.businessName}
                                businessAddress={item.businessAddress}
                                farAway={item.farAway}
                                averageReview={item.averageReview}
                                numberOfReview={item.numberOfReview}
                            />
                        </View>
                    )}

                />
            </View>

            <View style={styles.headerTextView}>
                <Text style={styles.headerText}>Product Shops in your Area</Text>
            </View>

            <View style={{width:SCREEN_WIDTH, paddingTop:10}}>
                {
                    productData.map(item=>(
                        <View key={item.id} style={{paddingBottom:20}}>
                            <ProductCard
                                screenWidth={SCREEN_WIDTH*0.95}
                                images={item.images}
                                businessName={item.businessName}
                                businessAddress={item.businessAddress}
                                farAway={item.farAway}
                                averageReview={item.averageReview}
                                numberOfReview={item.numberOfReview}
                            />
                        </View>
                    ))
                }
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
    },
    smallCard: {
        borderRadius:30,
        backgroundColor:colors.grey5,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:105
    },
    smallCardSelected: {
        borderRadius:30,
        backgroundColor:colors.buttons,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        width:80,
        margin:10,
        height:105
    },

    smallCardTextSelected:{
        fontWeight: 'bold',
        color: colors.cardbackground
    },

    smallCardText:{
        fontWeight: 'bold',
        color: colors.grey3
    }

})