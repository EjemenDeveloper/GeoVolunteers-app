import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import AddressStyle from "./incidentAddress/addressStyle";
import { HeaderComponent } from "../components/header/header.component";

interface UserDashboardScreenProps {
  navigation: any;
}
// Sample data for nearby emergencies and volunteer history
const nearbyEmergenciesData = [
  { id: "5", title: "Emergency 1", location: "Location 1" },
  { id: "6", title: "Emergency 2", location: "Location 2" },
  { id: "7", title: "Emergency 3", location: "Location 3" },
  { id: "8", title: "Emergency 4", location: "Location 4" },
];

const volunteerHistoryData = [
  { id: "5", date: "2023-07-01", activity: "Volunteer Activity 1" },
  { id: "6", date: "2023-08-06", activity: "Volunteer Activity 2" },
  { id: "7", date: "2023-09-01", activity: "Volunteer Activity 3" },
  { id: "8", date: "2023-09-06", activity: "Volunteer Activity 4" },
];

const UserDashboard = (props: UserDashboardScreenProps) => {
  const destinations: number[] = [1, 2];

  const loadVolunteerDistance = () =>
    props.navigation.navigate("VolunteerDistance");
  const [nearbyEmergencies, setNearbyEmergencies] = useState(
    nearbyEmergenciesData
  );
  const [volunteerHistory, setVolunteerHistory] =
    useState(volunteerHistoryData);

  // Add any additional data fetching or state management logic here

  useEffect(() => {
    // Fetch nearby emergencies and volunteer history data from your backend or Firebase Firestore
    // Update the 'nearbyEmergencies' and 'volunteerHistory' state variables accordingly
  }, []);

  return (
    <SafeAreaView>
      <HeaderComponent
        title="User Dashboard"
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
        {/* Nearby Emergencies Section */}
        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 20 }}>
          Nearby Emergencies
        </Text>
        <FlatList
          data={nearbyEmergencies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              <Text>{item.location}</Text>
            </View>
          )}
        />

        {/* Volunteer History Section */}
        <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 20 }}>
          Volunteer History
        </Text>
        <FlatList
          data={volunteerHistory}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>Date: {item.date}</Text>
              <Text>Activity: {item.activity}</Text>
            </View>
          )}
        />
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
          Request Help{" "}
        </Button>
        {}
      </View>
    </SafeAreaView>
  );
};

export default UserDashboard;
