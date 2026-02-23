import { StyleSheet, useColorScheme} from "react-native";
import { Stack } from "expo-router";
import { Colors } from "../constant/Colors";
import { StatusBar } from "expo-status-bar";
import { UserProvider } from "../context/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { BooksProvider } from "../context/BooksContext";

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.dark;
  return (
    <UserProvider>
      <BooksProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }} edges={["top"]}>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
          
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: "Home" ,headerTitleAlign:"center",headerBackVisible:false}} />
      </Stack>
      </SafeAreaView>
      </BooksProvider>
    </UserProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
