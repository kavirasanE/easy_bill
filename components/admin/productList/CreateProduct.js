import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const CreateProduct = () => {
    const [selectedValue, setSelectedValue] = useState("java");
  return (
    <SafeAreaView className="flex-1">
      <View className="m-2 mt-10">
        <View className="flex flex-row w-4/6 justify-between items-center py-2">
          <Ionicons name="chevron-back" size={24} color="black" />
          <Text className="text-lg font-bold"> Create Product</Text>
        </View>
        <View className="mx-2 my-10">
          <Text className="font-medium text-md  mb-2"> Product Name:</Text>
          <TextInput
            placeholder=""
            className="border-2 border-gray-300 rounded-md p-2 "
          />
        </View>
        <View className="flex flex-row justify-between mx-2">
          <View className="flex flex-row mx-2 items-center">
            <Text>Quantity: </Text>
            <TextInput className="border-2 w-20 p-2 border-gray-300 rounded-md" />
          </View>
          <View className="flex flex-row mx-2 items-center">
            <Text>Unit: </Text>
            <View className="border-2 border-gray-300 rounded-md text-black w-32 h-12 justify-center">
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
           
          >
            <Picker.Item label="Litres" value="java"  style={{ fontSize:14 , color: 'black'  }} />
            <Picker.Item label="Pounds" value="js" style={{ fontSize:14 , color: 'black'  }} />
            <Picker.Item label="KiloGram" value="python" style={{ fontSize:14 , color: 'black'  }} />
            <Picker.Item label="Gram" value="csharp" style={{ fontSize:14 , color: 'black'  }} />
          </Picker>
        </View>
          </View>
         
        </View>
        <View className="mx-2 my-8">
          <Text className="text-md  mb-2">Price:</Text>
          <TextInput
            placeholder=""
            className="border-2 border-gray-300 rounded-md p-2 "
          />
        </View>
       
        <View className="mx-2">
          <Text className="text-md mb-2">Description:</Text>
          <TextInput
            placeholder="Type here..."
            className="border-2 border-gray-300 rounded-md p-2 mb-2 "
            style={{
              textAlign: "left",
              textAlignVertical: "top",
            }}
            multiline={true}
            numberOfLines={4}
          />
        </View>
        <TouchableOpacity className=" p-4 mx-4 top-32 items-center rounded-lg bg-sky-700 ">
          <Text className="text-white font-bold">Create</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateProduct;
