var image = document.getElementById("mail");
var mail1 = document.getElementById("mail1");
var mail2 = document.getElementById("mail2");
var mail3 = document.getElementById("mail3");
var open = false;
image.onclick = function(e) {
    if(!open){
  image.src="https://docs.google.com/drawings/d/e/2PACX-1vQMxg6xzSnqeT82D4wYdB2zePLXPmcRcdsZGa5wWTmLJCo5lmWkb4cPyJz1n1hhoA8pYbUCFbA2-Q96/pub?w=960&h=720";
        open=true;
        mail1.hidden=0;
        mail2.hidden=0;
        mail3.hidden=0;
}

}