import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Exam from './Exam'
import Profile from './Profile'

export default () => {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div className="row">
        <div
          className="col-lg-2"
          style={{
            backgroundColor: '#384B60',
            height: '100vh',
            boxShadow: '3px 0px 20px #384B60'
          }}
        >
          <ul className="nav flex-column" style={{ margin: '20px 40px' }}>
            <li className="nav-item navbar-brand">
              <h4
                className="disable"
                href="#"
                style={{ color: '#fff', fontWeight: 'bold' }}
              >
                Online Exam
              </h4>
            </li>
            <li className="nav-item" style={{ marginTop: '10px' }}>
              <Link
                to="/dashboard/exam"
                className="nav-link"
                style={{ color: '#fff' }}
              >
                EXAM
              </Link>
            </li>
            <li className="nav-item" style={{ marginTop: '10px' }}>
              <Link
                to="/dashboard/profile"
                className="nav-link"
                style={{ color: '#fff' }}
              >
                PROFILE
              </Link>
            </li>
            <li className="nav-item" style={{ marginTop: '10px' }}>
              <Link className="nav-link" to="" style={{ color: '#fff' }}>
                SIGN OUT
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-10"
          style={{
            backgroundColor: 'rgb(190, 218, 250, 0.2)',
            height: '100vh'
          }}
        >
          <Switch>
            <Route path="/dashboard/exam">
              {' '}
              <Exam />{' '}
            </Route>
            <Route path="/dashboard/profile">
              {' '}
              <Profile />{' '}
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}
