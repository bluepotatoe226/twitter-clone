import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Tweet {
  id: string;
  name: string;
  username: string;
  text: string;
  avatar: string;
  image?: string | null;
}

interface TweetCardProps {
  tweet: Tweet;
}

export default function TweetCard({ tweet }: TweetCardProps) {
  return (
    <View style={styles.tweetContainer}>
      <Image source={{ uri: tweet.avatar }} style={styles.avatar} />
      <View style={{ flex: 1 }}>
        <Text style={styles.username}>
          {tweet.name} <Text style={styles.handle}>{tweet.username}</Text>
        </Text>
        <Text style={styles.tweetText}>{tweet.text}</Text>
        {tweet.image && <Image source={{ uri: tweet.image }} style={styles.tweetImage} />}
        <View style={styles.actions}>
          <FontAwesome name="comment-o" size={16} color="gray" />
          <FontAwesome name="retweet" size={16} color="gray" />
          <FontAwesome name="heart-o" size={16} color="gray" />
          <FontAwesome name="share-square-o" size={16} color="gray" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tweetContainer: { flexDirection: "row", padding: 10, borderBottomWidth: 0.2, borderColor: "#ddd" },
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  username: { fontWeight: "bold", fontSize: 16 },
  handle: { color: "gray", fontSize: 14 },
  tweetText: { fontSize: 14, marginVertical: 5 },
  tweetImage: { width: "100%", height: 200, borderRadius: 10, marginTop: 5 },
  actions: { flexDirection: "row", justifyContent: "space-between", marginTop: 5, width: "70%" },
});
