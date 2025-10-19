import React from "react"
import Navbar from "./common/Navbar.jsx"
export const Home = () => {
  return (
    <div className="container mt-5">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <div className="w-75 text-center">
          <h2 className="display-3">Welcome to the home page</h2>
        </div>
      </div>
    </div>
  )
}
export default Home
