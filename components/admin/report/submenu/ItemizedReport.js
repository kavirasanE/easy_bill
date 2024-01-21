import React ,{useEffect, useState} from 'react'
import { View ,Text,SafeAreaView ,FlatList,TouchableOpacity} from 'react-native'

const ItemizedReportItems = [
  { id: 1, name: "test", qty: "6.0", total: "567" },
  { id: 2, name: "test", qty: "6.0", total: "567" },
  { id: 3, name: "test", qty: "6.0", total: "567" },
  { id: 4, name: "test", qty: "6.0", total: "567" },
  { id: 5, name: "test", qty: "6.0", total: "567" },
  { id: 6, name: "test", qty: "6.0", total: "567" },
];

const ItemizedReport = () => {
  const[currentDate,setCurrentDate] =useState('');
  useEffect(()=>{
    var date =new Date().getDate();
    var month =new Date().getMonth();
    var year =new Date().getFullYear();
    setCurrentDate(date +"/" + month +"/" +year);
  },[]);
  const [isRender, setIsRender] = useState(false);
  return (
    <SafeAreaView>
      <View className="flex flex-row justify-between  p-3">
        <Text className="font-bold"> Total Sum: 1234</Text> 
        <Text className="font-bold">Date:{currentDate} </Text>
      </View>
      <View>
        <View className=" font-semibold flex flex-row  justify-between  bg-sky-700 p-3">
          <Text className="text-white font-semibold  text-center  w-10 ">
            S.No
          </Text>
          <Text className="text-white font-semibold   text-center  w-24 ">
            Name
          </Text>
          <Text className="text-white font-semibold   text-center  w-24 ">
            Quantity
          </Text>
          <Text className="text-white font-semibold   text-center  w-14 ">
            Total
          </Text>
        </View>

        <View>
          <FlatList
            data={ItemizedReportItems}
            extraData={isRender}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity>
                    <View
                      key={item.id}
                      className="font-semibold flex flex-row justify-between p-3  items-center"
                    >
                      <Text className=" text-center w-10">{item.id}</Text>
                      <Text className=" text-center w-24">{item.name}</Text>
                      <Text className=" text-center w-24">{item.qty}</Text>
                      <Text className=" text-center w-14">{item.total}</Text>
                     
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
  )
}

export default ItemizedReport
