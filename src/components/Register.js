import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default (props) => {

  const status = props.status;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
                  <input type="text" className="form-control" id="nama"
                    onChange={(e) => {
                      setName(e.target.value)
                    }} />
                </div>

                <div className="form-group">
                  <label for="email">Email</label>
                  <input type="email" className="form-control" id="email"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }} />
                </div>

                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                </div>

                <Link to="/dashboard/exam">
                  <button type="submit" className="tombol">
                    Register
                  </button>
                </Link>
                <div style={{ marginTop: '10px' }}>
                  Sudah punya akun?
                  <Link to={`/login/${status}`}> Masuk disini</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
