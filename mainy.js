import {createDela} from './createDela.js';
import { dela } from "./dela.js";

createDela(dela);

document.getElementById("add-btn").addEventListener("click", function () {
let inputValue = document.getElementById("input1").value.trim();
if (inputValue){
const obj = {
  id: dela.length,
  text: inputValue,
  status: false
}
dela.push(obj)
localStorage.setItem('test', JSON.stringify(dela));
createDela(dela);
console.log(dela)

} else {
  alert("Введите задачу!");
}
});

document.getElementById("input1").addEventListener("keypress", function (event) {
  if (event.key === "Enter"){
  let inputValue = document.getElementById("input1").value.trim();
  if (inputValue){

} else {
    alert("Введите задачу!");
  }
  }
});
