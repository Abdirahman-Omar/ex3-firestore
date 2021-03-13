import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBqQRS8GaaRalAqeY3_-BLptJKi6GPMeig",
  authDomain: "abdirahman-react.firebaseapp.com",
  projectId: "abdirahman-react",
  storageBucket: "abdirahman-react.appspot.com",
  messagingSenderId: "302817357703",
  appId: "1:302817357703:web:95a4100c653d7073d36d22",
  measurementId: "G-E936X852T3"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
