import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  const handleSubmit = e => {}

  return (
    <div
      style={{ backgroundColor: '#384B60', width: '100vw', height: '100vh' }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="card col-lg-4"
            style={{ marginTop: '150px', borderRadius: '8px' }}
          >
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label for="username">Username</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>

                <Link to="/dashboard/exam">
                  <button type="submit" className="tombol">
                    Login
                  </button>
                </Link>
                <div style={{ marginTop: '10px' }}>
                  Belum punya akun?
                  <Link to="/register/teacher"> Daftar disini</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
