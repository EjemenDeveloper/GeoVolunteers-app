import { StyleSheet } from "react-native"
import { theme } from "../../../App.style"

export const homeStyle = StyleSheet.create({
    flex: {
        flex: 1
    },
    fab: {
        position : "absolute",
        right: 0,
        bottom:0,
        margin: 20
    },
    markerImage: {
        width :35,
        height: 35
    }
})