import React from 'react'
import { Link } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  return (
    <div
      style={{
        widht: '100hw',
        height: '100vh',
        backgroundColor: '#384B60',
        paddingTop: '150px',
        textAlign: 'center',
        color: '#fff'
      }}
    >
      <h1 className="container text-homepage">
        Dapatkan akses kelas online untuk sekolah anda
      </h1>
      <p style={{ marginTop: '75px' }}>Masuk sebagai</p>
      <div className="row justify-content-center">
        <Link to="/login/teacher">
          <button
            className="tombol"
            style={{ backgroundColor: '#A83E6C', marginRight: '10px' }}
          >
            {/* <FontAwesomeIcon
              icon={faChalkboardTeacher}
              className="tombol-item"
            /> */}
            Teacher
          </button>
        </Link>
        <Link to="/login/student">
          <button
            className="tombol"
            style={{ backgroundColor: '#5C93C4', marginLeft: '10px' }}
          >
            {/* <FontAwesomeIcon
              icon={faChalkboardTeacher}
              className="tombol-item"
            /> */}
            Student
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
