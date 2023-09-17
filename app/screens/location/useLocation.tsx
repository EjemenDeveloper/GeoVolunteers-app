import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

const useLocation = (active: boolean) => {
  const [location, setLocation] =
    useState<null | Location.LocationObjectCoords>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      // active && getData(); //TODO: Fix this
      getData();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getData = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    } catch (error) {
      alert(error);
    }
  };
  return {
    location,
    errorMsg,
  };
};

export default useLocation;
