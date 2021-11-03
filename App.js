import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
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
  const _URL = "https://jsonplaceholder.typicode.com/posts";

  const getData = async () => {
    const resp = await fetch(_URL);
    const _data = await resp.json();
    for (let index = 0; index < _data.length; index++) {
      let element = _data[index];
      setData((prevState) => [...prevState, { element }]);
    }
    setIsloading(false);
  };

  useEffect(() => {
    getData();
  }, []);

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
          style={styles.textInput}
          placeholder='Search data'
          placeholderTextColor='#000'
        />

        <View>
          <Text style={styles.heading}>Data:</Text>
          {data && !isloading ? (
            data.map((item) => {
              return <Post key={item.element.id} data={item.element} />;
            })
          ) : (
            <Text>No data here.</Text>
          )}
          {data.map((item) => console.log(item.element))}
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
  },
  logo: {
    width: 360,
    height: 240,
  },
  heading: {
    color: "#888",
    fontSize: 24,
  },
  listElement: {
    color: "#000",
    fontSize: 12,
    textAlign: "center",
    marginVertical: 2,
    backgroundColor: "#f2f2f2",
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
    padding: 5,
    borderRadius: 5,
    textAlign: "center",
  },
});
