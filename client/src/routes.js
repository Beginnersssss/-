import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {StatPage} from './pages/StatPage'
import {AuthPage} from './pages/AuthPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/stats" exact>
                    <StatPage />
                </Route>
                <Redirect to="/stats" />
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