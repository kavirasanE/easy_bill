import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { View,Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import ProductList from '../admin/productList/ProductList';

const Login = () => {
    const navigation =useNavigation();
    const [passwordshown ,setPasswordshown] =useState(false);
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

    const handleLoginPress = () => {
        // Simulate authentication logic
        if (username === 'admin' && password === 'admin') {
          // Navigate to Product List for admin
          navigation.navigate('Product List');
        } else if (username === 'user' && password === 'user') {
          // Navigate to QuickBill for user
          navigation.navigate('Cashier List');
        } else {
          // Handle incorrect credentials
          alert('Invalid username or password');
        }
      };
    
  return (
    <SafeAreaView className="flex-1 m-4 justify-center">
    <View>
        <View className="mx-2 gap-2">
        <Text className="text-sky-700 font-bold text-2xl">Login</Text>
        <Text className="text-gray-400">Please sigin to continue</Text>
        </View>
        <View className="border-2 border-gray-400 p-2 mx-2 my-8 rounded-md">
            <TextInput
            placeholder='Username'
            onChangeText={(text) => setUsername(text)}
            />
        </View>
        <View className="border-2 border-gray-400 p-2 mx-2 rounded-md relative">
            <TextInput
            placeholder='Password'
            onChangeText={(text)=> setPassword(text)}
            secureTextEntry={!passwordshown}
            />
            <TouchableOpacity className="absolute right-3 top-2"  onPress={() => {setPasswordshown(!passwordshown)}}>
                {
                    passwordshown === true ? (<Ionicons name='eye' size={24} color={'black'}/>): (<Ionicons name='eye-off' size={24} color={'black'}/>)
                }
               
            </TouchableOpacity>
        </View>
        <View className="p-2 my-6 ">
            <TouchableOpacity className=" bg-sky-700 p-2 mx-6 items-center justify-center rounded-md" onPress={handleLoginPress}>
                <Text className="text-white text-lg font-bold">Login</Text>
            </TouchableOpacity>
        </View>
        
    </View>
    </SafeAreaView>
  )
}

export default Login