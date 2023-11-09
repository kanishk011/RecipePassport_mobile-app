import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign'; // You can use other icon libraries as well

const PasswordRecoveryScreen3 = ({ navigation }) => {




    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const handleRedirecting = () => {
        // useEffect(()=>{},[])
        navigation.navigate("LogInScreen")

    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.heading1}>

                    Reset your password
                </Text>
                <Text style={styles.heading2}>

                    Please enter your new password
                </Text>
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


                {/* PASSWORD MUST BE TEXT */}
                <View style={{ flex: 1, flexDirection: "row", marginTop: '5%', marginStart: "5%" }}>
                    <View style={styles.checkBoxView}>
                        <Icon
                            name="check"
                            size={12}
                            style={[styles.tickIcon]}
                        />
                    </View>
                    <Text style={styles.passText}> At least 8 characters</Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row", marginTop: '5%', marginStart: "5%" }}>
                    <View style={styles.checkBoxView}>
                        <Icon
                            name="check"
                            size={12}
                            style={[styles.tickIcon]}
                        />
                    </View>
                    <Text style={styles.passText}>
                        Contains a number
                    </Text>
                </View>
                <View style={{ flex: 1, flexDirection: "row", marginTop: '5%', marginStart: "5%" }}>
                    <View style={styles.checkBoxView}>
                        <Icon
                            name="check"
                            size={12}
                            style={[styles.tickIcon]}
                        />
                    </View>
                    <Text style={styles.passText}>
                        Contains a special character
                    </Text>
                </View>



                {/* DONE */}

                <View style={styles.ButtonView}>
                    <TouchableOpacity
                        onPress={toggleModal}
                    >
                        <Text style={styles.ButtonTextView}>
                            Done
                        </Text>
                    </TouchableOpacity>
                </View>


                {/* MODAL  */}
                <Modal visible={isModalVisible} animationType="slide" transparent>
                    <View style={styles.modal}>
                        <View style={styles.ModalLayout}>

                            <View>
                                <Icon
                                    name={'checkcircleo'}
                                    size={61}
                                    style={styles.iconStyle}
                                />
                            </View>


                            <Text style={[styles.SuccessText]}>
                                Reset Password Successful!
                            </Text>

                            <View style={{ justifyContent: "center", marginTop: "5%" }}>
                                <Text style={styles.CreateAccText}>
                                    Your password has been
                                </Text>
                                <Text style={styles.CreateAccText}>
                                    successfully changed.
                                </Text>

                                {/* SIGN IN */}

                                {/* <View style={styles.ButtonViewModal}> */}
                                <TouchableOpacity
                                    style={styles.ButtonViewModal}
                                    onPress={handleRedirecting}
                                >
                                    <Text style={styles.ButtonTextViewModal}>
                                        Sign in                                        </Text>
                                </TouchableOpacity>
                                {/* </View> */}

                            </View>

                        </View>
                    </View>
                </Modal>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    iconStyle: {
        alignSelf: "center",
        color: "#86BF3E",
        marginTop: "10%"

    },

    ButtonTextViewModal: {
        // flex: 1,
        // position: "absolute",
        marginTop: 10,
        fontSize: 16,
        fontFamily: "Montserrat-Regular",
        color: "#FFF",
        fontWeight: "600",
        // paddingHorizontal: "20%",
        // textAlign: "right",
        marginStart:"40%"
    },
    ButtonViewModal: {
        backgroundColor: "#86BF3E",
        marginTop: "10%",
        borderRadius: 100,
        width: "70%",
        height: 50,
        alignSelf: "center",
        
    },
    CreateAccText: {
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "Montserrat-Regular",
        // marginTop: "8%",
        alignSelf: "center",

    },
    SuccessText: {
        fontSize: 24,
        fontWeight: "700",
        color: "black",
        alignSelf: "center",
        // fontFamily: "Cabin-Regular",
        fontFamily: "Montserrat-Regular",
        marginTop: "10%"
    },
    ModalLayout: {
        backgroundColor: "white",
        height: "50%",
        width: "90%",
        borderRadius: 12,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },

    passText: {
        color: "rgba(99, 118, 99, 0.60)",
        fontWeight: "500",
        fontFamily: 'Montserrat-Regular',
    },
    checkBoxView:
    {
        backgroundColor: "#C9CDC9",
        height: 24,
        width: 24,
        borderRadius: 100,
        marginEnd: 5
    },
    tickIcon: {
        marginTop: 4,
        alignSelf: "center"
    },
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

export default PasswordRecoveryScreen3;