import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SkillsSelection = ({ label, selected, onSelect }) => {

    return (
        <TouchableOpacity
            style={styles.toggleView}
            onPress={onSelect}>
            <View>
                <View style={styles.radioButton}>

                    <Text style={styles.TextStyle}>{label}</Text>
                    <Icon
                        name={selected ? 'check' : 'circle-thin'}
                        size={20}
                        color={selected ? '#6AA920' : 'gray'}
                        style={{alignSelf:"flex-end",marginTop:10,marginEnd:10 }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    toggleView: {
        // width: "50%",
        // height: "80%",
        borderWidth: 0.5,
        borderColor: 'black',
        alignSelf: "center",
        marginLeft: 20,
        borderRadius: 100,
        marginTop: "5%",
        flex:1
    },
    radioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flex:1
    },
    TextStyle: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: "500",
        fontFamily: "Montserrat-Regular",
        color: "black",
        textAlign: "center",
        marginRight: 10,
        flex:1,
        letterSpacing:0.07
    },
});

export default SkillsSelection;
