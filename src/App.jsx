import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import Home from "./components/Home.jsx"
import Navbar from "./components/common/Navbar.jsx"
import StudentView from "./components/student/StudentView.jsx"
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom"
import NavbarLayout from "./components/common/NavbarLayout.jsx"
import AddStudent from "./components/student/AddStudent.jsx"
import EditStudent from "./components/student/EditStudent.jsx"
import EditStudentLayout from "./components/student/EditStudentLayout.jsx"
import { studentDetailsLoader } from "./components/student/EditStudent.jsx"
import StudentProfile from "./components/student/StudentProfile.jsx"
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<NavbarLayout />}
      >
        <Route
          index
          element={<Home />}
        ></Route>
        <Route
          path="view-student"
          element={<StudentView />}
        ></Route>
        <Route
          path="add-student"
          element={<AddStudent />}
        ></Route>
        <Route
          path="edit-student/:id"
          element={<EditStudentLayout />}
        >
          {" "}
        </Route>
        <Route
          path="profile-student/:id"
          element={<StudentProfile />}
        ></Route>

        {/* <Route path = ":id" element = {<EditStudent/>} loader ={studentDetailsLoader}></Route> */}
      </Route>
    )
  )
  return <RouterProvider router={router} />
}

export default App
