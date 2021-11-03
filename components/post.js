import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const Post = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={styles.main}>
          <Text style={styles.heading}>
            # {data.id} - {data.title}
          </Text>
          <Text>
            {data.userId} {data.body}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    color: "#000",
    fontSize: 12,
    textAlign: "center",
    backgroundColor: "#f2f2f2",
    marginBottom: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  container: {
    marginHorizontal: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
  heading: {
    fontSize: 20,
    textAlign: "left",
  },
  pressable: {
    marginVertical: 20,
  },
});
