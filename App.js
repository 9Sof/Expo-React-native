import React, { useState } from "react";
import { StyleSheet, FlatList, View, Button } from "react-native";
import AddName from "./components/AddName";
import Search from "./components/Search";
import TableName from "./components/TableName";

export default function App() {
  const [members, setMembers] = useState([
    { name: "Jooohn Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Bob Smith", id: 3 },
    { name: "Sally Jones", id: 4 },
    { name: "Jim Doe", id: 5 },
    { name: "Bob Smith", id: 6 },
    { name: "Jane Doe", id: 7 },
    { name: "John Doe", id: 8 },
    { name: "Sally Jones", id: 9 },
    { name: "Jim Doe", id: 10 },
    { name: "Bob Smith", id: 11 },
    { name: "Jane Doe", id: 12 },
    { name: "John Doe", id: 13 },
    { name: "Sally Jones", id: 14 },
    { name: "Jim Doe", id: 15 },
  ]);
  const [search, setSearch] = useState("");
  const [visibleModal, setVisibleModal] = useState(false);

  const onAdd = (value) => {
    if (value && !members.find((member) => member.id === value.id))
      setMembers(members.concat(value));
  };
  const onSearch = (value) => {
    setSearch(value);
  };
  const onDelete = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <View style={styles.container}>
      <AddName
        onAdd={(value) => onAdd(value)}
        visibleModal={visibleModal}
        setVisibleModal={(bool) => setVisibleModal(bool)}
      />
      <View style={{ marginBottom: 20 }}>
        <Button title="Add new name" onPress={() => setVisibleModal(true)} />
      </View>
      <Search onSearch={(value) => onSearch(value)} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={members.filter((member) =>
          member.name.toLowerCase().includes(search.toLowerCase())
        )}
        renderItem={(itemData) => (
          <TableName onDelete={(id) => onDelete(id)} item={itemData.item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
});
