import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import { useState } from "react";
import { Keyboard } from "react-native";
import { useUser } from "../../hooks/useUser";
import { Colors } from "../../constant/Colors";
const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { register } = useUser();

  const handleRegisterSubmit = async () => {
    setError(null);
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
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
            Register For an Account
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

          <ThemedButton onPress={handleRegisterSubmit}>
            <Text style={{ color: "#f2f2f2" }}>Register</Text>
          </ThemedButton>
          <Spacer />
          {error && <Text style={styles.error}>{error}</Text>}
          <Link href="/login">
            <ThemedText>Login</ThemedText>
          </Link>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default register;

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
