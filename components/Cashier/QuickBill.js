import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const QuickBill = () => {
  return (
    <SafeAreaView>
      <View>
        <View className="p-4 justify-center items-center">
          <Text> QuickBill</Text>
        </View>

        <View className=" top-56">
          <View className="bg-gray-700 ">
            <Text>lkdvmdsvmmks</Text>
          </View>
          <View className="bg-white flex flex-row justify-between items-center p-3 border">
            <Text>Number</Text>
            <AntDesign name="close" size={24} color="black" />
          </View>
          <View className="flex flex-row gap-20 p-4 ">
            <Text className="border w-1/4 p-2 text-center rounded-lg font-semibold">
              Key
            </Text>
            <Text className="border w-1/4 p-2 text-center rounded-lg font-semibold ">
              Qty
            </Text>
          </View>
          <View className="flex flex-row">
            <View className="flex flex-col w-5/6 ">
              <View className="flex flex-row justify-around items-center  mx-2 my-1 p-3 ">
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">7</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">8</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">9</Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row justify-around items-center mx-2 my-1 p-3">
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">4</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">5</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">6</Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row justify-around items-center  mx-2 my-1 p-3 ">
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">1</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">2</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">3</Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row justify-around items-center  mx-2 my-1 p-3">
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">0</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">00</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">.</Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row justify-around items-center  mx-2 mt-1 p-3 ">
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">.250</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">.500</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-3">
                  <Text className="font-bold text-lg">.750</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className=" gap-7  justify-center mr-4 w-20 ">
              <TouchableOpacity className=" rounded-lg p-4 bg-orange-500 ">
                <Text className="font-bold text-lg text-center text-white ">
                  C
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className=" rounded-lg px-1 py-6 bg-blue-500 ">
                <Text className="text-center font-bold text-md text-white ">
                  X Qty.
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className=" px-1 py-8 rounded-lg bg-green-500 ">
                <Text className="text-center font-bold text-md text-white  ">
                  Enter
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="flex flex-row justify-between gap-4 items-center mx-3 ">
            <TouchableOpacity className="p-2  rounded-lg bg-blue-500 w-1/5 items-center flex-1 ">
              <MaterialCommunityIcons
                name="clipboard-list"
                size={30}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 rounded-lg bg-blue-500 flex-none w-1/5 items-center">
              <MaterialCommunityIcons
                name="printer-settings"
                size={30}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity className="p-3 rounded-lg bg-blue-500 flex-auto  items-center ">
              <Text className="text-center text-white font-bold "> Total Price</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default QuickBill;
