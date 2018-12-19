var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createPar() {
  var p = document.createElement("p");
  p.appendChild(document.createTextNode(input.value));
  return p;
}

function createButton() {
  var button = document.createElement("button");
  button.classList.add("delete-btn");
  button.appendChild(document.createTextNode("Delete"));
  button.addEventListener("click", function() {
    button.parentElement.remove();
  });
  return button;
}

function markAsDone(element) {
  element.firstChild.classList.toggle("list-item--done");
}

function createListElement() {
  var li = document.createElement("li");
  li.classList.add("list-item");
  li.appendChild(createPar());
  li.appendChild(createButton());
  li.addEventListener("click", () => markAsDone(li));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
