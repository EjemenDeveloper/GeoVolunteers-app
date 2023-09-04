import React from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { Card, Title } from "react-native-paper";
import { HeaderComponent } from "../../components/header/header.component";
import volunteerStyles from "./volunteers.style";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

interface VolunteersScreenProps {
  navigation: any;
}

const VolunteersScreen = (props: VolunteersScreenProps) => {
  const goToVolunteerDetails = () =>
    props.navigation.navigate("VolunteerDetails");

  const volunteers: number[] = [1, 2, 3];

  return (
    <SafeAreaView>
      <HeaderComponent
        title="Volunteers record"
        hasBackButton={true}
        navigation={props.navigation}
      />
      <FlatList
        data={volunteers}
        keyExtractor={(item, index) => `volunteers${index}`}
        renderItem={({ item, index }) => (
          <Card
            style={{ ...volunteerStyles.card, ...volunteerStyles.cardStatus }}
            onPress={goToVolunteerDetails}
          >
            <Card.Cover
              source={{
                uri: "https://www.google.com/maps/d/thumbnail?mid=1VEVgZD9c60idGhj3-EDAp8Wd-MM&hl=en_US",
              }}
            />
            <Card.Title
              titleStyle={volunteerStyles.cardTitle}
              title="29/08/2023"
              subtitle="Ejemen Omo-osagie"
              right={() => (
                <Text style={volunteerStyles.distance}>Distance: 0.3miles</Text>
              )}
            />
          </Card>
        )}
      />
    </SafeAreaView>
  );
};

export default VolunteersScreen;
