export let dela = [
    {
      id: 0,
      text: "Купить молоко",
      status: false  
    },
    {
      id: 1,
      text: "Купить хлеб",
      status: true  
    },
    {
      id: 2,
      text: "Купить носки",
      status: false  
    },
    ]

    if (!localStorage.getItem('test')){
        localStorage.setItem('test', JSON.stringify(dela));
      }
    
    dela = JSON.parse(localStorage.getItem('test'))
    