import { initializeApp } from '@firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_firebase,
  authDomain: 'ohjummu.firebaseapp.com',
  projectId: 'ohjummu',
  storageBucket: 'ohjummu.appspot.com',
  messagingSenderId: '833024412020',
  appId: '1:833024412020:web:defe505648bb4ddf184421',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default auth;
