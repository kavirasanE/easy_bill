import "./layout.css";
import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className="main row">
      {/* <header>Header</header> */}
      <div className="menu col-lg-2 col-md-3 col-sm-4 col-2">
        <div className="row menu-container">
          <div className="user-name">
            <p>Admin</p>
          </div>
          <div className="menu-items">
            <ul>
              <li>
                <NavLink className="menu-name nav-link" to="dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-name nav-link" to="users">
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-name nav-link" to="managesubscription">
                  Manage Subscription
                </NavLink>
              </li>
              <li>
                <NavLink className="menu-name nav-link" to="subscriptionplans">
                  Transaction History 
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content col-lg-10 col-md-9 col-sm-8 col-10 overflow-auto">
        {/* <div className="test">hello</div> */}
        <Outlet />
      </div>
      {/*<main className="col-9">
      </main> */}
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default Layout;
