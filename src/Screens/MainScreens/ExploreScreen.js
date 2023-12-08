import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, BackHandler } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign'; // You can use other icon libraries as well
import Categories from "./Explore/Categories";
import CategoriesDetail from "./Explore/CategoriesDetail"




const ExploreScreen = ({ navigation }) => {

    const navigate = () => {
        navigation.navigate("CategoriesDetail")
    }
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
            <View>

                <View>
                    <Text style={styles.heading1}>
                        Search
                    </Text>

                </View>
                {/* SEARCH BAR */}
                <View
                    style={[styles.TextInputView, { marginTop: '5%', marginBottom: "5%" }]}>
                    <Icon
                        name="search1"
                        size={22}
                        style={styles.TextInputIcon}
                    />
                    <TextInput
                        placeholder="Search anything..."
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

                {/* CATEGORIES */}

                <Text style={styles.heading2}>Categories</Text>



                <View style={styles.containerCard}>
                    <Categories />
                </View>

            

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    containerCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextInputIcon:
    {
        alignSelf: "center",
        marginStart: 10
    },
    TextInputView: {
        flex: 1,
        width: "90%",
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        paddingLeft: 5,
        elevation: 10,
        borderRadius: 100,
        alignSelf: "center",
        flexDirection: "row"
    },
    TextInputStyle: {
        fontFamily: 'Montserrat-Regular',
        marginLeft: 10,
        flex: 1,
        fontWeight: "500",
        color: "grey"
    },
    heading1: {
        fontSize: 24,
        color: "#000000",
        fontFamily: "Cabin-Regular",
        marginStart: 10,
        fontWeight: "700",
        marginTop: "6%"
    },
    heading2: {
        fontSize: 20,
        color: "#000000",
        fontFamily: "Cabin-Regular",
        marginStart: 10,
        fontWeight: "600",
        marginTop: "5%",
        marginBottom: "5%"
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "white",
    },

});

export default ExploreScreen;