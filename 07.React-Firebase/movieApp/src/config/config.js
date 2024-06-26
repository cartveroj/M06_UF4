
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

//objeto de conexion a la base de datos
const firebaseConfig = {
    apiKey: "AIzaSyDd1dzWNHhZ_sJ0h73x-9cTQr1VaR9aX5E",
    authDomain: "basedatosreact.firebaseapp.com",
    projectId: "basedatosreact",
    storageBucket: "basedatosreact.appspot.com",
    messagingSenderId: "718499169382",
    appId: "1:718499169382:web:b80c2fb09449f80e6219a7",
    measurementId: "G-K5JTZCJF75"
  };
  
 const myApp = initializeApp(firebaseConfig);

 const db = getFirestore(myApp)

 export default db;