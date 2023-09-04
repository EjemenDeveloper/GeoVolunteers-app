import React from "react";
import { Alert, SafeAreaView, View, Text } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { loginStyle } from "./login.style";
import { FontAwesome5 } from "@expo/vector-icons";

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen = (props: LoginScreenProps) => {
  const login = () => props.navigation.navigate("Home");
  const register = () => props.navigation.navigate("VolunteerRegister");

  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card>
          <Card.Title
            title="GeoVolunteers app"
            titleStyle={loginStyle.cardTitle}
          />
          <Card.Content>
            <TextInput label="Email" keyboardType="email-address"></TextInput>
            <TextInput label="Password" secureTextEntry={true}></TextInput>
            <Button uppercase={false} style={loginStyle.cardButton}>
              forgot email/password | unlock account
            </Button>
            <Button
              testID="loginButton"
              onPress={login}
              mode="contained"
              style={loginStyle.cardButtonLogin}
            >
              {" "}
              LOGIN
            </Button>

            <FontAwesome5.Button
              style={loginStyle.cardButtonLogin}
              name="google"
              onPress={login}
            >
              <Text style={loginStyle.cardButtonLogin}>Log In With Google</Text>
            </FontAwesome5.Button>

            <Button onPress={register} style={loginStyle.cardButton}>
              Dont have an account?REGISTER
            </Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
