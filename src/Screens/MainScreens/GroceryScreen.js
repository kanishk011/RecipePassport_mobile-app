import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, BackHandler } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign'; // You can use other icon libraries as well
// import CategoriesDetail from "./Explore/CategoriesDetail"
import GroceryList from "./Grocery/GroceryList";



const GroceryScreen = ({ navigation }) => {


    useEffect(() => {
        const handleBackButton = () => {
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

                <View style={styles.topProfileView}>
                    <Text style={styles.heading1}>
                        Grocery
                    </Text>
                    <Icon
                        name="pluscircleo"
                        size={44}
                        style={styles.settingIcon}
                    />
                </View>

                {/* SEARCH BAR */}
                <View
                    style={[styles.TextInputView]}>
                    <Icon
                        name="search1"
                        size={22}
                        style={styles.TextInputIcon}
                    />
                    <TextInput
                        placeholder="Search ingredients...."
                        placeholderTextColor="#637663"
                        style={styles.TextInputStyle}
                        secureTextEntry={true}
                    />
                    <Icon
                        name="menuunfold"
                        size={24}
                        style={[styles.TextInputIcon, { marginEnd: 15 }]}
                    />
                </View>

                {/* GROCERY LIST */}

                <View style={{flex:1,marginBottom:"10%",marginTop:"3%"}} >
                    <GroceryList />
                </View>


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    topProfileView: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginTop: "6%",

    }, settingIcon: {
        alignSelf: "flex-end",
        color: "#C9CDC9",
        // justifyContent:"flex-end"
        marginRight: 10,
        marginBottom: 10
    },
    containerCard: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    TextInputIcon:
    {
        alignSelf: "center",
        marginStart: 10
    },
    TextInputView: {
        // flex: 1,
        width: "90%",
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        paddingLeft: 5,
        elevation: 10,
        borderRadius: 100,
        alignSelf: "center",
        flexDirection: "row",
        marginTop:"4%"
    },
    TextInputStyle: {
        fontFamily: 'Montserrat-Regular',
        marginLeft: 10,
        flex: 1,
        fontWeight: "500",
        color: "grey"
    },
    heading1: {
        fontSize: 32,
        color: "#000000",
        fontFamily: "Cabin-Regular",
        marginStart: 10,
        fontWeight: "700",
    },

    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "white",
    },

});

export default GroceryScreen;