import React, { useEffect, useState } from "react";
import { CurrentUserData } from "../../Utils/GetCurrentUserData";

function Tasklist() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const employeeData = CurrentUserData();

    const assignedTask = employeeData.tasks;
    setTasks(assignedTask);
  }, []);

  const BgColor = (status) =>{
    if(status==="completed"){
      return "bg-green-600";
    }
    else if(status==="new"){
      return "bg-red-400"
    }
    else if(status==="accepted"){
      return "bg-yellow-400"
    }
    else if(status==="failed"){
      return "bg-orange-600"
    }
  }

  return (
    <div className="tasklist w-full h-[55%] overflow-x-auto mt-10 flex justify-start items-center flex-nowrap gap-5 py-8 px-4">
      {tasks.map((task) => (
        <div className={`w-[300px] h-full ${BgColor(task.status)} rounded-2xl shrink-0 px-3 py-4`}>
          <div className="flex justify-between items-center">
            <h3 className="bg-red-600 px-4 py-1 rounded-full">{task.priority}</h3>
            <h4 className="text-lg font-medium">{task.dateAssigned}</h4>
          </div>
          <h2 className="text-2xl font-bold mt-3">{task.taskName}</h2>
          <p className="text-lg font-medium mt-3">
            {task.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Tasklist;
