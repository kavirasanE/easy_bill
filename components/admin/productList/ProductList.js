import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
  Dimensions,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const productListItems = [
  { id: 1, name: "test", price: "25.0", quantity: "5/litre" },
  { id: 2, name: "test", price: "564.0", quantity: "5/litre" },
  { id: 3, name: "test", price: "25hkhbkj.0", quantity: "5/litre" },
  { id: 4, name: "test", price: "25.0", quantity: "5/litre" },
  { id: 5, name: "test", price: "25.0", quantity: "5/litre" },
  { id: 6, name: "test", price: "25.0", quantity: "5/litre" },
];

const windowHeight = Dimensions.get("window").height;
const ProductList = () => {
  const navigation = useNavigation();
  const [popup, setPopup] = useState(false);
  const [isRender, setisRender] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setPopup(false);
    });
    return unsubscribe;
  }, [navigation]);
  const itemPress = (productId) => {
    console.log(productId)
    let [selected] = productListItems.filter((itm) => itm.id == productId);
    console.log(selected)
    setSelectedItem(selected);
    setPopup(!popup);
  };
  const showAlert = (productId) => {
    let [selected] = productListItems.filter((itm) => itm.id == productId);
    console.log(selected);
    Alert.alert("Delete Item", `Are you want to delete it ? ${selected.id}`, [
      { text: "yes", onPress: () => console.log("pressed") },
    ]);
  };
  return (
    <SafeAreaView>
      <View>
        <View className=" font-semibold flex flex-row  justify-between  bg-sky-700 p-3">
          <Text className="text-white font-semibold w-8  ">S.No</Text>
          <Text className="text-white font-semibold w-24 text-center ">
            Name
          </Text>
          <Text className="text-white font-semibold  w-10 ">Price</Text>
          <Text className="text-white font-semibold  w-14">Quantity</Text>
        </View>
        <View className="font-semibold flex flex-row justify-between ">
          <FlatList
            data={productListItems}
            extraData={isRender}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity onPress={() => itemPress(item.id)}>
                    <View
                      key={item.id}
                      className="font-semibold flex flex-row justify-between p-3 mx-2 items-center"
                    >
                      <Text className="w-8">{item.id}</Text>
                      <Text className="w-24 text-center">{item.name}</Text>
                      <Text className="w-10">{item.price}</Text>
                      <Text className="w-14">{item.quantity}</Text>
                    </View>
                    <View className=" border border-gray-300"></View>
                  </TouchableOpacity>
                </View>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
      <Modal
        onRequestClose={() => {
          setPopup(!popup);
        }}
        visible={popup}
        animationType="slide"
        transparent={true}
      >
        <View className="  h-1/2 top-1/2 rounded-t-3xl bg-gray-300 shadow-2xl">
          <View className="flex flex-col mt-20 ">
            <Text className="text-center bottom-10 font-bold text-xl">
              Selected Product : {selectedItem.name}
            </Text>
            <Text className="text-center text-2xl font-bold mb-5">
            
              Edit or Delete?
            </Text>
            <TouchableOpacity
              className="mx-10 my-4"
              onPress={() =>
                navigation.navigate("Create Product", { selectedItem })
              }
            >
              <Text className=" p-3 text-center rounded-2xl bg-sky-500 text-white">
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="mx-10 my-4">
              <Text
                className="p-3 text-center rounded-2xl bg-red-500 text-white"
                onPress={() => showAlert(selectedItem.id)}
              >
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ProductList;
