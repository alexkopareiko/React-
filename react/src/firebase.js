(function() {
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAkAtZiO50TVwhEXqIxx046kLjAMWopisQ",
  authDomain: "test-f48e9.firebaseapp.com",
  databaseURL: "https://test-f48e9.firebaseio.com",
  projectId: "test-f48e9",
  storageBucket: "",
  messagingSenderId: "632389051826"
};
firebase.initializeApp(config);

}());

var mainDiv = document.getElementById("mainDiv");

const databaseRef = firebase.database().ref();
//export const usersRef = databaseRef.child("Users");

//var rootRef = firebase.database().ref().child("Users");

// rootRef.on("child_added", snap => {
//
//   var name = snap.child("Name").val();
//   var email = snap.child("Email").val();
//
//     //$("#mainDiv").append(name + email + "<button>Remove</button><br />");
//     console.log(name + email);
// });
