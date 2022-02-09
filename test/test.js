import * as firebase from "../Bibliotecas/Promesas/firebase";

import {app, autentificacion} from "./bibliotecas/datosFirebase.js";
import {getFirestore, collection} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


