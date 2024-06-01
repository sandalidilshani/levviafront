import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Home = () => {
  const [empId, setEmpId] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    console.log(empId, password);
  }, [empId, password]);
  const data = {
    email: empId,
    password: password
  };
  const handleLogin = () => {
    axios
      .post("https://marketplaceb.herokuapp.com/api/loginemployee", data)
      .then((res) => {
        console.log(res.data);
        if (res.data.message === "Login successful" && res.data.data != null) {
          localStorage.setItem("empDetails", JSON.stringify(res.data.data));
          window.location.href = "/employee-login";
        } else {
          console.error("please enter valid credentials");
        }
      })
      .catch((err) => {
        console.log(err);
        console.error("Invalid Credentials");
      });
  };
  return (
    <div>
        <div className="p-2 d-flex justify-content-center shadow">
            <h4>Emoployee Management System</h4>
        </div>
        <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
            <img  className='emp_det_image'/>
            <div className='d-flex align-items-center flex-column mt-5'>
                <h3>Name: </h3>
                <h3>Email: {}</h3>
                <h3>Salary: </h3>
            </div>
            <div>
                <button className='btn btn-primary me-2'>Edit</button>
                <button className='btn btn-danger' >Logout</button>
            </div>
        </div>
    </div>
  );
};

export default Home;
