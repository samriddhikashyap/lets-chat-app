function login() 
{    
  username =  document.getElementById("textbox").value ;

  localStorage.setItem("user_name", username);
  window.location = "kwitter_room.html";
}