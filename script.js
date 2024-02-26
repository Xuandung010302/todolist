var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
 
var close = document.getElementsByClassName("close");
var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
}
 
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
}, false);
 
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue === '') {
      alert("You must write something!");
  } else {
      document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";

  // Create a span for edit button
  var editSpan = document.createElement("SPAN");
  var editTxt = document.createTextNode("Edit");
  editSpan.className = "editBtn";
  editSpan.appendChild(editTxt);
  li.appendChild(editSpan);

  editSpan.onclick = function() {
      var spanContent = this.parentElement.firstChild;
      var text = spanContent.textContent;

      var editPrompt = prompt("Edit your task:", text);
      if (editPrompt !== null) {
          spanContent.textContent = editPrompt;
      }
  }

  // Similar code for creating the close button for the new item
  var closeSpan = document.createElement("SPAN");
  var closeTxt = document.createTextNode("\u00D7");
  closeSpan.className = "close";
  closeSpan.appendChild(closeTxt);
  li.appendChild(closeSpan);

  closeSpan.onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
  }
}