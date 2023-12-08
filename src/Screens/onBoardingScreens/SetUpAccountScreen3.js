import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import { Image } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use other icon libraries as well
import FoodRestriction from "./Components/FoodRestriction";


const SetUpAccountScreen3 = ({ navigation }) => {
    const [isCheckedEnglish, setCheckedEnglish] = useState(false);

    const [selectedOption, setSelectedOption] = useState('option');

    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };

    const handleNextStep = () => {
        navigation.navigate("SetUpAccountScreen4")
    }


    const handlePrevious = () => {
        // navigation.goBack(null);
        navigation.navigate("SetUpAccountScreen2")

    }
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
                    <TouchableOpacity style={styles.PaginationView}>
                        <Text style={styles.PaginationNumber}  >
                            2
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.PaginationView, {
                        borderColor: "black", borderWidth: 1,
                    }]}>
                        <Text style={[styles.PaginationNumber, { color: "black", fontWeight: "bold" }]}  >
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





                {/*HEADING 1  */}

                <View>
                    <Text style={styles.PreferenceLanguageText}>
                        Do you have any dietary restrictions?
                    </Text>
                </View>

                {/* HEADING  2 */}


                <View>
                    <Text style={styles.SelectLanguageText}>
                        {`This will help us curate more recipe 
experiences for you.`}
                    </Text>
                </View>



                {/* OTHERS  */}

                {/* ITEMS LIST */}
                <View style={{
                    paddingEnd: 10,
                    marginTop: "5%",
                    flex: 1,
                    flexDirection: 'row', // For horizontal alignment
                    justifyContent: 'space-evenly', // To evenly distribute the boxes horizontally
                    alignItems: 'center',
                }}>


                    <FoodRestriction
                        label="None"
                    // selected={selectedOption === 'option2'}
                    // onSelect={() => handleSelectOption('option2')}
                    />

                    <FoodRestriction
                        label="Vegan"
                    // selected={selectedOption === 'option2'}
                    // onSelect={() => handleSelectOption('option2')}
                    />
                    <FoodRestriction
                        label="Lactose Intolerance"
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
                    <FoodRestriction
                        label="Shellfish Allergy"
                        selected={selectedOption === 'option2'}
                        onSelect={() => handleSelectOption('option2')}
                    />


                    <FoodRestriction
                        label="Soy Allergy"
                        selected={selectedOption === 'option2'}
                        onSelect={() => handleSelectOption('option2')}
                    />
                    <FoodRestriction
                        label="Pescatarian"
                        selected={selectedOption === 'option3'}
                        onSelect={() => handleSelectOption('option3')}
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
        </View>

    )

};

const styles = StyleSheet.create({

    ItemsStyleText: {
        color: "#001E00",
        fontFamily: "Montserrat-Regular",
        fontWeight: "500",
        fontSize: 14,
        alignSelf: "center",
        marginTop: "2%",
        paddingVertical: 1,
        paddingHorizontal: 5

    },
    ItemsStyleView:
    {
        width: "100%",
        height: 35,
        borderWidth: 0.5,
        borderColor: 'black',
        marginLeft: 10,
        borderRadius: 100,
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
        marginRight: 100
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
        paddingHorizontal: "10%",
        borderRadius: 100,
        width: "50%",
        alignSelf: "center",
        height: 50,
        borderWidth: 0.5,
        borderColor: 'black',
    },

    TextInputView: {
        width: "60%",
        height: 40,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#FFFFFF',
        paddingLeft: 10,
        elevation: 4,
        borderRadius: 100,
        alignSelf: "flex-start",
    },
    TextInputStyle: {
        fontFamily: 'Montserrat-Regular',
        marginLeft: 10,
        flex: 1,
        fontWeight: "500",
        color: "grey"


    },
    OtherStyleText: {
        fontSize: 14,
        fontWeight: "500",
        color: "black",
        fontFamily: "Montserrat-Regular",
        letterSpacing: 0.07,
        marginTop: "10%"
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

export default SetUpAccountScreen3