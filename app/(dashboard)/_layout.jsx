import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "../../constant/Colors";
import { Ionicons } from "@expo/vector-icons";
import UserOnly from "../../components/auth/UserOnly";

const DashboardLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <UserOnly>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.navBackground,
            paddingTop: 10,
            height: 70,
          },
          tabBarActiveTintColor: theme.iconColorFocus,
          tabBarInactiveTintColor: theme.iconColor,
        }}
      >
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? "person-circle" : "person-circle-outline"}
                color={focused ? theme.iconColorFocus : theme.iconColor}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="books"
          options={{
            title: "Books",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? "book" : "book-outline"}
                color={focused ? theme.iconColorFocus : theme.iconColor}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={24}
                name={focused ? "create" : "create-outline"}
                color={focused ? theme.iconColorFocus : theme.iconColor}
              />
            ),
          }}
        />
        <Tabs.Screen 
          name="book/[id]"
          options={{href:null}}
        />
      </Tabs>
    </UserOnly>
  );
};

export default DashboardLayout;
