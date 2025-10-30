import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Button from "../components/Button";

export default function App() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Hello React Native!</Text>
      <Button
      title='View more'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
