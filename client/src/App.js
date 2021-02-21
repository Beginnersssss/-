import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {useRoutes} from "./routes"
import "./App.css"
import {useAuth} from './hooks/auth.hook'
import {AuthContext} from "./context/AuthContext"
import {Navbar} from './components/Navbar'
import 'materialize-css'
import {Switch} from "react-router-dom"

function App() {
    const {token, login, logout, userId} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)
  return (
      <AuthContext.Provider value = {{
          token, login, logout, userId, isAuthenticated
      }}>
          <Router>
                { isAuthenticated && <Navbar />}
                <Switch>
                <div className="container">
                    {routes}
                </div>
                </Switch>
          </Router>
      </AuthContext.Provider>
  )
}

export default App;
