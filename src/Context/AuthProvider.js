// AuthProvider.js
import React, { useReducer, useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import API_BASE_URL from '../Screens/utilites/apiUtilities'
import { useNavigation } from '@react-navigation/native';
import { setData, getData } from "../Screens/utilites/AsyncStorageUtili";

// Assume you have a config file for your API base URL

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
  agreedToTerms: null,
  modalVisible: false,

};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const navigation = useNavigation(); // get the navigation object



  const signUp = async (userData) => {
    // Validate if fields are empty
    if (!userData.fullName || !userData.email || !userData.password) {
      dispatch({ type: 'SET_ERROR', payload: 'All fields are required.' });
      return;
    }
    // Validate for name
    const nameRegex = /^[a-zA-Z]{4,}$/;
    if (!nameRegex.test(userData.fullName)) {
      dispatch({
        type: 'SET_ERROR',
        payload: 'Name must be at least 4 character'
      });
      return;
    }
    // Validate email using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      dispatch({ type: 'SET_ERROR', payload: 'Invalid email address.' });
      return;
    }
    // Validate password (at least 8 characters and at least one special character)
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(userData.password)) {
      dispatch({
        type: 'SET_ERROR',
        payload: 'Password must be at least 8 characters long and contain at least one special character.',
      });
      return;
    }
    // Validate if terms and conditions are checked
    if (!state.agreedToTerms) {
      dispatch({ type: 'SET_ERROR', payload: 'Please agree to the terms and conditions.' });
      return;
    }
    // API CALLS
    try {
      const response = await axios.post("http://10.0.2.2:3000/user", userData)

      if (response.status === "F200") {
        const user = response.data;
        dispatch({ type: 'SET_USER', payload: user });
        const userId = response.data._id;
        navigation.navigate('LogInScreen', { userId });
        // navigation.navigate('LogInScreen');
      } else {
        const errorData = response.data;
        dispatch({ type: 'SET_ERROR', payload: errorData.error });
      }
    } catch (error) {
      console.error('Sign Up Error:', error);
      dispatch({ type: 'SET_ERROR', payload: 'An error occurred during sign-up.' });
    };
  };


  const clearErrorMessage = () => {
    dispatch({ type: "CLEAR_STATE" });
  }
  const toggleTerms = () => {
    dispatch({ type: 'TOGGLE_TERMS' });
  };

  const signIn = async (email, password) => {
    if (!email || !password) {
      dispatch({ type: 'SET_ERROR', payload: 'Email and password are required.' });
      return;
    }

    try {
      const response = await axios.post("http://10.0.2.2:3000/user/login", { email, password })

      const user = response.data.responseCode

      if (user === 'F200') {
        dispatch({ type: 'SIGN_IN', payload: "logged in" });
        navigation.navigate('Home');
      } else {
        dispatch({ type: 'SET_ERROR', payload: 'Invalid email or password' });
      }
    } catch (error) {
      console.error('Error signing in:', error);
      dispatch({ type: 'SET_ERROR', payload: 'An error occurred during sign-in' });
    }
  };

  const forgetPassword = async (email) => {
    if (!email) {
      dispatch({ type: 'SET_ERROR', payload: 'Email required.' });
      return;
    }

    try {

      const response = await axios.post("http://10.0.2.2:3000/user/forgetpassword", { email })
      const user = response.data.responseCode

      if (user === 'F200') {
        dispatch({ type: 'SIGN_IN', payload: "Verified email" });
        navigation.navigate('PasswordRecoveryScreen2', { email });
      } else {
        dispatch({ type: 'SET_ERROR', payload: 'Invalid email ' });
      }
    } catch (error) {
      console.error('Error signing in:', error);
      dispatch({ type: 'SET_ERROR', payload: 'An error occurred during password recovery' });
    }
  };


  const verifyOTP = async (email, value) => {

    try {
      const response = await axios.post("http://10.0.2.2:3000/user/forgetpassword/verifyOTP", { email, forgetpassword_otp: value })

      const user = response.data.responseCode

      if (user === 'F200') {
        dispatch({ type: 'SIGN_IN', payload: "OTP verifed successfully" });
        navigation.navigate("PasswordRecoveryScreen3", { email })

      } else {
        dispatch({ type: 'SET_ERROR', payload: 'Invalid OTP ' });
      }
    } catch (error) {
      console.error('Error signing in:', error);
      dispatch({ type: 'SET_ERROR', payload: 'An error occurred during password recovery' });
    }
  };


  const changePassword = async (email, password) => {
    if (!password) {
      dispatch({ type: 'SET_ERROR', payload: 'Password required.' });
      return;
    }
    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      dispatch({
        type: 'SET_ERROR',
        payload: 'Password must be at least 8 characters long and contain at least one special character.',
      });
      return;
    }

    try {
      const response = await axios.post("http://10.0.2.2:3000/user/forgetpassword/changePassword", { email: email, newPassword: password })

      const user = response.data.responseCode

      console.log(user);
      if (user === 'F200') {
        dispatch({ type: 'SIGN_IN', payload: "Password changed successfully" });
        dispatch({ type: 'TOGGLE_MODAL' });

      }
      else {
        dispatch({ type: 'SET_ERROR', payload: 'Invalid Password' });
      }
    } catch (error) {
      console.error('Error signing in:', error);
      dispatch({ type: 'SET_ERROR', payload: 'An error occurred during password recovery' });
    }
  };


  return (
    <AuthContext.Provider
      value={{
        state,
        signUp,
        toggleTerms,
        signIn,
        clearErrorMessage,
        forgetPassword,
        verifyOTP,
        changePassword,
      }}>
      {typeof children === 'function' ? children(navigation) : children}

    </AuthContext.Provider>
  );
};

export default AuthProvider;
