import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";

const SubscriptionPending = () => {
  return (
    <View className="m-4 mt-20 relative h-5/6">
      <View className="flex flex-col items-center  absolute inset-x-0 top-48 ">
        <Image source={require("../../assets/favicon.png")} width={500} height={500} />
        <Text className="text-md font-bold text-sky-700  text-center mt-10">
          Thank you for signing Up.your account subscription is pending.please
          make payment to complete the subscription
        </Text>
      </View>
      <View className="absolute inset-x-0 bottom-0">
        <TouchableOpacity className=" p-3 mx-6 rounded-md bg-sky-700 justify-center items-center">
          <Text className="text-white font-bold text-lg flex ">
            Make Payment
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubscriptionPending;
