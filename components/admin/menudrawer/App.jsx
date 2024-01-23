import "react-native-gesture-handler";
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "../productList/ProductList";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from "@expo/vector-icons";
import Login from "../../login/Login";
import DrawerContent from "./DrawerContent";
import CashierList from "../cashierList/CashierList";
import { View ,Modal,Text,TouchableOpacity,TextInput} from "react-native";
import { Picker } from "@react-native-picker/picker";
import BulkUpdate from "../bulkupdate/BulkUpdate";
import CancelReport from "../report/submenu/CancelReport";
import CashierReport from "../report/submenu/CashierReport";
import BillWiseReport from "../report/submenu/BillWiseReport";
import ItemizedReport from "../report/submenu/ItemizedReport";
import Profile from "../profile/Profile";
import LogOut from "../logout/LogOut";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CreateProduct from "../productList/CreateProduct";
import Report from "../report/Report";
import EditProduct from "../productList/EditProduct";
import QuickBill from "../../Cashier/QuickBill";
import CreateCashierList from "../cashierList/CreateCashierList";
import PrinterSetting from "../../printer/PrinterSetting";
import CashierLogin from "./CashierLogin";
import Register from "../../registration/Register";
import SubscriptionPending from "../../supscription/SubscriptionPending";
import DrawerCashier from "./DrawerCashier";
import { useState } from "react";
const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const [filter,setFilter] =useState(false);
  const [selectvalue,setSelectValue] =useState('sort')
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: "#ffA500",
        headerStyle: {
          backgroundColor: "#FFFF",
        },
        headerTintColor: "#3498db",
        headerTitleAlign: "center",
      }}
     
    >
      <Stack.Screen
        name="Product List"
        component={ProductList}
        options={{
          headerLeft: () => {
            return (
              <Feather
                name="menu"
                size={24}
                color="#3498db"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            );
          },
          headerRight:() => {
            return(
              <View className="flex flex-row gap-5">
              <MaterialCommunityIcons name="filter-variant" size={24} color="#3498db" onPress={() => setFilter(!filter)}/>
              <Modal
        onRequestClose={() => {
          setFilter(!filter);
        }}
        visible={filter}
        animationType="fade"
        transparent={true}
      >
        <View className="  h-1/2 top-1/4 bottom-1/4  bg-gray-300 shadow-2xl m-3">
          <View className="flex flex-col mt-2 ">
            <View className="flex flex-row items-center  m-4">
              <View className="flex-row gap-4">
                <MaterialCommunityIcons
                  name="window-close"
                  size={24}
                  color="black"
                  onPress={() => setFilter(!filter)}
                />
                <Text className="text-center text-xl justify-around">
                  Filter products
                </Text>
              </View>
              <TouchableOpacity className=" mx-4 flex-1 ">
                <Text className=" p-3 text-center  rounded-2xl bg-sky-700 text-white">
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
            <View className="relative jusitfy-center mx-4  ">
              <TextInput placeholder="Search for Product Name" className="bg-white text-center rounded-xl p-3" />
              <Text className="absolute p-3 ">
              <MaterialCommunityIcons
                name="text-box-search-outline"
                size={30}
                color="black"
                
              />
              </Text>
              
            </View>
           <View className="mx-4 my-5">
            <Text className="font-bold">Sort By:</Text>
            <View>
              <Picker 
              selectedValue={selectvalue}
              onValueChange={(itemValue) => setSelectValue(itemValue)}>
                <Picker.Item label="Sort by Name(Asc)" value="SortA"/>
                <Picker.Item label="Sort by Name(Desc)" value="SortB"/>
              </Picker>
            </View>
          
              <TouchableOpacity className=" bg-sky-700 mx-20 rounded-xl my-10">
                <Text className="text-white text-center p-3 font-bold">Submit</Text>
              </TouchableOpacity>
        
           </View>
          </View>
        </View>
      </Modal>
              <MaterialCommunityIcons name="plus" size={24} color="#3498db" onPress={() => navigation.navigate("Create Product")}/>
              </View>
            );
          }
        }}
      />
       
      <Stack.Screen name="Cashier List" component={CashierList} options={{ headerRight: () => {
        return(
          <View>
             <MaterialCommunityIcons name="plus" size={24} color="#3498db" onPress={() => navigation.navigate("Create Cashier")}/>
          </View>
        )
      }}} />
       <Stack.Screen name="Quickbill"component={QuickBill}/>
      <Stack.Screen name="Bulk Update" component={BulkUpdate} />
      <Stack.Screen name="Cancel Report" component={CancelReport}  options={{
          headerLeft: () => {
            return (
              <Feather
                name="menu"
                size={24}
                color="#3498db"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            );
          },
          headerRight:() => {
            return(
              <View className="flex flex-row gap-5">
              <MaterialCommunityIcons name="filter-variant" size={24} color="#3498db" onPress={() => setFilter(!filter)}/>
              <Modal
        onRequestClose={() => {
          setFilter(!filter);
        }}
        visible={filter}
        animationType="fade"
        transparent={true}
      >
        <View className="  h-1/2 top-1/4 bottom-1/4  bg-gray-300 shadow-2xl m-3">
          <View className="flex flex-col mt-2 ">
            <View className="flex flex-row items-center  m-4">
              <View className="flex-row gap-4">
                <MaterialCommunityIcons
                  name="window-close"
                  size={24}
                  color="black"
                  onPress={() => setFilter(!filter)}
                />
                <Text className="text-center text-xl justify-around">
                  Filter products
                </Text>
              </View>
              <TouchableOpacity className=" mx-4 flex-1 ">
                <Text className=" p-3 text-center  rounded-2xl bg-sky-700 text-white">
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
            <View className="relative jusitfy-center mx-4  ">
              <TextInput placeholder="Start Date" className="bg-white text-center rounded-xl p-3" />
              <Text className="absolute p-3 ">
              <MaterialCommunityIcons name="calendar" size={30} color="black" />
              </Text>
              
            </View>
            <View className="relative jusitfy-center mx-4 my-2 ">
              <TextInput placeholder="End Date" className="bg-white text-center rounded-xl p-3" />
              <Text className="absolute p-3 ">
              <MaterialCommunityIcons name="calendar" size={30} color="black" />
              </Text>
              
            </View>
           <View className="mx-4 my-5">
            <Text className="font-bold">Sort By Cashier:</Text>
            <View>
              <Picker 
              selectedValue={selectvalue}
              onValueChange={(itemValue) => setSelectValue(itemValue)}>
                <Picker.Item label="A" value="SortA"/>
                <Picker.Item label="B" value="SortB"/>
              </Picker>
            </View>
          
              <TouchableOpacity className=" bg-sky-700 mx-20 rounded-xl">
                <Text className="text-white text-center p-3 font-bold">Submit</Text>
              </TouchableOpacity>
        
           </View>
          </View>
        </View>
      </Modal>
              <MaterialCommunityIcons name="plus" size={24} color="#3498db" onPress={() => navigation.navigate("Create Product")}/>
              </View>
            );
          }
        }} />
      <Stack.Screen name="Cashier Report" component={CashierReport} />
      <Stack.Screen name="BillWise Report" component={BillWiseReport} />
      <Stack.Screen name="Itemized Report" component={ItemizedReport} />
     
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="LogOut"component={Login} />
      <Stack.Screen name="Create Product"component={CreateProduct} Options={{headerShown:false}}/>
      <Stack.Screen name="Edit Product"component={EditProduct} Options={{headerShown:false}}/>
      <Stack.Screen name="Create Cashier" component={CreateCashierList}/>
      <Stack.Screen name="Printer Setting" component={PrinterSetting}/>
      
      
      
    </Stack.Navigator>
  );
};

const StackNavCashier = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const[filter,setFilter]=useState(false);
  const [selectvalue,setSelectValue] =useState('sort')
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: "#ffA500",
        headerStyle: {
          backgroundColor: "#FFFF",
        },
        headerTintColor: "#3498db",
        headerTitleAlign: "center",
      }}
     
    >
       <Stack.Screen name="Quickbill"component={QuickBill}  options={{
          headerLeft: () => {
            return (
              <Feather
                name="menu"
                size={24}
                color="#3498db"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            );
          },}}/>
      <Stack.Screen
        name="ProductList"
        component={ProductList}
        options={{
          headerRight:() => {
            return(
              <View className="flex flex-row gap-5">
              <MaterialCommunityIcons name="filter-variant" size={24} color="#3498db" onPress={() => setFilter(!filter)}/>
              <Modal
        onRequestClose={() => {
          setFilter(!filter);
        }}
        visible={filter}
        animationType="fade"
        transparent={true}
      >
        <View className="  h-1/2 top-1/4 bottom-1/4  bg-gray-300 shadow-2xl m-3">
          <View className="flex flex-col mt-2 ">
            <View className="flex flex-row items-center  m-4">
              <View className="flex-row gap-4">
                <MaterialCommunityIcons
                  name="window-close"
                  size={24}
                  color="black"
                  onPress={() => setFilter(!filter)}
                />
                <Text className="text-center text-xl justify-around">
                  Filter products
                </Text>
              </View>
              <TouchableOpacity className=" mx-4 flex-1 ">
                <Text className=" p-3 text-center  rounded-2xl bg-sky-700 text-white">
                  Reset
                </Text>
              </TouchableOpacity>
            </View>
            <View className="relative jusitfy-center mx-4 ">
              <TextInput placeholder="Search for Product Name" className="bg-white text-center rounded-xl p-3" />
              <Text className="absolute p-3 ">
              <MaterialCommunityIcons
                name="text-box-search-outline"
                size={30}
                color="black"
                
              />
              </Text>
              
            </View>
           <View className="mx-4 my-5">
            <Text className="font-bold">Sort By:</Text>
            <View>
              <Picker 
              selectedValue={selectvalue}
              onValueChange={(itemValue) => setSelectValue(itemValue)}>
                <Picker.Item label="Sort by Name(Asc)" value="SortA"/>
                <Picker.Item label="Sort by Name(Desc)" value="SortB"/>
              </Picker>
            </View>
          
              <TouchableOpacity className=" bg-sky-700 mx-20 rounded-xl my-10">
                <Text className="text-white text-center p-3 font-bold">Submit</Text>
              </TouchableOpacity>
        
           </View>
          </View>
        </View>
      </Modal>
              </View>
            );
          }
        }}
      />
       
      <Stack.Screen name="Cashier List" component={CashierList} options={{ headerRight: () => {
        return(
          <View>
             <MaterialCommunityIcons name="plus" size={24} color="#3498db" onPress={() => navigation.navigate("Create Cashier")}/>
          </View>
        )
      }}} />
      
      <Stack.Screen name="Bulk Update" component={BulkUpdate} />
      <Stack.Screen name="Cancel Report" component={CancelReport} />
      <Stack.Screen name="Cashier Report" component={CashierReport} />
      <Stack.Screen name="BillWise Report" component={BillWiseReport} />
      <Stack.Screen name="Itemized Report" component={ItemizedReport} />
     
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="LogOut"component={Login} />
      <Stack.Screen name="Create Product"component={CreateProduct} Options={{headerShown:false}}/>
      <Stack.Screen name="Edit Product"component={EditProduct} Options={{headerShown:false}}/>
      <Stack.Screen name="Create Cashier" component={CreateCashierList}/>
      <Stack.Screen name="Printer Setting" component={PrinterSetting}/>
      
      
      
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Reports" component={StackNav} />
      
    </Drawer.Navigator>
  );
};

const DrawerNavCashier =() => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerCashier {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Quickbill" component={StackNavCashier}  />
      
    </Drawer.Navigator>
  );
}
const App = () => {
  const Stack =createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator  
      initialRouteName="Register"
      screenOptions={{headerShown:false}}>
        
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Subscription" component={SubscriptionPending}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Product List" component={DrawerNav}/>
        <Stack.Screen name="Reports" component={DrawerNavCashier}/>
        
      </Stack.Navigator>
     
    </NavigationContainer>
  );
};

export default App;
