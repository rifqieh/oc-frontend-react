import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
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
              <form>
                <div className="form-group">
                  <label for="nama">Nama Lengkap</label>
                  <input type="text" className="form-control" id="nama" />
                </div>

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
                    Register
                  </button>
                </Link>
                <div style={{ marginTop: '10px' }}>
                  Sudah punya akun?
                  <Link to="/login/teacher"> Masuk disini</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
