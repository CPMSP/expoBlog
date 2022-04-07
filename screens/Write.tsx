import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Pressable, ScrollView } from "react-native";
import { Text, View, TextInput } from "../components/Themed";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export default function TabTwoScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const color = Colors[colorScheme];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    entryContainer: {
      marginHorizontal: 50,
      flex: 1,
    },
    entryText: {
      fontSize: 17,
      lineHeight: 24,
      borderRadius: 15,
      padding: 10,
    },
    title: {
      marginTop: "5%",
      fontSize: 20,
      fontWeight: "bold",
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 15,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
    },
    entryButton: {
      marginVertical: 20,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 15,
      backgroundColor: color.success,
      justifyContent: "flex-end",
    },
    buttonText: {
      fontSize: 20,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.title}
        placeholder={"Title of Post"}
        lightColor={color.textBackground}
        darkColor={color.textBackground}
      />
      <View
        style={styles.separator}
        lightColor={color.accentBlack}
        darkColor={color.accentWhite}
      />
      <ScrollView style={styles.entryContainer}>
        <TextInput
          style={styles.entryText}
          placeholder={"What's on your mind?"}
          lightColor={color.textBackground}
          darkColor={color.textBackground}
          multiline={true}
          numberOfLines={4}
        />
      </ScrollView>
      <Pressable
        style={styles.entryButton}
        onPress={() => navigation.navigate("Modal")}
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
    </View>
  );
}
