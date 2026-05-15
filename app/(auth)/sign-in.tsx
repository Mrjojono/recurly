import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SignIn = () => {
  return (
    <View>
      <Text>first</Text>
      <Link className="mt-10" href="/">
        Go to Home
      </Link>
    </View>
  );
};

export default SignIn;
