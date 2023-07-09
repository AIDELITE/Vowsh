import React from "react";
import { View,Text,StyleSheet,Dimensions,FlatList } from "react-native";
import SearchResultCard from "../components/SearchResultCard";
import { productData } from "../global/Data";
import { colors } from "../global/styles";


const SCREEN_WIDTH = Dimensions.get('window').width;
const SearchResultScreen =({navigation, route})=>{
    return(
        <View style={styles.container}>
            <View>
                <FlatList
                    data={productData}
                    style={{backgroundColor:colors.cardbackground}}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item,index})=>(
                        <SearchResultCard
                            screenWidth = {SCREEN_WIDTH}
                            images={item.images}
                            averageReview={item.averageReview}
                            numberOfReview={item.numberOfReview}
                            businessName = {item.businessName}
                            farAway={item.farAway}
                            businessAddress={item.businessAddress}
                            productItems={item.productInfo}
                            onPressProductCard={()=>{navigation.navigate('ShopsHomeScreen',{id:index,shop:item.businessName})}}
                        />
                    )}
                    ListHeaderComponent={
                        <View>
                            <Text style={styles.listHeader}>{productData.length} Results for {route.params.item}</Text>
                        </View>
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default SearchResultScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    listHeader:{
        color:colors.grey1,
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:'bold'
    }
})