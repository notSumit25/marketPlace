import React from "react";
import * as WebBrowser from "expo-web-browser";

import { Text, TouchableOpacity, View } from "react-native";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View className="flex-1 flex-col items-center min-h-screen">
      <Text className="mt-16 text-3xl font-bold">Community Market Place</Text>
      <Text className="mt-8 text-xl">Login to your account</Text>
      <TouchableOpacity onPress={onPress}>
        <Text className="mt-8 text-xl">Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
