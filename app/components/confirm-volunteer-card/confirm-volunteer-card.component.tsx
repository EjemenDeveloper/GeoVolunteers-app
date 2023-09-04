import React from 'react';
import { Button, Card, IconButton, List } from 'react-native-paper';
import { homeStyle } from '../../screens/home/home.style';
import { View } from 'react-native';
import { confirmVolunteerCardStyle } from './confirm-volunteer-card.style';

export const ConfirmVoluneerCardComponent = () => {
    return (
        <Card>
                    <Card.Content>
                        <List.Item 
                        title = " 5 Minutes"
                        description= "0.5miles from the Incident"
                        left={() => 
                            <IconButton 
                            icon= "bike"
                            size={30}
                            style={confirmVolunteerCardStyle.icon}
                         
                            />
                        }
                        right ={() =>
                        <View>
                            <Button  style={confirmVolunteerCardStyle.cancelButton} > Cancel</Button>
                            <Button mode="contained"> Confirm</Button>
                        </View>
                        }
                        /> 
                    </Card.Content>
                </Card>
    );
}