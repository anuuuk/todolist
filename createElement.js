import { dela } from "./dela.js";
export function createElement (item){
    console.log(item)
      const div = document.createElement('div');
      const div2 = document.createElement('div');
      document.body.append(div);
      div.classList.add("item");
    
      const button = document.createElement('button');
      button.textContent = 'Сделано';
      button.classList.add("btn");
      if (item.status){
        button.classList.add("btn-success");
      } else {
        button.classList.add("btn-primary");
      }

      button.addEventListener("click", function () {
        dela.forEach(task => {
          if (task.id === item.id){
          item.status = !item.status;}
        });
        
        localStorage.setItem('test', JSON.stringify(dela));
        button.classList.toggle("btn-success");
      });
    
      const button2 = document.createElement('button');
      button2.textContent = 'Х';
      button2.classList.add("btn");
      button2.classList.add("btn-danger");

      button2.addEventListener("click", function () {
        dela = dela.filter(d => d.id !== item.id);
        localStorage.setItem('test', JSON.stringify(dela));
      div.remove()
      });
    
      const p = document.createElement('p');
      p.textContent = item.text;
    
      div.append(p);
      div2.append(button);
      div2.append(button2);
      div.append(div2);
    
      document.getElementById("input1").value = null;
    }
    