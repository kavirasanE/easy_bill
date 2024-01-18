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
import { Image } from "react-native";
import BulkUpdate from "../bulkupdate/BulkUpdate";
import CancelReport from "../report/submenu/CancelReport";
import CashierReport from "../report/submenu/CashierReport";
import BillWiseReport from "../report/submenu/BillWiseReport";
import ItemizedReport from "../report/submenu/ItemizedReport";
import Profile from "../profile/Profile";
import LogOut from "../logout/LogOut";

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: "#0163d2",
        headerStyle: {
          backgroundColor: "#0163d2",
        },
        headerTintColor: "#fff",
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
                color="white"
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              />
            );
          },
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cashier List" component={CashierList} />
      <Stack.Screen name="Bulk Update" component={BulkUpdate} />
      <Stack.Screen name="Cancel Report" component={CancelReport} />
      <Stack.Screen name="Cashier Report" component={CashierReport} />
      <Stack.Screen name="BillWise Report" component={BillWiseReport} />
      <Stack.Screen name="Itemized Report" component={ItemizedReport} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="LogOut"component={LogOut} />
      
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
      <Drawer.Screen name="ProducList" component={StackNav} />
      
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
