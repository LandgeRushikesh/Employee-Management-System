import React from "react";

function TaskStatus() {
  return (
    <div className="flex justify-center items-center gap-4">
      {[
        {
          count: 0,
          taskStatus: "NewTask",
          bgColor: "bg-red-400",
          borderColor: "border-red-400",
        },
        {
          count: 3,
          taskStatus: "Completed",
          bgColor: "bg-green-600",
          borderColor: "border-green-600",
        },
        {
          count: 2,
          taskStatus: "Accepted",
          bgColor: "bg-yellow-400",
          borderColor: "border-yellow-400",
        },
        {
          count: 1,
          taskStatus: "Failed",
          bgColor: "bg-orange-600",
          borderColor: "border-orange-600",
        },
      ].map((ele) => (
        <div className={`${ele.bgColor} px-3 py-5 w-[45%] border-2 ${ele.borderColor} rounded-lg`} key={ele.taskStatus}>
          <h2 className="text-2xl font-bold">{ele.count}</h2>
          <h3 className="text-2xl font-bold">{ele.taskStatus}</h3>
        </div>
      ))}
    </div>
  );
}

export default TaskStatus;
