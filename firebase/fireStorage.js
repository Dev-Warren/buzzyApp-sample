import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Set the configuration for your app
// TODO: Replace with your app's config object
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: ""
};
const fire = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
 const fstorage = getStorage(fire);
