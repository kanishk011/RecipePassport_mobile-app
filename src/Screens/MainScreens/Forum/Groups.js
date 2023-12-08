import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'; // You can use other icon libraries as well


const Groups = () => {

    return (
        <ScrollView style={styles.container}>



        <View style={styles.topProfileView}>
            <Text style={styles.heading1}>
                All Groups
            </Text>
            <Icon
                name="menuunfold"
                size={24}
                style={styles.fliterIcon}
            />
        </View>


{/* GROUP LIST */}
        <View style={styles.viewStyle} >

        </View>


    </ScrollView>
    );
};

const styles = StyleSheet.create({
    viewStyle:{
        marginTop:"4%"
    },
  

    fliterIcon: {
        color: "#637663"
    },
    heading1: {
        fontSize: 18,
        color: "#001E00",
        fontFamily: "Cabin-Regular",
        marginStart: 10,
        fontWeight: "600",
    },
    topProfileView: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginTop: "4%",
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "white",
    },

})
export default Groups
