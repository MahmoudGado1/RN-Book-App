import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text} from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { useState } from "react";
import { useBooks } from "../../hooks/useBook";
import { useRouter } from "expo-router";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedButton from "../../components/ThemedButton";

const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const { createBook } = useBooks();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!title.trim() || !author.trim() || !description.trim())return
    setLoading(true);

    await createBook({ title, author, description });

    setTitle("")
    setAuthor("")
    setDescription("")

    router.replace("/books");
    setLoading(false);
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <ThemedView style={styles.container}>
          <ThemedText title={true} style={styles.heading}>
            Create A New Book
          </ThemedText>
          <Spacer />

          <ThemedTextInput
            style={styles.input}
            placeholder="Book Title"
            value={title}
            onChangeText={setTitle}
          />
          <Spacer/>
          <ThemedTextInput
            style={styles.input}
            placeholder="Author"
            value={author}
            onChangeText={setAuthor}
          />
          <Spacer/>
          <ThemedTextInput
            style={styles.multiline}
            placeholder="Book Description"
            value={description}
            onChangeText={setDescription}
            multiline={true}
          />
          <Spacer />

          <ThemedButton disabled={loading} onPress={handleSubmit}>
            <Text style={{ color: "white" }}>
              {loading ? "Saving..." : "Create Book"}
            </Text>
          </ThemedButton>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    padding:20,
    borderRadius:6,
    alignSelf:"stretch",
    marginHorizontal:40,
  },
  multiline: {
    padding:20,
    borderRadius:6,
    textAlignVertical:"top",
    minHeight:100,
    alignSelf:"stretch",
    marginHorizontal:40,
  },
});
