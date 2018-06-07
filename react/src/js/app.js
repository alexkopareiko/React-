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

var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");
var fireHeading = document.getElementById("fireHeading");

var firebaseHeadingRef = firebase.database().ref().child("Heading");

firebaseHeadingRef.on('value', function(datasnapshot){
  fireHeading.innerText = datasnapshot.val();
});

function submitClick () {

  var firebaseRef = firebase.database().ref();

  var messageText = mainText.value;


  firebaseRef.push().set(messageText);
}
