
import { Client, TravelMode } from "@googlemaps/google-maps-services-js";
import { GOOGLE_DIRECTIONS_API_KEY } from "./config";

export const distanceBetweenCoords = async (
  [lat1, lng1]: number[],
  [lat2, lng2]: number[]
) => {
  const client = new Client({});

  const response = await client.distancematrix({
    params: {
      origins: [{ lat: lat1, lng: lng1 }],
      destinations: [{ lat: lat2, lng: lng2 }],
      key: GOOGLE_DIRECTIONS_API_KEY,
      mode: TravelMode.bicycling,
    },
  });

  return response.data.rows[0].elements[0].distance.value;
};

