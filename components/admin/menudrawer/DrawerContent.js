import { View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";


const DrawerList =[
  {MaterialCommunityIcons:'clipboard-list',label: 'Product List',navigateTo: 'Product List'},
  {MaterialCommunityIcons:'clipboard-list',label: 'Login',navigateTo: 'Login'}
];

const Drawerlayout =({icon,label,navigateTo}) => {
  const navigation=useNavigation();
  return (
    <DrawerItem 
    MaterialCommunityIcons={({color,size}) => <MaterialCommunityIcons name={icon} color={color} size={size}/>}
    label={label}
    onPress={() => {
      navigation.navigate(navigateTo);
    }}
    />
  )
};

const DrawerItems = props => {
  return DrawerList.map((e,i) => {
    return(
      <Drawerlayout
      key={i}
      icons={e.icon}
      label={e.label}
      navigateTo={e.navigateTo}
      />
    );
  });
};
   

const DrawerContent = (props) => {
  return (
    <View>
     
       <View className="mt-24 ">
       <DrawerItems/>
       </View>
      
     
        
    </View>
  )
}

export default DrawerContent
