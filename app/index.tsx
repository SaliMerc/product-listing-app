import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const LotsOfStyles = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Learn More"
        color="red"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text style={styles.red}>just red</Text>
      <Text style={styles.bigBlue}>just bigBlue</Text>
      <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
      <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 50,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});

export default LotsOfStyles;
