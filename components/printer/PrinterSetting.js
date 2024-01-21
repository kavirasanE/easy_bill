import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  
} from "react-native";
import {RadioButton} from "react-native-paper";
import Checkbox from "expo-checkbox";


const PrinterSetting = () => {
  const [checked, setChecked] = useState("option1");
  const[clicked,setClicked] =useState(false);
  return (
    <SafeAreaView>
      <View className="m-5">
        <Text className="font-bold text-sky-700 my-4">Printer Size</Text>
        <View className="flex flex-row  mx-2 gap-4">
          <View className="flex flex-row gap-2">
            <RadioButton
              className="rounded-full"
              value="option1"
              status={checked === "option1" ? "checked" : "unchecked"}
              onPress={() => setChecked("option1")}
              color="#0000FF"
            />
            <Text>2inch</Text>
          </View>
          <View className="flex flex-row gap-2">
            <RadioButton
              className="rounded-full"
              value="option2"
              status={checked === "option2" ? "checked" : "unchecked"}
              onPress={() => setChecked("option2")}
              color="#0000FF"
            />
            <Text>3inch</Text>
          </View>
        </View>
        <View className="flex flex-row gap-4 my-4 items-center">
            <Checkbox value={clicked}
            onValueChange={()=> setClicked(!clicked)}
            color={clicked ? "#0000FF" : undefined}/>
            <Text className="text-sky-700">Printer Logo Enabled</Text>
        </View>
       
        <TouchableOpacity className="bg-sky-700 mx-20 rounded-lg my-5">
          <Text className="p-3 text-center text-white font-bold">Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PrinterSetting;
