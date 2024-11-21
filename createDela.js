import {createElement} from './createElement.js';
export function createDela(dela){
  
    let divk = document.querySelectorAll(".item")
    for (let i = 0; i < divk.length;i++){ 
      divk[i].remove();
    }
    
    for (let i = 0; i < dela.length;i++){ 
      createElement(dela[i])
    }

}