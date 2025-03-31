import { Text, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red">
      <Text className="text-2xl text-red-500">Edit app/index.tsx to edit this screen.</Text>
      <StatusBar  />
    </SafeAreaView>
  );
}
