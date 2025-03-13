import { View, Text, TextInput, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const trendingTopics = [
  {
    id: "1",
    category: "Music · Trending",
    hashtag: "#NewMusic",
    tweet: "Fans are searching the lyrics of a pop star’s latest single, looking for clues on an upcoming album release.",
    user: "Jasi",
    userHandle: "@kGlover85",
    tweets: "10h",
    avatar: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "2",
    category: "Sports · Trending",
    hashtag: "#Soccer",
    tweet: "Fans are reacting after Sunday night's surprise upset.",
    tweets: "25.5k Tweets",
  },
  {
    id: "3",
    category: "Fitness · Trending",
    hashtag: "#WorkoutWednesday",
    tweet: "Athletes share their workout routines to encourage fitness.",
  },
];

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="gray" />
        <TextInput placeholder="Search Twitter" style={styles.input} />
      </View>

      <View style={styles.featuredTrend}>
        <Image source={{ uri: "https://images.pexels.com/photos/7613/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" }} style={styles.featuredImage} />
        <Text style={styles.featuredHashtag}>#GlobalSummit2021 · 1h ago</Text>
        <Text style={styles.featuredTitle}>
          At global summit, leader proposes new topic as top priority for weekend discussion.
        </Text>
      </View>

      <FlatList
        data={trendingTopics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.trendingItem}>
            <Text style={styles.trendingCategory}>{item.category}</Text>
            <Text style={styles.trendingHashtag}>{item.hashtag}</Text>
            {item.user ? (
              <View style={styles.trendingTweet}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <View>
                  <Text style={styles.tweetUser}>
                    {item.user} <Text style={styles.tweetHandle}>{item.userHandle} · {item.tweets}</Text>
                  </Text>
                  <Text style={styles.tweetText}>{item.tweet}</Text>
                </View>
              </View>
            ) : (
              <Text style={styles.tweetText}>{item.tweet}</Text>
            )}
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
  container: { flex: 1, backgroundColor: "#fff", paddingBottom: 10 },

  searchBar: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    margin: 10,
  },
  input: { marginLeft: 10, fontSize: 16, flex: 1 },

  featuredTrend: { paddingHorizontal: 10, marginBottom: 15 },
  featuredImage: { width: "100%", height: 180, borderRadius: 10 },
  featuredHashtag: { color: "gray", fontSize: 12, marginTop: 5 },
  featuredTitle: { fontWeight: "bold", fontSize: 16, marginTop: 5 },

  trendingItem: { padding: 12, borderBottomWidth: 0.5, borderBottomColor: "#ddd" },
  trendingCategory: { color: "gray", fontSize: 12 },
  trendingHashtag: { fontWeight: "bold", fontSize: 16, marginVertical: 3 },
  tweetText: { fontSize: 14, color: "#000" },

  trendingTweet: { flexDirection: "row", marginTop: 5, alignItems: "center" },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  tweetUser: { fontWeight: "bold", fontSize: 14 },
  tweetHandle: { color: "gray", fontSize: 12 },
  
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

