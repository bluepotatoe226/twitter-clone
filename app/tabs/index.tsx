import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const tweets = [
  {
    id: "1",
    name: "Andrea",
    username: "@andy_landerson",
    text: "Found a new podcast that’s basically just a dad and his 5-year-old discussing current events. Haven’t laughed this hard in years.",
    avatar: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600",
    image: null,
  },
  {
    id: "2",
    name: "Bert",
    username: "@rodirisufer",
    text: "Brazilian surfer conquers a world-record wave in Nazaré, Portugal. Watch breathtaking footage here on Twitter Blue in 1080p!",
    avatar: "https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=600",
    image: "https://images.pexels.com/photos/7862/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="logo-twitter" size={26} color="#1DA1F2" />
      </View>

      <FlatList
        data={tweets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tweetContainer}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={{ flex: 1 }}>
              <View style={styles.tweetHeader}>
                <Text style={styles.username}>{item.name}</Text>
                <Text style={styles.handle}>{item.username} · 5m</Text>
              </View>

              <Text style={styles.tweetText}>{item.text}</Text>

              {item.image && <Image source={{ uri: item.image }} style={styles.tweetImage} />}

              <View style={styles.actions}>
                <TouchableOpacity style={styles.actionButton}>
                  <FontAwesome name="comment-o" size={16} color="gray" />
                  <Text style={styles.actionText}>12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <FontAwesome name="retweet" size={16} color="gray" />
                  <Text style={styles.actionText}>25</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <FontAwesome name="heart-o" size={16} color="gray" />
                  <Text style={styles.actionText}>30</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome name="share-square-o" size={16} color="gray" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <TouchableOpacity style={styles.floatingButton}>
        <MaterialCommunityIcons name="feather" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },

  tweetContainer: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  tweetHeader: { flexDirection: "row", alignItems: "center", marginBottom: 2 },
  username: { fontWeight: "bold", fontSize: 16, marginRight: 5 },
  handle: { color: "gray", fontSize: 14 },
  tweetText: { fontSize: 14, marginBottom: 5 },

  tweetImage: { width: "100%", height: 200, borderRadius: 10, marginTop: 5 },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    width: "75%",
  },
  actionButton: { flexDirection: "row", alignItems: "center" },
  actionText: { fontSize: 12, color: "gray", marginLeft: 5 },

  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#1DA1F2",
    padding: 15,
    borderRadius: 30,
    elevation: 5,
  },
});
