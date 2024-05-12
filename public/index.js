var image = document.getElementById("mail");
var open = false;
image.onclick = function(e) {
    if(!open){
  image.src="https://docs.google.com/drawings/d/e/2PACX-1vQMxg6xzSnqeT82D4wYdB2zePLXPmcRcdsZGa5wWTmLJCo5lmWkb4cPyJz1n1hhoA8pYbUCFbA2-Q96/pub?w=960&h=720";
        open=true;
}else{
    var pos = image.position();
    //The following are the x/y coordinates of the mouse click relative to image.
    var x = e.pageX - pos.left;
    var y = e.pageY - pos.top;
    console.log(x+" "+y);
}
}