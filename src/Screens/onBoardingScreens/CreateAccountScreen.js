import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, BackHandler } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use other icon libraries as well

const CreateAccountScreen = ({ navigation }) => {
    const [isChecked, setChecked] = useState(false);
    const toggleCheckBox = () => {
        setChecked(!isChecked);
    };

    const handleContinue = () => {
        navigation.navigate("SetUpAccountScreen1")
    }
    const handleSignin = async () => {
        navigation.navigate("LogInScreen")

    }

    useEffect(() => {
        const handleBackButton = () => {
            // Add your custom logic here to handle the back button press.
            // You can check the current state to determine what to do.
            // For example, you can navigate back, show an alert, or prevent the action.

            // Example: Navigate back using React Navigation (if you're using it)
            BackHandler.exitApp();

            // Default behavior (prevent the back action)
            return true;
        };
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        };
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.heading1}>
                    {`Welcome to Recipe 
Passport App`}
                </Text>
                <Text style={styles.heading2}>
                    Please enter your account details below!
                </Text>


                {/* FULL NAME */}
                <View
                    style={[styles.TextInputView, {
                        marginTop: '15%',
                    }]}>
                    <Icon
                        name="user-o"
                        size={24}
                        style={styles.TextInputIcon}
                    />
                    <TextInput
                        placeholder="Full Name"
                        placeholderTextColor="#637663"
                        style={styles.TextInputStyle}
                    />
                </View>
                {/* EMAIL ADDRESS */}
                <View
                    style={[styles.TextInputView, { marginTop: '5%' }]}>
                    <Icon
                        name="envelope-o"
                        size={24}
                        style={styles.TextInputIcon}
                    />
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#637663"
                        style={styles.TextInputStyle}
                    />
                </View>
                {/* PASSWORD */}

                <View
                    style={[styles.TextInputView, { marginTop: '5%' }]}>
                    <Icon
                        name="lock"
                        size={24}
                        style={styles.TextInputIcon}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#637663"
                        style={styles.TextInputStyle}
                        secureTextEntry={true}
                    />
                    <Icon
                        name="eye"
                        size={24}
                        style={[styles.TextInputIcon, { marginEnd: 15 }]}
                    />
                </View>
                {/* I ACCEPT TERMS */}
                <View
                    style=
                    {{
                        flexDirection: "row",
                        marginStart: 20,
                        marginTop: 20
                    }}
                >
                    <TouchableOpacity onPress={toggleCheckBox} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.toggleView} >
                            {isChecked && (
                                <Icon
                                    name="check"
                                    size={15}
                                    style={{
                                        flex: 1,
                                        color: "#6AA920",
                                    }}
                                />
                            )}
                        </View>
                        <Text
                            style=
                            {{
                                color: "#6AA920",
                                fontSize: 14,
                                fontFamily: 'Montserrat-Regular',
                                fontWeight: "500",
                            }}
                        >
                            Accept terms & Condition
                        </Text>
                    </TouchableOpacity>

                </View>

                {/* CONTINUE */}

                <View >
                    <TouchableOpacity
                        style={styles.ButtonView}
                        onPress={handleContinue}
                    >
                        <Text style={styles.ButtonTextView}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "10%" }}>
                    <View style={{ flex: 1, height: 0.5, backgroundColor: 'grey' }} />
                    <View>
                        <Text style=
                            {{
                                width: 120,
                                textAlign: 'center',
                                fontFamily: "Montserrat-Regular",
                                fontSize: 12,
                                fontWeight: "500"
                            }}>
                            Or continue with </Text>
                    </View>
                    <View style={{ flex: 1, height: 0.5, backgroundColor: 'grey' }} />
                </View>

                {/* ACOOUNTS */}
                <View style=
                    {{
                        flexDirection: "row"
                    }}>

                    <TouchableOpacity
                        style=
                        {{
                            backgroundColor: "white",
                            marginTop: "10%",
                            borderRadius: 100,
                            width: "40%",
                            alignSelf: "center",
                            height: 50,
                            borderWidth: 0.5,
                            borderColor: "grey",
                            marginLeft: 15,

                        }}
                    >
                        <View style=
                            {{
                                flexDirection: "row",
                                flex: 1
                            }}>

                            <Icon
                                name="google"
                                size={24}
                                style={[styles.TextInputIcon, { marginStart: 30 }]}
                            />
                            <Text
                                style=
                                {{
                                    fontSize: 15,
                                    fontWeight: "500",
                                    fontFamily: "Montserrat-Regular",
                                    alignSelf: "center",
                                    marginStart: 10,
                                    color: "black",
                                    textAlign: "center"
                                }}
                            >
                                Google
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.accView}>
                        <View style={styles.iconAccView}>
                            <Icon
                                name="facebook"
                                size={24}
                                style={{
                                    color: "#4267B2",
                                    alignSelf: "center",
                                }}
                            />
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.accView}>
                        <View style={styles.iconAccView}>
                            <Icon
                                name="twitter"
                                size={24}
                                style={{
                                    alignSelf: "center",
                                    color: "#26a7de"
                                }}
                            />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.accView}>
                        <View style={styles.iconAccView}>
                            <Icon
                                name="apple"
                                size={24}
                                style={{
                                    alignSelf: "center",
                                    color: "black"
                                }}
                            />
                        </View>
                    </TouchableOpacity>

                </View>

                {/* ALREADY ACC */}

                <View style=
                    {{
                        alignSelf: "center",
                        flexDirection: "row",
                        marginTop: "10%"
                    }}>
                    <Text
                        style=
                        {{
                            fontWeight: "500",
                            fontSize: 15,
                            fontFamily: "Montserrat-Regular",
                            color: "black"
                        }}
                    >Already have account with us? </Text>
                    <TouchableOpacity
                        onPress={handleSignin}
                    >
                        <Text
                            style=
                            {{
                                fontWeight: "600",
                                fontSize: 15,
                                fontFamily: "Montserrat-Regular",
                                color: "#6AA920"
                            }}

                        >
                            Sign in
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
        borderRadius: 200,
        width: 48,
        alignSelf: "center",
        // height: "60%",
        paddingVertical: 16,
        paddingHorizontal: 0,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "grey",
        marginLeft: 15,
        flex: 1
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
        alignSelf: "center",
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

export default CreateAccountScreen;