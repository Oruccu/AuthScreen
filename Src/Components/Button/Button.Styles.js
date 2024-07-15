import { StyleSheet } from "react-native";
import Color from './../../Styles/Color'
export default StyleSheet.create({
    container:{
        margin:2,
        padding:10,
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor: Color.LightGreen
    },
    buttonName:{
        color: Color.White,
        fontSize:17
    }
})