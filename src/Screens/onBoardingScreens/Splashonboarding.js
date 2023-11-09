import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { setData, getData } from "../utilites/AsyncStorageUtili";

const Splashonboarding = ({ navigation }) => {



    const handleGetStart =  () => {
        navigation.navigate("CreateAccountScreen")
    }
    return (

        <View style={
            styles.container
        }>
            <Image
                style={{
                    flex: 1,
                    width: "100%",
                    height: "100%",
                }}
                source={require("../../images/onBoard.png")}
            />


            <Text style={
                {
                    position: 'absolute',
                    fontSize: 40,
                    color: "#FFF",
                    textAlign: "center",
                    fontWeight: "700",
                    fontFamily: "Cabin-Regular",
                    top: "65%"
                }
            }>
                Recipe Passport
            </Text>
            <Text
                style={
                    {
                        position: 'absolute',
                        fontSize: 16,
                        color: "#FFF",
                        textAlign: "center",
                        fontWeight: "400",
                        fontFamily: 'Montserrat-Regular',
                        top: "75%"
                    }}
            >
                Welcome to recipe passport where you
            </Text>
            <Text
                style={
                    {
                        position: 'absolute',
                        fontSize: 16,
                        color: "#FFF",
                        textAlign: "center",
                        fontWeight: "400",
                        fontFamily: "Montserrat-Regular",
                        top: "77%"
                    }}
            >
                virtually travel the world through recipes.
            </Text>


            {/* GET STARTED */}


            <View style={styles.ButtonView}>
                <TouchableOpacity
                    onPress={handleGetStart}
                >
                    <Text style={styles.ButtonTextView}>
                        Get started
                    </Text>
                </TouchableOpacity>
            </View>
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

export default Splashonboarding;
