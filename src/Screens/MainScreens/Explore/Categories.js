import React from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // You can use other icon libraries as well
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image'

const Categories = ({ navigation }) => {

    // const handlePress = (imageId) => {
    //     navigation.navigate('Home', { imageId });
    // };

    const data = [
        {
            id: 1,
            image: require('../../../images/Categories/img1.png'),
            categoriesName: "Korean",

        },
        {
            id: 2,
            image: require('../../../images/Categories/img2.png'),
            categoriesName: "Australian"

        },
        {
            id: 3,
            image: require('../../../images/Categories/img3.png'),
            categoriesName: "American"

        },
        {
            id: 4,
            image: require('../../../images/Categories/im4.png'),
            categoriesName: "Mexican"

        },
        {
            id: 5,
            image: require('../../../images/Categories/img5.png'),
            categoriesName: "French"

        },
        {
            id: 6,
            image: require('../../../images/Categories/img6.png'),
            categoriesName: "Brazilian"

        },
        {
            id: 7,
            image: require('../../../images/Categories/img7.png'),
            categoriesName: "Nigerian"

        },
        {
            id: 8,
            image: require('../../../images/Categories/img8.png'),
            categoriesName: "Italian"

        },
        {
            id: 9,
            image: require('../../../images/Categories/img9.png'),
            categoriesName: "Chinese"

        },
        {
            id: 10,
            image: require('../../../images/Categories/img10.png'),
            categoriesName: "Indian"

        },
        {
            id: 11,
            image: require('../../../images/Categories/img11.png'),
            categoriesName: "Afganistan"
            // 
        },
        {
            id: 12,
            image: require('../../../images/Categories/img12.png'),
            categoriesName: "Pakistan"

        },
        // Add more image data objects as needed
    ];


    return (
        <ScrollView>
            <View style={styles.container}>
                {data.map(item => (
                    <View
                        key={item.id}
                        style={styles.card}

                    >
                        <TouchableOpacity >

                            <FastImage source={item.image} style={styles.image} />
                            <LinearGradient
                                colors={['#0000004D', '#0000004D']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.gradient}
                            />
                            <Text style={styles.categoriesName}>{item.categoriesName}</Text>
                        </TouchableOpacity>
                    </View>

                ))}
            </View>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',

    },
    categoriesName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFF",
        position: "absolute",
        // textAlign: "center",
        // justifyContent: "center",
        flex: 1,
        alignSelf: 'center',
        fontFamily: 'Montserrat-Regular',
        marginTop: "20%"
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: "10%"
    },
    card: {
        width: '45%',
        margin: 5,
        borderRadius: 15,
        overflow: 'hidden',
        marginHorizontal: "2%"
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        // backgroundColor: "grey"
    },

});

export default Categories;
