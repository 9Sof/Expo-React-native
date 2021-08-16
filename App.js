import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [search, setSearch] = useState("");
  const [members, setMembers] = useState([
    { name: "John Doe" },
    { name: "Jane Doe" },
    { name: "Bob Smith" },
    { name: "Sally Jones" },
    { name: "Mike Brown" },
    { name: "John Doe" },
    { name: "Jane Doe" },
    { name: "Bob Smith" },
    { name: "Sally Jones" },
    { name: "Mike Brown" },
    { name: "Mike Brown" },
  ]);
  const [addMember, setAddMember] = useState({});
  const onSearch = () => {
    console.log(search);
  };
  return (
    <View style={styles.container}>
      <View style={(styles.search, { paddingBottom: 20 })}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => setAddMember({ name: value })}
        />
        <Button
          title="Add"
          onPress={() =>
            addMember?.name && setMembers(members.concat(addMember))
          }
        />
      </View>
      <View style={styles.search}>
        <TextInput
          style={{ width: "80%" }}
          placeholder="Name"
          onChangeText={(value) => setSearch(value)}
        />
        <Button title="Search" onPress={onSearch} />
      </View>
      <FlatList
        data={members.filter(
          (member) =>
            member.name.toLowerCase().indexOf(search.toLowerCase()) >= 0
        )}
        renderItem={(itemData) => (
          <View style={styles.member}>
            <Text>{itemData.item.name}</Text>
            <Button
              title="Delete"
              onPress={() =>
                setMembers(members.filter((m) => m.name !== member.name))
              }
            />
          </View>
        )}
      />
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
    paddingTop: 15,
  },
});
