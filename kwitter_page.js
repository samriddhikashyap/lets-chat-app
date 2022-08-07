
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
   firebase_message_id = childKey;
   message_data = childData;
 //Start code
 console.log=(firebase_message_id);
 console.log=(message_data);
 NAME= message_data ["name"];
 message=message_data ["message"];
 like=message_data["like"];
 Name_with_tag = "<h4>"+ NAME + "<img class='user_tick' src = 'tick.png'></h4>";
 message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
 like_button="<button class='btn-btn-warning' id="+firebase_message_id+"value="+like+" onclick ='updatelike(this.id)'>";
 span_with_tag = "<span class='glyphicon glyphicon-thumbs-up '> like:"+like+"</span></button><hr>";
 row = Name_with_tag+message_with_tag+like_button+span_with_tag;
 document.getElementById("output").innerHTML +=row;
 
 } });  }); }
 getData();
 
 function updatelike(message_id)
 {
 console.log("click on like button" + message_id);
 button_id = message_id;
 likes = document.getElementById(button_id).value;
 updatelikes = Number(likes) + 1;
 console.log(likes);
 
 firebase.database().ref(room_name).child(message_id).update({
 
      like : updatelikes 
 })
 }