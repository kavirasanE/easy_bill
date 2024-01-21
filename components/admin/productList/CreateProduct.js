import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  FlatList,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import Checkbox from "expo-checkbox";
import { RadioButton } from "react-native-paper";

const CreateProduct = () => {

  const [checked, setChecked] = useState('option1');
  const [selectedValue, setSelectedValue] = useState("Litres");
  const [showbox,setShowBox] = useState(false);
  const handleChangeoption1 = () => {
     setShowBox(false)
     setChecked('option1')
  }
  const handleChangeoption2 =() => {
    setShowBox(!showbox)
    setChecked('option2')
  }
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
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
      <View className="m-2">
        <View className="mx-2 my-4">
          <Text className="font-medium text-md  mb-2"> Product Name:</Text>
          <TextInput
            placeholder=""
            className="border-2 border-gray-300 rounded-md p-2 "
            value={""}
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
            value={"price"}
          ></TextInput>
        </View>
        <Text className="mx-4" >GST</Text>
        <View className="justify-center items-center my-2">
          
          <View className="flex flex-row gap-2">
            <RadioButton
              className="rounded-full"
              value='option1'
              status={checked === 'option1' ? 'checked' :'unchecked'}
              onPress={() =>handleChangeoption1()}
              color="#298309" 
            />
            <Text>Inclusive</Text>
            <RadioButton
              className="rounded-full"
              value="option2"
              status={checked === 'option2' ? 'checked':'unchecked'}
              onPress={() => handleChangeoption2()}
              color= "#298309"
            />
            <Text>Exclusive</Text>
           
          </View>
           {showbox ?(  <View className="border-2 p-3 w-80 rounded-md border-gray-300 my-2 transition-transform ease-in-out duration-500">
                <TextInput placeholder="Enter the GST %"/>
              </View>): null}
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
            value=""
          />
        </View>
        <TouchableOpacity className=" p-4 mx-4 top-4 items-center rounded-lg bg-sky-700 ">
          <Text className="text-white font-bold">Create</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateProduct;
