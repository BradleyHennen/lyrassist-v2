import React from "react";
import { Switch, BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Welcome from '../components/Welcome'
import UserManagement from '../features/UserManagement/views/UserManagement'
import PageNotFound from '../components/PageNotFound';
import ProtectedRoute from './auth/protectedRoute';
import LoginRegisterModal from '../features/Login/views/LoginRegisterModal';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Redirect exact path="/" to="welcome"/>
                <Route path="/welcome">
                    <Welcome />
                </Route>
                <ProtectedRoute path="/user">
                    <UserManagement />
                </ProtectedRoute>
                <Route path="*">
                    <PageNotFound />
                </Route>
            </Switch>
            <LoginRegisterModal />
        </Router>
    )
}