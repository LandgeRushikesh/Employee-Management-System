import React from 'react'
import Header from './Header'
import TaskStatus from './EmployeeComopnents/TaskStatus'
import Tasklist from '../TaskList/Tasklist'

function Employee() {
  return (
    <div className='px-20 py-8 w-screen h-screen'>
      <Header />
      <TaskStatus />
      <Tasklist />
    </div>
  )
}

export default Employee