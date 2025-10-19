import React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
const StudentProfile = () => {
    const {id} = useParams()
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
  return (
    <section
      className="shadow"
      style={{ backgroundColor: "#eee", minHeight: "100vh" }}
    >
      <div className="container py-5">
        {/* Breadcrumb */}

        {/* Main Content */}
        <div className="row w-100">
          {/* Left Sidebar */}
          <div
            style={{
              flex: "0 0 100%",
              paddingRight: "15px",
              marginBottom: "20px",
            }}
          >
            {/* Profile Card */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                marginBottom: "20px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "20px", textAlign: "center" }}>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  style={{
                    borderRadius: "50%",
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    marginBottom: "15px",
                  }}
                />
                <h5
                  style={{
                    marginBottom: "12px",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  {`${students.firstName} ${students.lastName}`}
                </h5>
                <p style={{ color: "#6c757d", marginBottom: "5px" }}>
                  {`${students.department}`}
                </p>
                
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    marginBottom: "15px",
                  }}
                >
                  <button
                    style={{
                      backgroundColor: "#0d6efd",
                      color: "white",
                      border: "none",
                      padding: "6px 20px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Follow
                  </button>
                  <button
                    style={{
                      backgroundColor: "white",
                      color: "#0d6efd",
                      border: "1px solid #0d6efd",
                      padding: "6px 20px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Message
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
          </div>

          {/* Right Content */}
          <div style={{ flex: "0 0 100%", paddingLeft: "15px" }}>
            {/* Profile Details */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "8px",
                marginBottom: "20px",
                padding: "20px",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
              }}
            >
              {[
                { label: "Full Name", value: students.firstName },
                { label: "Last Name", value: students.lastName },
                { label: "Department", value: students.department },
                { label: "Email", value: students.email },
                {label:"Create Date" , value : students.createDate}
                
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ display: "flex", marginBottom: "15px" }}>
                    <div style={{ flex: "0 0 30%" }}>
                      <p style={{ margin: 0, fontWeight: "500" }}>
                        {item.label}
                      </p>
                    </div>
                    <div style={{ flex: "0 0 70%" }}>
                      <p style={{ margin: 0, color: "#6c757d" }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                  {i < 4 && (
                    <hr style={{ margin: "15px 0", borderColor: "#e9ecef" }} />
                  )}
                </div>
              ))}
            </div>

            {/* Project Status */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudentProfile
