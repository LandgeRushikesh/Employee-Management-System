import React from "react";
import Header from "./Header";
import CreateTask from "./AdminComponents/CreateTask";
import AssignedTask from "./AdminComponents/AssignedTask";

function Admin() {
  return (
    <div className="px-20 py-8 w-screen h-screen">
      <Header />
      <CreateTask />
      <AssignedTask />
    </div>
  );
}

export default Admin;
