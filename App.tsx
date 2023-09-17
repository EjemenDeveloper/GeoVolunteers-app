import { AppRegistry } from "react-native";
import * as React from "react";
import { Text } from "react-native";
import Firebase from "@react-native-firebase/app";
import { Provider as PaperProvider, TextInput } from "react-native-paper";

import { theme } from "./App.style";
import AppNavigator from "./app/app.navigator";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD5IQq-lT_45sMcrFMm-Lc64-EhsXXOYgA",
  authDomain: "geovolunteers-app.firebaseapp.com",
  projectId: "geovolunteers-app",
  storageBucket: "geovolunteers-app.appspot.com",
  messagingSenderId: "138598705258",
  appId: "1:138598705258:web:63800a7f58ed21bf438213",
  measurementId: "G-Y4VTE2514R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}

export default App;
