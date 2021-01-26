import Routes from './routes';
import { Provider } from "react-redux";
import store from './store';
import firebase from "firebase/app";
import firebaseConfig from './firebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  // if already initialized, use that one
  firebase.app();
}

function App() {
  return (

    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
