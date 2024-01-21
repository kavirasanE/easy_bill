import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CashierListItems = [
  { id: 1, name: "test", username: "ganesh", mobilenumber: "4985082334" },
  { id: 2, name: "test", username: "ganesh", mobilenumber: "4985082334" },
  { id: 3, name: "test", username: "ganesh", mobilenumber: "4985082334" },
  { id: 4, name: "test", username: "ganesh", mobilenumber: "4985082334" },
  { id: 5, name: "test", username: "ganesh", mobilenumber: "4985082334" },
  { id: 6, name: "test", username: "ganesh", mobilenumber: "4985082334" },
];

const CashierList = () => {
  const [isRender, setIsRender] = useState(false);
  return (
    <SafeAreaView>
      <View>
        <View className=" font-semibold flex flex-row  justify-between  bg-sky-700 p-3">
          <Text className="text-white font-semibold w-24 text-center">
            Name
          </Text>
          <Text className="text-white font-semibold w-24  text-center ">
            UserName
          </Text>
          <Text className="text-white font-semibold  w-24 text-center ">
            Mobile No.
          </Text>
        </View>

        <View>
          <FlatList
            data={CashierListItems}
            extraData={isRender}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity>
                    <View
                      key={item.id}
                      className="font-semibold flex flex-row justify-between p-3 mx-2 items-center"
                    >
                      <Text className="w-24 text-center">{item.name}</Text>
                      <Text className="w-24 text-center">{item.username}</Text>
                      <Text className="w-24 text-center">{item.mobilenumber}</Text>
                     
                    </View>
                    <View className=" border border-gray-300"></View>
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CashierList;
