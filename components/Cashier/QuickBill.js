import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
import Calculator from "./Calculator";

const QuickBill = () => {
  
  return (
    <SafeAreaView>
      <View>
        <View className="p-4 justify-center items-center top-1">
          <Text> QuickBill</Text>
        </View>
        <Calculator/>
      </View>
    </SafeAreaView>
  );
};

export default QuickBill;
