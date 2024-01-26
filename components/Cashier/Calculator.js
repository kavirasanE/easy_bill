import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState("");
  const handleNumberInput = (num) => {
    if (displayValue === "0") {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };
  const handleOperatorInput = (operator) => {
    setOperator(operator);
  };
  const handleClear = () => {
    setDisplayValue("0");
    setOperator(null);
  };
  
  return (
    <SafeAreaView>
      <View>
        <View className="top-40">
          <View className="bg-white flex flex-row justify-between items-center p-3 ">
            <Text>{displayValue}</Text>
            <AntDesign name="close" size={24} color="black"  />
          </View>
          <View className="flex flex-row gap-20  ">
            <Text className=" w-1/4 p-2 text-center rounded-lg font-bold ">
              Key
            </Text>
            <Text className=" w-1/4 p-2 text-center rounded-lg font-bold ">
              Qty
            </Text>
          </View>
          <View className="flex flex-row">
            <View className="flex flex-col w-5/6 ">
              <View className="flex flex-row   items-center  mx-2  p-3 ">
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput(7);
                  }}
                >
                  <Text className="font-bold text-lg mx-10">7</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput(8);
                  }}
                >
                  <Text className="font-bold text-lg mx-10">8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput(9);
                  }}
                >
                  <Text className="font-bold text-lg mx-10">9</Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row  items-center mx-2  p-3">
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput(4);
                  }}
                >
                  <Text className="font-bold  mx-10 text-lg">4</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput(5);
                  }}
                >
                  <Text className="font-bold  mx-10 text-lg">5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput(6);
                  }}
                >
                  <Text className="font-bold  mx-10 text-lg">6</Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row  items-center  mx-2  p-3 ">
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput(1);
                  }}
                >
                  <Text className="font-bold  mx-10 text-lg">1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput(2);
                  }}
                >
                  <Text className="font-bold  mx-10 text-lg">2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput(3);
                  }}
                >
                  <Text className="font-bold  mx-10 text-lg">3</Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row  items-center  mx-2  p-3">
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput(0);
                  }}
                >
                  <Text className="font-bold  mx-10 text-lg">0</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput("00");
                  }}
                >
                  <Text className="font-bold  mx-9 text-lg">00</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput(".");
                  }}
                >
                  <Text className="font-bold  mx-10 text-lg">.</Text>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row items-center  mx-2  p-3 ">
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput(".250");
                  }}
                >
                  <Text className="font-bold  mx-7 text-lg">.250</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput(".500");
                  }}
                >
                  <Text className="font-bold  mx-7 text-lg">.500</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="flex-3"
                  onPress={() => {
                    handleNumberInput(".750");
                  }}
                >
                  <Text className="font-bold  mx-8 text-lg">.750</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className=" gap-7  justify-center mr-4 w-20 ">
              <TouchableOpacity
                className=" rounded-lg p-4 bg-orange-500 "
                onPress={() => handleClear()}
              >
                <Text className="font-bold text-lg text-center text-white ">
                  C
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className=" rounded-lg px-1 py-6 bg-blue-500 "
                onPress={() => handleNumberInput("x")}
              >
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
          <View className="flex flex-row justify-between gap-4 items-center mx-3 mt-1">
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
              <Text className="text-center text-white font-bold ">
                {" "}
                Total Price
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Calculator;
