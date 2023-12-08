import React, { useEffect, useState, useMemo, useCallback } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, BackHandler, Modal, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; // You can use other icon libraries as well
import MyRecipes from "./Profile/MyRecipes";
import SavedRecipes from "./Profile/SavedRecipes";
import SavedChallenages from "./Profile/savedChallenages"
import { getData } from "../utilites/AsyncStorageUtili";
import axios from 'axios';
import { useRoute } from '@react-navigation/native';



const ProfileScreen = ({ navigation }) => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    useEffect(() => {
        const handleBackButton = () => {
            // BackHandler.removeEventListener();
            navigation.goBack("RecipesScreen")
            // BackHandler.exitApp();

            return true;
        };
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        };
    }, []);

    const handleRedirecting = () => {
        // useEffect(()=>{},[])
        navigation.navigate("LogInScreen")

    }
    // const [email, setEmail] = useState('')
    // const [fullName, setFullName] = useState('')

    // useEffect(() => {
    //     const fetchProfile = async () => {
    //         const fullName = await getData("fullName");
    //         const email = await getData("email");
    //         if (email, fullName) {
    //             setEmail(email);
    //             setFullName(fullName);
    //         }
    //     };
    //     fetchProfile();
    // }, []);

    const handleSignOut = () => {
        navigation.navigate("LogInScreen")
    }

    const [userData, setUserData] = useState(null);
    useEffect(() => {
        // Use the user ID from the registration response or other means
        const route = useRoute();

        const { userId } = route.params;

        // Replace 'YOUR_SERVER_API_URL' with the actual URL of your Node.js server
        axios.get(`http://10.0.2.2:3000/user/${userId}`)
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });
    }, []);



    return (
        <ScrollView style={styles.container}>


            {/* MODAL SETTINGS */}
            <Modal visible={isModalVisible} animationType="slide" transparent>
                <View style={styles.modal}>
                    <View style={styles.ModalLayout}>

                        <TouchableOpacity
                            onPress={handleSignOut}
                            style={styles.modalLogoutView}>
                            <Icon
                                name={'logout'}
                                size={30}
                                style={styles.modalIconStyle}
                            />
                            <Text style={styles.modalTextStyle}>
                                Sign Out
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            {/* PROFILE AND SETTINGS */}
            <View >
                <View style={styles.topProfileView}>
                    <Text style={styles.heading1}>
                        Profile
                    </Text>
                    <Icon
                        name="setting"
                        size={24}
                        style={styles.settingIcon}
                        onPress={toggleModal}

                    />
                </View>


                {/* DISPLAY PICTURE  */}
                <View style={{ flex: 1, flexDirection: "row", }}>

                    <View style={{ marginTop: "5%", marginStart: "5%", alignSelf: "flex-start" }}>

                        <TouchableOpacity
                            onPress={""}
                            style={styles.dpView}>

                        </TouchableOpacity>
                    </View>

                    <View style={{
                        marginTop: "4%",
                        marginStart: "10%",
                        flex: 1
                    }}>
                        <Text style={styles.dpViewName}>
                            {userData.fullName}
                        </Text>
                        <Text style={styles.dpViewEmail}>
                            {userData.email}
                        </Text>
                        <TouchableOpacity style={styles.editProfileView}>
                            <Text style={styles.editProfileText}>
                                Edit Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* MY RECIPIES */}
                <View style={styles.headingView1}>
                    <Text style={styles.heading3}>
                        My Recipes
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>
                            View all
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerCard}>
                    <MyRecipes />
                </View>

                {/* SAVED RECIPES */}

                <View style={styles.headingView1}>
                    <Text style={styles.heading3}>
                        Saved Recipes
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>
                            View all
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerCard}>
                    <SavedRecipes />
                </View>



                {/* SAVED CHALLENGES */}

                <View style={styles.headingView1}>
                    <Text style={styles.heading3}>
                        Saved Challenges
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllText}>
                            View all
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerCard}>
                    <SavedChallenages />
                </View>


            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    modalIconStyle: {
        // alignSelf: "center",
        // marginVertical: "40%",
        // marginStart: "20%"
        color: "black"
    },
    modalTextStyle: {
        color: "black",
        marginStart: "10%",
        fontSize: 20,
        fontFamily: 'Montserrat-Regular',

    },
    modalLogoutView: {
        // flex: 1,
        flexDirection: "row",
        marginTop: "40%",
        marginHorizontal: "30%",
        borderRadius: 100
    },

    ModalLayout: {
        backgroundColor: "white",
        height: "40%",
        width: "90%",
        borderRadius: 12,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    topProfileView: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
        marginTop: "6%",

    },
    containerCard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewAllText: {
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
        fontFamily: 'Montserrat-Regular',
        color: "#6AA920",
        letterSpacing: 0.07

    },
    headingView1: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "2%",
        marginStart: "2%",
    },
    heading3: {
        color: "#001E00",
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "Cabin-Regular",
    },
    editProfileText: {
        color: "#001E00",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",
        fontFamily: 'Montserrat-Regular',

    },
    editProfileView: {
        width: 125,
        height: 40,
        borderRadius: 100,
        borderWidth: 1,
        marginTop: 10,
        borderColor: "#C9CDC9",
        gap: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    dpViewEmail: {
        color: "#637663",
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 18,
        fontFamily: 'Montserrat-Regular',
    },
    dpViewName: {
        color: "#001E00",
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "Cabin-Regular",
        lineHeight: 32
    },
    dpView: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "grey"
    },
    settingIcon: {
        alignSelf: "flex-end",
        color: "#6AA920",
        // justifyContent:"flex-end"
        marginRight: 10,
        marginBottom: 10
    },
    heading1: {
        fontSize: 32,
        color: "#000000",
        fontFamily: "Cabin-Regular",
        marginStart: 10,
        fontWeight: "700",
    },
    heading2: {
        fontSize: 16,
        fontWeight: "400",
        fontFamily: 'Montserrat-Regular',
        color: "#354D35",
        marginTop: "3%",
        marginStart: 10,

    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "white",
    },

});

export default ProfileScreen;