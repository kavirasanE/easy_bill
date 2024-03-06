import React, { useContext, useState } from "react";
import billing from "../../assests/billing.jpg";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import DataContext from "../../Context/DataProvider";

const Login = () => {
  const { loginState, setLoginState } = useContext(DataContext);
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    username: "",
    password: "",
    status: "",
  });

  function handleLogin() {
    if (login.username === "admin" && login.password === "admin") {
      setLogin((preVal) => ({ ...preVal, status: "Success" }));
      setLoginState(true);
      navigate("/dashboard");
    } else {
      setLogin((preVal) => ({
        ...preVal,
        status: "Please check username and password",
      }));
    }
    console.log(login);
  }

  function handleLoginChange(eve) {
    setLogin((preVal) => ({
      ...preVal,
      [eve.target.name]: eve.target.value,
    }));
  }

  return (
    <>
      <div className="row position-relative align-items-center ">
        <div className=" col-12">
          <img
            src={billing}
            alt="billing-image"
            class="object-fit-fill border rounded w-50 "
            // style={{ backgroundImage: "url(background.jpg)" }}
          />
           </div>
           <div className="p-4 rounded  position-absolute d-flex justify-content-center  ">

           
          <div className="bg-light col-4 my-10">
            <div className="font-bold text-center text-2xl mb-4">Login</div>

            <div className="mb-3">
              <FaUser className="text-orange-400 mr-2" />
              <input
                name="username"
                type="text"
                onChange={handleLoginChange}
                placeholder="Enter your username"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <RiLockPasswordFill className="text-orange-400 mr-2" />
              <input
                name="password"
                onChange={handleLoginChange}
                placeholder="Enter your password"
                type="password"
                className="form-control"
              />
            </div>

            <button
              type="button"
              className="btn btn-orange btn-block my-3"
              onClick={handleLogin}
            >
              Login
            </button>
            <p>{login.status}</p>
          </div>
          </div>
        </div>
       
    </>
  );
};

export default Login;
