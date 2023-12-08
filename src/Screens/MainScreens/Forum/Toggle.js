import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, BackHandler } from "react-native";
import Groups from "../Forum/Groups"
import FeaturedTopics from "../Forum/FeaturedTopics"
import Challenges from "../Forum/Challenges"



const ForumScreen = () => {


    const [toggle1, setToggle1] = useState(true);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);

    const handleTogglePress = (toggleId) => {
        switch (toggleId) {
            case 1:
                setToggle1(true);
                setToggle2(false);
                setToggle3(false);
                break;
            case 2:
                setToggle1(false);
                setToggle2(!toggle2);
                setToggle3(false);
                break;
            case 3:
                setToggle1(false);
                setToggle2(false);
                setToggle3(!toggle3);
                break;
            default:
                break;
        }
    };




    return (
        <View>
            {/*TOGGLE*/}
            <View style={styles.container}>
                <TouchableOpacity
                    style={[
                        styles.toggle,
                        toggle1 && { backgroundColor: '#86BF3E' },
                    ]}
                    onPress={() => handleTogglePress(1)}
                >
                    <Text style={[styles.toggleText,
                    toggle1 && { color: "#FFF" },]}>
                        Featured Topics
                    </Text>

                </TouchableOpacity>



                <TouchableOpacity
                    style={[
                        styles.toggle,
                        toggle2 && { backgroundColor: '#86BF3E' },
                    ]}
                    onPress={() => handleTogglePress(2)}
                >
                    <Text style={[styles.toggleText, toggle2 && { color: "#FFF" }]}>
                        Challenges
                    </Text>

                </TouchableOpacity>


                <TouchableOpacity
                    style={[
                        styles.toggle,
                        toggle3 && { backgroundColor: '#86BF3E' },
                    ]}
                    onPress={() => handleTogglePress(3)}
                >
                    <Text style={[styles.toggleText, toggle3 && { color: "#FFF" },]}>
                        Groups
                    </Text>

                </TouchableOpacity>
            </View>

            {toggle1 && <FeaturedTopics />}
            {toggle2 && <Challenges />}
            {toggle3 && <Groups />}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "rgba(245, 246, 245, 0.80)",
        borderRadius: 45,
    },
    toggle: {
        flex: 1,
        height: 40,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(245, 246, 245, 0.80)',
        marginRight: 8,
    },
    toggleText: {
        color: '#637663',
        textAlign: "center",
        fontSize: 12,
        fontWeight: "600",
        fontFamily: 'Montserrat-Regular',
    },

});

export default ForumScreen;