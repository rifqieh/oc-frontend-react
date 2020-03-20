import React from 'react'
import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/login/teacher" component={Login} />
        <Route path="/register/teacher" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  )
}

export default App
