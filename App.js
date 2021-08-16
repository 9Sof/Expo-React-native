import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [search, setSearch] = useState("");
  const [members, setMembers] = useState([
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Bob Smith", id: 3 },
    { name: "Sally Jones", id: 4 },
    { name: "Mike Brown", id: 5 },
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Bob Smith", id: 3 },
    { name: "Sally Jones", id: 4 },
    { name: "Mike Brown", id: 5 },
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Bob Smith", id: 3 },
    { name: "Sally Jones", id: 4 },
    { name: "Mike Brown", id: 5 },
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Bob Smith", id: 3 },
    { name: "Sally Jones", id: 4 },
    { name: "Mike Brown", id: 5 },
  ]);
  const onSearch = () => {
    console.log(search);
  };
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={{ width: "80%" }}
          placeholder="Name"
          onChangeText={(value) => setSearch(value)}
        />
        <Button title="Search" onPress={onSearch} />
      </View>
      <ScrollView>
        {members
          .filter(
            (member) =>
              member.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
          )
          .map((member, i) => (
            <View key={i} style={styles.member}>
              <Text>{member.name}</Text>
              <Button
                title="Delete"
                onPress={() =>
                  setMembers(members.filter((m) => m.id !== member.id))
                }
              />
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  search: {
    flexDirection: "row",
  },
  member: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});
