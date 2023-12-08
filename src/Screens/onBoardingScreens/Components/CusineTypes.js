import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CusineTypes = ({ label, selected, onSelect }) => {

    const [isChecked, setChecked] = useState(false);
    const toggleCheckBox = () => {
        setChecked(!isChecked);
    };
    const containerStyle = {
        backgroundColor: isChecked ? '#86BF3E' : 'white',
    };

    const isSelected = () => {
        setChecked(containerStyle)
    }
    // const colorChange = ()=>{

    //     color={isChecked ? '#6AA920' : 'gray'}

    // }
    return (
        <View style={
            {
                flex: 1,
                alignContent: "space-between",
                justifyContent: "center"

            }
        } >
            <TouchableOpacity style={[styles.ItemsStyleView, containerStyle]}
                onPress={toggleCheckBox}>
                <Text style={styles.ItemsStyleText}>
                    {label}
                    {selected ? label : isSelected}
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
        textAlign: "center",
        // marginTop: "2%",
        // paddingHorizontal:5,
        // paddingVertical:5
        flex: 1,
        marginTop:5
    },
    ItemsStyleView:
    {
        flex: 1,
        height: 35,
        borderWidth: 0.5,
        borderColor: 'black',
        marginLeft: 10,
        borderRadius: 100,
    },

});

export default CusineTypes;
