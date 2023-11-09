import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, BackHandler } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use other icon libraries as well

const PasswordRecoveryScreen1 = ({ navigation }) => {


    const handleLogin = () => {
        navigation.navigate("PasswordRecoveryScreen2")
    }
   

    return (
        <View style={styles.container}>
            <ScrollView>
            <Text style={styles.heading1}>


                    {`Password Recovery`}
                </Text>
                <Text style={styles.heading2}>

                    {`Please enter the email you registered 
with to recover password`}
                </Text>

                {/* EMAIL ADDRESS */}
                <View
                    style={[styles.TextInputView, { marginTop: '20%' }]}>
                    <Icon
                        name="envelope-o"
                        size={24}
                        style={styles.TextInputIcon}
                    />
                    <TextInput
                        placeholder="Email address"
                        placeholderTextColor="#637663"
                        style={styles.TextInputStyle}
                    />
                </View>
               

                {/* CONTINUE */}

                <View style={styles.ButtonView}>
                    <TouchableOpacity
                        onPress={handleLogin}
                    >
                        <Text style={styles.ButtonTextView}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>


            
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    heading2: {
        fontSize: 16,
        fontWeight: "400",
        fontFamily: 'Montserrat-Regular',
        color: "#354D35",
        marginTop: "3%",
        marginStart: 10,

    },
    heading1: {

        fontSize: 32,
        color: "#000000",
        fontFamily: "Montserrat-Regular",
        marginStart: 10,
        marginTop: "20%",
        fontWeight: "700",

    },
    iconAccView: {
        flexDirection: "row",
        flex: 1,
        alignSelf: "center"
    },
    accView: {
        backgroundColor: "white",
        marginTop: "10%",
        borderRadius: 100,
        width: "13.5%",
        alignSelf: "center",
        height: "60%",
        borderWidth: 0.5,
        borderColor: "grey",
        marginLeft: 15,

    },
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
        marginTop: "10%",
        paddingHorizontal: "20%",
        borderRadius: 100,
        width: "90%",
        alignSelf: "center",
        height: 50,

    },
    toggleView: {
        width: 17,
        height: 17,
        borderWidth: 1,
        borderColor: '#6AA920',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        borderRadius: 5,
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "white",
    },
    TextInputIcon:
    {
        marginTop: 10,
        marginStart: 10
    },
    TextInputView: {
        width: "90%",
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        paddingLeft: 10,
        elevation: 4,
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


    }

});

export default PasswordRecoveryScreen1;