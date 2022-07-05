var firebaseConfig = {
  apiKey: "AIzaSyDQd2P8PBPQ6KrRqhZDe7Eku8yQV4u0x-M",
  authDomain: "let-s-chat-webapp-f7bd7.firebaseapp.com",
  databaseURL: "https://let-s-chat-webapp-f7bd7-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-webapp-f7bd7",
  storageBucket: "let-s-chat-webapp-f7bd7.appspot.com",
  messagingSenderId: "979561111082",
  appId: "1:979561111082:web:00f93164ed35cf48bead53"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+ user_name;

function addRoom(){
  room_name = document.getElementById("room_input").value;
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name" , room_name);
  window.location = "let's_chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("display room name " + Room_names);
        row = "<div class = 'room_name' id = " + Room_names +"onclick ='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location =  "let's_chat_page.html";
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}