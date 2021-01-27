import firebase from 'firebase/app';
import 'firebase/auth'
import { firebaseLogout } from '../store/slices/firebaseAuthSlice';


export async function fetchWrapper(
  endpoint,
  { body, ...customConfig } = {}
) {
  const token = await firebase.auth().currentUser.getIdToken(true);

  const config = {
    method: body ? "POST" : "GET",
    ...customConfig,
    headers: {
      "content-type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...customConfig.headers
    }
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  return fetch(endpoint, config).then(async (response) => {
    if (response.status === 401) {
      logout();
      return;
    }

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data);
    }
  });
}

function logout() {
  firebaseLogout()
}