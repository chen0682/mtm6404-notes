// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCvNSMA5_oI2itQFvH8EBsQJmqb5xSLtb0',
  authDomain: 'notes-314f5.firebaseapp.com',
  databaseURL: 'https://notes-314f5.firebaseio.com',
  projectId: 'notes-314f5',
  storageBucket: 'notes-314f5.appspot.com',
  messagingSenderId: '822051989865',
  appId: '1:822051989865:web:27b9d2b20e792721ca75f8'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
