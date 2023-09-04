import { StyleSheet } from "react-native"
import { theme } from "../../../App.style";

const AddressStyle = StyleSheet.create({
    marginHorizontal: {
        marginHorizontal : 10
    },
    bottomIconAdd : {
        position: "absolute",
        right:-20,
        top: 2

    },
    buttonIconAddLabelStyle :{
        fontSize : 30
    },
    readyButtonStyle: {
margin : 10,
marginTop: 80,
height : 50,
paddingVertical : 3
    },
readyButtonLabelStyle : {
    fontSize:18
},
buttonIconRemove : {
    color : theme.colors.primary,
    opacity: 0.7
}


    
})


export  default AddressStyle ;