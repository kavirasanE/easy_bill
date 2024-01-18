import React, { useState, useEffect } from "react";
import { Text, View, Image, LayoutAnimation, UIManager } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const DrawerList = [
  { icon: "clipboard-list", label: "Product List", navigateTo: "Product List" },
  { icon: "clipboard-list", label: "Login", navigateTo: "Login" },
  { icon: "clipboard-list", label: "Cashier List", navigateTo: "Cashier List" },
  { icon: "clipboard-list", label: "Bulk Update", navigateTo: "Bulk Update" },
  {
    icon: "plus",
    label: "Report",
    submenu: [
      { icon: "clipboard-list", label: "Cancel Report", navigateTo: "Cancel Report" },
      { icon: "clipboard-list", label: "Cashier Report", navigateTo: "Cashier Report" },
      { icon: "clipboard-list", label: "BillWise Report", navigateTo: "BillWise Report" },
      { icon: "clipboard-list", label: "Itemized Report", navigateTo: "Itemized Report" },
    ],
  },
  { icon: "clipboard-list", label: "Profile", navigateTo: "Profile" },
  { icon: "clipboard-list", label: "LogOut", navigateTo: "LogOut" },
];

const DrawerLayout = ({ icon, label, navigateTo, onPress, showPlus, expanded }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <DrawerItem
        icon={({ color, size }) => <Icon name={icon} color={color} size={size} />}
        label={label}
      />
      {expanded && (
        <SubDrawerItems items={DrawerList.find((item) => item.label === "Report").submenu} />
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

const DrawerContent = (props) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    LayoutAnimation.easeInEaseOut();
    setShowSubmenu(!showSubmenu);
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image source={require("./title.jpg")} style={{ width: 50, height: 50 }} />
      </View>
      <View style={{ marginTop: 14 }}>
        {DrawerList.map((item, index) => (
          <DrawerLayout
            key={index}
            icon={item.icon}
            label={item.label}
            navigateTo={item.navigateTo}
            onPress={() => (item.submenu ? toggleSubmenu() : props.navigation.navigate(item.navigateTo))}
            showPlus={item.label === "Report" && !showSubmenu}
            expanded={item.label === "Report" && showSubmenu}
          />
        ))}
      </View>
    </View>
  );
};

export default DrawerContent;
