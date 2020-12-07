 window.onload = function(){
              document.getElementById("login-button").addEventListener("click", login);  
            };

function login(){
    if((document.getElementById("user") != null && document.getElementById("pass") != null))
        {
            if(document.getElementById("user").value === "admin" && document.getElementById("pass").value === "admin")
                {
                    var mywindow = window.open("profile.html", "_self");
                }
            else{
                window.alert("Username/Password combination incorrect");
            }
        }
    else{
        window.alert("Please enter both fields");
    }
}