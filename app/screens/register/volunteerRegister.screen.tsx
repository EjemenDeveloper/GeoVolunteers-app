import React from "react";
import { Alert, SafeAreaView, View } from "react-native";
import { Button, Card, TextInput } from "react-native-paper";
import { loginStyle } from "../login/login.style";
import * as DocumentPicker from "expo-document-picker";

interface VolunteerRegisterScreenProps {
  navigation: any;
}

const VolunteerRegisterScreen = (props: VolunteerRegisterScreenProps) => {
  const register = () => props.navigation.navigate("Home");

  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.getDocumentAsync();
      console.log(doc);
    } catch (err) {
      if (!DocumentPicker.getDocumentAsync()) {
        console.log(err);
      }
    }
  };

  return (
    <SafeAreaView style={loginStyle.content}>
      <View style={loginStyle.view}>
        <Card>
          <Card.Title
            title="Want to be a Volunteer? Register"
            titleStyle={loginStyle.cardTitle}
          />
          <Card.Content>
            <TextInput
              label="FirstName"
              name-phone-pad="first-name"
            ></TextInput>
            <TextInput label="LastName" name-phone-pad="last-name"></TextInput>
            <TextInput label="Email" keyboardType="email-address"></TextInput>
            <TextInput label="Password" secureTextEntry={true}></TextInput>
            <TextInput
              label="confirm Password"
              secureTextEntry={true}
            ></TextInput>

            <Button onPress={selectDoc} style={loginStyle.cardButton}>
              UPLOAD DOCUMENTS
            </Button>

            <Button onPress={register} style={loginStyle.cardButton}>
              REGISTER
            </Button>

            <Button> Already have an account? SIGN IN</Button>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default VolunteerRegisterScreen;
