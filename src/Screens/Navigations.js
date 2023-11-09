import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather'; // You can use other icon libraries as well

// SCREENS


// ONBOADRINGS
import Splashonboarding from "./onBoardingScreens/Splashonboarding";
import CreateAccountScreen from "./onBoardingScreens/CreateAccountScreen"
import SetUpAccountScreen1 from "./onBoardingScreens/SetUpAccountScreen1"
import SetUpAccountScreen2 from './onBoardingScreens/SetUpAccountScreen2';
import SetUpAccountScreen3 from './onBoardingScreens/SetUpAccountScreen3';
import SetUpAccountScreen4 from './onBoardingScreens/SetUpAccountScreen4';
import SetUpAccountScreen5 from './onBoardingScreens/SetUpAccountScreen5';


// LOGIN SCREENS
import LogInScreen from "./SignInScreens/LogInScreen"
import PasswordRecoveryScreen1 from './SignInScreens/PasswordRecoveryScreen1'
import PasswordRecoveryScreen2 from './SignInScreens/PasswordRecoveryScreen2'
import PasswordRecoveryScreen3 from './SignInScreens/PasswordRecoveryScreen3'



// MAIN HOME SCREENS
import ForumScreen from "./MainScreens/ForumScreen"
import GroceryScreen from "./MainScreens/GroceryScreen"
import ProfileScreen from "./MainScreens/ProfileScreen"
import RecipesScreen from "./MainScreens/RecipesScreen"
import SearchScreen from "./MainScreens/SearchScreen"
import { StyleSheet } from 'react-native';



const Stack = createStackNavigator();

const IntroStack = createStackNavigator();

const OnboardingScreens = () => {
    <IntroStack.Navigator initialRouteName="CreateAccountScreen">
        <IntroStack.Screen
            name="CreateAccountScreen"
            component={CreateAccountScreen}
            options={{ headerShown: false }}
        />
    </IntroStack.Navigator>
}

const Tab = createBottomTabNavigator();


const Home = () => (
    <Tab.Navigator
        initialRouteName='RecipesScreen'


        screenOptions={({ route }) => ({
            // tabBarShowLabel: false,
            tabBarActiveTintColor: '#86BF3E',
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "500", // Adjust the font size as needed
                fontFamily: 'Montserrat-Regular', // Change to your desired font family

            },
            tabBarStyle: { height: 80 },
            _tabBarIcon: ({ focused, size }) => {
                let iconSource;
                if (route.name === 'Recipes') {
                    iconSource = focused
                        ? require('../images/recipe1.png')
                        : require('../images/recipe.png');
                } else if (route.name === 'Grocery') {
                    // Repeat this for each screen
                    iconSource = focused
                        ? require('../images/grocery1.png')
                        : require('../images/grocery.png');

                }
                else if (route.name === 'Forum') {
                    // Repeat this for each screen
                    iconSource = focused
                        ? require('../images/forum1.png')
                        : require('../images/forum.png');
                } else if (route.name === 'Profile') {
                    // Repeat this for each screen
                    iconSource = focused
                        ? require('../images/profile1.png')
                        : require('../images/profile.png');
                }

                return (

                    <Image
                        source={iconSource}
                        style={{ width: size, height: size }} />
                );
            },
            get tabBarIcon() {
                return this._tabBarIcon;
            },
            set tabBarIcon(value) {
                this._tabBarIcon = value;
            },
        })}
    >
        <Tab.Screen
            name="Recipes"
            component={RecipesScreen}
            options={{ headerShown: false }}
        />
        <Tab.Screen
            name="Grocery"
            component={GroceryScreen}
            options={{ headerShown: false }}
        />

        <Tab.Screen
            name="Explore"
            component={SearchScreen}
            options={{
                tabBarIcon: ({ focused }) => (
                    <View
                        style={{
                            top: Platform.OS === 'ios' ? -10 : -20,
                            width: Platform.OS === 'ios' ? 50 : 60,
                            height: Platform.OS === 'ios' ? 50 : 60,
                            borderRadius: Platform.OS === 'ios' ? 25 : 30,
                            backgroundColor: "#86BF3E",
                            justifyContent: "center",
                            alignSelf: "center"
                        }}>
                        <Icon
                            name="search"
                            size={Platform.OS === 'ios' ? 24 : 24}
                            style={styles.IconStyle}
                        />
                    </View>
                ),
                tabBarIconStyle: {},
                headerShown: false
            }}
        />
        <Tab.Screen
            name="Forum"
            component={ForumScreen}
            options={{ headerShown: false }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
        />

    </Tab.Navigator>
)


const styles = StyleSheet.create({
    IconStyle: {
        alignSelf: "center",
        color: "white",
    }
})

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splashonboarding">
                <Stack.Screen
                    name="Splashonboarding"
                    component={Splashonboarding}
                    options={{ headerShown: false }}
                />
                {/* <Stack.Screen
                    name="OnboardingScreens"
                    component={OnboardingScreens}
                    options={{ headerShown: false }}
                /> */}
                <Stack.Screen
                    name="CreateAccountScreen"
                    component={CreateAccountScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SetUpAccountScreen1"
                    component={SetUpAccountScreen1}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SetUpAccountScreen2"
                    component={SetUpAccountScreen2}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SetUpAccountScreen3"
                    component={SetUpAccountScreen3}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SetUpAccountScreen4"
                    component={SetUpAccountScreen4}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SetUpAccountScreen5"
                    component={SetUpAccountScreen5}
                    options={{ headerShown: false }}
                />
                {/* LogInScreen */}
                <Stack.Screen
                    name="LogInScreen"
                    component={LogInScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PasswordRecoveryScreen1"
                    component={PasswordRecoveryScreen1}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PasswordRecoveryScreen2"
                    component={PasswordRecoveryScreen2}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="PasswordRecoveryScreen3"
                    component={PasswordRecoveryScreen3}
                    options={{ headerShown: false }}
                />

                {/* MAIN SCREENS */}
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

// import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']);
// LogBox.ignoreAllLogs();


export default Navigation;