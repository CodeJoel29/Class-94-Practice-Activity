
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBUQRQLLfMu8eIJDpPvMegr5szGVO94rNQ",
    authDomain: "kwitter-c7956.firebaseapp.com",
    databaseURL: "https://kwitter-c7956-default-rtdb.firebaseio.com",
    projectId: "kwitter-c7956",
    storageBucket: "kwitter-c7956.appspot.com",
    messagingSenderId: "804735452326",
    appId: "1:804735452326:web:bd1c15d6a98d4c1689a067"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({purpose: "adding user"});

  }