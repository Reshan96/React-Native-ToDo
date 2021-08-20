import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function TodoItem({item,pressHandler}){
return(
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
        <Text style={styles.item}>{item.name}</Text>
    </TouchableOpacity>
)
}


const styles = StyleSheet.create({
    item:{
        fontSize:15,
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:"dashed",
        borderRadius:10
    }
})