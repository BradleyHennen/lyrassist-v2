import React, { createContext, useState, useEffect } from 'react';
import firebase from "firebase/app";
import 'firebase/auth'

export const AuthContext = createContext({ userPresent: false, user: null, userDataPresent: false, })

export default function FirebaseAuthContext(props) {
    let [userState, setUserState] = useState({
        userDataPresent: false,
        user: null,
        listener: null
    })

    useEffect(() => {
        if (userState.listener == null) {
            setUserState({
                ...userState, listener: firebase.auth().onAuthStateChanged((user) => {
                    if (user)
                        setUserState(oldState => ({ ...oldState, userDataPresent: true, user: user }));
                    else
                        setUserState(oldState => ({ ...oldState, userDataPresent: true, user: null }));
                })
            });

        }
        return () => {
            if (userState.listener)
                userState.listener()
        }
    }, [userState])

    return (
        <AuthContext.Provider value={userState}>
            {props.children}
        </AuthContext.Provider>
    )
}