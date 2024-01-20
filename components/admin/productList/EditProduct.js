import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState} from "react";
import { useRoute } from "@react-navigation/native";

const EditProduct = () => {
    const route = useRoute();
    const { selectedItem } = route.params;
     const [toEdit, setToEdit] = useState({});
     const [selectedValue, setSelectedValue] = useState("Litres");
    useEffect(()=>{
      console.log(selectedItem);
      setToEdit(selectedItem)
      
    },[])
    //  const initialProduct =useMemo (() => productListItems[0] || {}, [productListItems]);
    //  useMemo(() => {
    //   if(initialProduct){
    //   setProductName(initialProduct.name || "");
    //   setQuantity(initialProduct.quantity || "");
    //   setPrice(initialProduct.price || "" );
    //   setDescription(initialProduct.description || "");
    //   setSelectedValue(initialProduct.unit || "Litres");
    //   }
    //  },[initialProduct]);
    return (
        <SafeAreaView className="flex-1">
          <View className="m-2">
            <View className="mx-2 my-8">
              <Text className="font-medium text-md  mb-2"> Product Name:</Text>
              <TextInput
                placeholder=""
                className="border-2 border-gray-300 rounded-md p-2 "
                value={toEdit?.name}
                ></TextInput>
            </View>
            <View className="flex flex-row justify-between ">
              <View className=" mx-2">
                <Text>Unit: </Text>
                <View className="border-2 border-gray-300 rounded-md w-80">
                  <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                  >
                    <Picker.Item
                      label="Litres"
                      value="java"
                      style={{ fontSize: 14, color: "black" }}
                    />
                    <Picker.Item
                      label="Pounds"
                      value="js"
                      style={{ fontSize: 14, color: "black" }}
                    />
                    <Picker.Item
                      label="KiloGram"
                      value="python"
                      style={{ fontSize: 14, color: "black" }}
                    />
                    <Picker.Item
                      label="Gram"
                      value="csharp"
                      style={{ fontSize: 14, color: "black" }}
                    />
                  </Picker>
                </View>
              </View>
            </View>
            <View className="mx-2 my-8">
              <Text className="text-md  mb-2">Price:</Text>
              <TextInput
                placeholder=""
                className="border-2 border-gray-300 rounded-md p-2 "
                value={toEdit?.price}
               
              ></TextInput>
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
                value={toEdit?.description}
               
              />
            </View>
            <TouchableOpacity className=" p-4 mx-4 top-32 items-center rounded-lg bg-sky-700 ">
              <Text className="text-white font-bold">Create</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    };

export default EditProduct
