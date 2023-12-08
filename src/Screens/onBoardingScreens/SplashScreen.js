import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { setData, getData } from "../utilites/AsyncStorageUtili";

const SplashScreen = ({ navigation }) => {

    const checkAccessKey = async () => {
        try {
            const storedUserOnboard = await getData('onboard');
            if (storedUserOnboard !== null) {
                setTimeout(() => {
                    navigation.replace('LogInScreen');
                }, 2000); // Delay navigation for 2 seconds (adjust as needed)
            } else {
                console.log('3333')
                setTimeout(() => {
                    navigation.replace('Splashonboarding');
                }, 2000);
            }
        } catch (error) {
            console.error('Error accessing data:', error);
            // Handle the error appropriately (e.g., show a message to the user)
        }
    };

    useEffect(() => {
        try {
            checkAccessKey();
        } catch (error) {
            console.error('Error in useEffect:', error);
            // Handle the error appropriately
        }
    }, [navigation]);


    return (

        <View style={
            styles.container
        }>


            <Text style={
                {
                    fontSize: 40,
                    color: "black",
                    textAlign: "center",
                    fontWeight: "700",
                    fontFamily: "Cabin-Regular",
                }
            }>
                Recipe Passport
            </Text>
        </View >
    );
};
const styles = StyleSheet.create({
    ButtonTextView: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 16,
        fontFamily: "Montserrat-Regular",
        color: "#FFF",
        fontWeight: "600",
    },
    ButtonView: {
        backgroundColor: "#86BF3E",
        top: "85%",
        paddingHorizontal: "20%",
        position: 'absolute',
        borderRadius: 100,
        width: "80%",
        alignSelf: "center",
        height: 50,
        flex: 1
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
});

export default SplashScreen;
