import firebase from "firebase/app";
import "firebase/auth";

export function firebaseLogin(email, password) {
    return async (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                // Signed in
                console.log('user', user);

                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('err', errorCode);
                console.log('err', errorMessage);

                // ..
            });
    }
}
