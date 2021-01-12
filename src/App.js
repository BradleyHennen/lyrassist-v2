import Routes from './routes';
import { Provider } from "react-redux";
import store from './store';
import firebase from "firebase/app";
import firebaseConfig from './firebaseConfig';

// Use your config values here.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

function App() {
  return (

    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
