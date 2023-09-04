import { theme } from "../../../App.style";
import {StyleSheet} from "react-native";


export const confirmVolunteerCardStyle = StyleSheet.create({
    icon: {
        color: theme.colors.primary,
        marginTop: 20
    },
    cancelButton : {
        marginBottom: 10,
        fontWeight: 'bold'
    }
})