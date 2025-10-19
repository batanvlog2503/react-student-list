import React from "react"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const EditStudent = () => {
  const navigate = useNavigate()
  const{id} = useParams();
  const [students, setStudents] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  })
  const { firstName, lastName, email, department } = students
  useEffect(() => {
    loadStudents()
  }, [])
  const loadStudents = async () => {
    const result = await axios.get(
      `http://localhost:8080/api/v1/students/student/${id}`,
      {
        validateStatus: () => {
          return true
        },
      }
    )
    if (result.status === 200) {
      setStudents(result.data)
    } else {
      alert("Result failed")
    }
  }
  const handleInputChange = (e) => {
    setStudents({ ...students, [e.target.name]: e.target.value })
    // ví name = "firstName" = > firstName:"Jhon"
  }
  const updateStudent = async (e) => {
    e.preventDefault()
    //Ngăn trình duyệt reload lại trang khi form được submit
    try {
      await axios.put(`http://localhost:8080/api/v1/students/update/${id}`, students)
      // Option 1: Reset form
      setStudents({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
      })
      // Option 2: Redirect
      // navigate("/view-student")  // nếu dùng useNavigate()
      alert("Update Successfully!!!")
      navigate("/view-student")
    } catch (error) {
      console.error("Update failed", error)
      alert("Update Failed to save student. Please try again.")
    }
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-sm-8 py-2 px-5">
          <form
            action=""
            className="input-group mb-5"
            onSubmit={(e) => updateStudent(e)}
          >
            <div className="input-group mb-3">
              <label
                htmlFor="firstName"
                className="input-group-text"
              >
                First Name:{" "}
              </label>
              <input
                type="text"
                className="form-control col-sm-6"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                aria-label="First Name"
                aria-describedby="basic-addon1"
                value={firstName}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>

            <div class="input-group mb-3">
              <label
                htmlFor="lastName"
                className="input-group-text"
              >
                Last Name:{" "}
              </label>
              <input
                type="text"
                className="form-control col-sm-6"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                aria-label="Last Name"
                aria-describedby="basic-addon2"
                value={lastName}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>

            <div class="input-group mb-3">
              <label
                htmlFor="email"
                className="input-group-text"
              >
                Email:{" "}
              </label>
              <input
                type="text"
                className="form-control col-sm-6"
                name="email"
                id="email"
                placeholder="email"
                aria-label="email"
                aria-describedby="basic-addon3"
                value={email}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>

            <div class="input-group mb-3">
              <label
                htmlFor="Department"
                className="input-group-text"
              >
                Department:{" "}
              </label>
              <input
                type="text"
                className="form-control col-sm-6"
                name="department"
                id="department"
                placeholder="Department"
                aria-label="Department"
                aria-describedby="basic-addon3"
                value={department}
                onChange={(e) => handleInputChange(e)}
                required
              />
            </div>

            <div className="col-sm-2">
              <button
                type="submit"
                className="btn btn-outline-success"
              >
                Save
              </button>
            </div>
            <div className="col-sm-2 ">
              <Link
                to={"/view-student"}
                type="submit"
                className="btn btn-outline-warning"
              >
                Cancel
              </Link>
            </div>

            {/* <select
              className="form-select"
              aria-label="Default select example"
            >
              <option selected>Select Department</option>
              <option value="Tester">Tester</option>
              <option value="Caster">Caster</option>
              <option value="Fresher">Fresher</option>
              <option value="Player">Player</option>
            </select> */}
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditStudent


export const studentDetailsLoader = async({params}) => {
  const {id} = params
  const res = await axios.get("http://localhost:8080/api/v1/students/student/" + id)
    if(!res.ok){
    throw new Error("Could not find API")
  }
  return res.data
}