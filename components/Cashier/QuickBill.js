import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  FlatList
} from "react-native";
import Calculator from "./Calculator";
const productListItems = [
  { id: 1, name: "test", price: "25.0", quantity: "5/litre" },
  { id: 2, name: "test", price: "564.0", quantity: "5/litre" },
  { id: 3, name: "test", price: "25hkhbkj.0", quantity: "5/litre" },
  { id: 4, name: "test", price: "25.0", quantity: "5/litre" },
  { id: 5, name: "test", price: "25.0", quantity: "5/litre" },
  { id: 6, name: "test", price: "25.0", quantity: "5/litre" },
];

const QuickBill = () => {
  const[isRender,setisRender] =useState(false);
  
  return (
    <SafeAreaView>
        <View className="p-4 justify-center items-center top-1">
        <Text> QuickBill</Text>
        <View className="hidden">
        <View className=" font-semibold flex flex-row  justify-between  bg-sky-700 p-3">
          <Text className="text-white font-semibold w-8  ">S.No</Text>
          <Text className="text-white font-semibold w-24 text-center ">
            Name
          </Text>
          <Text className="text-white font-semibold  w-10 ">Price</Text>
          <Text className="text-white font-semibold  w-14">Quantity</Text>
        </View>
        <View className="font-semibold flex flex-row justify-between ">
          <FlatList
            data={productListItems}
            extraData={isRender}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity onPress={() => itemPress(item.id)}>
                    <View
                      key={item.id}
                      className="font-semibold flex flex-row justify-between p-3 mx-2 items-center"
                    >
                      <Text className="w-8">{item.id}</Text>
                      <Text className="w-24 text-center">{item.name}</Text>
                      <Text className="w-10">{item.price}</Text>
                      <Text className="w-14">{item.quantity}</Text>
                    </View>
                    <View className=" border border-gray-300"></View>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
          
        </View>
       
      </View>
      <Calculator/>
    </SafeAreaView>
  );
};

export default QuickBill;
