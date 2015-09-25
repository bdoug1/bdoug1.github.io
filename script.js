function buttonPressed() {
   
    var message = document.getElementById("message").value;
    
    if (message) {
        
//        alert(message);
        var background = document.getElementById("background");
        background.style.background=message;
    
    }
    
    else {
    
        alert("no message!");
    
    }
    
}