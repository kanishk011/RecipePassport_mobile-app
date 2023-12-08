import React, { useState } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // You can use other icon libraries as well
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image'

const RecentRecipes = () => {

    const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

    const cards = [
        {
            title: `Paella (Pan-seared rice)`,
            image: require('../../../images/recentRecipes.png'),
            cookerName: 'By Andrew Jun',
            description: ""
        },
        {
            title: 'Tasty grilled meat and vegetables',
            image: require('../../../images/savedRecipes2.png'),
            cookerName: 'Marry Kom',
        },
        {
            title: 'Card 3',
            image: require('../../../images/savedRecipes1.png'),
            //   text: 'This is the third card.',
        },
        // {
        //   title: 'Card 4',
        // image: require('../../../images/myRecipes1.png'),
        //   text: 'This is the fourth card.',
        // },
        // {
        //   title: 'Card 5',
        // image: 'image4.jpg',
        //   text: 'This is the fifth card.',
        // },
    ];

    return (
        <ScrollView
            horizontal
            contentContainerStyle={styles.cardGallery}
            showsHorizontalScrollIndicator={false}
        >
            {cards.map((card, index) => (

                <View key={index} style={styles.card}>
                    {/* <LinearGradient
                        colors={['#4c669f', '#3b5998', '#192f6a']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ borderRadius: 8, overflow: 'hidden' }}
                    > */}
                    {/* <Image source={{ uri: card.image }} style={styles.cardImage} /> */}
                    <TouchableOpacity
                        style={{
                            flex: 1,
                        }}
                        onPress={() => setIsDescriptionVisible(!isDescriptionVisible)}
                    >
                        <FastImage
                            source={card.image}
                            style={styles.cardImage}

                        />

                    </TouchableOpacity>
                    {isDescriptionVisible &&
                        <Text>This is the image description.</Text>
                    }

                    <View style={styles.heartCardView}>
                        <Icon
                            name="heart"
                            size={18}
                            style={{
                                color: "white",
                            }}
                        />
                    </View>

                    {/* </LinearGradient> */}
                    <Text style={styles.cardTitle}>{card.title}</Text>
                    <View style={styles.timeCardView}>

                        <Text style={styles.cardTime} >
                            {card.cookerName}
                        </Text>
                    </View>
                </View>


            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    heartCardView: {
        position: "absolute",
        alignSelf: "flex-end",
        paddingTop: 5,
        paddingEnd: 10,
    },
    timeCardView: {
        position: "absolute",
        marginStart: 15,
        marginTop: "75%",
        flex: 1,
        flexDirection: "row"
    },
    cardTime: {
        lineHeight: 16.9,
        color: "#B2BBB2",
        fontSize: 8.5,
        fontWeight: "400",
        fontFamily: "Montserrat-Regular",

    },
    cardGallery: {
        flexDirection: 'row',
        backgroundColor: "white",
    },
    card: {
        marginTop: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        width: 161,
        flex: 1,
        marginRight: 20

    },
    cardImage: {
        width: 161,
        height: 140,
        borderRadius: 10,
    },
    cardTitle: {
        color: "#FFF",
        fontSize: 13,
        fontWeight: '600',
        marginTop: "55%",
        marginStart: 15,
        position: "absolute",
        fontFamily: "Cabin-Regular",
        flex: 1,
        flexGrow: 1,
    }

});

export default RecentRecipes;
