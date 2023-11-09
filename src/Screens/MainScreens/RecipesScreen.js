import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, BackHandler } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign'; // You can use other icon libraries as well
import WeekelyPick from "./Recipes/WeekelyPick";
import RecentRecipes from "./Recipes/RecentRecipes";
import { Image } from "react-native-elements";
import Recommended from "./Recipes/Recommended"



const RecipesScreen = ({ navigation }) => {

    useEffect(() => {
        const handleBackButton = () => {
            // Add your custom logic here to handle the back button press.
            // You can check the current state to determine what to do.
            // For example, you can navigate back, show an alert, or prevent the action.

            // Example: Navigate back using React Navigation (if you're using it)
            BackHandler.removeEventListener();
            // BackHandler.exitApp();

            // Default behavior (prevent the back action)
            return true;
        };
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        };
    }, []);



    const handleRedirecting = () => {
        // useEffect(()=>{},[])
        navigation.navigate("LogInScreen")

    }

    return (
        <ScrollView style={styles.container}>

            {/* PROFILE AND SETTINGS */}
            <View >
                <View style={styles.topProfileView}>
                    <Text style={styles.heading1}>
                        Explore Recipes
                    </Text>
                    <Icon
                        name="pluscircleo"
                        size={44}
                        style={styles.settingIcon}
                    />
                </View>

                {/* WEEEKLY PICKS */}

                <View style={styles.containerCard}>
                    <WeekelyPick />
                </View>

                {/* RECENT RECIPIES */}
                <View style={styles.headingView1}>
                    <Text style={styles.heading3}>
                        Recent Recipes
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>
                            View all
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerCard}>
                    <RecentRecipes />
                </View>

                {/* DISCOVER MORE IDEAS */}
                <TouchableOpacity style={styles.discoverView}>
                    <View style={styles.imgViewStyle}>
                        <Image
                            style={styles.discoverImg}
                            source={require("../../images/discover1.png")}

                        />
                        {/* <Image
                            style={styles.discoverImg1}
                            source={require("../../images/discover2.png")}

                        />
                       
                        <Image
                            style={styles.discoverImg1}
                            source={require("../../images/discover3.png")}

                        />  */}
                    </View>
                    <View style={styles.discoverTextView}>
                        <Text style={styles.discoverText}>Discover more dishes </Text>
                        <Text style={styles.discoverText}>by exploring what’s new</Text>
                    </View>
                    <View style={{
                        // alignSelf: "flex-end",
                        justifyContent: "center",
                        marginStart: '3%',

                    }}>
                        <Icon
                            name="rightcircle"
                            size={18}
                            style={styles.rigthArrow}
                        />
                    </View>
                </TouchableOpacity>

                {/* Recommended */}
                <View style={styles.headingView1}>
                    <Text style={styles.heading3}>
                        Recommended
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>
                            View all
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerCard}>
                    <Recommended />
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    rigthArrow: {
        marginStart: '3%',
        color: "#6AA920",
    },
    discoverTextView: {
        marginLeft: "20%",
        alignContent: 'center',
        justifyContent: "center"
    },
    discoverText: {
        fontFamily: 'Montserrat-Regular',
        fontWeight: "400",
        color: "#001E00",
        fontSize: 14
    },
    discoverImg1:
    {
        height: 61.846,
        width: 61.846,
        borderRadius: 61.846,

    },
    discoverImg:
    {
        height: 61.846,
        width: 61.846,
        borderRadius: 61.846,
    },

    imgViewStyle: {
        justifyContent: "center",
        alignItems: "center",
        paddingStart: "4%",
        flexDirection: "row",
        flex: 1
    },


    discoverView: {
        backgroundColor: "rgba(245, 246, 245, 0.80)",
        width: "90%",
        height: 100,
        margin: 20,
        borderRadius: 10,
        flexDirection: "row",
        flex: 1

    },
    topProfileView: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginTop: "10%",

    },
    containerCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: "5%"
    },
    viewAllText: {
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
        fontFamily: 'Montserrat-Regular',
        color: "#6AA920",
        letterSpacing: 0.07

    },
    headingView1: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "2%",
        marginStart: "2%",
    },
    heading3: {
        color: "#001E00",
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "Cabin-Regular",
    },
    editProfileText: {
        color: "#001E00",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",
        fontFamily: 'Montserrat-Regular',

    },
    editProfileView: {
        width: 125,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        marginTop: 10,
        borderColor: "#C9CDC9",
        gap: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    dpViewEmail: {
        color: "#637663",
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 18,
        fontFamily: 'Montserrat-Regular',
    },
    dpViewName: {
        color: "#001E00",
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "Cabin-Regular",
        lineHeight: 32
    },
    dpView: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "grey"
    },
    settingIcon: {
        alignSelf: "flex-end",
        color: "#C9CDC9",
        // justifyContent:"flex-end"
        marginRight: 10,
        marginBottom: 10
    },
    heading1: {
        fontSize: 32,
        color: "#000000",
        fontFamily: "Cabin-Regular",
        marginStart: 10,
        fontWeight: "700",
    },
    heading2: {
        fontSize: 16,
        fontWeight: "400",
        fontFamily: 'Montserrat-Regular',
        color: "#354D35",
        marginTop: "3%",
        marginStart: 10,

    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "white",
    },

});

export default RecipesScreen;