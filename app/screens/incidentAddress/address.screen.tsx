import React from "react";
import { SafeAreaView, View } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header.component";
import AddressStyle from "./addressStyle";

interface AddressScreenProps {
  navigation: any;
}

const AddressScreen = (props: AddressScreenProps) => {
  const destinations: number[] = [1, 2];

  const loadVolunteerDistance = () =>
    props.navigation.navigate("VolunteerDistance");

  return (
    <SafeAreaView>
      <HeaderComponent
        title="Incident Location"
        hasBackButton={true}
        navigation={props.navigation}
      />
      <View style={AddressStyle.marginHorizontal}>
        <TextInput label="incident location" />
        {destinations.map((destinations: number, index: number) => (
          <TextInput
            key={`destination${index}`}
            label="Volunteer location"
            right={
              <TextInput.Icon
                icon="close"
                style={AddressStyle.buttonIconRemove}
              />
            }
          />
        ))}
      </View>
      <View>
        <Button
          icon="plus"
          style={AddressStyle.bottomIconAdd}
          labelStyle={AddressStyle.buttonIconAddLabelStyle}
        >
          {" "}
        </Button>
      </View>
      <Button
        mode="contained"
        uppercase={false}
        style={AddressStyle.readyButtonStyle}
        labelStyle={AddressStyle.readyButtonLabelStyle}
        onPress={loadVolunteerDistance}
      >
        Ready{" "}
      </Button>
    </SafeAreaView>
  );
};

export default AddressScreen;
