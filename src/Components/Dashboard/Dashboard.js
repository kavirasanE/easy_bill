import "./dashboard.css";
import DashboardInfo from "./DashboardInfo";

import React from "react";

const Dashboard = () => {
  const data = {
    SubscribedUsers: "SubscribedUsers",
    NotSubscribed: "NotSubscribed",
    Approved: "Approved",
    Pending: "Pending",
    Expired: "Expired"
  };
  

  return (
    <div>
      <DashboardInfo data={data}/>
    </div>
  )
};

export default Dashboard;
