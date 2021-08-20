import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function AddTodo({addItem}){
const[text,setText] = useState('')

const addtext = (value)=>{
setText(value)
}
return(
    <View>
        <TextInput
        placeholder="Add new item"
        onChangeText={addtext}>

        </TextInput>
    </View>
)
}