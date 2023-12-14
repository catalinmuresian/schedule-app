<template>
  <router-view />
</template>

<script setup>
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkI1Fv-A9QpiZo-xR8Oo0sHaB-ovQrZ-o",
  authDomain: "appointments-crud-3ce8e.firebaseapp.com",
  databaseURL: "https://appointments-crud-3ce8e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "appointments-crud-3ce8e",
  storageBucket: "appointments-crud-3ce8e.appspot.com",
  messagingSenderId: "720896430800",
  appId: "1:720896430800:web:3d3e487eb6f2f5529a84d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
</script>
