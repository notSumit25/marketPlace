import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View, TextInput } from "react-native";
import LoginScreen from "./App/Screen/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Nav/TabNavigations";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <ClerkProvider publishableKey="pk_test_ZW5hYmxlZC1mYXduLTYyLmNsZXJrLmFjY291bnRzLmRldiQ">
      <View className="flex-1 bg-white">
        <StatusBar style="auto" />
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}
