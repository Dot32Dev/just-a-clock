console.log("Javascript loaded")

setInterval( ()=>{
  var today = new Date();
	var time = String(today.getHours()).padStart(2, '0') + ":" + String(today.getMinutes()).padStart(2, '0') + "<span>:" + String(today.getSeconds()).padStart(2, '0') + "</span>"
	document.querySelector("p").innerHTML = time;
}, 100)