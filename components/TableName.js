import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const TableName = ({ onDelete, item }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(item.id)}>
      <View style={styles.member}>
        <Text>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  member: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 15,
  },
});
export default TableName;
