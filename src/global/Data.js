export const filterData = [{name: "Hair", image:require('../assets/hair_img.png'),id:"0"},
    {name: "Skin", image:require("../assets/skin_img.png"),id:"1"},
    {name: "Weight", image:require("../assets/weig_img.png"),id:"2"},
    {name: "Odour", image:require("../assets/odor_img.png"),id:"3"},
    {name: "Vagina", image:require("../assets/vagi_img.png"),id:"4"},
];

export const productData = [
    {
        businessName: "Julies Cosmetics", farAway:"21.2",
        businessAddress: "Plot 49, Stretcher Rd, Kampala", images:require("../assets/products/fres0.jpg"),
        averageReview:4.7, numberOfReview: 288, coordinates: {lat:26.1888612, lng:28.246325},discount:10,
        deliveryTime:15, collectTime: 15, itemType: 'Skin, Beauty Cosmetics',
        productInfo:[
            {name:'FemFresh',price: 22.90, image: require("../assets/products/fem1.jpg")},
            {name:'Vitanica',price: 26.90, image: require("../assets/products/fem2.jpg")},
            {name:'Equate',price: 21.90, image: require("../assets/products/fem3.jpg")},
        ],
        id:0
    },

    {
        businessName: "Urban Beauty Products", farAway:"12.2",
        businessAddress: "Plot4, Luwum Street, Kampala", images:require("../assets/products/fem0.jpg"),
        averageReview:4.5, numberOfReview: 543, coordinates: {lat:16.9888612, lng:20.346325},discount:6,
        deliveryTime:20, collectTime: 7, itemType: 'Odor, Body Products',
        productInfo:[
            {name:'Good Wipes',price: 24.90, image: require("../assets/products/fres1.jpg")},
            {name:'IsoFresh',price: 30.30, image: require("../assets/products/fres2.jpg")},
            {name:'RePHresh',price: 21.67, image: require("../assets/products/fres3.jpg")},
        ],
        id:1
    },

    {
        businessName: "Mama Tendo Shopwise", farAway:"8.1",
        businessAddress: "Kalerwe Market, Kampala", images:require("../assets/products/was0.jpg"),
        averageReview:3.8, numberOfReview: 103, coordinates: {lat:28.1222612, lng:24.346325},discount:3,
        deliveryTime:23, collectTime: 9, itemType: 'Vagina, Vaginal Products',
        productInfo:[
            {name:'Vagisil',price: 24.90, image: require("../assets/products/was1.jpg")},
            {name:'Restore',price: 30.30, image: require("../assets/products/was2.jpg")},
            {name:'LaWash',price: 27.67, image: require("../assets/products/was3.jpg")},
        ],
        id:2
    },

    {
        businessName: "City Cosmetics Shop", farAway:"22.2",
        businessAddress: "Bukoto Kira Rd, Kampala", images:require("../assets/products/fem0.jpg"),
        averageReview:4.7, numberOfReview: 288, coordinates: {lat:26.1888612, lng:28.246325},discount:10,
        deliveryTime:15, collectTime: 15, itemType: 'Skin, Beauty Cosmetics',
        productInfo:[
            {name:'FemFresh',price: 22.90, image: require("../assets/products/fem1.jpg")},
            {name:'Vitanica',price: 26.90, image: require("../assets/products/fem2.jpg")},
            {name:'Equate',price: 21.90, image: require("../assets/products/fem3.jpg")},
        ],
        id:3
    },

    {
        businessName: "LA Beauty Queen", farAway:"33.2",
        businessAddress: "Kyaddondo East, Kampala", images:require("../assets/products/fres0.jpg"),
        averageReview:2.5, numberOfReview: 543, coordinates: {lat:16.9888612, lng:20.346325},discount:6,
        deliveryTime:7, collectTime: 2, itemType: 'Odor, Body Products',
        productInfo:[
            {name:'Good Wipes',price: 24.90, image: require("../assets/products/fres1.jpg")},
            {name:'IsoFresh',price: 30.30, image: require("../assets/products/fres2.jpg")},
            {name:'RePHresh',price: 21.67, image: require("../assets/products/fres3.jpg")},
        ],
        id:4
    },

    {
        businessName: "Discount Shop Products", farAway:"2.1",
        businessAddress: "Acacia Mall, Kisementi", images:require("../assets/products/was0.jpg"),
        averageReview:4.8, numberOfReview: 103, coordinates: {lat:21.1222612, lng:22.346325},discount:3,
        deliveryTime:20, collectTime: 5, itemType: 'Vagina, Vaginal Products',
        productInfo:[
            {name:'Vagisil',price: 24.90, image: require("../assets/products/was1.jpg")},
            {name:'Restore',price: 30.30, image: require("../assets/products/was2.jpg")},
            {name:'LaWash',price: 27.67, image: require("../assets/products/was3.jpg")},
        ],
        id:5
    },
]