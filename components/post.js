import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const Post = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Pressable onPress={() => setModalVisible(true)}>
      <Text style={styles.post}>
        {data.userId} {data.title} {data.body} {data.id}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 3,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  post: {
    color: "#000",
    fontSize: 12,
    textAlign: "center",
    marginVertical: 2,
    marginHorizontal: 20,
    backgroundColor: "#f2f2f2",
  },
});
