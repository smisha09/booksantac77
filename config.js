import firebase from 'firebase';

const firebaseConfig = {
  
    apiKey: "AIzaSyC8wojDgCMnAyHVNaQLTjbcEFZm-e4LZKo",
    authDomain: "booksanta-24891.firebaseapp.com",
    databaseURL: "https://booksanta-24891.firebaseio.com",
    projectId: "booksanta-24891",
    storageBucket: "booksanta-24891.appspot.com",
    messagingSenderId: "1042314413930",
    appId: "1:1042314413930:web:d34d9ef1e4e2c350638713"
  
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
