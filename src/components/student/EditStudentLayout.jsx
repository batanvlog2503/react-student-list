

import React from 'react'
import EditStudent from './EditStudent'
import { Outlet } from 'react-router-dom'
const EditStudentLayout = () => {
  return (
    <div>
        <EditStudent></EditStudent>
        <Outlet></Outlet>
    </div>
  )
}

export default EditStudentLayout