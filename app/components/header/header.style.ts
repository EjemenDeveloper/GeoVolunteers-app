import { StyleSheet } from 'react-native';
import { theme } from '../../../App.style';


export const headerStyle = StyleSheet.create({
    title : {
        fontWeight: 'bold'
    },
    menu : {
        fontWeight: 'bold',
        color: theme.colors.primary
    }
});