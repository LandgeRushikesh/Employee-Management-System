import React from 'react'
import Header from './EmployeeComopnents/Header'
import TaskStatus from './EmployeeComopnents/TaskStatus'

function Employee() {
  return (
    <div className='px-20 py-8 w-screen h-screen'>
      <Header />
      <TaskStatus />
    </div>
  )
}

export default Employee