import React, { useState } from 'react';
import { View, Image, Text, Button } from 'react-native';

const ImageCard = ({ image, title, onPress }) => {
    return (
        <View>
            <Image style={{height:"100%",width:100}} source={image} />
            <Text>{title}</Text>
            <Button onPress={onPress} title="View More" />
        </View>
    );
};

const CategoriesDetail = () => {
    const [images, setImages] = useState([
        {
            image: require('../../../images/Categories/img1.png'),
            title: 'Image 1',
        },
        {
            image: require('../../../images/Categories/img2.png'),
            title: 'Image 2',
        },
        // {
        //   image: require('./assets/image3.jpg'),
        //   title: 'Image 3',
        // },
        // {
        //   image: require('./assets/image4.jpg'),
        //   title: 'Image 4',
        // },
        // {
        //   image: require('./assets/image5.jpg'),
        //   title: 'Image 5',
        // },
        // {
        //   image: require('./assets/image6.jpg'),
        //   title: 'Image 6',
        // },
        // {
        //   image: require('./assets/image7.jpg'),
        //   title: 'Image 7',
        // },
        // {
        //   image: require('./assets/image8.jpg'),
        //   title: 'Image 8',
        // },
        // {
        //   image: require('./assets/image9.jpg'),
        //   title: 'Image 9',
        // },
        // {
        //   image: require('./assets/image10.jpg'),
        //   title: 'Image 10',
        // },
    ]);

    const [navigateTo, setNavigateTo] = useState(null);

    const handlePress = (image) => {
        setNavigateTo(image);
    };

    if (navigateTo) {
        return (
            <View>
                <Image source={navigateTo.image} />
                <Text>{navigateTo.title}</Text>
                <Button onPress={() => setNavigateTo(null)} title="Back" />
            </View>
        );
    }

    return (
        <View>
            {images.map((image) => (
                <ImageCard
                    key={image.title}
                    image={image.image}
                    title={image.title}
                    onPress={() => handlePress(image)}
                />
            ))}
        </View>
    );
};

export default CategoriesDetail;