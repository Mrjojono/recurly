import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Link} from "expo-router";

const SignIn = () => {
    return (
        <SafeAreaView style={styles.safe} className="bg-background">
            <KeyboardAvoidingView
                style={styles.flex}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"

                    showsVerticalScrollIndicator={false}
                >
                    {/* Brand */}
                    <View className="auth-brand-block">
                        <View className="auth-logo-wrap">
                            <View className="auth-logo-mark">
                                <Text className="auth-logo-mark-text">R</Text>
                            </View>
                            <View style={{ gap: 2 }}>
                                <Text className="auth-wordmark">Recurly</Text>
                                <Text className="auth-wordmark-sub">SMART BILLING</Text>
                            </View>
                        </View>
                    </View>

                    {/* Titre */}
                    <View className="items-center">
                        <Text className="auth-title">Welcome back</Text>
                        <Text className="auth-subtitle">
                            Sign in to continue managing your subscriptions
                        </Text>
                    </View>

                    {/* Card formulaire */}
                    <View className="auth-card" style={styles.cardCenter}>
                        <View className="auth-form">
                            <View className="auth-field">
                                <Text className="auth-label">Email</Text>
                                <TextInput
                                    placeholder="you@example.com"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    className="auth-input"
                                />
                            </View>

                            <View className="auth-field">
                                <Text className="auth-label">Password</Text>
                                <TextInput
                                    placeholder="Enter your password"
                                    secureTextEntry
                                    className="auth-input"
                                />
                            </View>

                            <TouchableOpacity
                                activeOpacity={0.8}
                                className="auth-button"
                            >
                                <Text className="auth-button-text">
                                    <Link href="/">
                                        Sign in
                                    </Link>
                                   </Text>
                            </TouchableOpacity>
                        </View>

                        <View className="auth-link-row">
                            <Text className="auth-link-copy">New to Recurly?</Text>
                            <Text className="auth-link">Create an account</Text>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: { flex: 1 },
    flex: { flex: 1 },
    scrollContent: {
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingBottom: 40,
        paddingTop: 32,
    },
    cardCenter: {
        alignSelf: "center",
    },
});

export default SignIn;