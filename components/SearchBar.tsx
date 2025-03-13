import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.searchBar}>
      <Ionicons name="search" size={20} color="gray" />
      <TextInput placeholder="Search Twitter" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: { flexDirection: "row", backgroundColor: "#f1f1f1", borderRadius: 10, padding: 10, alignItems: "center" },
  input: { marginLeft: 10, fontSize: 16, flex: 1 },
});
