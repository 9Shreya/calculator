function disp(res) {
  document.getElementById("l").value += res;
  console.log(document.getElementById("l").value);
}
function result() {
  let x = document.getElementById("l").value;
  let y = eval(x);
  document.getElementById("l").value = y;
}
function clr() {
  document.getElementById("l").value = "";
}
function backspace() {
  var number = document.getElementById("l").value;
  var len = number.length - 1;
  var newnumber = number.substring(0, len);
  document.getElementById("l").value = newnumber;
}
