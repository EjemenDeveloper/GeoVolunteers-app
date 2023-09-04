import React from 'react';
import { ActivityIndicator,  View } from 'react-native';
import { searchingVolunteerStyle } from './searchin-volunteer.style';
import { Title, Button } from 'react-native-paper';

export const SearchingVolunteerComponent = () =>{
    return (
        <View style={searchingVolunteerStyle.flexCenterColumn} >
        <ActivityIndicator size="large" color="#00ff00" />
        <Title  style={searchingVolunteerStyle.title} >Searching for a Matching Volunteer in your region </Title>
        <Button  style={searchingVolunteerStyle.cancelVolunteerButton} mode = "contained"  >Cancel </Button>
      </View>

    );
}