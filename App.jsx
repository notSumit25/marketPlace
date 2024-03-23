import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className='text-xl mb-4'>{isLogin ? 'Login' : 'Sign Up'}</Text>
      <TextInput placeholder="Username" style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%' }} />
      <TextInput placeholder="Password" secureTextEntry={true} style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%' }} />
      {isLogin ? null : <TextInput placeholder="Confirm Password" secureTextEntry={true} style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, width: '80%' }} />}
      <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>{isLogin ? 'Login' : 'Sign Up'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={{ marginTop: 10 }}>
        <Text>{isLogin ? 'Switch to Sign Up' : 'Switch to Login'}</Text>
      </TouchableOpacity>
    </View>
  );
}