import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, BackHandler } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign'; // You can use other icon libraries as well

import Toggle from "./Forum/Toggle"


const ForumScreen = ({ navigation }) => {

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
            <View >
                <View style={styles.topProfileView}>
                    <Text style={styles.heading1}>
                        Forum
                    </Text>
                    <Icon
                        name="pluscircleo"
                        size={44}
                        style={styles.settingIcon}
                    />
                </View>

                {/*TOGGLE*/}
                <View>
                    <Toggle    />
                </View>

                {/* RECENT RECIPIES */}


                {/* DISCOVER MORE IDEAS */}

                {/* Recommended */}


            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerToggle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 46,
        backgroundColor: "rgba(245, 246, 245, 0.80)",

    },
    toggle: {
        flex: 1,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(245, 246, 245, 0.80)',
        // borderWidth: 1,
        // borderColor: '#86BF3E',
        marginRight: 8,

    },
    toggleText: {
        color: '#637663',
        textAlign: "center",
        fontSize: 12,
        fontWeight: "600",
        fontFamily: 'Montserrat-Regular',


    },
    topProfileView: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginTop: "6%",
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
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "white",
    },
});

export default ForumScreen;