import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import { useUser } from "../../hooks/useUser";
import GuestOnly from "../../components/auth/GuestOnly";

const AuthLayout = () => {
  const {user}=useUser();
  console.log("Auth Layout User:",user);
  return (
    <GuestOnly>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false ,animation:"none"}} />
    </GuestOnly>
  );
};

export default AuthLayout;

