import React from "react";

function CreateTask() {
  return (
    <div className="bg-[#1c1c1c] w-full">
      <form className="flex justify-between items-center px-10 py-8">
        <div className="w-[40%]">
          <div className="font-medium">
            <h3 className="mb-2">Task Title</h3>
            <input className="outline-none w-[90%] bg-transparent border-2 border-gray-400 rounded-xl px-3 py-2 placeholder:text-gray-200" type="text" placeholder="Enter task title" />
          </div>
          <div>
            <h3 className="mb-2">Date</h3>
            <input className="outline-none w-[90%] bg-transparent border-2 border-gray-400 rounded-xl px-3 py-2 placeholder:text-gray-200" type="date" />
          </div>
          <div>
            <h3 className="mb-2">Assigned to</h3>
            <input className="outline-none w-[90%] bg-transparent border-2 border-gray-400 rounded-xl px-3 py-2 placeholder:text-gray-200" type="text" placeholder="Enter the Employee name" />
          </div>
          <div>
            <h3 className="mb-2">Category</h3>
            <input className="outline-none w-[90%] bg-transparent border-2 border-gray-400 rounded-xl px-3 py-2 placeholder:text-gray-200" type="text" placeholder="Development,design,etc." />
          </div>
        </div>
        <div className="w-[40%] font-medium">
            <h3 className="mb-2">Description</h3>
            <textarea className="w-[90%] bg-transparent border-2 border-gray-400 rounded-xl px-3 py-2" rows={10} cols={30}></textarea>
            <button className="w-[90%] bg-emerald-600 border-2 border-emerald-600 rounded-xl px-3 py-2 mt-2">Create a Task</button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
