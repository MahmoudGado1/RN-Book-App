import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemedLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";
import ThemedCard from "../components/ThemedCard";
const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />
      <ThemedText title={true} style={styles.title}>
        number one
      </ThemedText>
      <Spacer height={20} />
      <ThemedCard style={styles.card}>
        <ThemedText>Hello, this is a card</ThemedText>
      </ThemedCard>
      <Link href="/profile" style={styles.link}>
        <ThemedText>Profile Page</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>
    </ThemedView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  card: {
    boxShadow: "4px 4pxrgba(0, 0, 0, 0.1)",
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
