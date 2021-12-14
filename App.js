import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Post } from "./components/Post";

export default function App() {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [issearching, setIssearching] = useState(false);
  const searchOn = () => setIssearching(true);
  const searchOff = () => setIssearching(false);
  const [filter, setFilter] = useState("");
  const _URL = "https://jsonplaceholder.typicode.com/posts";

  const getData = async () => {
    const resp = await fetch(_URL);
    const _data = await resp.json();
    for (let index = 0; index < _data.length; index++) {
      let element = _data[index];
      setData((prevState) => [...prevState, { element }]);
    }
    if (isloading === true) setIsloading(false);
  };

  useEffect(() => {
    getData();
  }, [issearching]);

  if (isloading) {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize='none'
          style={styles.textInput}
          placeholder='Search data by ID'
          maxLength='5'
          onChangeText={(text) => setFilter(text)}
          value={filter}
        />

        <View>
          <Text style={styles.heading}>Data:</Text>
          {data ? (
            <FlatList
              data={data.filter((item) => {
                return item.element.id.toString().includes(filter);
              })}
              keyExtractor={(item) => item.element.id}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({ item }) => (
                <View style={styles.listElement}>
                  <Text>
                    {item.element.title} ({item.element.id})
                  </Text>
                  <Text>></Text>
                </View>
              )}
            />
          ) : (
            <Text>No data here.</Text>
          )}
        </View>

        {/* Button test */}
        <TouchableOpacity
          onPress={() => alert("Hello World")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  logo: {
    width: 360,
    height: 240,
  },
  heading: {
    color: "#888",
    fontSize: 24,
    fontWeight: "bold",
  },
  listElement: {
    color: "#000",
    fontSize: 12,
    textAlign: "center",
    marginVertical: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
  },
  textInput: {
    fontSize: 16,
    backgroundColor: "",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 2,
    borderRadius: 2,
    textAlign: "center",
  },
  separator: {
    height: 1,
    borderTopWidth: 1,
    borderTopColor: "darkgrey",
  },
});
