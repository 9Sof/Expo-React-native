import React, { useState } from "react";
import { Button, Modal, TextInput, View } from "react-native";

const AddName = ({ onAdd, visibleModal, setVisibleModal }) => {
  const [addMember, setAddMember] = useState(null);

  const handleAdd = () => {
    addMember && onAdd(addMember);
    setVisibleModal(false);
    setAddMember(null);
  };
  return (
    <Modal visible={visibleModal} animationType="slide">
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          onChangeText={(value) =>
            setAddMember({ name: value, id: Math.floor(Math.random() * 1000) })
          }
        />
        <View style={styles.btnInput}>
          <View style={{ marginRight: 20 }}>
            <Button title="Add" onPress={handleAdd} color="#1E6738" />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Button
              color="red"
              title="Cancel"
              onPress={() => setVisibleModal(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnInput: {
    flexDirection: "row",
    margin: 20,
  },
};
export default AddName;
