var image = document.getElementById("mail");
var mail1 = document.getElementById("mail1");
var mail2 = document.getElementById("mail2");
var mail3 = document.getElementById("mail3");
var open = false;
image.onclick = function(e) {
    if(!open){
  image.src="https://docs.google.com/drawings/d/e/2PACX-1vQMxg6xzSnqeT82D4wYdB2zePLXPmcRcdsZGa5wWTmLJCo5lmWkb4cPyJz1n1hhoA8pYbUCFbA2-Q96/pub?w=960&h=720";
        open=true;
}
}
mail1.onclick = function(e) {
    if(!open){
  image.src="https://docs.google.com/drawings/d/e/2PACX-1vQMxg6xzSnqeT82D4wYdB2zePLXPmcRcdsZGa5wWTmLJCo5lmWkb4cPyJz1n1hhoA8pYbUCFbA2-Q96/pub?w=960&h=720";
        open=true;
}else{
    document.location.href = "http://35.203.145.230:8099/gym.html";
}
}
mail2.onclick = function(e) {
    if(!open){
  image.src="https://docs.google.com/drawings/d/e/2PACX-1vQMxg6xzSnqeT82D4wYdB2zePLXPmcRcdsZGa5wWTmLJCo5lmWkb4cPyJz1n1hhoA8pYbUCFbA2-Q96/pub?w=960&h=720";
        open=true;
}else{
    document.location.href = "http://35.203.145.230:8099/xc.html";
}
}
mail3.onclick = function(e) {
    if(!open){
  image.src="https://docs.google.com/drawings/d/e/2PACX-1vQMxg6xzSnqeT82D4wYdB2zePLXPmcRcdsZGa5wWTmLJCo5lmWkb4cPyJz1n1hhoA8pYbUCFbA2-Q96/pub?w=960&h=720";
        open=true;
}else{
    document.location.href = "http://35.203.145.230:8099/bros.html";
}
}