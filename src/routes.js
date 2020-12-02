import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './components/Welcome'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route path={"/"}>
                    <Welcome />
                </Route>
            </Switch>
        </Router>
    )
}