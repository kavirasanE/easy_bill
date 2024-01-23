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
  { id: 1, name: "test", price: "25.0", quantity: "2.0",total:"50.00"},
  { id: 2, name: "test", price: "564.0", quantity: "2.0",total:"50.00" },
  { id: 3, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 4, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id:5,  name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 6, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 7, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 8, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 9, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 10, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 11, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 12, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 13, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 14, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 15, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 16, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 17, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 18, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 19, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 20, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 21, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 22, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 23, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 24, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 25, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 26, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
  { id: 27, name: "test", price: "25.0", quantity: "2.0",total:"50.00" },
 ];

const QuickBill = () => {
  const[isRender,setisRender] =useState(false);
  
  return (
    <SafeAreaView >
        <View className="h-40 ">
        <View className="top-0 ">
        <View className=" font-semibold flex flex-row  justify-between  bg-sky-700 p-3">
          <Text className="text-white font-semibold w-8 ">S.No</Text>
          <Text className="text-white font-semibold w-24 text-center ">
            Name
          </Text>
          <Text className="text-white font-semibold  w-10 ">Price</Text>
          <Text className="text-white font-semibold  w-14">Quantity</Text>
          <Text className="text-white font-semibold  w-18 ">Total</Text>
        </View>
        <View className="font-semibold flex flex-row ">
          <FlatList
            data={productListItems}
            extraData={isRender}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity onPress={() => itemPress(item.id)}>
                    <View
                      key={item.id}
                      className="font-semibold flex flex-row justify-between p-3"
                    >
                      <Text className="w-8">{item.id}</Text>
                      <Text className="w-24 text-center">{item.name}</Text>
                      <Text className="w-10">{item.price}</Text>
                      <Text className="w-14 text-center">{item.quantity}</Text>
                      <Text className="w-18">{item.total}</Text>
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
      <View className="top-1/2 absolute">
      <Calculator/>
      </View>
      
    </SafeAreaView>
  );
};

export default QuickBill;
