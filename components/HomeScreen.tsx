import * as WebBrowser from "expo-web-browser";
import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          This is a basic journal with DB integration, filtering and sorting by
          date and tags
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
});
