
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDHizt2WO-rjT8CSz7oaTsL4ZLVBBNeMnQ",
      authDomain: "kwitter-57a38.firebaseapp.com",
      databaseURL: "https://kwitter-57a38-default-rtdb.firebaseio.com",
      projectId: "kwitter-57a38",
      storageBucket: "kwitter-57a38.appspot.com",
      messagingSenderId: "447023291512",
      appId: "1:447023291512:web:e4dbe7e69861b67cc6a18d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("Output").innerHTML;
       Room_names = childKey;
          
            console.log("Room_names")
      row = "<div class='room_name' id ="+Room_names+" onclick='redirectToRoomName(this.id)'># "+Room_names+ "</div><hr>" ;
      document.getElementById("Output").innerHTML += row;
});};
getData();

  function redirectToRoomName(name)
{

      console.log("name");
      localStorage.setItem("room_name", name );
      window.location("kwitter_page.html");
}
 
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location=("index.html");
}

  
getData();
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome  " + user_name+ "!" ;

function Add_room(){

room_name = document.getElementById("room").value;
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room " 
}) 
localStorage.setItem("room_name",room_name);
window.location= "kwitter_page.html"  ;
}
   