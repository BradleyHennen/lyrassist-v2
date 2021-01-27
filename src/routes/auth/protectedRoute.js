import React, { useContext } from 'react';
import { AuthContext } from './firebaseAuthContext';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ redirectTo, path, children }) {
    const authValue = useContext(AuthContext)

    if (authValue.user == null && !authValue.userDataPresent) {
        return (<Redirect to={redirectTo ? redirectTo : '/welcome'}></Redirect>)
    }
    else {
        return (
            <Route exact path={path}>
                {children}
            </Route>)
    }
}

export default ProtectedRoute