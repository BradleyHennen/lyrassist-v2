import firebase from 'firebase/app';

export function getDatamuse() {
    return async (dispatch, getState) => {
        const token = await firebase.auth().currentUser.getIdToken();
        console.log('token', token);

        try {
            const res = await fetch('http://localhost:5000/api/datamuse/ml=test', {
                headers: { authorization: `Bearer ${token}` }
            }).then((res) => res.json());

            console.log('res', res);
        } catch (error) {
            throw (error)
        }
    }
}