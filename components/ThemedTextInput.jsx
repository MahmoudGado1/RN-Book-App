import { TextInput, useColorScheme } from "react-native";
import { Colors } from "../constant/Colors";

const ThemedTextInput = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <TextInput
    placeholderTextColor={theme.text}
      {...props}
      style={[
        {
          backgroundColor: theme.uiBackground,
          color: theme.title,
          padding: 20,
          borderRadius: 6
        },
        style,
      ]}
     
    />
  );
};

export default ThemedTextInput;
