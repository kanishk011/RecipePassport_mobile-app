import React from 'react';
import Navigations from "./src/Screens/Navigations"
import AuthProvider from './src/Context/AuthProvider';
import { NavigationContainer } from '@react-navigation/native';

function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
      {({ navigation }) => <Navigations navigation={navigation} />}
      </AuthProvider>
    </NavigationContainer>

  )
}
export default App;


