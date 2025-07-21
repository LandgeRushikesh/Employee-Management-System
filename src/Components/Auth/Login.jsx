import React, { useState } from "react";
import { getAdminDetails, getEmployeeDetails } from "../../Utils/GetData";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigator = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault();

    if(role==="Admin"){
      const admins = getAdminDetails();

      let matchedAdmin = admins.find((admin)=>
        admin.email === email &&
        admin.password === password
      )

      if(matchedAdmin){
        alert("Logged in Successfully!!!")
        localStorage.setItem("loggedInUser",JSON.stringify(matchedAdmin))
        navigator("/admin")
      }
      else{
        alert("Invalid user")
      }
    }
    else if(role==="Employee"){
      const employees = getEmployeeDetails();

      let matchedEmployee = employees.find((employee)=>
        employee.email === email &&
        employee.password === password
      )

      if(matchedEmployee){
        alert("Logged in Successfully!!!")
        localStorage.setItem("loggedInUser",JSON.stringify(matchedEmployee))
        navigator("/employee")
      }
      else{
        alert("Invalid user")
      }
    }

    setEmail("");
    setPassword("");
    setRole("");
  };

  return (
    <div className="login h-screen w-screen flex justify-center items-center">
      <div className="border-2 border-emerald-500 rounded-2xl p-20">
        <h1 className="text-center text-2xl font-bold my-4">Login Page</h1>
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          className="flex flex-col justify-center items-center"
        >
          <input
            className="outline-none w-[300px] bg-transparent text-white placeholder:text-gray-400 border-2 border-emerald-500 px-4 py-2 rounded-3xl my-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter an email"
          />
          <input
            className="outline-none w-[300px] bg-transparent text-white placeholder:text-gray-400 border-2 border-emerald-500 px-4 py-2 rounded-3xl my-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter an password"
          />
          <div className="w-full flex justify-between items-center mt-2 text-lg">
            <div>
              <input
                type="radio"
                id="admin"
                name="role"
                value="Admin"
                checked={role==="Admin"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="admin" className="ml-3">
                Admin
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="employee"
                name="role"
                value="Employee"
                checked={role==="Employee"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="employee" className="ml-3">
                Employee
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="border-2 border-emerald-300 bg-emerald-500 font-bold rounded-3xl px-6 py-2 mt-4 w-[300px] hover:bg-transparent hover:border-emerald-500"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
