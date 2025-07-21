import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center pb-10'>
        <h1 className='font-medium text-2xl'>Hello <br/> <span className='font-semibold text-3xl'>Rushikesh 👋</span> </h1>
        <button className='px-3 py-2 bg-red-600 font-semibold text-xl border-2 border-red-600 rounded-lg'>Log Out</button>
    </div>
  )
}

export default Header