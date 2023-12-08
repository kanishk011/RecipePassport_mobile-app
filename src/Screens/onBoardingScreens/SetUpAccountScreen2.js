import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import { Image } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use other icon libraries as well
import DislikeItems from "./Components/DislikeItems";


const SetUpAccountScreen2 = ({ navigation }) => {

    const [selectedOption, setSelectedOption] = useState('');

    const [isChecked, setChecked] = useState(false);


    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };


    const containerStyle = {
        backgroundColor: isChecked ? 'white' : '#86BF3E',
    };

    const handleNextStep = () => {
        navigation.navigate("SetUpAccountScreen3")
    }


    const handlePrevious = () => {
        // navigation.goBack(null);
        navigation.navigate("SetUpAccountScreen1")

    }

    const dataItems = [
        { id: 1, itemName: "🍅 Tomato" },
    ]
    const handleSkip = () => {
        navigation.navigate("SetUpAccountScreen5")

    }


    return (
        <View style={styles.container}>
            <ScrollView>

                {/* PAGINATION */}
                <View style={{
                    flexDirection: "row",
                    marginTop: "10%",
                    justifyContent: "space-between",
                    flex: 1
                }}>
                    <TouchableOpacity style={styles.PaginationView}>

                        <Text style={styles.PaginationNumber}  >
                            1
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.PaginationView, {
                        borderColor: "black", borderWidth: 1,
                    }]}>
                        <Text style={[styles.PaginationNumber, { color: "black", fontWeight: "bold" }]}  >
                            2
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.PaginationView}>
                        <Text style={styles.PaginationNumber}  >
                            3
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.PaginationView}>
                        <Text style={styles.PaginationNumber}  >
                            4
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.PaginationView}>
                        <Text style={styles.PaginationNumber}  >
                            5
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style=
                        {
                            {
                                flex: 1,
                                alignItems: 'flex-end'

                            }
                        }
                        onPress={handleSkip}
                    >
                        <Text style={styles.SkipText}>Skip</Text>
                    </TouchableOpacity>
                </View>





                {/* HEADING 1  */}

                <View>
                    <Text style={styles.PreferenceLanguageText}>
                        {`Do you have any 
allergies or dislikes?`}
                    </Text>
                </View>

                {/* HEADING 2 */}


                <View>
                    <Text style={styles.SelectLanguageText}>
                        {`This will help us curate more recipe
experiences for you.`}
                    </Text>
                </View>


                {/* ITEMS LIST */}
                <View style={{
                    paddingEnd: 10,
                    marginTop: "5%",
                    flex: 1,
                    flexDirection: 'row', // For horizontal alignment
                    justifyContent: 'space-evenly', // To evenly distribute the boxes horizontally
                    alignItems: 'center',
                }}>

                    <DislikeItems
                        label={dataItems.map(item => item.itemName)}
                        // selected={selectedOption === 'option1'}
                        // onSelect={() => handleSelectOption('option1')}
                    />

                    <DislikeItems
                        label="🍌 Banana"
                        // selected={selectedOption === 'option2'}
                        // onSelect={() => handleSelectOption('option2')}
                    />
                    <DislikeItems
                        label="🍄 Mushroom"
                        // selected={selectedOption === 'option3'}
                        // onSelect={() => handleSelectOption('option3')}
                    />
                    
                </View>
                <View style={{
                    paddingEnd: 10,
                    marginTop: "5%",
                    flex: 1,
                    flexDirection: 'row', // For horizontal alignment
                    justifyContent: 'space-evenly', // To evenly distribute the boxes horizontally
                    alignItems: 'center',
                }}>

                    <DislikeItems
                        label={"🍗  Chicken"}
                        // selected={selectedOption === 'option1'}
                        // onSelect={() => handleSelectOption('option1')}
                    />

                    <DislikeItems
                        label="🌶   Chilly"
                        // selected={selectedOption === 'option2'}
                        // onSelect={() => handleSelectOption('option2')}
                    />
                    <DislikeItems
                        label="🥕   Carrot"
                        // selected={selectedOption === 'option3'}
                        // onSelect={() => handleSelectOption('option3')}
                    />
                </View>


                {/* BUTTON */}

                <View style={
                    {
                        flexDirection: "row",
                        marginTop: "100%",
                        flex: 1,
                        alignContent: "space-around"
                    }}>

                    <TouchableOpacity
                        style={styles.ButtonView1}
                        onPress={handlePrevious}
                    >
                        <Text style={styles.ButtonTextView1}>
                            Previous

                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.ButtonView}
                        onPress={handleNextStep}
                    >
                        <Text style={styles.ButtonTextView}>
                            Next Step
                        </Text>
                    </TouchableOpacity>

                </View>


            </ScrollView>
        </View >
    )

};

const styles = StyleSheet.create({

    ItemsStyleText: {
        color: "#001E00",
        fontFamily: "Montserrat-Regular",
        fontWeight: "500",
        fontSize: 14,
        alignSelf: "center",
        marginTop: "2%"
    },
    ItemsStyleView:
    {
        width: "30%",
        height: 35,
        borderWidth: 0.5,
        borderColor: 'black',
        alignSelf: "center",
        marginLeft: 10,
        borderRadius: 100,
        marginTop: "5%"
    },
    ButtonTextView: {
        flex: 1,
        position: "absolute",
        marginTop: 10,
        fontSize: 16,
        fontFamily: "Montserrat-Regular",
        color: "#FFF",
        fontWeight: "600",
        paddingHorizontal: "10%",
        textAlign: "center",
        alignSelf: "center"
    },
    ButtonView: {
        backgroundColor: "#86BF3E",
        // marginTop: "10%",
        paddingHorizontal: "10%",
        borderRadius: 100,
        width: "50%",
        alignSelf: "center",
        height: 50,
    },
    ButtonTextView1: {
        paddingHorizontal: "10%",
        flex: 1,
        position: "absolute",
        marginTop: 10,
        fontSize: 16,
        fontFamily: "Montserrat-Regular",
        color: "black",
        fontWeight: "600",
        textAlign: "center",
        alignSelf: "center"

    },
    ButtonView1: {
        backgroundColor: "white",
        // marginTop: "10%",
        // paddingHorizontal: "10%",
        borderRadius: 100,
        width: "50%",
        // alignSelf: "center",
        height: 50,
        borderWidth: 0.5,
        borderColor: 'black',
    },



    SelectLanguageText: {
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "Montserrat-Regular",
        marginTop: "8%"
    },
    PreferenceLanguageText: {
        fontSize: 30,
        fontWeight: "700",
        color: "black",
        // fontFamily: "Cabin-Regular",
        fontFamily: "Montserrat-Regular",
        marginTop: "10%"
    },
    SkipText: {

        color: "#F85657",
        fontSize: 16,
        fontWeight: '500',
        fontFamily: "Montserrat-Regular",
        // position: 'absolute', // Position the skip button absolutely
    },
    PaginationNumber:
    {
        flex: 1,
        alignSelf: "center",
        marginTop: "10%",
        fontFamily: "Montserrat-Regular",
        color: "grey"
    },
    PaginationView: {
        backgroundColor: "white",
        borderRadius: 100,
        width: 30,
        height: 30,
        borderWidth: 0.5,
        borderColor: "grey",
        marginLeft: 5,

    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "white",

    },
})

export default SetUpAccountScreen2