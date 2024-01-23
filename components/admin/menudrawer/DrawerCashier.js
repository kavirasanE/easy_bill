import React, { useState} from "react";
import { Text, View, Image, LayoutAnimation, UIManager ,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const DrawerList = [
    { icon: "printer", label: "Product List", navigateTo: "Product List" },
  // { icon: "login", label: "Login", navigateTo: "Login" },
//   { icon: "account-group", label: "Cashier List", navigateTo: "Cashier List" },
//   { icon: "account-group", label: "Create Cashier", navigateTo: "Create Cashier" },
//   { icon: "database-cog", label: "Bulk Update", navigateTo: "Bulk Update" },
  { icon: "printer-wireless", label: "Printer Setting", navigateTo: "Printer Setting" },
  { icon: "printer-wireless", label: "Quickbill", navigateTo: "Quickbill" },

  {
    icon: "notebook",
    label: "Report",
    submenu: [
      {
        icon: "close-circle",
        label: "Cancel Report",
        navigateTo: "Cancel Report",
      },
      {
        icon: "bag-personal",
        label: "Cashier Report",
        navigateTo: "Cashier Report",
      },
      {
        icon: "clipboard-list",
        label: "BillWise Report",
        navigateTo: "BillWise Report",
      },
      {
        icon: "clipboard-list",
        label: "Itemized Report",
        navigateTo: "Itemized Report",
      },
    ],
  },
  { icon: "account-circle", label: "Profile", navigateTo: "Profile" },
  { icon: "logout", label: "LogOut", navigateTo: "Login" },
 
];

const DrawerLayout = ({
  icon,
  label,
  navigateTo,
  onPress,
  showPlus,
  expanded,
}) => {
  const [state, setState] = useState(false);
  const handleItemPress = () => {
    setState(!state);
  
  };

  return (
    <TouchableOpacity onPress={ () => {onPress(); handleItemPress();}}>
      <View className="flex flex-row justify-between items-center p-3">
        <View className="flex flex-row items-center gap-5">
          <Icon name={icon} color={"#077BC1"} size={24} />
          <Text className="text-md">{label}</Text>
        </View>
        {showPlus && (
            <View className="mx-5">
              <Icon name={state ? "minus" : "plus"} color="#077BC1" size={24} />
            </View>
          
        )}
      </View>
      {expanded && (
        <SubDrawerItems
          items={DrawerList.find((item) => item.label === "Report").submenu}
        />
      )}
    </TouchableOpacity>
  );
};


const SubDrawerItems = ({ items }) => {
  const navigation = useNavigation();

  const handleItemPress = (item) => {
    if (item.navigateTo) {
      navigation.navigate(item.navigateTo);
    
    }
  };

  return items.map((item, index) => (
    <DrawerLayout
      key={index}
      icon={item.icon}
      label={item.label}
      navigateTo={item.navigateTo}
      onPress={() => handleItemPress(item)}
    />
  ));
};

const DrawerCashier = (props) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    LayoutAnimation.easeInEaseOut();
    setShowSubmenu(!showSubmenu);
  
  };

  return (
    <View className="mt-4">
      <View className="px-5 justify-center items-center my-5">
        <Image
          source={require("./title.jpg")}
          style={{ width: 150, height: 50 }}
        />
      </View>
      <View className="mt-5  font-bold">
        {DrawerList.map((item, index) => (
          <DrawerLayout
            key={index}
            icon={item.icon}
            label={item.label}
            navigateTo={item.navigateTo}
            onPress={() =>
              item.submenu
                ? toggleSubmenu()
                : props.navigation.navigate(item.navigateTo)
            }
            showPlus={item.label === "Report" && !showSubmenu}
            expanded={item.label === "Report" && showSubmenu}
          />
        ))}
      </View>
    </View>
  );
};

export default DrawerCashier;
