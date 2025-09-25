import { Text } from "@react-navigation/elements";
import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
