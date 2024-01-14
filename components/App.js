import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-700">
      <Text className="text-white text-2xl font-bold">i Got it </Text>
      <StatusBar style="auto" />
    </View>
  );
}


