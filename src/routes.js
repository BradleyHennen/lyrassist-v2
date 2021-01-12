import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './components/Welcome'
import UserManagement from './features/UserManagement/views/UserManagement'
import PageNotFound from './components/PageNotFound';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"}>
                    <Welcome />
                </Route>
                <Route path={"/user"}>
                    <UserManagement />
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
        </Router>
    )
}