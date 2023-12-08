import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, BackHandler, Linking } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use other icon libraries as well
import AuthContext from "../../Context/AuthContext";
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { setData, getData } from "../utilites/AsyncStorageUtili";

const LogInScreen = () => {
    // useEffect(() => {
    //     const handleBackButton = () => {
    //         // Add your custom logic here to handle the back button press.
    //         // You can check the current state to determine what to do.
    //         // For example, you can navigate back, show an alert, or prevent the action.

    //         // Example: Navigate back using React Navigation (if you're using it)
    //         // BackHandler.removeEventListener();
    //         BackHandler.exitApp();

    //         // Default behavior (prevent the back action)
    //         return true;
    //     };
    //     BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    //     return () => {
    //         BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    //     };
    // }, []);

    // const openFacebookProfile = () => {
    //     const facebookProfileUrl = 'https://www.facebook.com/kanishk.sto/'; // Replace with the actual profile URL
    //     Linking.openURL(facebookProfileUrl).catch((err) => console.error('An error occurred', err));
    // };
    const navigation = useNavigation();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);


    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const { signIn, state, clearErrorMessage } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        signIn(email, password);
    };
    useFocusEffect(
        React.useCallback(() => {
            setEmail('')
            setPassword('')
            setIsPasswordVisible(false)
            clearErrorMessage();
            // Clear inputs and errors when the screen is focused
            return () => {
                // Clean up the effect if needed
            };
        }, [])
    );

    const handleSignUp = () => {
        navigation.navigate("OnBoardingScreen")

    }

    const handleForgetPassword = () => {
        navigation.navigate("PasswordRecoveryScreen1")

    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text
                    style=
                    {{
                        fontSize: 32,
                        color: "#000000",
                        // fontFamily: "Cabin-Regular",
                        fontFamily: "Montserrat-Regular",
                        marginStart: 10,
                        marginTop: "20%",
                        fontWeight: "700",
                    }}>

                    {`Welcome Back! `}
                </Text>
                <Text
                    style=
                    {{
                        fontSize: 16,
                        fontWeight: "400",
                        fontFamily: 'Montserrat-Regular',
                        color: "#354D35",
                        marginTop: "3%",
                        marginStart: 10,

                    }}
                >
                    Please enter your login details below!
                </Text>

                {/* EMAIL ADDRESS */}
                <View
                    style={[styles.TextInputView, { marginTop: '10%' }]}>
                    <Icon
                        name="envelope-o"
                        size={24}
                        style={styles.TextInputIcon}
                    />
                    <TextInput
                        placeholder="Email address"
                        placeholderTextColor="#637663"
                        style={styles.TextInputStyle}
                        value={email}
                        onChangeText={setEmail}

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
                        secureTextEntry={!isPasswordVisible}
                        value={password}
                        onChangeText={setPassword}
                    />

                    <Icon
                        name={isPasswordVisible ? 'eye-slash' : 'eye'}
                        onPress={togglePasswordVisibility}
                        size={24}
                        style={[styles.TextInputIcon, { marginEnd: 15 }]}
                    />
                </View>
                {/* FORGET PASSWORD */}
                <View
                    style=
                    {{
                        flexDirection: "row-reverse",
                        marginStart: 20,
                        marginTop: 20
                    }}>
                    <TouchableOpacity
                        onPress={handleForgetPassword}
                    >
                        <Text
                            style=
                            {{
                                color: "#6AA920",
                                fontSize: 14,
                                fontFamily: 'Montserrat-Regular',
                                fontWeight: "500",
                            }}
                        >
                            Forgot password?
                        </Text>
                    </TouchableOpacity>

                </View>

                {/* ERROR MESSAGE  */}

                {/* {state.error && <Text style={{ color: 'red', marginStart:20 }}>{state.error}</Text>} */}

                {state.error && <Text style={styles.errorText}>{state.error}</Text>}



                {/* CONTINUE */}
                <TouchableOpacity
                    style={styles.ButtonView}
                    onPress={handleLogin}
                >

                    <Text style={styles.ButtonTextView}>
                        Login
                    </Text>

                </TouchableOpacity>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: "10%" }}>
                    <View style={{ flex: 1, height: 0.5, backgroundColor: 'grey' }} />
                    <View>
                        <Text style=
                            {{
                                width: 120,
                                textAlign: 'center',
                                fontFamily: "Montserrat-Regular",
                                fontSize: 12,
                                fontWeight: "500",
                                color: "grey"
                            }}>
                            Or Login with </Text>
                    </View>
                    <View style={{ flex: 1, height: 0.5, backgroundColor: 'grey' }} />
                </View>

                {/* ACOOUNTS */}
                <View style=
                    {{
                        flexDirection: "row",
                        gap: 15,
                        marginTop: 20,
                        flex: 1
                    }}>

                    <TouchableOpacity
                        style=
                        {{
                            // backgroundColor: "white",
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
                                    alignSelf: "center"
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
                        marginTop: 30
                    }}>
                    <Text
                        style=
                        {{
                            fontWeight: "500",
                            fontSize: 15,
                            fontFamily: "Montserrat-Regular",
                            color: "black"
                        }}

                    >
                        Don’t have account with us?
                    </Text>
                    <TouchableOpacity
                        onPress={handleSignUp}
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
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    errorText: {
        color: 'red',
        marginStart: "5%",
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        fontWeight: "600",
    },
    iconAccView: {
        flexDirection: "row",
        flex: 1,
        alignSelf: "center"
    },
    accView: {
        backgroundColor: "white",
        // marginTop: "10%",
        borderRadius: 200,
        width: 48,
        alignSelf: "center",
        height: 48,
        // paddingVertical: 16,
        paddingHorizontal: 0,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "grey",
        // marginLeft: 15,
        // flex: 1
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

export default LogInScreen;