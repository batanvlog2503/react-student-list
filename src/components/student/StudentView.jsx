import React, { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"
import Search from "./Search"
const StudentView = () => {
  const [students, setStudents] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    loadStudents()
  }, [])
  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/api/v1/students", {
      validateStatus: () => {
        return true
      },
    })
    if (result.status === 200) {
      setStudents(result.data)
    }
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/students/delete/${id}`)
    loadStudents()
  }
  return (
    <section>
      <Search search={search} setSearch={setSearch}></Search>
      <table className="table table-bordered table-hover">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Create Date</th>
            <th colSpan="3">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students.filter((el) => (el.firstName.toLowerCase().includes(search))).map((student, index, arr) => (
            <tr key={student.id}>
              <th
                scope="row"
                key={index}
              >
                {index + 1}
              </th>

              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td>{student.createDate}</td>
              <td className="mx-2">
                <Link
                  to={`/profile-student/${student.id}`}
                  className="btn btn-primary"
                >
                  View
                </Link>
              </td>
              <td className="mx-2">
                <Link
                  to={`/edit-student/${student.id}`}
                  className="btn btn-warning"
                >
                  Update
                </Link>
              </td>
              <td className="mx-2">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(student.id)}
                >
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default StudentView
