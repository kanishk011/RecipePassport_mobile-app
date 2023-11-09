import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, BackHandler } from "react-native";

const GroceryScreen = ({ navigation }) => {

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
    return (
        <View>
            <Text>
                HELLOE
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({


})
export default GroceryScreen