// Your web app's Firebase configuration
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


const firebaseConfig = {
    apiKey: "AIzaSyBgWlQwBA0lLJMJ5puT41HDIKMtrWEaj8c",
    authDomain: "letschat-web-app---part-cf5ae.firebaseapp.com",
    databaseURL: "https://letschat-web-app---part-cf5ae-default-rtdb.firebaseio.com",
    projectId: "letschat-web-app---part-cf5ae",
    storageBucket: "letschat-web-app---part-cf5ae.appspot.com",
    messagingSenderId: "847526673212",
    appId: "1:847526673212:web:6525ce740cf4226a0d3c39"
  };
  
 
  const app = initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    <input type="text" id="user_name" class="form-control" placeholder="User Name">

    window.location = "chat_room.html";
    */
}



