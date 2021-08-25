import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import AddTodo from "./Components/addTodo";
import Header from "./Components/header";
import Sandbox from "./Components/sandbox";
import TodoItem from "./Components/todoItems";

export default function App() {
  const [todos, setTodos] = useState([
    { name: "CV Update", key: "001" },
    { name: "Portfolio Design", key: "002" },
    { name: "LinkedIn Update", key: "003" },
  ]);

  const onItemDelete = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const onAddTodo = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [...prevTodos, { name: text, key: Math.random(100).toString() }];
      });
    } else {
      Alert.alert("Oops!", "Longer 3 chars", [
        { text: "Understood", onPress: () => console.log("") },
      ]);
    }
  };

  return (
    // <Sandbox/>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitItem={onAddTodo} />
          <View style={styles.list}>
            <FlatList
              // numColumns={2}
              data={todos}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={onItemDelete} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  content: {
    backgroundColor: "#ddd",
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
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
  },
});
