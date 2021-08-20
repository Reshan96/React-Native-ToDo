import React, { useState } from "react";
import {
    Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function AddTodo({submitItem}){
const[text,setText] = useState('')

const addtext = (value)=>{
setText(value)
}
return(
    <View>
        <TextInput 
        style = {styles.input}
        placeholder="Add new item"
        onChangeText={addtext}/>

        <Button color='coral' title="Add Todo" onPress={()=>submitItem(text)}/>
    </View>
)
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:"#ddd"

    }
})