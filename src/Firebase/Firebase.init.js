import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initializeAuthenication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthenication;