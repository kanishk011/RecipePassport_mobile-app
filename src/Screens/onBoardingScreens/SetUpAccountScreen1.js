import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Button } from "react-native";
import { Image } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use other icon libraries as well
import LanguageSelection from "./Components/LanguageSelection";


const SetUpAccountScreen1 = ({ navigation }) => {
    const [isCheckedEnglish, setCheckedEnglish] = useState(false);

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };

    const handleNextStep = () => {
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
                    <TouchableOpacity style={[styles.PaginationView, {
                        borderColor: "black", borderWidth: 1,
                    }]}>
                        <Text style={[styles.PaginationNumber, { color: "black", fontWeight: "bold" }]}  >
                            1
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.PaginationView}>
                        <Text style={styles.PaginationNumber}  >
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





                {/* LANGUAGE PREFERENCE TEXT  */}

                <View>
                    <Text style={styles.PreferenceLanguageText}>
                        What's your preferred language for the app?
                    </Text>
                </View>

                {/* SELECT LANGUAGE */}


                <View>
                    <Text style={styles.SelectLanguageText}>
                        {`Select the language that you'd prefer to 
use while exploring Recipe Passport.`}
                    </Text>
                </View>


                {/* LANGUAGE ICONS */}
                <View
                    style={{ flexDirection: "row" }}>
                    <LanguageSelection
                        label="English"
                        selected={selectedOption === 'option1'}
                        onSelect={() => handleSelectOption('option1')}
                    />
                    <LanguageSelection
                        label="Spanich"
                        selected={selectedOption === 'option2'}
                        onSelect={() => handleSelectOption('option2')}
                    />
                    <LanguageSelection
                        label="French"
                        selected={selectedOption === 'option3'}
                        onSelect={() => handleSelectOption('option3')}
                    />
                </View>
                {/* OTHERS LANGUAGE */}
                <View>
                    <Text style={styles.OtherStyleText}>Others (Please Specify)</Text>
                </View>
                <View
                    style={[styles.TextInputView, {
                        marginTop: '10%',
                    }]}>
                    <TextInput

                        style={styles.TextInputStyle}
                    />
                </View>

                {/* NEXT STEP */}

                <View style={{
                    flex: 1,
                    marginTop:"80%",
                    // alignSelf:'center'
                }}>

                   
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
    ButtonTextView: {
        textAlign: "center",
        marginTop: 10,
        fontSize: 16,
        fontFamily: "Montserrat-Regular",
        color: "#FFF",
        fontWeight: "600",
    },
    ButtonView: {
        backgroundColor: "#86BF3E",
        borderRadius: 100,
        width: "90%",
        height: 50,
        flex: 1,
        // alignSelf:"baseline",
        // flexWrap:"nowrap"

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

export default SetUpAccountScreen1