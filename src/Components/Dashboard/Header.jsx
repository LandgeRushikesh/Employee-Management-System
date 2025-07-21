import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CurrentUserData } from '../../Utils/GetCurrentUserData'

function Header() {

  const user = CurrentUserData()

  const Navigator = useNavigate()
  const HandleLogOut = () =>{
    localStorage.removeItem("loggedInUser")
    alert("Logged Out Successfully!!!")
    Navigator("/")
  }
  return (
    <div className='flex justify-between items-center pb-10'>
        <h1 className='font-medium text-2xl'>Hello <br/> <span className='font-semibold text-3xl'>{user.name} 👋</span> </h1>
        <button 
        className='px-3 py-2 bg-red-600 font-semibold text-xl border-2 border-red-600 rounded-lg'
        onClick={HandleLogOut}
        >Log Out</button>
    </div>
  )
}

export default Header