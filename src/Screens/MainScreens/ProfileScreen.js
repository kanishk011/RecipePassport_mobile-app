import React, { useEffect, useState, useMemo, useCallback } from "react";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, BackHandler, Modal, } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/AntDesign'; // You can use other icon libraries as well
import MyRecipes from "./Profile/MyRecipes";
import SavedRecipes from "./Profile/SavedRecipes";
import SavedChallenages from "./Profile/savedChallenages"



const ProfileScreen = ({ navigation }) => {


    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    useEffect(() => {
        const handleBackButton = () => {
            // Add your custom logic here to handle the back button press.
            // You can check the current state to determine what to do.
            // For example, you can navigate back, show an alert, or prevent the action.

            // Example: Navigate back using React Navigation (if you're using it)
            // BackHandler.removeEventListener();
            navigation.goBack("RecipesScreen")
            // BackHandler.exitApp();

            // Default behavior (prevent the back action)
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

    const handleSignOut = () => {

        navigation.navigate("LogInScreen")

    }

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
                            // onPress={handleCameraPress}
                            style={styles.dpView}>

                        </TouchableOpacity>
                    </View>

                    <View style={{
                        marginTop: "4%",
                        marginStart: "10%",
                        flex: 1
                    }}>
                        <Text style={styles.dpViewName}>
                            Kanishk
                        </Text>
                        <Text style={styles.dpViewEmail}>
                            Itskanishk11@gmail.com
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
        marginTop: "5%",

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