import { useNavigation } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { Dimensions, StatusBar, StyleSheet } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, BackHandler } from "react-native";
import MapView, { Marker } from "react-native-maps";
import useLocation from "./screens/location/useLocation";
import MapViewDirections from "react-native-maps-directions";
import Ionicons from "@expo/vector-icons/Ionicons";


type MapScreenProps = NativeStackScreenProps<StackParams, "Map">;

const Map: React.FC<MapScreenProps> = ({ route, navigation }) => {
  const { latitude, longitude } = route.params;
  const { height, width } = Dimensions.get("window");
  const [distance, setDistance] = useState<number | null>(0);
  const [time, setTime] = useState<number | null>(0);
  const [mode, setMode] = useState<travelMode>(travelMode.DRIVING);
  const [arrived, setArrived] = useState<boolean>(false);
  const { location } = useLocation(true);
  const [loading, setLoading] = useState(true);
  const LATITUDE_DELTA = 0.28;
  const LONGITUDE_DELTA = LATITUDE_DELTA * (width / height);

  let mapView: MapView | null;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      {location && (
        <>
          <MapView
            ref={(c) => (mapView = c)}
            mapType="standard"
            showsUserLocation
            showsMyLocationButton
            // customMapStyle={mapStyle}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            style={styles.map}
          >
            <MapViewDirections
              origin={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              destination={{ latitude, longitude }}
              apikey="insert your API Key here”
              strokeWidth={4}
              strokeColor={Colors.primary}
              // optimizeWaypoints={true}
              onStart={(params) => {}}
              onReady={(result) => {
                // console.log(result);
                setDistance(result.distance?.toFixed(2) ?? 0);
                setTime(result.duration?.toFixed(0) ?? 0);

                if (distance! <= 0.01 && !loading) {
                  setArrived(true);
                } else {
                  setArrived(false);
                }
                if (result.coordinates.length > 0) {
                  mapView?.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: width / 20,
                      bottom: height / 20,
                      left: width / 20,
                      top: height / 20,
                    },
                  });
                }
              }}
              mode={mode}
            />

            <Marker
              coordinate={{
                latitude,
                longitude,
              }}
            >
              <Ionicons name="location" size={40} color={Colors.secondary} />
            </Marker>
          </MapView>
          <DirectionCard
            navigation={navigation}
            time={time}
            distance={distance}
            mode={mode}
            arrived={arrived}
            setMode={setMode}
          />
        </>
      )}
    </View>
);
};

export default Map;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

