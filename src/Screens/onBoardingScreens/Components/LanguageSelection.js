import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const LanguageSelection = ({ label, selected, onSelect }) => {

    return (
        <TouchableOpacity
            style={styles.toggleView}
            onPress={onSelect}>
            <View style={styles.radioButton}>
                <Text style={styles.TextStyle}>{label}</Text>
                <Icon
                    name={selected ? 'check-circle' : 'circle'}
                    size={20}
                    color={selected ? '#6AA920' : 'gray'}
                    style={{ alignSelf: "flex-end", paddingTop: 3, paddingEnd: 5 }}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    toggleView: {
        // width: "30%",
        // height: "60%",
        // alignContent:"center",
        borderWidth: 0.5,
        borderColor: 'black',
        marginLeft: 10,
        borderRadius: 100,
        marginTop: "5%",
        flex:1

    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flex:1,
        alignSelf:"center"
    },
    TextStyle: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Montserrat-Regular",
        color: "black",
        textAlign: "center",
        // marginRight: 10,
        flex: 1,
        letterSpacing: 0.07
    },
});

export default LanguageSelection;
