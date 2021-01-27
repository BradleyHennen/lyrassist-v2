import Routes from './routes/routes';
import { Provider } from "react-redux";
import store from './store';
import firebase from "firebase/app";
import 'firebase/auth'
import firebaseConfig from './firebaseConfig';
import FirebaseAuthContext from './routes/auth/firebaseAuthContext';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  firebase.app();
}

function App() {
  return (

    <Provider store={store}>
      <FirebaseAuthContext>
        <Routes />
      </FirebaseAuthContext>
    </Provider>
  );
}

export default App;
