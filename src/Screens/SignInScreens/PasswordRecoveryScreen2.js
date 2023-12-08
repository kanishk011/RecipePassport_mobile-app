import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, BackHandler } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use other icon libraries as well
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AuthContext from "../../Context/AuthContext";
import { setData, getData } from "../utilites/AsyncStorageUtili";
import { useRoute } from '@react-navigation/native';


const PasswordRecoveryScreen2 = () => {
    const CELL_COUNT = 4;
    const [value, setValue] = React.useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue, });

    const { verifyOTP, state, } = useContext(AuthContext);

    const route = useRoute();
    let { email } = route.params;


    const handleNext = () => {
        verifyOTP(email, value);
    }




    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.heading1}>
                    {`Check your email`}
                </Text>

                <Text style={styles.heading2}>
                    We’ve sent the code to your email
                </Text>

                {/* TEXT INPUT */}
                <View>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.codeFieldRoot}
                        keyboardType="number-pad"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell, styles.TextInput1, {
                                    backgroundColor: symbol ? '#FFFFFF' : '#FFFFFF',

                                }]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        )}
                    />
                </View>

                {/* ERROR MESSAGE  */}
                {state.error && <Text style={styles.errorText}>{state.error}</Text>}

                {/* CONTINUE */}

                <View style={styles.ButtonView}>
                    <TouchableOpacity
                        onPress={handleNext}
                    >
                        <Text style={styles.ButtonTextView}>
                            Next
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
        marginStart: "7%",
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        fontWeight: "600",
        marginTop: "5%"
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
    TextInput1: {
        width: 70,
        height: 70,
        lineHeight: 50,
        fontSize: 32,
        borderWidth: 2,
        borderColor: '#C9CDC9',
        textAlign: 'center',
        borderRadius: 20,
        color: '#052C05',
        padding: "2%",
        // alignSelf:"center",
        fontFamily: "cabin-Regular",
    },
    codeFieldRoot: {
        margin: "10%",
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

    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "white",
    },




});

export default PasswordRecoveryScreen2;