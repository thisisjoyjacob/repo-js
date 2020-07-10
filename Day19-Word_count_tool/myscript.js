var print = function(msg) {
    
    document.getElementById("output").innerHTML = "Length is " + msg;
}

document.getElementById("btn").onclick = function(event){

    print(document.getElementById('str').value.length);
}


/******************************************************************** */

var input = document.getElementById("str");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("btn").onclick();
  }
});