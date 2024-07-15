import { StyleSheet } from "react-native";
import Color from './../../../Styles/Color'
export default StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex:1,
        
    },
    image:{
        width:200,
        height:200,
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    innerContainer:{
        margin:20,
        flex:1,
        padding:20,
        borderRadius:20,
        borderEndWidth:2,
        borderLeftWidth:2,
        borderColor: Color.LightGreen
       
    }
})