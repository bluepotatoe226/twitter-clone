import { Tabs } from "expo-router";
import { FontAwesome, MaterialIcons, Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 0.2,
          borderTopColor: "#ccc",
          height: 55,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome name="home" size={24} color={focused ? "#1DA1F2" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="search" size={28} color={focused ? "#1DA1F2" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="person-circle-outline" size={28} color={focused ? "#1DA1F2" : "gray"} />
          ),
        }}
      />
    </Tabs>
  );
}
