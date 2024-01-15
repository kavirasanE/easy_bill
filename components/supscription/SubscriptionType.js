import { Text, View,TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

const SubscriptionType = () => {
  const initialState = {
    one: false,
    two: false,
    three:false,
    four:false,
    five:false
  };

  const [checked, setChecked] = useState(initialState);
  return (
    <View className="m-2 mt-20 h-5/6">
        <View className="mx-6">
        <Text className="text-xl font-bold">Select Subscription</Text>
      <Text className="text-slate-500">Choose your plan</Text>
        </View>
      
      <View className=" flex flex-col mt-5 ">
      <View className="flex flex-row gap-2 border-2 border-gray-300 justify-center pb-2 items-center mx-4 my-2">
        <Checkbox
          value={checked.one}
          onValueChange={(value) => setChecked({ ...checked, one: value })}
          color={checked ? "#0000FF" : undefined}
          
        />
        <Text className="text-lg">Monthly Plan <Text className="text-sky-700">Rs.0</Text></Text>
      </View>
      <View className="flex flex-row gap-2 border-2 border-gray-300 justify-center pb-2 items-center mx-4 my-2">
        <Checkbox
          value={checked.two}
          onValueChange={(value) => setChecked({ ...checked, two: value })}
          color={checked ? "#0000FF" : undefined}
          
        />
        <Text className="text-lg">Monthly Plan <Text className="text-sky-700">Rs.0</Text></Text>
      </View>
      <View className="flex flex-row gap-2 border-2 border-gray-300 justify-center pb-2 items-center mx-4 my-2">
        <Checkbox
          value={checked.three}
          onValueChange={(value) => setChecked({ ...checked, three: value })}
          color={checked ? "#0000FF" : undefined}
         
        />
        <Text className="text-lg">Monthly Plan <Text className="text-sky-700">Rs.0</Text></Text>
      </View>
      <View className="flex flex-row gap-2 border-2 border-gray-300 justify-center pb-2 items-center mx-4 my-2">
        <Checkbox
          value={checked.four}
          onValueChange={(value) => setChecked({ ...checked, four: value })}
          color={checked ? "#0000FF" : undefined}
         
        />
        <Text className="text-lg">Monthly Plan <Text className="text-sky-700">Rs.0</Text></Text>
      </View>
      <View className="flex flex-row gap-2 border-2 border-gray-300 justify-center pb-2 items-center mx-4 my-2">
        <Checkbox
          value={checked.five}
          onValueChange={(value) => setChecked({ ...checked, five: value })}
          color={checked ? "#0000FF" : undefined}
          
        />
        <Text className="text-lg">Monthly Plan <Text className="text-sky-700">Rs.0</Text></Text>
      </View>
      </View>
      <View className="mx-8 absolute inset-x-0 bottom-0">
        <TouchableOpacity
          onPress="function"
          className="border-2 border-black p-3 justify-center items-center my-2 bg-sky-700  "
        >
          <Text className="text-white font-bold">Choose your Plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubscriptionType;
