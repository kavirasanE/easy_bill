import "./users.css";
import React, { useState, useCallback, useRef } from "react";
import UserInfo from "./UserInfo";
import { useSearchParams } from "react-router-dom";
const Users = () => {
  const [itemOpen, setItemOpen] = useState(true);
  const [testVal, setTestVal] = useState(null);
  const [data, setDate] = useState([
    {
      shopName: "Shop 1",
      registerOn: "2024-03-01T12:00:00Z",
      deviceId: "DeviceID123",
      subscription: true,
      subscriptionStartDate: "2024-03-01T00:00:00Z",
      subscriptionEndDate: "2024-03-31T23:59:59Z",
      additionalInformation: "Additional information about Shop 1",
      address: "Shop 1 Address, City 1, Country 1",
      mobileNumber: "MobileNumber1",
    },
    {
      shopName: "Shop 2",
      registerOn: "2024-03-02T12:00:00Z",
      deviceId: "DeviceID456",
      subscription: true,
      subscriptionStartDate: "2024-03-02T00:00:00Z",
      subscriptionEndDate: "2024-03-31T23:59:59Z",
      additionalInformation: "Additional information about Shop 2",
      address: "Shop 2 Address, City 2, Country 2",
      mobileNumber: "MobileNumber2",
    },
    {
      shopName: "Shop 3",
      registerOn: "2024-03-03T12:00:00Z",
      deviceId: "DeviceID789",
      subscription: false,
      subscriptionStartDate: null,
      subscriptionEndDate: null,
      additionalInformation: "Additional information about Shop 3",
      address: "Shop 3 Address, City 3, Country 3",
      mobileNumber: "MobileNumber3",
    },
    {
      shopName: "Shop 4",
      registerOn: "2024-03-04T12:00:00Z",
      deviceId: "DeviceID101",
      subscription: true,
      subscriptionStartDate: "2024-03-04T00:00:00Z",
      subscriptionEndDate: "2024-03-31T23:59:59Z",
      additionalInformation: "Additional information about Shop 4",
      address: "Shop 4 Address, City 4, Country 4",
      mobileNumber: "MobileNumber4",
    },
    {
      shopName: "Shop 5",
      registerOn: "2024-03-05T12:00:00Z",
      deviceId: "DeviceID112",
      subscription: true,
      subscriptionStartDate: "2024-03-05T00:00:00Z",
      subscriptionEndDate: "2024-03-31T23:59:59Z",
      additionalInformation: "Additional information about Shop 5",
      address: "Shop 5 Address, City 5, Country 5",
      mobileNumber: "MobileNumber5",
    },
    {
      shopName: "Shop 6",
      registerOn: "2024-03-06T12:00:00Z",
      deviceId: "DeviceID213",
      subscription: false,
      subscriptionStartDate: null,
      subscriptionEndDate: null,
      additionalInformation: "Additional information about Shop 6",
      address: "Shop 6 Address, City 6, Country 6",
      mobileNumber: "MobileNumber6",
    },
    {
      shopName: "Shop 7",
      registerOn: "2024-03-07T12:00:00Z",
      deviceId: "DeviceID314",
      subscription: true,
      subscriptionStartDate: "2024-03-07T00:00:00Z",
      subscriptionEndDate: "2024-03-31T23:59:59Z",
      additionalInformation: "Additional information about Shop 7",
      address: "Shop 7 Address, City 7, Country 7",
      mobileNumber: "MobileNumber7",
    },
    {
      shopName: "Shop 8",
      registerOn: "2024-03-08T12:00:00Z",
      deviceId: "DeviceID415",
      subscription: true,
      subscriptionStartDate: "2024-03-08T00:00:00Z",
      subscriptionEndDate: "2024-03-31T23:59:59Z",
      additionalInformation: "Additional information about Shop 8",
      address: "Shop 8 Address, City 8, Country 8",
      mobileNumber: "MobileNumber8",
    },
    {
      shopName: "Shop 9",
      registerOn: "2024-03-09T12:00:00Z",
      deviceId: "DeviceID516",
      subscription: false,
      subscriptionStartDate: null,
      subscriptionEndDate: null,
      additionalInformation: "Additional information about Shop 9",
      address: "Shop 9 Address, City 9, Country 9",
      mobileNumber: "MobileNumber9",
    },
    {
      shopName: "Shop 10",
      registerOn: "2024-03-10T12:00:00Z",
      deviceId: "DeviceID617",
      subscription: true,
      subscriptionStartDate: "2024-03-10T00:00:00Z",
      subscriptionEndDate: "2024-03-31T23:59:59Z",
      additionalInformation: "Additional information about Shop 10",
      address: "Shop 10 Address, City 10, Country 10",
      mobileNumber: "MobileNumber10",
    },
  ]);
  // const data = [
  //   {
  //     shopName: "Shop 1",
  //     registerOn: "2024-03-01T12:00:00Z",
  //     deviceId: "DeviceID123",
  //     subscription: true,
  //     subscriptionStartDate: "2024-03-01T00:00:00Z",
  //     subscriptionEndDate: "2024-03-31T23:59:59Z",
  //     additionalInformation: "Additional information about Shop 1",
  //     address: "Shop 1 Address, City 1, Country 1",
  //     mobileNumber: "MobileNumber1",
  //   },
  //   {
  //     shopName: "Shop 2",
  //     registerOn: "2024-03-02T12:00:00Z",
  //     deviceId: "DeviceID456",
  //     subscription: true,
  //     subscriptionStartDate: "2024-03-02T00:00:00Z",
  //     subscriptionEndDate: "2024-03-31T23:59:59Z",
  //     additionalInformation: "Additional information about Shop 2",
  //     address: "Shop 2 Address, City 2, Country 2",
  //     mobileNumber: "MobileNumber2",
  //   },
  //   {
  //     shopName: "Shop 3",
  //     registerOn: "2024-03-03T12:00:00Z",
  //     deviceId: "DeviceID789",
  //     subscription: false,
  //     subscriptionStartDate: null,
  //     subscriptionEndDate: null,
  //     additionalInformation: "Additional information about Shop 3",
  //     address: "Shop 3 Address, City 3, Country 3",
  //     mobileNumber: "MobileNumber3",
  //   },
  //   {
  //     shopName: "Shop 4",
  //     registerOn: "2024-03-04T12:00:00Z",
  //     deviceId: "DeviceID101",
  //     subscription: true,
  //     subscriptionStartDate: "2024-03-04T00:00:00Z",
  //     subscriptionEndDate: "2024-03-31T23:59:59Z",
  //     additionalInformation: "Additional information about Shop 4",
  //     address: "Shop 4 Address, City 4, Country 4",
  //     mobileNumber: "MobileNumber4",
  //   },
  //   {
  //     shopName: "Shop 5",
  //     registerOn: "2024-03-05T12:00:00Z",
  //     deviceId: "DeviceID112",
  //     subscription: true,
  //     subscriptionStartDate: "2024-03-05T00:00:00Z",
  //     subscriptionEndDate: "2024-03-31T23:59:59Z",
  //     additionalInformation: "Additional information about Shop 5",
  //     address: "Shop 5 Address, City 5, Country 5",
  //     mobileNumber: "MobileNumber5",
  //   },
  //   {
  //     shopName: "Shop 6",
  //     registerOn: "2024-03-06T12:00:00Z",
  //     deviceId: "DeviceID213",
  //     subscription: false,
  //     subscriptionStartDate: null,
  //     subscriptionEndDate: null,
  //     additionalInformation: "Additional information about Shop 6",
  //     address: "Shop 6 Address, City 6, Country 6",
  //     mobileNumber: "MobileNumber6",
  //   },
  //   {
  //     shopName: "Shop 7",
  //     registerOn: "2024-03-07T12:00:00Z",
  //     deviceId: "DeviceID314",
  //     subscription: true,
  //     subscriptionStartDate: "2024-03-07T00:00:00Z",
  //     subscriptionEndDate: "2024-03-31T23:59:59Z",
  //     additionalInformation: "Additional information about Shop 7",
  //     address: "Shop 7 Address, City 7, Country 7",
  //     mobileNumber: "MobileNumber7",
  //   },
  //   {
  //     shopName: "Shop 8",
  //     registerOn: "2024-03-08T12:00:00Z",
  //     deviceId: "DeviceID415",
  //     subscription: true,
  //     subscriptionStartDate: "2024-03-08T00:00:00Z",
  //     subscriptionEndDate: "2024-03-31T23:59:59Z",
  //     additionalInformation: "Additional information about Shop 8",
  //     address: "Shop 8 Address, City 8, Country 8",
  //     mobileNumber: "MobileNumber8",
  //   },
  //   {
  //     shopName: "Shop 9",
  //     registerOn: "2024-03-09T12:00:00Z",
  //     deviceId: "DeviceID516",
  //     subscription: false,
  //     subscriptionStartDate: null,
  //     subscriptionEndDate: null,
  //     additionalInformation: "Additional information about Shop 9",
  //     address: "Shop 9 Address, City 9, Country 9",
  //     mobileNumber: "MobileNumber9",
  //   },
  //   {
  //     shopName: "Shop 10",
  //     registerOn: "2024-03-10T12:00:00Z",
  //     deviceId: "DeviceID617",
  //     subscription: true,
  //     subscriptionStartDate: "2024-03-10T00:00:00Z",
  //     subscriptionEndDate: "2024-03-31T23:59:59Z",
  //     additionalInformation: "Additional information about Shop 10",
  //     address: "Shop 10 Address, City 10, Country 10",
  //     mobileNumber: "MobileNumber10",
  //   },
  // ];

  let handleToggle = useCallback((e) => {
    // setItemOpen((prevstate) => !prevstate);
    console.log(e.target.id)
    setTestVal(e.target.id)
  },[itemOpen]);
  // handleToggle={handleToggle}
  return (
    <div>
      
      {data.map((data, index) => (
        <UserInfo
          data={data}
          key={index}
          open={testVal === data.shopName ? true : false}
          name = {data.shopName}
          handleToggle={handleToggle}
        />
      ))}
      {/* <UserInfo/> */}
    </div>
  );
};

export default Users;
