import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import AddTodo from "./Components/addTodo";
import Header from "./Components/header";
import TodoItem from "./Components/todoItems";

export default function App() {

  const [name, setName] = useState("Nethmi");
  const [user2, setUser] = useState("Nethmi");
  const [todos, setTodos] = useState([
    { name: "Nethmi", key: "001" },
    { name: "Reshan", key: "002" },
    { name: "Hasintha", key: "003" },
  ]);

  const onItemDelete = (key) => {
    setTodos((prevTodos)=>{
      return prevTodos.filter((todo)=>todo.key !== key)
    })
  };

  const onAddTodo = (text)=>{
    if (text.length > 3){
setTodos((prevTodos)=>{
      return[
        ...prevTodos,
        {name:text, key:Math.random(100).toString()}
      ]
    })
    } else{
      Alert.alert("Oops!", "Longer 3 chars",[
        {text:"Understood", onPress:()=> console.log("Closed")}
      ])
    }
    
  }

  return (
    <View style={styles.container}>
      <Header/>
     <View style={styles.content}>
       <AddTodo submitItem={onAddTodo}/>
<View style={styles.list}>
 <FlatList
        // numColumns={2}
        data={todos}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
         <TodoItem item={item} pressHandler={onItemDelete}/>
        )}
      />
</View>
     </View>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    // paddingHorizontal: 30,
    // alignItems: "center",
    // justifyContent: "center",
  },
  content:{
    padding:40
  },
  list:{
marginTop:20
  },
  buttonClick: {
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#777",
    width: "50%",
    height: 45,
    padding: 5,
    margin: 10,
  },
  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 20,
    // marginHorizontal: 5,
    // width: "50%",
  },
});
