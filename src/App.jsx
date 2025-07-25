import { useEffect } from "react";
import "./App.css";
import Login from "./Components/Auth/Login";
import Admin from "./Components/Dashboard/Admin";
import Employee from "./Components/Dashboard/Employee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { setAdminDetails, setEmployeeDetails } from "./Utils/LocalStorage";

function App() {
  useEffect(()=>{
    const exisitingEmployeeData = localStorage.getItem("Employees")
    const exisitingAdminData = localStorage.getItem("Admins")

    if(exisitingEmployeeData){
      setEmployeeDetails();
    }
    if(exisitingAdminData){
      setAdminDetails();
    }
  },[])
  return (
    <>
      <div className="w-full h-screen bg-black text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/employee" element={<Employee />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
