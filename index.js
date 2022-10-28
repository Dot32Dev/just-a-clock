console.log("javascript loaded")

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + "<span>:" + today.getSeconds(); + "</span>"
document.querySelector("p").innerHTML = time;

setInterval( ()=>{
  var today = new Date();
	var time = today.getHours() + ":" + today.getMinutes() + "<span>:" + today.getSeconds(); + "</span>"
	document.querySelector("p").innerHTML = time;
}, 100)