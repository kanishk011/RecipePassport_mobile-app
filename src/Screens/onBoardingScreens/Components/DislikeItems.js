import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DislikeItems = ({ label, selected, onSelect }) => {

    const [isChecked, setChecked] = useState(false);
    const toggleCheckBox = () => {
        setChecked(!isChecked);
    };
    const containerStyle = {
        backgroundColor: isChecked ? '#86BF3E' : 'white',
    };
    return (
        <View style={{ justifyContent: "space-evenly", flex: 1 ,marginHorizontal:5}} >
            <TouchableOpacity style={[styles.ItemsStyleView, containerStyle]}
                onPress={toggleCheckBox}>
                <Text style={styles.ItemsStyleText}>
                    {label}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    ItemsStyleText: {
        color: "#001E00",
        fontFamily: "Montserrat-Regular",
        fontWeight: "500",
        fontSize: 14,
        alignSelf: "center",
        marginTop: "2%",
        letterSpacing: 0.07,
        flex: 1

    },
    ItemsStyleView:
    {
        height: 35,
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 100,
        flex: 1
    },

});

export default DislikeItems;
