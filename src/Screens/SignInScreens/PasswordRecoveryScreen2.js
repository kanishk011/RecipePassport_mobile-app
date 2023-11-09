import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, BackHandler } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use other icon libraries as well
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const PasswordRecoveryScreen2 = ({ navigation }) => {
    const CELL_COUNT = 4;
    const [value, setValue] = React.useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const handleNext = () => {
        navigation.navigate("PasswordRecoveryScreen3")
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