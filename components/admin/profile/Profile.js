import React from 'react'
import { View ,Text ,Image, TextInput, TouchableOpacity} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <View className="">
      <View className=" flex items-center mt-20 rounded-full">
          <Image source={require("../../../assets/profile.png")} width={1000} height={1000} className="w-40 h-40 border-2 rounded-full" />
      </View>
      <View className="flex flex-row mt-10 items-center mx-10 ">
      <MaterialCommunityIcons name="account-box" size={40} color="#1985A0"  />
        <TextInput placeholder='Name' className="  items-center p-2 w-3/4 rounded-md ml-2"/>
      </View>
      <View className="flex flex-row mt-10 items-center mx-10">
      <MaterialCommunityIcons name="account-box" size={40} color="#1985A0"  />
        <TextInput placeholder='Username' className="  items-center p-2 w-3/4 rounded-md ml-2"/>
      </View>
      <View className="flex flex-row mt-10 items-center mx-10">
      <MaterialCommunityIcons name="cellphone" size={40} color="#1985A0" />
        <TextInput placeholder='Mobile Number' className="  items-center p-2 w-3/4 rounded-md ml-2"/>
      </View>
      <View className=" mx-6 mt-8 p-5">
          <TouchableOpacity className="bg-sky-700 p-4 text-center items-center rounded-lg">
            <Text className="text-white font-bold">Change Password</Text>
          </TouchableOpacity>
      </View>
   </View>
  )
}

export default Profile
