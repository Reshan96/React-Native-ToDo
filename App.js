import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [name, setName] = useState("Nethmi");
  const [user2, setUser] = useState("Nethmi");
  const [circle, setCircle] = useState([
    { name: "Nethmi", id: "001" },
    { name: "Reshan", id: "002" },
    { name: "Hasintha", id: "003" },
    { name: "Thilini", id: "004" },
    { name: "Kasuni", id: "005" },
    { name: "Amantha", id: "006" },
    { name: "Sithija", id: "007" },
    { name: "Thilini", id: "008" },
    { name: "Kasuni", id: "009" },
    { name: "Amantha", id: "010" },
    { name: "Sithija", id: "011" },
  ]);

  const clickEvent = (name) => {
    setName(name);
  };

  const setTextInput = (text) => {
    setUser(text);
  };

  const pressHandler = (id) => {
    console.log(id);
  };
  return (
    <View style={styles.container}>
      {/* <Text>Hello, {name}</Text>
      <Text>Hello, {user2}</Text>
      <TextInput
        multiline
        placeholder={"Enter name"}
        style={styles.textInput}
        onChangeText={(text) => setTextInput(text)}
      />
      <View style={styles.buttonClick}>
        <Button onPress={() => clickEvent("Reshan")} title={"click me"} />
      </View> */}

      <FlatList
        // numColumns={2}
        data={circle}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.name)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 30,
    // alignItems: "center",
    // justifyContent: "center",
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
