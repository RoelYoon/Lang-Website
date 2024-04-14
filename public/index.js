let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");
var ind = 0;
function leftArrClick(){
    if(ind>0){
        ind--;
        if(ind==0){
            document.location.href = "http://35.203.145.230:8099/index.html";
        }else{
            document.location.href = "http://35.203.145.230:8099/index2.html";
        }
    }
}
function rightArrClick(){
    if(ind<2){
        ind++;
        if(ind==1){
            document.location.href = "http://35.203.145.230:8099/index3.html";
        }else{
            document.location.href = "http://35.203.145.230:8099/index2.html";
        }
    }
}
leftArrow.onclick = leftArrClick;
rightArrow.onclick = rightArrClick;