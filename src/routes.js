import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './components/Welcome'
import UserManagement from './features/UserManagement/views/UserManagement'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path={"/user"}>
                    <UserManagement />
                </Route>
                <Route path={"/"}>
                    <Welcome />
                </Route>
            </Switch>
        </Router>
    )
}