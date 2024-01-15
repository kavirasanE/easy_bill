import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View,Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'

const UpdateDefaultCredentials = () => {
    const [passwordshown ,setPasswordshown] =useState(false);
    const [color,setColor] =useState(false);
    return (
      <SafeAreaView className="flex-1 m-4 justify-center">
      <View>
          <View className="mx-2 gap-2">
          <Text className="text-sky-700 font-bold text-2xl">Update Credentials</Text>
          <Text className="text-gray-400">Please update username and password to continue</Text>
          </View>
          <View className='border-2 border-gray-400 p-2 mx-2 my-8 rounded-md '>
              <TextInput
              onPress={() => {setColor(!color)}}
              placeholder='Username'
        
              />
          </View>
          <View className="border-2 border-gray-400 p-2 mx-2 rounded-md relative">
              <TextInput
              placeholder='Password'
              secureTextEntry={!passwordshown}
              />
              <TouchableOpacity className="absolute right-3 top-2"  onPress={() => {setPasswordshown(!passwordshown)}}>
                  {
                      passwordshown === true ? (<Ionicons name='eye' size={24} color={'black'}/>): (<Ionicons name='eye-off' size={24} color={'black'}/>)
                  }
                 
              </TouchableOpacity>
          </View>
          <View className="p-2 my-6 ">
              <TouchableOpacity className=" bg-sky-700 p-2 mx-6 items-center justify-center rounded-md">
                  <Text className="text-white text-lg font-bold">Update</Text>
              </TouchableOpacity>
          </View>
          
      </View>
      </SafeAreaView>
    )
}

export default UpdateDefaultCredentials
