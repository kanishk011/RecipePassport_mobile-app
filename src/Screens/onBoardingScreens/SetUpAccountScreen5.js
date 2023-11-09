import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Modal ,Button} from "react-native";
import { Image } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign'; // You can use other icon libraries as well
import SkillsSelection from "./Components/SkillsSelection";


const SetUpAccountScreen5 = ({ navigation }) => {
    const [isCheckedEnglish, setCheckedEnglish] = useState(false);

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };



    const handlePrevious = () => {
        // navigation.goBack(1);
        navigation.navigate("SetUpAccountScreen4")

    }

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleRedirecting = () => {
        // useEffect(()=>{},[])
        navigation.navigate("LogInScreen")

    }
    return (
        <View style={styles.container}>
            <ScrollView >

                {/* PAGINATION */}
                <View style={{
                    flexDirection: "row",
                    marginTop: "10%",
                    // justifyContent: "space-between",
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
                    <TouchableOpacity style={[styles.PaginationView, {
                        borderColor: "black", borderWidth: 1,
                    }]}>
                        <Text style={[styles.PaginationNumber, { color: "black", fontWeight: "bold" }]}  >

                            5
                        </Text>
                    </TouchableOpacity>

                </View>





                {/* LANGUAGE PREFERENCE TEXT  */}

                <View>
                    <Text style={styles.PreferenceLanguageText}>
                        Lastly, how skilled are you in the kitchen?
                    </Text>
                </View>

                {/* SELECT LANGUAGE */}


                <View>
                    <Text style={styles.SelectLanguageText}>
                        {`This will help us curate more recipe 
experiences for you.`}
                    </Text>
                </View>


                {/* SKILLS */}
                <View style={{
                    paddingEnd: 10,
                    marginTop: "5%",
                    flex: 1,
                    flexDirection: 'row', // For horizontal alignment
                    justifyContent: 'space-evenly', // To evenly distribute the boxes horizontally
                    alignItems: 'center',
                }}>

                    <SkillsSelection
                        label="Beginner"
                        selected={selectedOption === 'option1'}
                        onSelect={() => handleSelectOption('option1')}
                    />
                    <SkillsSelection
                        label="Intermediate"
                        selected={selectedOption === 'option2'}
                        onSelect={() => handleSelectOption('option2')}
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
                    <SkillsSelection
                        label="Advance"
                        selected={selectedOption === 'option3'}
                        onSelect={() => handleSelectOption('option3')}
                    />
                </View>



                {/* BUTTON */}

                <View style={
                    {
                        flexDirection: "row",
                        marginTop: "90%",
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
                        onPress={toggleModal}
                    >
                        <Text style={styles.ButtonTextView}>
                            Complete
                        </Text>
                    </TouchableOpacity>

                </View>





                {/* MODAL  */}
                <Modal visible={isModalVisible} animationType="slide" transparent>
                    <View style={styles.modal}>
                        <View style={styles.ModalLayout}>

                            <View>
                                <Icon
                                    name={'checkcircleo'}
                                    size={61}
                                    style={styles.iconStyle}
                                />
                            </View>


                            <Text style={[styles.SuccessText]}>Sign up successful!</Text>

                            <View style={{ justifyContent: "center", marginTop: "10%" }}>
                                <Text style={styles.CreateAccText}>
                                    Your account has been created.

                                </Text>
                                <Text style={styles.CreateAccText}>
                                    Please wait a moment,
                                </Text>
                                <Text style={styles.CreateAccText}>

                                    we are preparing for you...
                                </Text>

                                <View >
                                    <TouchableOpacity
                                        style={styles.ButtonViewModal}
                                        onPress={handleRedirecting}
                                    >
                                        <Text style={styles.ButtonTextViewModal}>
                                            Redirecting...                                        </Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    )

};

const styles = StyleSheet.create({
    

    ButtonTextViewModal: {
        // position: "absolute",
        marginTop: 10,
        fontSize: 16,
        fontFamily: "Montserrat-Regular",
        color: "#FFF",
        fontWeight: "600",
        // paddingHorizontal: "20%",
        // textAlign: "center",
        alignSelf:"center",
        marginStart: "35%"
    },
    ButtonViewModal: {
        backgroundColor: "#86BF3E",
        marginTop: "5%",
        borderRadius: 100,
        width: "70%",
        height: 50,
        alignSelf: "center",
        // flex:1

    },
    CreateAccText: {
        fontSize: 16,
        fontWeight: "400",
        fontFamily: "Montserrat-Regular",
        // marginTop: "8%",
        alignSelf: "center",

    },
    SuccessText: {
        fontSize: 24,
        fontWeight: "700",
        color: "black",
        alignSelf: "center",
        // fontFamily: "Cabin-Regular",
        fontFamily: "Montserrat-Regular",
        marginTop: "10%"
    },
    iconStyle: {
        alignSelf: "center",
        color: "#86BF3E",
        marginTop: "10%"

    },
    ModalLayout: {
        backgroundColor: "white",
        height: "50%",
        width: "90%",
        borderRadius: 12,
        // flex:1,
        justifyContent:"center",
        alignSelf:"center"
        

    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',

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

export default SetUpAccountScreen5