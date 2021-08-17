import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.search}>
      <TextInput
        style={{ width: "80%" }}
        placeholder="Name"
        onChangeText={(value) => setSearch(value)}
      />
      <Button title="Search" onPress={() => onSearch(search)} />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
  },
});

export default Search;
