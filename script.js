function change() {
  var battery = document.getElementById("battery").value;
  var time = document.getElementById("time").value;

  document.getElementById("bi").innerHTML = battery;

  document.getElementById("showtime").innerHTML = time;
}
function status(){
  //var namee = document.getElementById("name").value;
  var statuss = document.getElementById("status").value;

 // document.getElementById("usname").innerHTML = namee;
  document.getElementById("show-status").innerHTML = statuss;
}

function namechange() {
 var namee = document.getElementById("name").value;
 // var statuss = document.getElementById("status").value;

 document.getElementById("usname").innerHTML = namee;
 // document.getElementById("show-status").innerHTML = statuss;
}

var loadfile = function (event) {
  var image = document.getElementById("image");
  image.src = URL.createObjectURL(event.target.files[0]);
};

function addmsgone() {
  var divs = document.createElement("div");
  var span = document.createElement("span");
  var p = document.createElement("p");
  var br = document.createElement("br");
  var content= document.createElement("div");
  content.classList.add('content');
var sendermsg = document.getElementById("sendermsg").value;
var time=document.getElementById("sendertime").value;


document.getElementById("sendermsg").value=" "
console.log('cleared')



  p.innerHTML = sendermsg;
  span.innerHTML = time;

  content.appendChild(divs);
  divs.appendChild(p);
  p.appendChild(br);
  p.appendChild(span);
 
  
  document.getElementById("showall").appendChild(content);
}

function addmsgtwo() {
  var divs = document.createElement("div");
  var span = document.createElement("span");
  var p = document.createElement("p");
  var br = document.createElement("br");
var content= document.createElement("div");
content.classList.add('you');



document.getElementById("yourmsg").value=" "
console.log('cleared2')


  p.innerHTML = document.getElementById("yourmsg").value;
  span.innerHTML = document.getElementById("yourtime").value;

  divs.appendChild(p);
  br.appendChild(span);
  p.appendChild(span);

  content.appendChild(divs);
  document.getElementById("showall").appendChild(content);


 
}
