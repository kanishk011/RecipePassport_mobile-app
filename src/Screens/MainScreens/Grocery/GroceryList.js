import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // You can use other icon libraries as well
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image'

const GroceryList = () => {
    const data = [
        {
            id: 1,
            image: require('../../../images/Grocery/img1.png'),
            text: 'Yangnyeom Chicken',
            foodRating: "5/12 ingredients",
        },
        {
            id: 2,
            image: require('../../../images/Grocery/img2.png'),
            text: 'Sandwich with boiled egg',
            foodRating: "5/12 ingredients",

        },
        {
            id: 3,
            image: require('../../../images/Grocery/img3.png'),
            text: 'Spicy Chicken Burger',
            foodRating: "5/12 ingredients",

        },
        {
            id: 4,
            image: require('../../../images/Grocery/img4.png'),
            text: 'Fruit Nut Salad',
            foodRating: "5/12 ingredients",

        },
        {
            id: 5,
            image: require('../../../images/Grocery/img5.png'),
            text: 'Fruit blueberry toast',
            foodRating: "5/12 ingredients",

        },
        {
            id: 6,
            image: require('../../../images/Grocery/img6.png'),
            text: 'Hot Sauce Stake',
            foodRating: "5/12 ingredients",

        },
        // Add the remaining images and text here
    ];
    return (
        <ScrollView style={styles.container}>
            {data.map(({ id, image, text, foodRating }) => (
                <TouchableOpacity key={id} style={styles.itemContainer}>
                    <FastImage source={image} style={styles.image} />
                    <View style={styles.textView}>
                        <Text style={styles.text1}>{text}</Text>
                        <Text style={styles.text2}>{foodRating}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: "5%"
    },
    itemContainer: {
        flexDirection: "row",
        flex: 1,
        alignItems: 'flex-start',
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: "white",
        elevation: 5,
    },
    image: {
        width: '30%',
        height: 100, // Adjust the height as needed
        resizeMode: 'cover',
        borderRadius: 10

    },
    text1: {
        fontSize: 15,
        color: "#001E00",
        fontWeight: "600",
        fontFamily: "Cabin-Regular",
    },
    text2: {
        fontSize: 12,
        color: "#001E00",
        fontWeight: "400",
        fontFamily: 'Montserrat-Regular',
    },
    textView: {
        marginStart: "6%",
        marginTop: "5%",
        alignContent: "center",
        justifyContent: "center"

    },
});

export default GroceryList;
