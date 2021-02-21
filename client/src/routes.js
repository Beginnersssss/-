import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {Enter} from './pages/Enter'
import {AuthPage} from './pages/AuthPage'
import {Graph} from './pages/Graph'
import {Home} from './pages/Home'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/enter" exact>
                    <Enter />
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/graph" exact>
                    <Graph />
                </Route>
                <Redirect to="/home" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
