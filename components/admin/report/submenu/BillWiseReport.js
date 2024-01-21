import React from 'react'
import { View ,Text, SafeAreaView} from 'react-native'
const billwiseList =[
  { id: 1, name: "test", price: "25.0", quantity: "5/litre" },
  { id: 2, name: "test", price: "564.0", quantity: "5/litre" },
];
const BillWiseReport = () => {
  return (
   <SafeAreaView>
    <View>
    <View className=" font-semibold flex flex-row  justify-between  bg-sky-700 p-3">
          <Text className="text-white font-semibold w-8  ">S.No</Text>
          <Text className="text-white font-semibold w-24 text-center ">
            Name
          </Text>
          <Text className="text-white font-semibold  w-10 ">Price</Text>
          <Text className="text-white font-semibold  w-14">Quantity</Text>
        </View>
    </View>
   </SafeAreaView>
  )
}

export default BillWiseReport
