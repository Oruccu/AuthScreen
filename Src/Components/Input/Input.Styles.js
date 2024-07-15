import { StyleSheet } from "react-native";
import Color from "../../Styles/Color";

const baseStyles = StyleSheet.create({
    container: {
        padding:10,
        margin:2,
        marginTop:10,
        borderRadius:10,
        
    }
})

export default {
    Primary: StyleSheet.create({
        container: {
            ...baseStyles.container,
            backgroundColor:Color.Orange,
        }
    }),
    Secondary: StyleSheet.create({
        container: {
            ...baseStyles.container,
            backgroundColor:Color.Blue,
        }
    })
}