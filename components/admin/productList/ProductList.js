import React from "react";
import { View, Text, SafeAreaView, FlatList ,TouchableOpacity} from "react-native";

const productListItems =[
  {id:1,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:2,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:3,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:4,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:5,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
  {id:6,name:'test',price:'25.0' ,quantity:'5/litre' },
]

const ProductList = () => {
  return (
    <SafeAreaView>
      <View className="relative">
        
        <View>
        <View className=" font-semibold flex flex-row  justify-between  bg-sky-700 p-3">
          <Text className="text-white font-semibold">S.No</Text>
          <Text  className="text-white font-semibold">Name</Text>
          <Text  className="text-white font-semibold">Price</Text>
          <Text  className="text-white font-semibold">Quantity</Text>
        </View>
        <View className="font-semibold flex flex-row justify-between ">
        <FlatList
        data={productListItems}
        renderItem={({item }) => {
          return (
            <View >
            <View  key={item.id} className="font-semibold flex flex-row justify-between p-3 mx-2 items-center">
              <Text>{item.id}</Text>
              <Text className="">{item.name}</Text>
              <Text>{item.price}</Text>
              <Text>{item.quantity}</Text>
              </View>
              <View className=" border border-gray-300 "></View>
              </View>
          )
        }}
        keyExtractor={(item) => item.id.toString()}
        />
        </View>
        </View>
       
       
      </View>
    </SafeAreaView>
  );
};

export default ProductList;
