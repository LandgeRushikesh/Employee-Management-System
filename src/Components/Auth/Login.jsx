import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Email is",email);
    console.log("password is",password);
    
    setEmail("")
    setPassword("")
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
            onChange={(e)=>setEmail(e.target.value)}
            required
            placeholder="Enter an email"
          />
          <input
            className="outline-none w-[300px] bg-transparent text-white placeholder:text-gray-400 border-2 border-emerald-500 px-4 py-2 rounded-3xl my-2"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            placeholder="Enter an password"
          />
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
