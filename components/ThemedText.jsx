import { StyleSheet, Text, useColorScheme } from "react-native";
import { Colors } from "../constant/Colors";

const ThemedText = ({ style, title = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const textColors = title ? theme.title : theme.text;
  return <Text style={[{ color: textColors }, style]} {...props} />;
};

export default ThemedText;

const styles = StyleSheet.create({});
