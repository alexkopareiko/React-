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

//Get elements
const preObject = document.getElementById('note');
const ulList = document.getElementById('list');

//Create references
const dbRefObject = firebase.database().ref().child('note');
const dbRefList = dbRefObject.child('email');

//Sync object changes
dbRefObject.on('value', snap => {
  preObject.innerText = JSON.stringify(snap.val(), null, 3);
});

// Sync list changes
dbRefList.on('child_added', snap => {
  const li = document.createElement('li');
  li.innerText = snap.val();
  li.id = snap.key;
  ulList.appendChild(li);
});


dbRefList.on('child_changed', snap => {
  const liChanged = document.getElementById(snap.key);
  liChanged.innerText = snap.val();
});

dbRefList.on('child_removed', snap => {
  const liToRemove = document.getElementById(snap.key);
  liToRemove.remove();
});


}());
