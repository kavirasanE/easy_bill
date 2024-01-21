import React from 'react'
import { View ,Text, TextInput, TouchableOpacity} from 'react-native'

const CreateCashierList = () => {
  return (
    <View className="mx-4 mt-10">
        <View className="gap-2 mb-4">
            <Text className="font-bold text-md">Name:</Text>
            <TextInput className="border-2 border-gray-300 p-2 rounded-lg"/>
        </View>
        <View className="gap-2  mb-4">
            <Text className="font-bold text-md">UserName:</Text>
            <TextInput className="border-2 border-gray-300 p-2 rounded-lg"/>
        </View>
        <View className="gap-2  mb-4">
            <Text className="font-bold text-md">Password:</Text>
            <TextInput className="border-2 border-gray-300 p-2 rounded-lg"/>
        </View>
        <View className="gap-2  mb-4">
            <Text className="font-bold text-md">Mobile Number:</Text>
            <TextInput className="border-2 border-gray-300 p-2 rounded-lg"/>
        </View>
        <View className="mx-10 justify-center my-10">
            <TouchableOpacity className="bg-sky-700 p-3 rounded-lg">
                <Text className="text-white text-center font-bold">Create</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CreateCashierList
