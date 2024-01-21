import React from 'react'
import { View ,Text, SafeAreaView} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CancelReport = () => {
  return (
    <SafeAreaView className="top-1/4">
           <View className="flex justify-center items-center ">
      <MaterialCommunityIcons name="notebook-remove" size={60} color="#63B7CC"/>
        <Text className="text-sky-500 text-lg font-bold"> No Report Found</Text>
    </View>
    </SafeAreaView>
    
  )
}

export default CancelReport
