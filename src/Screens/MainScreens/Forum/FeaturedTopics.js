import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'; // You can use other icon libraries as well
import FastImage from 'react-native-fast-image'


const FeaturedTopics = () => {
    const data = [
        {
            id: 1,
            image: require('../../../images/Forum/img1.png'),
            heading: 'Ingredient Restriction Challenge',
            para: "Choose a specific ingredient (e.g., avocado, lemon, chickpeas) and challenge yourself to create multiple dishes using only that ingredient.",
        },
        {
            id: 2,
            image: require('../../../images/Forum/img2.png'),
            heading: 'Ingredient Restriction Challenge',
            para: "Choose a specific ingredient (e.g., avocado, lemon, chickpeas) and challenge yourself to create multiple dishes using only that ingredient.",
        },
        // Add the remaining images and text here
    ];
    return (
        <ScrollView style={styles.container}>
            <View>
                <View style={styles.topProfileView}>
                    <Text style={styles.heading1}>
                    Featured Topics
                    </Text>
                    <Icon
                        name="menuunfold"
                        size={24}
                        style={styles.fliterIcon}
                    />
                </View>
                {data.map(({ id, image, heading, para }) => (

                    <View key={id} style={styles.viewStyle} >

                        <View style={styles.viewUpcoming}>
                            <FastImage source={image} style={styles.image} />
                            <View style={styles.view1}>
                                <Text style={styles.heading2}>{heading}</Text>
                                <Text style={styles.para}>{para}</Text>
                            </View>
                            <View style={

                                {
                                    flexDirection: "row",
                                    marginTop: "8%",
                                    marginStart: "5%",

                                }
                            }>

                                <FastImage />
                                <Text style={styles.othersText}>and 10 others</Text>
                                <TouchableOpacity style={styles.buttonView}>
                                    <Text style={
                                        {
                                            alignSelf: "center",
                                            fontSize: 14,
                                            fontWeight: "600",
                                            fontFamily: 'Montserrat-Regular',
                                            color: "white",
                                            textAlign: "center"
                                        }
                                    }>Join Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    buttonView: {
        width: 105,
        height: 40,
        backgroundColor: "#86BF3E",
        borderRadius: 100,
        alignContent: "center",
        justifyContent: "center",
        marginStart: "5%",

    },
    othersText: {
        color: "#637663",
        fontSize: 11,
        fontWeight: "500",
        fontFamily: 'Montserrat-Regular',
        marginStart: "40%",
        marginTop: '3%'

    },
    view1: {
        marginLeft: "5%",
        marginTop: "5%"
    },
    para: {
        color: "#637663",
        fontSize: 12,
        fontWeight: "400",
        fontFamily: 'Montserrat-Regular',
    },
    heading2: {
        fontSize: 16,
        fontWeight: "600",
        color: "#001E00",
        fontFamily: 'Montserrat-Regular',

    },
    image: {
        width: '100%',
        height: "50%",
        resizeMode: 'cover',
        borderRadius: 10,
    },
    viewStyle: {
        marginTop: "4%",
        flex:1
    },
    viewUpcoming: {
        width: "100%",
        height: 330,
        borderRadius: 12,
        // backgroundColor: "grey",
        // elevation: 1,
        borderColor: "white",
        marginTop: "4%",
       
    },

    fliterIcon: {
        color: "#637663"
    },
    heading1: {
        fontSize: 18,
        color: "#001E00",
        fontFamily: "Cabin-Regular",
        marginStart: 10,
        fontWeight: "600",
    },
    topProfileView: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginTop: "4%",
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "white",
    },

})
export default FeaturedTopics;
