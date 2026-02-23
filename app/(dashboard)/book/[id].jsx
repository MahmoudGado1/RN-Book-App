import { StyleSheet, Text } from "react-native";
import ThemedView from "../../../components/ThemedView";
import ThemedText from "../../../components/ThemedText";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useBooks } from "../../../hooks/useBook";
import Spacer from "../../../components/Spacer";
import ThemedCard from "../../../components/ThemedCard";
import ThemedLoader from "../../../components/ThemedLoader";
import ThemedButton from "../../../components/ThemedButton";
import { Colors } from "../../../constant/Colors";

const BookDetails = () => {
  const [books, setBooks] = useState(null);
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { fetchBookById, deleteBook } = useBooks();

    const handleDelete = async () => {
        await deleteBook(id);
        setBooks(null);
        router.replace("/books");
    }
  useEffect(() => {
    fetchBookById(id).then((book) => {
      setBooks(book);
    });
  }, [id]);

  if (!books) {
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>
    );
  }
  return (
    <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{books?.title}</ThemedText>
        <ThemedText>Written By {books?.author}</ThemedText>

        <Spacer />
        <ThemedText title={true}>Book Description:</ThemedText>
        <Spacer height={10} />
        <ThemedText>{books?.description}</ThemedText>
      </ThemedCard>
      <ThemedButton
        style={styles.delete}
        onPress={handleDelete}
      >
        <Text
          style={{ color: "white", fontWeight: "bold", textAlign: "center" }}
        >
          Delete Book
        </Text>
      </ThemedButton>
    </ThemedView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 18,
    marginVertical: 10,
    fontWeight: "bold",
  },
  card: {
    margin: 20,
  },
  delete: {
    marginTop: 20,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: "center",
  },
});
