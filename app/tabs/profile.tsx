import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={styles.cover} />

      <View style={styles.profileContainer}>
        <Image source={{ uri: "https://images.pexels.com/photos/1278566/pexels-photo-1278566.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={styles.avatar} />

        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followText}>Follow</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.userInfo}>
        <Text style={styles.name}>Cam Hall</Text>
        <Text style={styles.username}>@camtheman</Text>
        <Text style={styles.bio}>
          Just a fun guy. {"\n"}
        <Text style={styles.link}>twitter.com/camtheman</Text>
        </Text>

        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={16} color="gray" />
          <Text style={styles.infoText}>Las Vegas</Text>
          <MaterialIcons name="calendar-today" size={16} color="gray" style={{ marginLeft: 15 }} />
          <Text style={styles.infoText}>Joined July 2022</Text>
        </View>

        <View style={styles.followStats}>
          <Text style={styles.statNumber}>18</Text>
          <Text style={styles.statLabel}>Following</Text>
          <Text style={styles.statNumber}>1578</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
      </View>

      <View style={styles.tabs}>
        <Text style={styles.activeTab}>Posts</Text>
        <Text style={styles.inactiveTab}>Replies</Text>
        <Text style={styles.inactiveTab}>Media</Text>
        <Text style={styles.inactiveTab}>Likes</Text>
      </View>

      <View style={styles.tweetContainer}>
        <Text style={styles.pinned}> Pinned</Text>
        <Text style={styles.tweetUsername}>Cam Hall <Text style={styles.handle}>@camtheman · 18/05/2018</Text></Text>
        <Text style={styles.tweetText}>Have a great day yall.</Text>
        <View style={styles.tweetActions}>
          <Ionicons name="chatbubble-outline" size={18} color="gray" />
          <Ionicons name="repeat-outline" size={18} color="gray" />
          <Ionicons name="heart-outline" size={18} color="gray" />
          <Ionicons name="share-outline" size={18} color="gray" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingBottom: 10 },
  cover: { width: "100%", height: 120 },

  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: -40,
  },

  avatar: { width: 80, height: 80, borderRadius: 40, borderWidth: 3, borderColor: "#000" },

  followButton: {
    backgroundColor: "#1DA1F2",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  followText: { color: "#fff", fontWeight: "bold", fontSize: 16 },

  userInfo: { paddingHorizontal: 15, marginTop: 10 },
  name: { fontWeight: "bold", fontSize: 20, color: "#fff" },
  username: { color: "gray", fontSize: 16, marginBottom: 5 },
  bio: { color: "#fff", fontSize: 14, marginBottom: 8 },
  link: { color: "#1DA1F2" },

  infoRow: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  infoText: { color: "gray", fontSize: 14, marginLeft: 5 },

  followStats: { flexDirection: "row", alignItems: "center", marginBottom: 10 },
  statNumber: { fontWeight: "bold", color: "#fff", fontSize: 16, marginRight: 5 },
  statLabel: { color: "gray", fontSize: 14, marginRight: 15 },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  activeTab: { fontWeight: "bold", color: "#fff", fontSize: 16 },
  inactiveTab: { color: "gray", fontSize: 16 },

  tweetContainer: { paddingHorizontal: 15, paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: "#333" },
  pinned: { color: "gray", fontSize: 12, marginBottom: 5 },
  tweetUsername: { fontWeight: "bold", fontSize: 16, color: "#fff" },
  handle: { color: "gray", fontSize: 14 },
  tweetText: { color: "#fff", fontSize: 14, marginVertical: 5 },
  tweetActions: { flexDirection: "row", justifyContent: "space-between", width: "70%", marginTop: 5 },
});

