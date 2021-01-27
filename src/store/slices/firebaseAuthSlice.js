import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { errorMessage } from '../../utils/alertMessageUtils'
import firebase from "firebase/app";
import 'firebase/auth'


const firebaseAuth = createSlice({
    name: "FirebaseAuth",
    initialState: {
        // customerId: Cookies.get("CustomerId") || getCustomerIdOverride("prefix"),
        email: Cookies.get("User-Email"),
        idToken: Cookies.get("Id-Token"),
    },
    reducers: {
        // setCustomerId(state, action) {
        //     state.customerId = action.payload;
        // },
        setUserEmail(state, action) {
            Cookies.set('User-Email', action.payload)
            state.email = action.payload;
        },
        setIdToken(state, action) {
            Cookies.set('Id-Token', action.payload)
            state.idToken = action.payload;
        }
    },
});

export const { setUserEmail, setIdToken } = firebaseAuth.actions;

export default firebaseAuth.reducer;


export function firebaseRegister(email, password, callback) {
    return async (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                console.log('res', res);
                dispatch(setUserEmail(res.user.email))
                dispatch(setIdToken(res.user.refreshToken))
                callback()
            })
            .catch((error) => {
                var errorCode = error.code;
                console.log('err', errorCode);
                errorMessage(error.message)
            });
    }
}

export function firebaseLogin(email, password, callback) {
    return async (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
            dispatch(setUserEmail(res.user.email))
            dispatch(setIdToken(res.user.refreshToken))
            callback();
        }).catch((error) => {
            var errorCode = error;
            console.log('err', errorCode);
            errorMessage(error.message)
        })
    }
}

export function firebaseLogout() {
    return async (dispatch) => {
        firebase.auth().signOut().then((res) => {
            window.location.assign(window.location)
        }).catch((error) => {
            console.error('logout error', error);
        });
    }
}