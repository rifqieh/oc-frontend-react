import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  const handleSubmit = e => { }

  const status = props.status;
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
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    id="email"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }} />
                </div>
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    value={password}
                    className="form-control"
                    id="password"
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                  />
                </div>

                <Link to="/dashboard/exam">
                  <button type="submit" className="tombol">
                    Login
                  </button>
                </Link>
                <div style={{ marginTop: '10px' }}>
                  Belum punya akun?
                  <Link to={`/register/${status}`}> Daftar disini</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
