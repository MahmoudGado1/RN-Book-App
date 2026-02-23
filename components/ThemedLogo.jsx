import { Image, useColorScheme, View } from "react-native";
import Logo1 from "../assets/logo_light.png";
import Logo2 from "../assets/logo_dark.png";
const ThemedLogo = ({ ...props}) => {
  const colorScheme = useColorScheme();
  const logo = colorScheme === "dark" ? Logo2 : Logo1;
  return <Image source={logo} {...props}/>;
};

export default ThemedLogo;
