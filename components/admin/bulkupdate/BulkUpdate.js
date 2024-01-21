import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
const BulkUpdate = () => {
  return (
 
        <View className="flex top-1/4 justify-around ">
          <View className="bg-sky-700 mx-14 justify-center mb-4 items-center rounded-lg ">
            <TouchableOpacity className="p-3 ">
            <Text className="text-white font-bold"> Select .Csv File</Text>
            </TouchableOpacity>
          
          </View>
           
            <View className="flex mx-20">
              <TouchableOpacity className="bg-sky-700 p-4 rounded-lg items-center justify-center" >
                <Text className="text-white font-bold"> Submit</Text>
              </TouchableOpacity>
            </View>
        </View>
    
  )
}

export default BulkUpdate
