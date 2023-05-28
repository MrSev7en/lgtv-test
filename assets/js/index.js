function test1() {
  alert("Click working!");
}

function test2() {
  document.getElementById("test-2").innerHTML = "Worked!";
}

function test3() {
  fetch("https://api.ipify.org/")
    .then((res) => res.text())
    .then((text) => (document.getElementById("test-3").innerHTML = text));
}

function keyDown(e) {
  const input = document.getElementById("input-1");

  input.innerHTML = input.innerHTML + "\n" + e.key;
}

function click() {
  print("click");
}

function keydown() {
  print("keydown");
}

function focus() {
  print("focus");
}

function blur() {
  print("blur");
}

function print(prefix) {
  const input = document.getElementById("input-2");

  input.innerHTML = input.innerHTML + "\n" + prefix;
}

document.addEventListener("click", click);
document.addEventListener("keydown", keydown);
document.addEventListener("focus", focus);
document.addEventListener("blur", blur);

document.getElementById("test-1").addEventListener("focus", test1);
document.getElementById("test-2").addEventListener("focus", test2);
document.getElementById("test-3").addEventListener("focus", test3);

document.getElementById("test-1").addEventListener("touchstart", test1);
document.getElementById("test-2").addEventListener("touchstart", test2);
document.getElementById("test-3").addEventListener("touchstart", test3);

document.getElementById("test-1").addEventListener("click", test1);
document.getElementById("test-2").addEventListener("click", test2);
document.getElementById("test-3").addEventListener("click", test3);

if (document.attachEvent) {
  document.attachEvent("onkeydown", keyDown);
  document.getElementById("test-1").addEventListener("onclick", test1);
  document.getElementById("test-2").addEventListener("onclick", test2);
  document.getElementById("test-3").addEventListener("onclick", test3);
}

if (window.attachEvent) {
  window.attachEvent("onkeydown", keyDown);
}

document.addEventListener("keydown", keyDown);
window.addEventListener("keydown", keyDown);
