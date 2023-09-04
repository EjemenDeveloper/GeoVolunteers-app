import React from "react";
import { SafeAreaView, View } from "react-native";
import { FAB, Portal } from "react-native-paper";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { homeStyle } from "./home.style";
import { Image } from "expo-image";
import { ConfirmVoluneerCardComponent } from "../../components/confirm-volunteer-card/confirm-volunteer-card.component";
import { SearchingVolunteerComponent } from "../../components/search-volunteer/searching-volunteer.component";
import { HeaderComponent } from "../../components/header/header.component";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen = (props: HomeScreenProps) => {
  const goToVolunteerRoute = () => props.navigation.navigate("Location");

  const state: number = 1;

  return (
    <SafeAreaView style={homeStyle.flex}>
      <HeaderComponent
        title={"GeoVolunteers App"}
        navigation={props.navigation}
      />
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 53.470779,
          longitude: -2.24128,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        {state == 2 ? (
          <>
            <Marker
              description="Volunteer 1"
              coordinate={{ latitude: 53.470779, longitude: -2.24122 }}
            >
              <Image
                style={homeStyle.markerImage}
                source="https://png.pngtree.com/element_our/sm/20180526/sm_5b09436fd0515.jpg"
              />
            </Marker>
            <Marker
              description="Volunteer 3"
              coordinate={{ latitude: 53.43073, longitude: -2.2302 }}
            >
              <Image
                style={homeStyle.markerImage}
                source="https://png.pngtree.com/element_our/sm/20180526/sm_5b09436fd0515.jpg"
              />
            </Marker>
            <Marker
              description="Volunteer 2"
              coordinate={{ latitude: 53.41071, longitude: -2.21024 }}
            >
              <Image
                style={homeStyle.markerImage}
                source="https://www.pngitem.com/pimgs/m/379-3796691_smoker-google-maps-walking-icon-hd-png-download.png"
              />
            </Marker>
          </>
        ) : null}
        {state == 1 ? (
          <>
            <Marker
              description="Volunteer 1"
              coordinate={{ latitude: 53.47079, longitude: -2.24128 }}
            >
              <Image
                style={homeStyle.markerImage}
                source="https://www.pngitem.com/pimgs/m/379-3796691_smoker-google-maps-walking-icon-hd-png-download.png"
              />
            </Marker>
            <Marker
              description="User"
              coordinate={{ latitude: 53.46023, longitude: -2.23153 }}
            >
              <Image
                style={homeStyle.markerImage}
                source="https://www.pngitem.com/pimgs/m/379-3796691_smoker-google-maps-walking-icon-hd-png-download.png"
              />
            </Marker>
          </>
        ) : null}
      </MapView>

      {state == 2 ? <ConfirmVoluneerCardComponent /> : null}

      {state == 3 ? <SearchingVolunteerComponent /> : null}

      {state == 1 ? (
        <Portal>
          <FAB icon="plus" style={homeStyle.fab} onPress={goToVolunteerRoute} />
        </Portal>
      ) : null}
    </SafeAreaView>
  );
};

export default HomeScreen;
