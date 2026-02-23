import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { Colors } from "../../constant/Colors";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useUser();

  const handleLoginSubmit = async () => {
    setError(null);
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

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
          <Spacer />
          <ThemedText title={true} style={styles.title}>
            Login To Your Account
          </ThemedText>
          <Spacer />

          <ThemedTextInput
            placeholder="Email"
            style={{ width: "80%", marginBottom: 20 }}
            keyboardType="email-address"
            onChangeText={setEmail}
            value={email}

          />

          <ThemedTextInput
            placeholder="Password"
            style={{ width: "80%", marginBottom: 20 }}
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />

          <ThemedButton onPress={handleLoginSubmit}>
            <Text style={{ color: "#f2f2f2" }}>Login</Text>
          </ThemedButton>

          <Spacer />

          {error && <Text style={styles.error}>{error}</Text>}

          <Link href="/register" asChild>
            <ThemedText style={{ textAlign: "center", marginTop: 16 }}>
              Register Instead
            </ThemedText>
          </Link>

        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  error: {
    color: Colors.warning,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderRadius: 6,
    borderColor: Colors.warning,
    borderWidth: 1,
  },
});