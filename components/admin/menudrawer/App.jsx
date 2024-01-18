import "react-native-gesture-handler";
import { NavigationContainer ,useNavigation,DrawerActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "../productList/ProductList";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather } from '@expo/vector-icons';
import Login from "../../login/Login";
import DrawerContent from "./DrawerContent";

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  const navigation =useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        statusBarColor: "#0163d2",
        headerStyle: {
          backgroundColor: "#0163d2",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerLeft:()=>{
            return(
                <Feather name="menu" size={24} color="white" 
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}/>
            )
        }
       
      }}
    >
      <Stack.Screen name="Product List" component={ProductList} />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
    drawerContent={props => <DrawerContent  {...props}/>}
      screenOptions={{
       headerShown:false
      }}
    >
      <Drawer.Screen name="ProducList" component={StackNav} />
      <Drawer.Screen name="Login" component={Login} />
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
