import { Text, View} from "react-native";
import { Link } from "expo-router";
import {styled} from "nativewind"
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
const SafeAreaView = styled(RNSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link
        href="/Onboarding"
        className="mt-4 rounded bg-primary text-white
        px-4 py-2
        "
      >
        Go to Onboarding
      </Link>
      <Link  className="mt-4 rounded bg-primary text-white
        px-4 py-2
        " href="/(auth)/sign-in">Go to Sign In</Link>
      <Link  className="mt-4 rounded bg-primary text-white
        px-4 py-2
        " href="/(auth)/sign-out">Go to Sign Out</Link>
      <Link  className="mt-4 rounded bg-primary text-white
        px-4 py-2
        " href="/">Go to Home</Link>
      <Link  className="mt-4 rounded bg-primary text-white
        px-4 py-2
        " href="/subscriptions">Go to Subscriptions</Link>
    </SafeAreaView>
  );
}
