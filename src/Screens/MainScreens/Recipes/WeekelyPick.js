import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // You can use other icon libraries as well
import LinearGradient from 'react-native-linear-gradient';

const WeekelyPick = () => {
    const cards = [
        {
            cardTitle1: "Weekly Pick",
            image: require('../../../images/weekelyPic1.png'),
            cardTitle2: `This Italian pasta and steak will 
warm up the faintest of hearts`,
        },
        {
            cardTitle1: 'Tasty grilles',
            image: require('../../../images/myRecipes2.png'),
            cardTitle2: `This Italian pasta and steak will 
warm up the faintest of hearts`,
        },
        {
            cardTitle1: 'Card 3',
            image: require('../../../images/myRecipes1.png'),
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


                    <Image source={card.image} style={styles.cardImage} />
                    {/* </LinearGradient> */}
                    <Text style={styles.cardTitle1}>{card.cardTitle1}</Text>
                    <View style={styles.cardTitleView2}>
                        <Text style={styles.cardTitle2} >
                            {card.cardTitle2}
                        </Text>
                    </View>
                    <Icon
                        name="play"
                        size={40}
                        style={{
                            color: "#FFF",
                            flex: 1,
                            position: "absolute",
                            alignSelf: "flex-end",
                            marginTop: "40%",
                            marginRight: "2%"
                        }}
                    />
                </View>


            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    cardTitleView2: {
        position: "absolute",
        marginTop: "40%",
        flex: 1,
        flexDirection: "row",
        alignContent: "space-between"

    },
    cardTitle2: {
        color: "#C9CDC9",
        fontSize: 13,
        fontWeight: "400",
        fontFamily: "Montserrat-Regular",
        paddingStart: 20

    },
    cardGallery: {
        flexDirection: 'row',
        backgroundColor: "white",
    },
    card: {
        marginTop: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        width: 335,
        flex: 1,
        marginRight: 20

    },
    cardImage: {
        width: 335,
        height: 194,
        borderRadius: 10,
    },
    cardTitle1: {
        color: "#FFF",
        fontSize: 23,
        fontWeight: '600',
        marginTop: "30%",
        marginStart: 15,
        position: "absolute",
        fontFamily: "Cabin-Regular",
        flex: 1,
        flexGrow: 1,

    },

});

export default WeekelyPick;
