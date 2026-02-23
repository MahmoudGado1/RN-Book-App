import { FlatList, Pressable, StyleSheet } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedCard from "../../components/ThemedCard";
import Spacer from "../../components/Spacer";
import { useBooks } from "../../hooks/useBook";
import { Colors } from "../../constant/Colors";
import { useRouter } from "expo-router";

const Books = () => {
  const {books}=useBooks()
  const router = useRouter();
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedText title={true} style={styles.heading}>
        Your Reading Lists
      </ThemedText>
      <Spacer />

      <FlatList
        data={books}
        keyExtractor={(item) => item.$id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/book/${item.$id}`)}>
            <ThemedCard style={styles.card}>
              <ThemedText style={styles.title}>{item.title}</ThemedText>
              <ThemedText>Written By {item.author}</ThemedText>
            </ThemedCard>
          </Pressable>
        )}
      />
      
    </ThemedView>
  );
};

export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  list:{
    marginTop:40,
    paddingBottom:100
  },
  card:{
    width:"90%",
    marginHorizontal:"11%",
    marginVertical:10,
    padding:10,
    paddingLeft:14,
    borderLeftColor:Colors.primary,
    borderLeftWidth:4
  },
  title:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10
  }
});
