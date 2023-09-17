import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import HomeScreen from "./screens/home/home.screen";
import LoginScreen from "./screens/login/login.screen";
import RegisterScreen from "./screens/register/register.screen";
import VolunteerRegisterScreen from "./screens/register/volunteerRegister.screen";

import LocationScreen from "./screens/location/location.screen";
import AddressScreen from "./screens/incidentAddress/address.screen";
import VolunteersScreen from "./screens/volunteers/volunteers.screen";
import UserDashboard from "./screens/userDashboard";

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen
        name="VolunteerRegister"
        component={VolunteerRegisterScreen}
      />
      <Stack.Screen name="Location" component={UserDashboard} />
      <Stack.Screen name="IncidentCases" component={VolunteersScreen} />
      <Stack.Screen name="VolunteerDetails" component={LocationScreen} />
      <Stack.Screen name="VolunteerDistance" component={LocationScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
