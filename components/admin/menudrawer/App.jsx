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
import { View } from "react-native";
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
const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
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
              <MaterialCommunityIcons name="filter-variant" size={24} color="#3498db" onPress={() => navigation.navigate("Create Product")}/>
              <MaterialCommunityIcons name="plus" size={24} color="#3498db" onPress={() => navigation.navigate("Create Product")}/>
              </View>
            );
          }
        }}
      />
      <Stack.Screen name="Login" component={Login} />
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
      <Stack.Screen name="LogOut"component={LogOut} />
      <Stack.Screen name="Create Product"component={CreateProduct} Options={{headerShown:false}}/>
      <Stack.Screen name="Edit Product"component={EditProduct} Options={{headerShown:false}}/>
      <Stack.Screen name="Quickbill"component={QuickBill}/>
      <Stack.Screen name="Create Cashier" component={CreateCashierList}/>
      
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
      <Drawer.Screen name="Product List" component={StackNav} />
    </Drawer.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
};

export default App;
