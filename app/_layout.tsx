import {SplashScreen, Stack} from "expo-router";
import "@/global.css";
import {useFonts} from "expo-font";
import {useEffect} from "react";

/**
 * Application root layout that loads PlusJakartaSans font variants and hides the Expo splash screen once the fonts are ready.
 *
 * @returns The app's root `Stack` component with headers disabled, or `null` while fonts are loading.
 */
export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        "sans-regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
        "sans-bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
        "sans-medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
        "sans-semibold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
        "sans-extrabold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
        "sans-light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    });

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync()
        }
    }, [fontsLoaded])
    if (!fontsLoaded) {
        return null;
    }
    return <Stack screenOptions={{headerShown: false}}/>;
}
