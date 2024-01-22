import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity ,KeyboardAvoidingView} from "react-native";
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


const Register = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  const [checked, setChecked] = useState("option1");
  const navigation =useNavigation();

  return (
    <View className="m-4 mt-10">
      <View className="mx-2 flex items-start justify-center">
        <Text className=" font-bold text-2xl text-sky-700 "> Create User</Text>
        <Text className="ml-2">Please enter your details</Text>
      </View>
      <View className="m-2 mt-4 ">
        <TextInput
          placeholder="Shop Name"
          className="border-2 border-sky-700 p-2 mb-4 "
        />
        <TextInput
          placeholder="Address 1"
          className="border-2 border-sky-700 p-2 mb-4"
        />
        <TextInput
          placeholder="Address 2"
          className="border-2 border-sky-700 p-2 mb-4"
        />
        <TextInput
          placeholder="City"
          className="border-2 border-sky-700 p-2 mb-4"
        />
        <TextInput
          placeholder="Email Address"
          className="border-2 border-sky-700 p-2 mb-4"
        />
        <TextInput
          placeholder="Mobile Number"
          className="border-2 border-sky-700 p-2 mb-4"
        />
        <View className="border-2 border-sky-700 text-black h-12 justify-center ">
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Python" value="python" />
            <Picker.Item label="C#" value="csharp" />
          </Picker>
        </View>
        <Text className="text-md font-bold">GST Applicable:</Text>
        <View className="flex flex-row gap-4 justify-start mx-2 ">
          <View className="flex flex-row gap-2">
            <RadioButton
              className="rounded-full"
              value='option1'
              status={checked === 'option1' ? 'checked' :'unchecked'}
              onPress={()=>setChecked('option1')}
              color= "#0000FF" 
            />
            <Text>Yes</Text>
          </View>
          <View className="flex flex-row gap-2">
            <RadioButton
              className="rounded-full"
              value='option2'
              status={checked === 'option2' ? 'checked' :'unchecked'}
              onPress={() =>setChecked('option2')}
              color="#0000FF"
            />
            <Text>No</Text>
          </View>
        </View>
        <TextInput
          placeholder="GST Number"
          className="border-2 border-sky-700 p-2 mt-6 mb-4"
        />
      </View>
      <View className="mx-8 rou">
        <TouchableOpacity
          className="border-2 border-black p-3 justify-center items-center my-2 bg-sky-700"
          onPress={() => navigation.navigate('Subscription')}
         
        >
          <Text className="text-white font-bold">Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;
