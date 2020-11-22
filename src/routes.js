import React from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Welcome from './components/Welcome'

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Welcome />
            </Switch>
        </Router>
    )
}