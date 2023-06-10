import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyDP3QHBOFfpLT3SBdULwLjm4NG3kKi_-5A",
	authDomain: "e-library-cac4e.firebaseapp.com",
	projectId: "e-library-cac4e",
	storageBucket: "e-library-cac4e.appspot.com",
	messagingSenderId: "701217419552",
	appId: "1:701217419552:web:d819c22a262f129b31e745"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
